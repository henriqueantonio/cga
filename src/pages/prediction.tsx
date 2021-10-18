import { useEffect, useState } from 'react';
import { RepeatIcon } from '@chakra-ui/icons';
import {
  Box,
  VStack,
  Spinner,
  Heading,
  Text,
  Image as ChakraImage,
  Divider,
  Button,
  Tag,
} from '@chakra-ui/react';
import {
  loadLayersModel,
  LayersModel,
  browser,
  reshape,
  argMax,
} from '@tensorflow/tfjs';

import { Share } from '@/components/Share';
import { Header } from '../components/Header';

function Test() {
  const [model, setModel] = useState<LayersModel>();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState();
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const currentModel = await loadLayersModel(
        `https://raw.githubusercontent.com/henriqueantonio/cga-model/main/model.json`,
      );
      currentModel.summary();
      setModel(currentModel);
      setIsLoading(false);
    })();
  }, []);

  function tryAgain() {
    setImage(undefined);
    setDegree(0);
  }

  useEffect(() => {
    if (!image || !model) return;

    const img = new Image();
    const fr = new FileReader();
    fr.onload = () => {
      img.src = fr.result as string;
    };

    fr.readAsDataURL(image);

    img.onload = () => {
      const tensor = browser.fromPixels(img).resizeBilinear([75, 75]);
      const tensorReshaped = reshape(tensor, [-1, 75, 75, 3]);
      const prediction = model.predict(tensorReshaped) as any;
      console.log(prediction.toString());
      const argmax = argMax(prediction, 1).arraySync() as number[];
      setDegree(argmax[0] + 1);
    };
  }, [image, model]);

  if (isLoading) {
    return (
      <Box h="100vh" w="100vw" align="justify-content" justify="center">
        <Header />
        <VStack flex="1" h="80%" justify="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Heading size="xs">Aguarde enquanto carregamos o modelo...</Heading>
        </VStack>
      </Box>
    );
  }

  if (!image) {
    return (
      <Box h="100vh" w="100vw" align="justify-content" justify="center">
        <Header />
        <VStack flex="1" h="80%" align="center" justify="center" spacing="4">
          <Share setImage={setImage} />
          <Tag maxW="500px" p="2" textAlign="center" colorScheme="red">
            Ao usar o modelo você automaticamente estará contribuindo com sua
            imagem de forma anônima para a evolução da ferramenta.
          </Tag>
        </VStack>
      </Box>
    );
  }

  return (
    <Box h="100vh" w="100vw" align="justify-content" justify="center">
      <Header />
      <VStack h="80%" align="center" justify="center">
        <Heading>Predição</Heading>

        <Tag
          maxW="400px"
          textAlign="center"
          colorScheme="red"
          flexDir="column"
          p="2"
        >
          <Text fontWeight="bold">ATENÇÃO</Text>
          <Text>
            Essa predição tem uma taxa de acurácia correspondente à 75% e existe
            para fins de testes, não use-a para fins de diagnósitico.
          </Text>
        </Tag>
        <Text fontWeight="bold" fontSize="xl">
          {degree === 0 ? `Carregando...` : `Grau ${degree}`}
        </Text>
        <Divider maxW="400px" />
        <ChakraImage
          src={URL.createObjectURL(image)}
          alt="image-predicted"
          maxW={{ base: `90%`, md: `600px` }}
          maxH="300px"
        />
        <Button
          colorScheme="white"
          variant="outline"
          leftIcon={<RepeatIcon />}
          onClick={tryAgain}
        >
          Realizar outro teste
        </Button>
      </VStack>
    </Box>
  );
}

export default Test;

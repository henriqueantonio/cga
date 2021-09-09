import {
  Stack,
  VStack,
  Heading,
  Text,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Card } from '@/components/Card';
import { Contact } from './Contact';

function Resume() {
  const w = useBreakpointValue({ base: `100%`, md: `50%` });

  return (
    <Card bg="blue.800">
      <Stack spacing="10" align="center">
        <VStack w={w} align="flex-start" spacing="6">
          <Heading>Resumo</Heading>
          <Text textAlign="justify">
            <strong>Olá</strong>, somos estudantes de
            <strong> Ciência da Computação </strong>
            na PUC-PR realizando um trabalho de conclusão de curso focado na
            <strong> classificação do grau de alergias</strong> usando
            algoritmos de aprendizagem de máquina.
          </Text>
          <Text textAlign="justify">
            Para isso, se faz necessário uma grande quantidade de imagens de
            testes alérgicos (de contato) para uma análise satisfatória.
          </Text>
          <Text textAlign="justify">
            Hoje já contamos com 1200 imagens já enviadas por outros
            alergistas/dermatologistas.
          </Text>
          <Text textAlign="justify">
            As imagens são devem ser necessáriamente anônimas e não serão usadas
            para cunho comercial, <strong>EXCLUSIVAMENTE </strong>
            para estudo.
          </Text>
          <Text textAlign="justify">
            Caso o projeto se estenda a uma implementação funcional, o mesmo que
            contribuiu com as imagens terá total direito de usufruí-la.
          </Text>
          <Text textAlign="justify">
            Caso possua imagens e queria contribuir, contate-nos através do
            <strong> e-mail</strong> ou <strong>Whastapp</strong>.
          </Text>
          <Stack direction={{ base: `column`, xl: `row` }} w="100%">
            <Contact
              name="Henrique Antonio"
              avatar="https://github.com/henriqueantonio.png"
              link="https://api.whatsapp.com/send?phone=45999069644"
            />
            <Contact
              name="Matheus Henrique"
              avatar="https://github.com/gaiake12.png"
              link="https://api.whatsapp.com/send?phone=41992353701"
            />
          </Stack>
        </VStack>
        <Image
          w={w}
          objectFit="contain"
          src="/images/testes.jpeg"
          alt="Testes"
          borderRadius="10"
          boxShadow="md"
        />
      </Stack>
    </Card>
  );
}

export { Resume };

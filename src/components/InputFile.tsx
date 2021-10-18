import { ChangeEvent } from 'react';

import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

interface InputFileProps {
  setImage(image: any): void;
}

function InputFile({ setImage }: InputFileProps) {
  const size = useBreakpointValue({ base: `md`, md: `lg` });

  async function handleImage(e: ChangeEvent<HTMLInputElement>) {
    const images = e.target.files;
    if (images != null && images[0]) {
      setImage(images[0]);
    }
  }

  return (
    <form style={{ flex: 1 }}>
      <label htmlFor="upload">
        <Flex
          direction="column"
          h="100%"
          bg="white"
          borderRadius="lg"
          align="center"
          justify="center"
          cursor="alias"
        >
          <Heading size={size} color="gray.700">
            Envie agora
          </Heading>
          <Text size={size} color="gray.700">
            Importe quantas imagens quiser
          </Text>
        </Flex>
        <input
          type="file"
          id="upload"
          accept="image/png, image/jpeg"
          style={{ display: `none` }}
          onChange={handleImage}
        />
      </label>
    </form>
  );
}

export { InputFile };

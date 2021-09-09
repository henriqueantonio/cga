import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

function InputFile() {
  const size = useBreakpointValue({ base: `md`, md: `lg` });

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
        <input type="file" id="upload" style={{ display: `none` }} multiple />
      </label>
    </form>
  );
}

export { InputFile };

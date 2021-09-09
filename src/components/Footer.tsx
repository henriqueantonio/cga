import { Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex
      bg="blue.800"
      zIndex="1"
      w="100%"
      py="3"
      boxShadow="md"
      align="center"
      justify="center"
    >
      <Text color="blue.300" fontWeight="bold">
        Copyright - 2021
      </Text>
    </Flex>
  );
}

export { Footer };

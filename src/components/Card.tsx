import { Flex, Text } from '@chakra-ui/react';

interface CardProps {
  children: string;
}

function Card({ children }: CardProps) {
  return (
    <Flex bg="white" m="10" p="5" borderRadius="md" boxShadow="base">
      <Text color="gray.800" textAlign="justify">
        {children}
      </Text>
    </Flex>
  );
}

export { Card };

import { Text, Heading, VStack } from '@chakra-ui/react';

import { Share } from '@/components/Share';

function Body() {
  return (
    <VStack spacing="30">
      <VStack>
        <Heading textAlign="center">Classificação do grau de alergias</Heading>
        <Text>Um desafio, diversas oportunidades</Text>
      </VStack>
      <Share />
    </VStack>
  );
}

export { Body };

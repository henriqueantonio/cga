import { VStack } from '@chakra-ui/react';

import { Container } from '@/components/Container';
import { Title } from '@/components/Title';
import { Resume } from '@/components/Resume';

function Home() {
  return (
    <Container mt="5">
      <VStack spacing="10">
        <Title />
        <Resume />
      </VStack>
    </Container>
  );
}

export default Home;

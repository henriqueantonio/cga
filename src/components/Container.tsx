import { ReactNode } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

import { Background } from '@/components/Background';
import { Header } from './Header';
import { Footer } from './Footer';

interface ContainerProps extends FlexProps {
  children: ReactNode;
}

function Container({ children, ...data }: ContainerProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex direction="column" h="100%" mt="-3" mb="-3" {...data}>
        <Background />
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export { Container };

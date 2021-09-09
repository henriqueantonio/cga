import { ReactNode } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

interface CardProps extends FlexProps {
  children: ReactNode;
}

function Card({ children, ...rest }: CardProps) {
  return (
    <Flex p="5" {...rest}>
      {children}
    </Flex>
  );
}

export { Card };

import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';

function Header() {
  return (
    <Flex as="header" px="8" py="3" justify="space-between" align="center">
      <Logo />
    </Flex>
  );
}

export { Header };

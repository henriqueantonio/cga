import { Flex, Button, Link } from '@chakra-ui/react';

import { Logo } from './Logo';

function Header() {
  return (
    <Flex as="header" px="8" py="3" justify="space-between" align="center">
      <Logo />
      <Link href="/prediction">
        <Button colorScheme="white" variant="outline">
          Teste agora mesmo
        </Button>
      </Link>
    </Flex>
  );
}

export { Header };

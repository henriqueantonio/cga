import { Flex, Text, HStack, Button, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

import { Logo } from './Logo';
import { Hamburguer } from './Hamburguer';

function Header() {
  const [isLargerThan800] = useMediaQuery(`(min-width: 800px)`);
  const { push } = useRouter();

  return (
    <Flex as="header" px="8" py="3" justify="space-between" align="center">
      <Logo />
      {isLargerThan800 ? (
        <>
          <HStack spacing="10">
            <Text
              as="button"
              fontWeight="medium"
              fontSize="larger"
              onClick={() => push(`/sobre-nos`)}
            >
              Sobre nós
            </Text>
            <Text
              as="button"
              fontWeight="medium"
              fontSize="larger"
              onClick={() => push(`/saiba-mais`)}
            >
              Saiba mais
            </Text>
          </HStack>
          <Button bg="white" color="blue.300">
            Cadastrar
          </Button>
        </>
      ) : (
        <Hamburguer />
      )}
    </Flex>
  );
}

export { Header };

import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem as ChakraMenuItem,
  MenuItemProps as ChakraMenuItemProps,
  MenuDivider,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/dist/client/router';

interface MenuItemProps extends ChakraMenuItemProps {
  children: string;
}

function MenuItem({ children, ...data }: MenuItemProps) {
  return (
    <ChakraMenuItem color="gray.800" {...data}>
      {children}
    </ChakraMenuItem>
  );
}

function Hamburguer() {
  const { push } = useRouter();

  return (
    <Menu>
      <MenuButton as={Button}>
        <HamburgerIcon color="gray.800" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => push(`/saiba-mais`)}>Saiba mais</MenuItem>
        <MenuItem onClick={() => push(`/sobre-nos`)}>Sobre nós</MenuItem>
        <MenuDivider />
        <MenuItem>Cadastrar</MenuItem>
      </MenuList>
    </Menu>
  );
}

export { Hamburguer };

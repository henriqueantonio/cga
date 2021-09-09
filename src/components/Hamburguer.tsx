import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem as ChakraMenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

interface MenuItemProps {
  children: string;
}

function MenuItem({ children }: MenuItemProps) {
  return <ChakraMenuItem color="gray.800">{children}</ChakraMenuItem>;
}

function Hamburguer() {
  return (
    <Menu>
      <MenuButton as={Button}>
        <HamburgerIcon color="gray.800" />
      </MenuButton>
      <MenuList>
        <MenuItem>Saiba mais</MenuItem>
        <MenuItem>Sobre nós</MenuItem>
        <MenuDivider />
        <MenuItem>Cadastrar</MenuItem>
      </MenuList>
    </Menu>
  );
}

export { Hamburguer };

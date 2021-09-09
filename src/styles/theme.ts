import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Montserrat`,
    body: `Montserrat`,
  },
  styles: {
    global: {
      body: {
        bg: `blue.400`,
        color: `white`,
      },
    },
  },
});

export { theme };

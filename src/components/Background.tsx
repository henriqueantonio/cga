import { Image } from '@chakra-ui/react';

function Background() {
  return (
    <Image
      position="absolute"
      top="0"
      left="0"
      h="100vh"
      w="100vw"
      objectFit="cover"
      opacity="0.2"
      src="/images/background.png"
      alt="background"
      zIndex="-1"
    />
  );
}

export { Background };

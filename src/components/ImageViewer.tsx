import { Flex, Image, ImageProps, useDisclosure, Fade } from '@chakra-ui/react';

type ImageViewerProps = ImageProps;

function ImageViewer({ src, ...data }: ImageViewerProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Image alt="image" src={src} {...data} onClick={onToggle} />
      <Fade in={isOpen}>
        <Flex
          display={isOpen ? `flex` : `none`}
          position="fixed"
          top="0"
          right="0"
          h="100%"
          w="100%"
          bg="gray.800"
          onClick={onToggle}
          align="center"
          justify="center"
        >
          <Image src={src} alt="image" objectFit="contain" h="90%" w="90%" />
        </Flex>
      </Fade>
    </>
  );
}

export { ImageViewer };

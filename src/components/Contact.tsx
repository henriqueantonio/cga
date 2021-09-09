import { Flex, HStack, Avatar, Text, Image, Link } from '@chakra-ui/react';

interface ContactProps {
  avatar: string;
  name: string;
  link: string;
}

function Contact({ avatar, name, link }: ContactProps) {
  return (
    <Link display="flex" flex="1" isExternal href={link}>
      <Flex
        as="button"
        flex="1"
        bg="whatsapp.50"
        px="3"
        py="2"
        borderRadius="lg"
        align="center"
        justify="space-between"
        boxShadow="md"
      >
        <HStack>
          <Avatar src={avatar} />
          <Text fontWeight="bold" color="gray.800">
            {name}
          </Text>
        </HStack>
        <Image w="31" h="31" src="/images/zap.png" alt="zap" />
      </Flex>
    </Link>
  );
}

export { Contact };

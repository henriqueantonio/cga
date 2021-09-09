import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

function Logo() {
  const { push } = useRouter();

  return (
    <Heading
      as="button"
      color="white"
      fontSize={[`2xl`, `3xl`]}
      fontWeight="bold"
      onClick={() => push(`/`)}
    >
      CGA
    </Heading>
  );
}

export { Logo };

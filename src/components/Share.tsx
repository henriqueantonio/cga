import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { InputFile } from '@/components/InputFile';

function Share() {
  const w = useBreakpointValue({ base: `90%`, md: `50%` });
  const h = useBreakpointValue({ base: `300px`, md: `400px` });

  return (
    <Flex border="8px dashed" w={w} h={h} p="5">
      <InputFile />
    </Flex>
  );
}

export { Share };

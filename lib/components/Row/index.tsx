import { Box, BoxProps } from '@mui/material';
import { forwardRef } from 'react';

export const Row = forwardRef<HTMLDivElement, BoxProps>((props: BoxProps, ref) => {
  return <Box ref={ref} display='flex' flexDirection='row' {...props} />;
});

import { Box, BoxProps } from '@mui/material';
import { forwardRef } from 'react';

export const Column = forwardRef<HTMLDivElement, BoxProps>((props: BoxProps, ref) => {
  return <Box ref={ref} display='flex' flexDirection='column' {...props} />;
});

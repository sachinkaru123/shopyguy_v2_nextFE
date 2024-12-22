import Box, { BoxProps } from "@mui/material/Box";

export default function FlexRow({ children, ...props }: BoxProps) {
  return (
    <Box display="flex" alignItems="center" {...props}>
      {children}
    </Box>
  );
}

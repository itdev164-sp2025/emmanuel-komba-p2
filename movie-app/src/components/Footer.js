import React from 'react'
import { Box, Text } from 'rebass'

const Footer = () => (
  <Box
    as="footer"
    p={3}
    sx={{
      bg: 'primary',
      color: 'background',
      textAlign: 'center',
    }}
  >
    <Text>© {new Date().getFullYear()} Movie App</Text>
  </Box>
)

export default Footer
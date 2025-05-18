import React from 'react'
import { Flex, Box, Heading } from 'rebass'
import ColorModeToggle from './ColorModeToggle'

const Header = () => (
  <Flex
    as="header"
    px={3}
    py={2}
    alignItems="center"
    justifyContent="space-between"
    sx={{
      bg: 'primary',
      color: 'background',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    }}
  >
    <Heading fontSize={[3, 4]}>Movie App</Heading>
    <Box>
      <ColorModeToggle />
    </Box>
  </Flex>
)

export default Header

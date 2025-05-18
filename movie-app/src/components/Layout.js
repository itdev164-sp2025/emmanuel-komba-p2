import React from 'react'
import { ThemeUIProvider, Flex, Box } from 'theme-ui'
import theme from '../styles/theme'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => (
  <ThemeUIProvider theme={theme}>
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh',
        bg: 'background',
        color: 'text',
        transition: 'background 0.3s ease, color 0.3s ease'
      }}
    >
      <Navbar />
      <Box as="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Box>
      <Footer />
    </Flex>
  </ThemeUIProvider>
)

export default Layout
import React from 'react'
import { Flex, Heading, Button } from 'theme-ui'
import { Link } from 'gatsby'
import ColorModeToggle from './ColorModeToggle'

const Navbar = () => (
  <Flex
    as="nav"
    sx={{
      px: 4,
      py: 3,
      alignItems: 'center',
      justifyContent: 'space-between',
      bg: 'primary',
      color: 'white', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    }}
  >
    <Heading as="h1" sx={{ 
      m: 0, 
      color: 'white', 
      fontSize: [3, 4], 
      fontWeight: 'bold',
      textDecoration: 'none'
    }}>
      <Link 
        to="/" 
        sx={{ 
          color: 'white !important', 
          textDecoration: 'none',
          ':hover': {
            textDecoration: 'none',
            opacity: 0.9
          }
        }}
      >
        MovieFlix
      </Link>
    </Heading>
    
    <Flex sx={{ alignItems: 'center' }}>
      <Button 
        as={Link}
        to="/"
        variant="nav" 
        mr={3}
        sx={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: 'bold',
          ':hover': {
            textDecoration: 'underline'
          }
        }}
      >
        Home
      </Button>
      
      <Button 
        as={Link}
        to="/about"
        variant="nav" 
        mr={3}
        sx={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: 'bold',
          ':hover': {
            textDecoration: 'underline'
          }
        }}
      >
        About
      </Button>
      
      <ColorModeToggle />
    </Flex>
  </Flex>
)

export default Navbar
import React from 'react'
import { useColorMode, Button } from 'theme-ui'
import { Sun, Moon } from '@styled-icons/feather'

const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  
  return (
    <Button
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
      variant="secondary"
    >
      {colorMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  )
}

export default ThemeToggle
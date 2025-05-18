import React from 'react'
import { useColorMode, IconButton } from 'theme-ui'
import { Sun, Moon } from '@styled-icons/feather'

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  
  return (
    <IconButton
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
      sx={{
        color: 'background',
        cursor: 'pointer',
        p: 1
      }}
    >
      {colorMode === 'light' ? (
        <Moon size={24} />
      ) : (
        <Sun size={24} />
      )}
    </IconButton>
  )
}

export default ColorModeToggle
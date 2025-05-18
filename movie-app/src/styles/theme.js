export default {
  initialColorMode: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    // Light theme
    text: '#2D3748',
    background: '#FFFFFF',
    primary: '#F97316', // Vibrant orange
    secondary: '#EA580C',
    accent: '#C2410C',
    muted: '#FED7AA',
    cardBg: '#FFF7ED',
    // Dark theme
    modes: {
      dark: {
        text: '#F5F5F5',
        background: '#1A1A1A', 
        primary: '#EA580C',
        secondary: '#C2410C',
        accent: '#9A3412',
        muted: '#431407',
        cardBg: '#292524'
      }
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  shadows: {
    card: '0 4px 8px rgba(0,0,0,0.1)',
    hover: '0 6px 12px rgba(0,0,0,0.15)'
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    }, 
    a: {
      color: 'inherit',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline'
      }
    }
  }
}
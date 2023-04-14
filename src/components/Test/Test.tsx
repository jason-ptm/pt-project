import { Box, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from 'src/context/theme'
export interface TestProps {}

const Test: React.FC<TestProps> = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      className="view"
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        backgroundColor: colors.primary[400],
      }}
    >
      Test
    </Box>
  )
}

export default Test

import { useTheme } from '@mui/material'
import { tokens } from 'src/context/theme'

export const stylesTable = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return {
    fontSize: '14px',
    borderRadius: '4px',
    overflow: 'hidden',
    '& .MuiDataGrid-columnHeaders, & .MuiDataGrid-footerContainer': {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? colors.primary[600]
          : colors.blueAccent[500],
      color: colors.primary[100] + '!important',
    },
    '& .MuiDataGrid-virtualScroller .MuiDataGrid-row:nth-of-type(odd)': {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? colors.primary[500]
          : colors.blueAccent[900],
    },
    '& .MuiDataGrid-virtualScroller .MuiDataGrid-row:nth-of-type(odd):hover': {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? colors.primary[300]
          : colors.blueAccent[900],
    },
  }
}

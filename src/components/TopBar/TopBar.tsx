import { IconButton, Stack, useTheme } from '@mui/material'
import React, { useContext } from 'react'

// icons
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ColorModeContext, tokens } from 'src/context/theme'
import { PrivateRoutes, PublicRoutes } from 'src/model'
import { resetUser } from 'src/redux/states/currentUser'
import Swal from 'sweetalert2'

export interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  const logOut = () => {
    Swal.fire({
      icon: 'question',
      title: 'Quieres cerrar sesión?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Cerrar sesión',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetUser())

        navigate(PublicRoutes.LOGIN)
      }
    })
  }

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="flex-end"
      padding="5px"
      sx={{ borderRadius: '4px', backgroundColor: colors.primary[400] }}
    >
      <IconButton onClick={() => navigate(PrivateRoutes.PROFILE)}>
        <PersonIcon />
      </IconButton>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <IconButton onClick={logOut}>
        <LogoutIcon />
      </IconButton>
    </Stack>
  )
}

export default TopBar

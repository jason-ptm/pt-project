import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'
import React from 'react'
import {
  Menu,
  MenuItem,
  MenuItemStyles,
  Sidebar,
  useProSidebar,
} from 'react-pro-sidebar'
import { NavLink, useNavigate } from 'react-router-dom'
import { PrivateRoutes, RoutesElements } from 'src/model'

// icons
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { tokens } from 'src/context/theme'

export interface SideBarProps {
  elements: RoutesElements[]
}

const SideBar: React.FC<SideBarProps> = ({ elements }) => {
  const { collapseSidebar, collapsed } = useProSidebar()
  const navigate = useNavigate()

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // sideBar styles

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '14px',
      fontWeight: 400,
    },
    icon: {
      color: colors.blueAccent[500],
    },
    button: {
      '&:hover': {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? colors.primary[600]
            : colors.blueAccent[800],
        color: colors.primary[100],
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  }

  const itemIconStyles = {
    '.ps-menu-button': {
      justifyContent: 'center',
      gap: '10px',
      overflow: 'hidden',
    },
    '.ps-menu-icon': {
      marginRight: 0,
      marginLeft: collapsed ? '10px' : 0,
    },
    '.ps-menu-button.active': {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? colors.primary[500]
          : colors.blueAccent[900],
    },
  }

  return (
    <Box
      sx={{
        '& .ps-sidebar-root': {
          height: '100%',
        },
      }}
    >
      <Sidebar
        backgroundColor={colors.primary[400]}
        rootStyles={{ borderColor: colors.grey[600] }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '60px 0px 20px 0px',
          }}
        >
          {/* Toggle icon menu */}
          <IconButton
            sx={{
              position: 'absolute',
              right: '20px',
              top: '20px',
            }}
            onClick={() => collapseSidebar()}
          >
            {collapsed ? (
              <MenuIcon sx={{ color: colors.blueAccent[500] }} />
            ) : (
              <CloseIcon sx={{ color: colors.blueAccent[500] }} />
            )}
          </IconButton>

          <Menu menuItemStyles={menuItemStyles}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="20px"
              flexWrap="nowrap"
              height="50px"
              sx={{ mb: '20px', padding: '0 20px' }}
            >
              <Avatar alt="Remy Sharp" src="" />
              <Box sx={{ whiteSpace: 'nowrap' }}>
                <Typography variant="h4" fontWeight={700}>
                  Remy Sharp
                </Typography>
                <Typography
                  variant="h6"
                  color={colors.blueAccent[600]}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => navigate(PrivateRoutes.PROFILE)}
                >
                  Ver perfil
                </Typography>
              </Box>
            </Box>

            <Divider
              sx={{
                margin: '20px',
                backgroundColor: colors.grey[700],
              }}
            />

            {elements.map((element) =>
              element.name ? (
                <MenuItem
                  rootStyles={itemIconStyles}
                  key={element.to}
                  icon={element.icon}
                  component={<NavLink to={element.to} />}
                >
                  {element.name}
                </MenuItem>
              ) : (
                ''
              )
            )}
          </Menu>
        </Box>
      </Sidebar>
    </Box>
  )
}

export default SideBar

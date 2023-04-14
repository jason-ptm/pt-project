import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tokens } from 'src/context/theme'
import { Company, Employee, User, userTypes } from 'src/model'

// icons
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import PersonIcon from '@mui/icons-material/Person'
import store from 'src/redux/store'

export interface FormUserProps {}

const initialUser: Employee | User = {
  name: '',
  role: undefined,
  id: NaN,
  company: 'none',
}

const FormUser: React.FC<FormUserProps> = () => {
  const { id } = useParams()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // first conditional makes an api call
  const [user, setUser] = useState<Employee | User>(
    id ? initialUser : initialUser
  )
  const [error, setError] = useState(false)

  const handleChange = (prop: string, value: string, numberFlag: boolean) => {
    if (numberFlag) {
      const regex = /^[0-9\b]+$/
      if (value === '' || regex.test(value)) {
        setUser((prevUser) => ({
          ...prevUser,
          [prop]: value,
        }))
      }
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [prop]: value,
      }))
    }
  }

  return (
    <Box
      className="view"
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        boxSizing: 'border-box',
        backgroundColor: colors.primary[400],
        padding: '40px 20px',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '400px',
          minWidth: '200px',
          height: 'max-content',
          flex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{ position: 'relative', pb: '10px', width: 'max-content' }}
        >
          <Box
            sx={{
              position: 'absolute',
              backgroundColor: colors.blueAccent[500],
              width: '130%',
              height: '1px',
              bottom: '0',
            }}
          />
          {id ? 'Actualizar usuario' : 'Crear usuario'}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          gap="40px"
          height="100%"
          sx={{
            padding: '20px 0',
          }}
        >
          {/* name input */}
          <TextField
            required
            id="filled-basic"
            error={error}
            label="Nombre"
            spellCheck="false"
            name="name"
            defaultValue={user.name}
            onChange={(input) =>
              handleChange(input.target.name, input.target.value, false)
            }
            variant="filled"
          />

          {/* id input */}
          <TextField
            required
            id="filled-basic"
            error={error}
            label="Cedula"
            spellCheck="false"
            name="id"
            value={user.id ? user.id : ''}
            onChange={(input) =>
              handleChange(input.target.name, input.target.value, true)
            }
            variant="filled"
          />

          {/* role input */}
          <Box>
            <Typography variant="h5" mb="15px">
              Tipo de usuario*
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              flexWrap="wrap"
              justifyContent="space-between"
              gap="15px"
            >
              {store.getState().currentUser.role === userTypes.ADMIN ? (
                Object.values(userTypes).map((type: userTypes) => (
                  <Button
                    key={type}
                    variant="contained"
                    sx={{
                      flex: 1,
                      minWidth: '140px',
                      backgroundColor:
                        user.role === type ? colors.blueAccent[500] : '',
                      '&:hover': {
                        backgroundColor:
                          user.role === type ? colors.blueAccent[600] : '',
                      },
                    }}
                    startIcon={
                      type === userTypes.ADMIN ? (
                        <AccountBoxIcon />
                      ) : type === userTypes.LEADER ? (
                        <AccessibilityNewIcon />
                      ) : (
                        <PersonIcon />
                      )
                    }
                    onClick={() => handleChange('role', type, false)}
                  >
                    {type === userTypes.ADMIN
                      ? 'Administrador'
                      : type === userTypes.LEADER
                      ? 'Líder'
                      : 'Empleado'}
                  </Button>
                ))
              ) : (
                <Button
                  key={userTypes.EMPLOYEE}
                  variant="contained"
                  sx={{
                    flex: 1,
                    minWidth: '140px',
                    backgroundColor:
                      user.role === userTypes.EMPLOYEE
                        ? colors.blueAccent[500]
                        : '',
                    '&:hover': {
                      backgroundColor:
                        user.role === userTypes.EMPLOYEE
                          ? colors.blueAccent[600]
                          : '',
                    },
                  }}
                  startIcon={<PersonIcon />}
                  onClick={() =>
                    handleChange('role', userTypes.EMPLOYEE, false)
                  }
                >
                  Empleado
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      {user.role === userTypes.LEADER || user.role === userTypes.EMPLOYEE ? (
        <Box sx={{ maxWidth: '400px', flexGrow: 1, pt: '55px', flex: 1 }}>
          {/* company input / show if type user is employee */}
          {user.role === userTypes.EMPLOYEE ? (
            <FormControl variant="filled" required sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-filled-label">
                Compañia
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-required"
                value={user.company ? user.company : 'none'}
                defaultValue="none"
                label="Compañia *"
                name="company"
                onChange={(input) =>
                  handleChange(
                    input.target.name,
                    input.target.value || '',
                    false
                  )
                }
              >
                <MenuItem value="none">
                  <em>Ninguna</em>
                </MenuItem>
                {store.getState().leader.authCompanies.map((company) => (
                  <MenuItem value={company.name} key={company.name}>
                    {company.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          ) : (
            ''
          )}

          {/* authorized companies for leader / show if type user is leader */}
          {user.role === userTypes.LEADER ? (
            <Box
              display="flex"
              flexDirection="column"
              gap="10px"
              width="100%"
              flex="1"
            >
              <Typography variant="h4">Compañias autorizadas</Typography>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#ffffff17' : '#0000000f',
                  '& .MuiSvgIcon-root': {
                    color:
                      theme.palette.mode === 'dark' ? '#ffffffb3' : '#141b2d',
                  },
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={true}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText primary="empresa" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          ) : (
            ''
          )}
        </Box>
      ) : (
        ''
      )}
    </Box>
  )
}

export default FormUser

import { Avatar, Box, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { tokens } from 'src/context/theme'
import { Employee, User, userTypes } from 'src/model'
import store from 'src/redux/store'
export interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const [user, setUser] = useState<User | Employee>(
    store.getState().currentUser
  )
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
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

  const InputTemplate = (
    numberFlag: boolean,
    value: string | number,
    label: string
  ) => {
    return (
      <TextField
        id="filled-basic"
        error={error}
        label={label}
        spellCheck="false"
        name="name"
        defaultValue={value}
        onChange={(input) =>
          handleChange(input.target.name, input.target.value, numberFlag)
        }
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
        sx={{ flex: 1, width: '100%', maxWidth: '250px', minWidth: '80px' }}
      />
    )
  }

  return (
    <Box
      className="view"
      padding="5px"
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
      gap="30px"
      flexWrap="wrap"
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* image cont */}
      <Box
        display="flex"
        position="relative"
        justifyContent="center"
        alignItems="center"
        flex="1"
        sx={{
          height: '100%',
          width: '100%',
          minWidth: '250px',
          maxWidth: '300px',
          borderRadius: '4px',
          overflow: 'hidden',
          boxSizing: 'border-box',
          backgroundColor: colors.primary[400],
          padding: '40px 20px',
        }}
      >
        <Avatar
          sx={{ width: '150px', height: '150px' }}
          alt="Remy Sharp"
          src=""
        />
        <Box
          position="absolute"
          sx={{
            top: 0,
            width: '100%',
            padding: '20px',
            backgroundColor:
              theme.palette.mode === 'dark'
                ? colors.blueAccent[800]
                : colors.primary[900],
          }}
        >
          <Typography variant="h5" textAlign="center">
            Imagen de perfil
          </Typography>
        </Box>
      </Box>

      {/* Account details */}
      <Box
        display="flex"
        position="relative"
        justifyContent="center"
        alignContent="center"
        flexDirection="row"
        flexWrap="wrap"
        gap="20px"
        alignItems="center"
        sx={{
          height: '100%',
          width: '100%',
          minWidth: '250px',
          borderRadius: '4px',
          overflow: 'hidden',
          boxSizing: 'border-box',
          backgroundColor: colors.primary[400],
          padding: '40px 20px',
          flex: 1,
        }}
      >
        {InputTemplate(false, user.name, 'Nombre')}

        {InputTemplate(true, user.id, 'Cedula')}

        {InputTemplate(false, user.role as string, 'Cargo')}

        {user.role === userTypes.EMPLOYEE
          ? InputTemplate(false, user.company as string, 'Compañia')
          : ''}

        <Box
          position="absolute"
          sx={{
            top: 0,
            width: '100%',
            padding: '20px',
            backgroundColor:
              theme.palette.mode === 'dark'
                ? colors.blueAccent[800]
                : colors.primary[900],
          }}
        >
          <Typography variant="h5" textAlign="center">
            Detalles de cuenta
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

//www.bootdey.com/snippets/view/bs5-edit-profile-account-details

export default Profile

import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from 'src/redux/states/currentUser'
import { logIn } from 'src/services/login.service'
import { ErrorFormBar } from './styledComponents'

// Icons
import { Visibility, VisibilityOff } from '@mui/icons-material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined'
import SendIcon from '@mui/icons-material/Send'
import { Loading } from 'src/components/Loading'
import { tokens } from 'src/context/theme'
import store from 'src/redux/store'
import Swal from 'sweetalert2'
import { userTypes } from 'src/model'
import { addLeader } from 'src/redux/states/leader'
import { addEmployee } from 'src/redux/states/employee'

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleClickLogIn = (email: string, password: string) => {
    if (password && email) {
      setLoading(true)
      logIn(email, password)
        .then((res) => {
          dispatch(addUser(res))
          if (res.role === userTypes.LEADER) {
            dispatch(addLeader(res))
          } else if (res.role === userTypes.EMPLOYEE) {
            dispatch(addEmployee(res))
          }
          navigate(`/${store.getState().currentUser.role}`, { replace: true })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sesión iniciada!',
            showConfirmButton: false,
            timer: 1500,
          })
          setLoading(false)
        })
        .catch(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Datos incorrectos!',
            showConfirmButton: false,
            timer: 1500,
          })
          setError(true)
          setLoading(false)
        })
    } else setError(true)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '500px',
        backgroundColor: '#4e54c8',
        background: 'linear-gradient(45deg,#8f94fb,#4e54c8)',
        boxSizing: 'border-box',
      }}
    >
      {loading ? <Loading /> : ''}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          width: '80%',
          maxWidth: ' 500px',
          minWidth: '250px',
          height: '60%',
          maxHeigth: ' 700px',
          backgroundColor: colors.primary[400],
          borderRadius: '4px',
          boxShadow: '0px 0px 40px -20px #000',
          margin: 0,
          padding: '20px',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap="20px"
          sx={{ width: '60%', maxWidth: ' 500px', minWidth: '200px' }}
        >
          {error ? <ErrorFormBar /> : ''}
          <Typography variant="h1">Login</Typography>
          <TextField
            sx={{ width: '100%' }}
            required
            error={error}
            id="input-with-icon-textfield"
            label="Email"
            spellCheck="false"
            onChange={(input) => setEmail(input.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
          <FormControl sx={{ mb: '10px', width: '100%' }} variant="filled">
            <InputLabel
              error={error}
              required
              htmlFor="filled-adornment-password"
            >
              Password
            </InputLabel>
            <FilledInput
              onChange={(input) => setPassword(input.target.value)}
              required
              error={error}
              startAdornment={
                <InputAdornment position="start">
                  <KeyOutlinedIcon />
                </InputAdornment>
              }
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {error ? (
              <FormHelperText
                sx={{
                  position: 'absolute',
                  bottom: '-25px',
                  textAlign: 'center',
                  backgroundColor: colors.primary[400],
                }}
                error={error}
              >
                Incorrect Values
              </FormHelperText>
            ) : (
              ''
            )}
          </FormControl>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => handleClickLogIn(email, password)}
            size="large"
            sx={{
              marginTop: '20px',
              backgroundColor: colors.blueAccent[500],
              '&:hover': {
                backgroundColor: colors.blueAccent[600],
              },
            }}
          >
            Iniciar sesión
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Login

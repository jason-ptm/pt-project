import { Box, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tokens } from 'src/context/theme'
import { Company } from 'src/model'
import { ShowUsers } from '../ShowUsers'

// icons

export interface FormCompanyProps {}

const initialCompany: Company = {
  name: '',
  id: 0,
  employees: [],
}

const FormCompany: React.FC<FormCompanyProps> = () => {
  const { id } = useParams()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [company, setCompany] = useState<Company>(
    id ? initialCompany : initialCompany
  )
  const [error, setError] = useState(false)

  const handleChange = (prop: string, value: string, numberFlag: boolean) => {
    if (numberFlag) {
      const regex = /^[0-9\b]+$/
      if (value === '' || regex.test(value)) {
        setCompany((prevUser) => ({
          ...prevUser,
          [prop]: value,
        }))
      }
    } else {
      setCompany((prevUser) => ({
        ...prevUser,
        [prop]: value,
      }))
    }
  }

  return (
    <Box
      className="view"
      display="flex"
      justifyContent={
        company.employees && company.employees?.length > 0
          ? 'center'
          : 'flex-start'
      }
      alignItems={
        company.employees && company.employees?.length > 0 ? 'none' : 'center'
      }
      flexWrap="wrap"
      flexDirection={
        company.employees && company.employees?.length > 0 ? 'row' : 'column'
      }
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
          {id ? 'Actualizar empresa' : 'Crear empresa'}
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
            defaultValue={company.name}
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
            value={company.id}
            onChange={(input) =>
              handleChange(input.target.name, input.target.value, true)
            }
            variant="filled"
          />
        </Box>
      </Box>
      {company.employees && company.employees?.length > 0 ? (
        <Box
          sx={{
            width: '100%',
            minWidth: '250px',
            maxWidth: '600px',
            flex: 1,
            pt: '35px',
            height: '100%',
          }}
        >
          <ShowUsers fromCompany={true} />
        </Box>
      ) : (
        <Typography variant="h4">No hay empleados registrados</Typography>
      )}
    </Box>
  )
}

export default FormCompany

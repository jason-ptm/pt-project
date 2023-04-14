import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { tokens } from 'src/context/theme'
export interface GraphsCompaniesProps {}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
]

const GraphsCompanies: React.FC<GraphsCompaniesProps> = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [dataCompany, setDataCompany] = useState(data)

  const handleChange = (value: string) => {
    console.log(value)
  }

  return (
    <Box
      className="view"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
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
      <FormControl
        variant="filled"
        required
        sx={{ width: '100%', maxWidth: '300px' }}
      >
        <InputLabel id="demo-simple-select-filled-label">Compañia</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-required"
          value={'none'}
          label="Compañia *"
          name="company"
          onChange={(input) => handleChange(input.target.value)}
        >
          <MenuItem value="none">
            <em>Ninguna</em>
          </MenuItem>
          <MenuItem value="all">
            <em>Todas</em>
          </MenuItem>
          {/* {companies.map((company) => (
            <MenuItem value={company.name} key={company.name}>
              {company.name}
            </MenuItem>
          ))} */}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <Box sx={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={dataCompany}
            margin={{
              top: 5,
              right: 5,
              bottom: 5,
              left: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ fill: colors.primary[100] }}
              tickLine={{ stroke: colors.primary[100] }}
            />
            <YAxis
              tick={{ fill: colors.primary[100] }}
              tickLine={{ stroke: colors.primary[100] }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

export default GraphsCompanies

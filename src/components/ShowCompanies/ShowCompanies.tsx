import { Box, IconButton, useTheme } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { tokens } from 'src/context/theme'
import { UsersData } from 'src/data'
import { PrivateRoutes } from 'src/model'
import store from 'src/redux/store'
import { stylesTable } from 'src/utilities'

// const icons
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

export interface ShowCompaniesProps {}

const ShowCompanies: React.FC<ShowCompaniesProps> = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nombre',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
    },
    {
      field: 'numberEmployees',
      headerName: 'Numero empleados',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
      renderCell: (params) =>
        params.row.employees?.length ? params.row.employees?.length : 0,
    },
    {
      field: 'action',
      headerName: 'Acciones',
      sortable: false,
      width: 100,
      headerAlign: 'center',
      renderCell: (params) => {
        const deleteCompany = () => console.log(params.id)

        const editCompany = () => {
          navigate(
            `/${store.getState().currentUser.role || ''}/${
              PrivateRoutes.CREATECOMPANY
            }/${params.id}`,
            {
              replace: true,
            }
          )
        }

        return (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <IconButton
              onClick={editCompany}
              sx={{ color: colors.blueAccent[400] }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={deleteCompany}
              sx={{ color: colors.redAccent[500] }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )
      },
    },
  ]

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
      <DataGrid
        rows={UsersData}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 15]}
        sx={stylesTable}
      />
    </Box>
  )
}

export default ShowCompanies

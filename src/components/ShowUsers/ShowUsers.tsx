import { Box, IconButton, useTheme } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tokens } from 'src/context/theme'
import { PrivateRoutes, User, initialStateUser } from 'src/model'
import store from 'src/redux/store'
import { stylesTable } from 'src/utilities'

// const icons
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { getUsers } from 'src/services/data.service'

export interface ShowUsersProps {
  fromCompany?: boolean
}

const ShowUsers: React.FC<ShowUsersProps> = ({ fromCompany = false }) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [usersData, setUsersData] = useState<User[]>([initialStateUser])

  useEffect(() => {
    getUsers().then((res) => setUsersData(res))
  }, [])

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nombre',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
    },
    {
      field: 'id',
      headerName: 'Cedula',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
    },
    {
      field: 'role',
      headerName: 'Tipo usuario',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
    },
    {
      field: 'company',
      headerName: 'Compañia',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
      renderCell: (params) => (params.row.company ? params.row.company : 'N/A'),
    },
    {
      field: 'action',
      headerName: 'Acciones',
      sortable: false,
      width: 100,
      headerAlign: 'center',
      renderCell: (params) => {
        const deleteUser = () => console.log(params.id)

        const editUser = () => {
          navigate(
            `/${store.getState().currentUser.role || ''}/${
              PrivateRoutes.CREATEUSER
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
              onClick={editUser}
              sx={{ color: colors.blueAccent[400] }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={deleteUser}
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
        initialState={{
          columns: {
            columnVisibilityModel: {
              company: !fromCompany,
            },
          },
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        rows={usersData}
        columns={columns}
        pageSizeOptions={[5, 10, 15]}
        sx={stylesTable}
      />
    </Box>
  )
}

export default ShowUsers

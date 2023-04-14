import { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAsync = (
  asyncFn: () => Promise<AxiosResponse<unknown, unknown>>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  successFunction: Function,
  returnFunction: () => void,
  dependencies: unknown[] = []
) => {
  const navigate = useNavigate()
  useEffect(() => {
    let isActive = true //inicializa el componente
    asyncFn().then((result) => {
      //realiza la petición a la api
      if (isActive && result) successFunction(result.data) //verifica si sigue activo el activo
    })
    return () => {
      returnFunction && returnFunction()
      isActive = false
    }
  }, dependencies)
}

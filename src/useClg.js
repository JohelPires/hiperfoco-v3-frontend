import { useEffect } from 'react'

export function useClg(varname) {
  useEffect(() => {
    console.log('===============')
    console.log(varname)
    console.log('===============')
  }, [varname])
}

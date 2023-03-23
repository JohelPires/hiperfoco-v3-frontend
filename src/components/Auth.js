import { Divider, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Auth() {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <div className='auth'>
        <Divider>Login </Divider>
        <TextField required id='email' label='Email' />

        <TextField id='password' label='Password' type='password' />
        <Divider>Novo usuário? Registrar: </Divider>
        <TextField id='outlined-read-only-input' label='Nome' required />
        <TextField required id='email' label='Email' />
        <TextField id='password' label='Password' type='password' />
      </div>
    </Box>
  )
}

export default Auth

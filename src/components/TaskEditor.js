import React, { useState } from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material'
import { postData } from '../api/api'
// import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'
// import Dialog from '@mui/material/Dialog'
// import DialogActions from '@mui/material/DialogActions'
// import DialogContent from '@mui/material/DialogContent'
// import DialogContentText from '@mui/material/DialogContentText'
// import DialogTitle from '@mui/material/DialogTitle'

function TaskEditor({ open, handleClose, task }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(2)
  // if (task !== undefined) {
  //   console.log(task._id)
  //   // setTitle((t) => (t = task.title))
  //   // setDescription(task.description)
  //   // setPriority(task.priority)
  // }

  // const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    switch (name) {
      case 'title':
        setTitle(value)
        break
      case 'description':
        setDescription(value)
        break
      case 'priority':
        setPriority(value)
        break
      default:
        break
    }
  }

  function handleConcluir(event) {
    console.log(title, description, priority)

    postData({ title, desc: description, priority })
    setTitle('')
    setPriority(2)
    setDescription('')
    handleClose()
  }

  return (
    <div>
      {' '}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{task ? 'Editar tarefa' : 'Adicionar Tarefa'}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          {/* <form onSubmit={'handleSubmit'}> */}
          <TextField
            label='Tarefa'
            name='title'
            value={title}
            onChange={handleChange}
            fullWidth
            required
            margin='normal'
          />
          <TextField
            placeholder='Descrição da tarefa'
            name='description'
            value={description}
            onChange={handleChange}
            rows={5}
            multiline
            fullWidth
          />
          {/* <p>Configurações:</p> */}
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <InputLabel id='demo-select-small'>Prioridade</InputLabel>
            <Select
              name='priority'
              value={priority}
              onChange={handleChange}
              required
              defaultValue='2'
            >
              <MenuItem value={1}>Alta</MenuItem>
              <MenuItem defaultChecked value={2}>
                Normal
              </MenuItem>
              <MenuItem value={3}>Baixa</MenuItem>
            </Select>
          </FormControl>
          {/* <Select
            name='status'
            value={status}
            onChange={handleChange}
            required
            defaultValue='0'
          >
            <MenuItem value={0}>Semana</MenuItem>
            <MenuItem value={1}>Hoje</MenuItem>
          </Select> */}

          {/* </form> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleConcluir}>Concluir</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TaskEditor

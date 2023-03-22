import React, { useState } from 'react'
// import { Button, ButtonGroup } from 'react-bootstrap'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Button from '@mui/material/Button'
import {
  IconButton,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Alert,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import CheckIcon from '@mui/icons-material/Check'

import { deleteTask, updateTask } from '../api/api'
// import TaskEditor from './TaskEditor'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

function Task({ d, setRefreshData }) {
  const priorityColorStyle = [
    { borderLeft: '3px solid red' },
    { borderLeft: '3px solid orange' },
    { borderLeft: '3px solid royalblue' },
    { borderLeft: '3px solid lightgreen' },
  ]
  const [open, setOpen] = React.useState(false)
  const [openDel, setOpenDel] = React.useState(false)
  const [title, setTitle] = useState(d.title)
  const [description, setDescription] = useState(d.desc)
  const [priority, setPriority] = useState(d.priority)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleConfirmaDelete = () => {
    setOpenDel(true)
  }

  const handleCloseDel = () => {
    setOpenDel(false)
  }

  function handleDelete() {
    console.log(d._id)
    deleteTask(d._id)
    setRefreshData(d._id)
  }
  function handleChangeStatus() {
    let body = 0
    if (d.status < 2) {
      body = { status: d.status + 1 }
    } else {
      body = { status: 1 }
    }
    // const body = { status: newStatus }
    updateTask(d._id, body)
    setRefreshData(Math.random())
  }

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
    // console.log(body)
  }

  function handleSaveTask() {
    updateTask(d._id, { title, desc: description, priority })
    setRefreshData(Math.random())
    handleClose()
  }

  return (
    <div
      className='list-item'
      style={
        d.status > 1
          ? priorityColorStyle[3]
          : priorityColorStyle[d.priority - 1]
      }
    >
      <div className='list-item-title'>
        {d.title.length < 30 ? d.title : `${d.title.slice(0, 30)}...`}
        <div className='list-item-title-controls'>
          <IconButton aria-label='edit' size='small' onClick={handleClickOpen}>
            <EditIcon fontSize='inherit' />
          </IconButton>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar tarefa</DialogTitle>
            <DialogContent>
              <TextField
                size='small'
                name='title'
                margin='dense'
                id='title'
                label='Título'
                // type='string'
                fullWidth
                onChange={handleChange}
                value={title}
                variant='outlined'
              />
              <TextField
                size='small'
                margin='dense'
                id='desc'
                label='Descrição'
                name='description'
                type='text'
                fullWidth
                rows={5}
                multiline
                value={description}
                onChange={handleChange}
                variant='outlined'
              />
              <InputLabel id='demo-simple-select-label'>Prioridade</InputLabel>
              <Select
                size='small'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={priority}
                label='Prioridade'
                name='priority'
                onChange={handleChange}
              >
                <MenuItem value={1}>Alta</MenuItem>
                <MenuItem value={2}>Media</MenuItem>
                <MenuItem value={3}>Baixa</MenuItem>
              </Select>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={handleSaveTask}>Salvar</Button>
            </DialogActions>
          </Dialog>

          <IconButton
            aria-label='status-change'
            size='small'
            onClick={handleChangeStatus}
          >
            {d.status === 0 ? (
              <ArrowForwardIosIcon fontSize='inherit' />
            ) : d.status === 1 ? (
              <CheckIcon fontSize='inherit' />
            ) : (
              <ArrowBackIosIcon fontSize='inherit' />
            )}
          </IconButton>

          <IconButton
            aria-label='delete'
            size='small'
            onClick={handleConfirmaDelete}
          >
            <DeleteIcon fontSize='inherit' />
          </IconButton>
          <Dialog
            open={openDel}
            onClose={handleCloseDel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>
              {'Deletar tarefa?'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                <Alert severity='warning'>Essa operação é irreversível.</Alert>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDel}>Cancelar</Button>
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
                variant='outlined'
                autoFocus
              >
                Deletar
              </Button>
            </DialogActions>
          </Dialog>

          {/* <DropdownButton id='dropdown-basic-button' title='p' variant='light'>
            <Dropdown.Item href='#/action-1'>1 - Urgente</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>2 - Normal</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>
              3 - Baixa prioridade
            </Dropdown.Item>
          </DropdownButton> */}

          {/* <button>del</button>
          <button>edit</button>
          {d.status === 0 ? (
            <button>start</button>
          ) : d.status === 1 ? (
            <button>done</button>
          ) : (
            ''
          )} */}
        </div>
      </div>
      {/* <div>{d.desc ? d.desc.substring(0, 40) + '...' : ''}</div> */}
      <div className='list-item-desc'>{d.desc}</div>
    </div>
  )
}

export default Task

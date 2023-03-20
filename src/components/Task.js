import React, { useState } from 'react'
// import { Button, ButtonGroup } from 'react-bootstrap'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import CheckIcon from '@mui/icons-material/Check'
import { deleteTask, updateTask } from '../api/api'
import TaskEditor from './TaskEditor'

function Task({ d, setRefreshData }) {
  const priorityColorStyle = [
    { borderLeft: '3px solid red' },
    { borderLeft: '3px solid orange' },
    { borderLeft: '3px solid royalblue' },
  ]

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

  return (
    <div className='list-item' style={priorityColorStyle[d.priority - 1]}>
      <div className='list-item-title'>
        {d.title}
        <div className='list-item-title-controls'>
          <IconButton aria-label='edit' size='small'>
            <EditIcon fontSize='inherit' />
          </IconButton>
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
          <IconButton aria-label='delete' size='small' onClick={handleDelete}>
            <DeleteIcon fontSize='inherit' />
          </IconButton>

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

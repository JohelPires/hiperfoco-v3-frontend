import React from 'react'
// import { Button, ButtonGroup } from 'react-bootstrap'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

function Task({ d }) {
  return (
    <div className='list-item'>
      <div className='list-item-title'>
        {d.title}
        <div className='list-item-title-controls'>
          <IconButton aria-label='delete' size='small'>
            <EditIcon fontSize='inherit' />
          </IconButton>

          <IconButton aria-label='delete' size='small'>
            <ArrowForwardIosIcon fontSize='inherit' />
          </IconButton>
          <IconButton aria-label='delete' size='small'>
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

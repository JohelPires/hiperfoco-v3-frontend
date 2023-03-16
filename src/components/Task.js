import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function Task({ d }) {
  return (
    <div className='list-item'>
      <div className='list-item-title'>
        {d.title}
        <div className='list-item-title-controls'>
          <DropdownButton
            id='dropdown-basic-button'
            variant='Secondary'
            title='Dropdown button'
          >
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </DropdownButton>
          <button>del</button>
          <button>edit</button>
          {d.status === 0 ? (
            <button>start</button>
          ) : d.status === 1 ? (
            <button>done</button>
          ) : (
            ''
          )}
        </div>
      </div>
      {/* <div>{d.desc ? d.desc.substring(0, 40) + '...' : ''}</div> */}
      <div className='list-item-desc'>{d.desc}</div>
    </div>
  )
}

export default Task

import './App.css'
import { useState } from 'react'

function TaskList(props) {
  return (
    <div className='taskListContainer Container'>
      <h2>{props.title}</h2>
      <div>
        {props.dados.map((d) => {
          return (
            <div className='list-item'>
              {d.title} [del] [edit]{' '}
              {d.status === 0
                ? '[mark as doing]'
                : d.status === 1
                ? 'mark as done]'
                : ''}
              <div>{d.desc}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>Hiperfoco</h1>
      <ul>
        <li>login</li>
        <li>about</li>
      </ul>
    </nav>
  )
}

function AddTask() {
  return <h2>Adicionar tarefa</h2>
}

function PomodoroClock() {
  return (
    <div className='PomodoroContainer Container'>
      <h2>Pomodoro Clock</h2>
    </div>
  )
}

function App() {
  const data = [
    {
      _id: '63ed7dd7f95d71f7c7fcc655',
      title: 'Nova tarefa',
      status: 2,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63ed7e54fb921dce07b40f85',
      title: 'mais uma tarefa',
      status: 1,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63ed80d17665b51706e98901',
      title: 'ainda outra tarefa',
      status: 1,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622433570b14d968fcc68',
      title: 'mais coisa pra fazer',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622583570b14d968fcc6a',
      title: 'mais uma outra tarefa',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622613570b14d968fcc6c',
      title: 'yet another task',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622703570b14d968fcc6e',
      title: 'yet another task2',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622713570b14d968fcc70',
      title: 'yet another task3',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622713570b14d968fcc72',
      title: 'yet another task4',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622723570b14d968fcc74',
      title: 'yet another task5',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622723570b14d968fcc76',
      title: 'yet another task6',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622723570b14d968fcc78',
      title: 'yet another task7',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622733570b14d968fcc7a',
      title: 'yet another task8',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622733570b14d968fcc7c',
      title: 'yet another task9',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622743570b14d968fcc7e',
      title: 'yet another task10',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622743570b14d968fcc80',
      title: 'yet another task11',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622743570b14d968fcc82',
      title: 'yet another task12',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622753570b14d968fcc84',
      title: 'yet another task13',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 0,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622753570b14d968fcc86',
      title: 'yet another task14',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 2,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622753570b14d968fcc88',
      title: 'yet another task15',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 2,
      timeSpent: 0,
      __v: 0,
    },
    {
      _id: '63f622753570b14d968fcc8a',
      title: 'yet another task16',
      desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
      status: 2,
      timeSpent: 0,
      __v: 0,
    },
  ]
  console.log(data)

  return (
    <div className='App'>
      <Navbar />
      <PomodoroClock />
      <AddTask />
      <div style={{ display: 'flex' }}>
        <TaskList
          title='Tarefas a fazer'
          dados={data.filter((d) => d.status === 0)}
        />
        <TaskList
          title='Tarefas em execu????o'
          dados={data.filter((d) => d.status === 1)}
        />
        <TaskList
          title='Tarefas conclu??das'
          dados={data.filter((d) => d.status === 2)}
        />
      </div>
    </div>
  )
}

export default App

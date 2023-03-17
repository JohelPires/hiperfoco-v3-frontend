import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './styles/bootstrap.min.css'
import './App.css'
import { fetchMyData } from './api/api'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// import { useState } from 'react'
import PomodoroClock from './components/PomodoroClock'
import TaskList from './components/TaskList'
import NavBar from './components/NavBar'
import { Button } from '@mui/material'
import TaskEditor from './components/TaskEditor'

function App() {
  const [openTaskEditor, setOpenTaskEditor] = useState(false)
  const [data, setData] = useState('')
  const [refreshData, setRefreshData] = useState('')

  useEffect(() => {
    fetchMyData()
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }, [openTaskEditor, refreshData])

  const handleTaskEditorWindow = () => {
    setOpenTaskEditor(true)
  }

  // const [data, setData] = useState([
  //   {
  //     _id: '63ed7dd7f95d71f7c7fcc655',
  //     title: 'Nova tarefa',
  //     desc: 'Essa é uma descrição mais detalhada da tarefa',
  //     status: 2,
  //     priority: 2,
  //     createdAt: '16-03-2023',
  //     deadline: '30-03-2023',
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63ed7e54fb921dce07b40f85',
  //     title: 'mais uma tarefa',
  //     status: 1,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63ed80d17665b51706e98901',
  //     title: 'ainda outra tarefa',
  //     status: 1,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622433570b14d968fcc68',
  //     title: 'mais coisa pra fazer',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622583570b14d968fcc6a',
  //     title: 'mais uma outra tarefa',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622613570b14d968fcc6c',
  //     title: 'yet another task',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622703570b14d968fcc6e',
  //     title: 'yet another task2',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622713570b14d968fcc70',
  //     title: 'yet another task3',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622713570b14d968fcc72',
  //     title: 'yet another task4',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622723570b14d968fcc74',
  //     title: 'yet another task5',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622723570b14d968fcc76',
  //     title: 'yet another task6',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622723570b14d968fcc78',
  //     title: 'yet another task7',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622733570b14d968fcc7a',
  //     title: 'yet another task8',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622733570b14d968fcc7c',
  //     title: 'yet another task9',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622743570b14d968fcc7e',
  //     title: 'yet another task10',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622743570b14d968fcc80',
  //     title: 'yet another task11',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622743570b14d968fcc82',
  //     title: 'yet another task12',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task. This can be longer than this. In fact it can be a very long text. when it reaches a certain size, it will be cutted down in the main page, requiring to click to see the whole content.',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622753570b14d968fcc84',
  //     title: 'yet another task13',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 0,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622753570b14d968fcc86',
  //     title: 'yet another task14',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 2,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622753570b14d968fcc88',
  //     title: 'yet another task15',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 2,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  //   {
  //     _id: '63f622753570b14d968fcc8a',
  //     title: 'yet another task16',
  //     desc: 'This is a detailed description of the task at hand. Here we put more details about the task',
  //     status: 2,
  //     timeSpent: 0,
  //     __v: 0,
  //   },
  // ])

  return (
    <div className='App'>
      <NavBar />
      <div className='top-container'>
        <PomodoroClock />
      </div>
      <div className='add-task'>
        <Button onClick={handleTaskEditorWindow}>Adicionar tarefa</Button>
        <TaskEditor
          open={openTaskEditor}
          handleClose={() => setOpenTaskEditor(false)}
          edit={false}
        />
      </div>

      {data && (
        <div style={{ display: 'flex' }}>
          <TaskList
            title='Tarefas da semana'
            dados={data.filter((d) => d.status === 0)}
            refresh={setRefreshData}
          />
          <TaskList
            title='Tarefas de hoje'
            dados={data.filter((d) => d.status === 1)}
            refresh={setRefreshData}
          />
          <TaskList
            title='Tarefas concluídas'
            dados={data.filter((d) => d.status === 2)}
            refresh={setRefreshData}
          />
        </div>
      )}
    </div>
  )
}

export default App

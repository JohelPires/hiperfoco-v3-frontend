import '../styles/tasklist.css'
import Task from './Task'

function TaskList(props) {
  return (
    <div className='taskListContainer Container'>
      <h2>{props.title}</h2>
      {/* <Task /> */}
      <div>
        {props.dados.map((d) => {
          // console.log(d)
          return <Task d={d} />
        })}
      </div>
    </div>
  )
}

export default TaskList

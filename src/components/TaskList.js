import '../styles/tasklist.css'
import Task from './Task'

function TaskList(props) {
  return (
    <div className='taskListContainer Container'>
      <h2>{props.title}</h2>
      {/* <Task /> */}
      <div>
        {props.dados
          .sort((a, b) => a.priority - b.priority)
          .map((d) => {
            // console.log(d)
            return <Task d={d} key={d._id} setRefreshData={props.refresh} />
          })}
      </div>
    </div>
  )
}

export default TaskList

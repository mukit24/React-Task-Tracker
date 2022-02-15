const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className={`alert alert-secondary ${task.reminder ? 'task-reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h6>{task.text}<i onClick={() => onDelete(task.id)} className="fa fa-trash float-end lead text-danger"></i></h6>
        <p className="mb-0">{task.day}</p>
    </div>
  )
}

export default Task
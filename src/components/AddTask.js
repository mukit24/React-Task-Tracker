import { useState} from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please Add a text');
            return
        }

        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="mb-3" onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Task</label>
                <input type="text" className="form-control" placeholder="Add Task" value={text} onChange = {(e) => setText(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Day and Time</label>
                <input type="text" className="form-control" placeholder="Add Day and Time" value={day} onChange = {(e) => setDay(e.target.value)}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" value={reminder} checked={reminder} onChange = {(e) => setReminder(e.currentTarget.checked)}/>
                <label className="form-check-label" >Reminder</label>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Save Task</button>
            </div>
        </form>
    )
}

export default AddTask
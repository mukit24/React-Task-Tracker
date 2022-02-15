const AddTask = () => {
    return (
        <form className="mb-3">
            <div className="mb-3">
                <label className="form-label">Task</label>
                <input type="text" className="form-control" placeholder="Add Task" />
            </div>
            <div className="mb-3">
                <label className="form-label">Day and Time</label>
                <input type="text" className="form-control" placeholder="Add Day and Time" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" >Reminder</label>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Save Task</button>
            </div>
        </form>
    )
}

export default AddTask
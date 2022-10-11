function EmployeeListItem (props) {
    return (
        <div className="employees">
            <h2>Name: {props.whichEmployee.name} </h2>
            <h3>Title: {props.whichEmployee.title}</h3>
            <img src= {props.whichEmployee.image} />
        </div>
    )
}

export default EmployeeListItem;
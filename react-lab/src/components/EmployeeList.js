import EmployeeListItem from "./EmployeeListItem";
import data from "../Data";

function EmployeeList () {
    return (
        <div className="employee-container">
            <h1>Employee List Container: </h1>
            {/* other method */}
            {/* <EmployeeListItem whichEmployee={Data[0]} />
            <EmployeeListItem whichEmployee={Data[1]} />
            <EmployeeListItem whichEmployee={Data[2]} />
            <EmployeeListItem whichEmployee={Data[3]} />
            <EmployeeListItem whichEmployee={Data[4]} />
            <EmployeeListItem whichEmployee={Data[5]} /> */}

            {/* map method */}
            {data.map((datas, index) => {
               return <EmployeeListItem key={index} whichEmployee={datas} />
            })}

        </div>
    )
}

export default EmployeeList;
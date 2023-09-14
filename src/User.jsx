
const mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: 'mocklastname',
      position: "Manager"
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer"
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer"
      
    },
    {
        id: 3,
        name: "Tanni",
        lastname: "Os",
        position: "Dev"
    }
  ]

const User = ({mockData}) => {
    return (
        <div>
            <h1>Table</h1>
            <div>
            <table style={{ width: 500 }}>
                <thead>
                <tr>
                   <th>Name</th>
                   <th>Lastname</th>
                   <th>Position</th>
                </tr>

                </thead>
                <tbody>
                    {mockEmployees.map((eachMan) =>(
                        <tr>
                            <td>{eachMan.name}</td>
                            <td>{eachMan.lastname}</td>
                            <td>{eachMan.position}</td>
                        </tr>
                    ))}
                       
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default User
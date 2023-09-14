import { useState,useEffect} from 'react'
import User from './User';
import Admin from './Admin'



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
  ]
  
  const Home = () => {
    const [page,setPage] = useState();
    const [identi,setIdenti] = useState("normal");
  const checkIdenti = () => {
    console.log ("Incheckidenti")
  }
  useEffect(checkIdenti,[identi]);

  function handleUser() {
    setIdenti("user");
    setPage(<User
              mockData ={mockEmployees} />) 
    
  //   console.log ("click user")
 
   }

  function handleAdmin() {
    setIdenti("admin");
    setPage(<Admin />)
  //   console.log ("click admin")
  // console.log(identi)
   }
    return (
      <div>
        <h1>Generation Thailand<br>
        </br>React-Assetment</h1>
        <div>
          <button onClick={handleUser}>Use Home Sector</button>
          <button onClick={handleAdmin}>Admin Home Sector</button>
        </div>
        <div>
          {page}
        </div>
      </div>
      
    )

  }
  
  
  
  export default Home
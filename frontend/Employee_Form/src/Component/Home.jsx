import AddEmployee from "./AddEmployee"
import ListEmployee from "./ListEmployee"
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    function handleAdd()
    {
         navigate("/addEmployee")
    }
    function handleList()
    {
       navigate("/listEmployee")
    }
return(
    <>
       <div>
          <h1>Employee Details</h1>
        <button onClick={handleAdd}>AddEmployee</button>
        <button onClick={handleList}>ListEmployee</button>
        
       </div>
    </>
)
}
export default Home
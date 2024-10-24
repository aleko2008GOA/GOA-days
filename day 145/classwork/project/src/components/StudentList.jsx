import { useContext } from "react";
import { StudentContext } from "../context/Context";

function StudentList(){
    const users = useContext(StudentContext);
    
    return (
        <>  
            <ol>
                {users.map((val, index) =>(
                    <li key = {index}>
                        Welcome {val.name}, we sent a verification message on {val.email}!
                    </li>
                ))}
            </ol>
        </>
    );
}

export default StudentList;
import { useContext } from "react";
import { StudentContext } from "../context/Context";

function StudentItem(){
    const users = useContext(StudentContext);

    return (
        <table>
            <thead>
                <tr>
                    <th>username</th>
                    <th>user email</th>
                    <th>user password</th>
                </tr>
            </thead>
            <tbody>
                {users.map((val, index) =>(
                    <tr key = {index}>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>Nuh-uh</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentItem;
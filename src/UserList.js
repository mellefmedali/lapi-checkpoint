
// OK Create a project using create-react-app.
// OK Create a project using create-react-app.
// OK Create UserList.js file in src folder
// OK Install axios.

import { useEffect, useState } from "react"
import axios from 'axios'
import UserCard from "./UserCard"
import './userCard.css'

// OK You gone to use jsonplaceholder API to get list of user 
// OK Use axios to Get data from Link inside useEffect hooks
// OK Use UseState hooks to save data into listOfUSer state 
// OK Map listOfUser to display list of user into screen 
// OK Style your App as you wish


const UserList = () => {
    const [listOfUSer, setListOfUser] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        function fetchData() {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((user) => setListOfUser(user.data))
                .catch((error) => setError(error))
        }
        fetchData();

    }, []);
    console.log(listOfUSer)

    return (
        <div className="userList">

            {listOfUSer.map((user) =>
                        <UserCard key={user.id}
                            name={user.name}
                            email={user.email}
                            company={user.company.name}
                            adress={`${user.address.street}- ${user.address.suite} - ${user.address.city}`}
                            phone={user.phone}
                        />
                    
                )}

        </div>
    )
}

export default UserList

// OK Create a project using create-react-app.
// OK Create a project using create-react-app.
// OK Create UserList.js file in src folder
// OK Install axios.

import { useEffect, useState } from "react"

// You gone to use jsonplaceholder API to get list of user 
// Use axios to Get data from Link inside useEffect hooks
// Use UseState hooks to save data into listOfUSer state 
// Map listOfUser to display list of user into screen 
// Style your App as you wish


const UserList = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        function fetchData() {
            fetch("https://hn.algolia.com/api/v1/search?query=redux")
                .then(response => response.json())
                .then(response => setData(response.hits))
                .catch(response => setError(response))
        }
        fetchData();

    }, []);
    console.log(data)

    return (
        <div>
            UserList :
            <ul>
                {data.map(course => (
                    <li>
                        <a href={course.url}>{course.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
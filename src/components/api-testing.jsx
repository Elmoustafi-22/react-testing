import { useEffect, useState } from "react";


function ApiCallTest() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers(){
            try{
                const data = await fetch('https://jsonplaceholder.typicode.com/users').then(result => result.json())
                setUsers(data)
                setIsLoading(false)
            } catch(error){
                console.log('error', error)
            }
        }

        fetchUsers();
    }, [])

    console.log(users)

    return ( 
        <div className="text-center mt-4 max-w-[400px] flex flex-col mx-auto">
            {
                isLoading ? (
                    <h1 className="font-lobster">Loading data...</h1>
                ) : (
                    <ul className="grid grid-cols-2 gap-4">
                        {
                            users.map(user => 
                                    <li className="p-2 border border-sky-600 rounded flex flex-col items-center" key={user.id}>
                                    {user.name}
                                </li>
                            )
                        }
                    </ul>
                )
            }
        </div>
     );
}

export default ApiCallTest;
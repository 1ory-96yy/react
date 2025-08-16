import { useEffect, useState } from "react";

export default function NewUserList(){

    const[Users, setUsers]=useState([])
    const[Loading, setLoading]=useState(true)


    useEffect(()=>{
        const ctrl = new AbortController();

        const loadUser = async ()=> {
            try{
                setLoading(true)
                const res = await fetch("https://jsonplaceholder.typicode.com/users", {signal:ctrl.signal})
                if (!res.ok)
                {
                    throw new Error("failed to fetch")
                }
                const data = await res.json()
                setUsers(data)
            }catch(err){
                if(err.name !=="AbortError")
                {
                    console.log(ErrorEvent)
                }
            }finally{
                setLoading(false)
            }
        };
        loadUser();

        return()=>ctrl.abort;
    },[]);

    return(<div>
      <h2>User List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {Users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
            <p><strong>Company:</strong> {user.company?.name}</p>
            <p><strong>Address:</strong> {user.address?.street}, {user.address?.city}</p>
          </li>
        ))}
      </ul>
    </div>
    )
}
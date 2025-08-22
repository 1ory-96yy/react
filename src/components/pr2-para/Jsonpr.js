import { useEffect, useState } from "react";
import "./Jsonpr.css" 

export default function Jsonpr(){

    const[Users, setUsers]=useState([])
    const[Loading, setLoading]=useState(true)
    const [searchTerm, setSearchTerm] = useState(""); 

    useEffect(()=>{
        const ctrl = new AbortController();

        const loadUser = async ()=> {
            try{
                setLoading(true)
                const res = await fetch("https://hp-api.onrender.com/api/characters", {signal:ctrl.signal})
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
        return() => ctrl.abort;
    },[]);
    const filteredUsers = Users.filter((user) => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(<div>
      <h2>Harry Potter characters</h2>
      <input
        type="text"
        placeholder="Search character by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <div class="blok">
              <div>
            <img src = {user.image} alt ="error"/>
            </div>
            <div class ="blok2">
            <div class="colm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>race:</strong> {user.species}</p>
            <p><strong>gender:</strong> {user.gender}</p>
            <p><strong>ancestry:</strong> {user.ancestry}</p>
            <p><strong>patronus:</strong> {user.patronus}</p>
            </div>
            <div class="colm">
            <p><strong>faculty:</strong> {user.house}</p>
            <p><strong>Вate Of Birth	:</strong> {user.dateOfBirth}</p>
            <p><strong>Eye Colour:</strong> {user.eyeColour}</p>
            <p><strong>Hair Colour:</strong> {user.hairColour}</p>
            <p><strong>Actor:</strong> {user.actor}</p>
            </div>
            </div>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
    )
}
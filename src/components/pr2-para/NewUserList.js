import { useEffect, useRef, useState } from "react";

export default function NewUserList(){

    const[result, setResult]=useState([])
    const[Loading, setLoading]=useState(false)
    const[title, setTitle]=useState("")
    const[body, setBody]=useState("")
    const[error, setError]=useState(null)

    const abortRef = useRef (null);

    

        const onSubmit = async (e)=> {
          
          e.preventDefault();
          setError(null)
          setResult(null)
          const ctrl = new AbortController();
          abortRef.current=ctrl;
            try{
                setLoading(true)
                const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                  method:"POST",
                  headers:{"Content-Type":"aplication/json"},
                  body: JSON.stringify({title,body,userid:1}),
                  signal:ctrl.signal
                })
                if (!res.ok)
                {
                    throw new Error(`Http ${res.result}`)
                }
                const data = await res.json()
                setResult(data)
            }catch(err){
                if(err.name !=="AbortError")
                {
                    console.log(ErrorEvent)
                    setError(err.message)
                }
            }finally{
                setLoading(false)
                abortRef.current=null;
            }
        };
        const cancel= ()=>{
          abortRef.current?.abort()
        }

    return(<div>
      <h2>post</h2>
      <form onSubmit={onSubmit}>
      <input
      placeholder="Title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <textarea
      placeholder="body"
      value={body}
      onChange={(e)=>setBody(e.target.value)}
      />
      <button type="Submit" disabled={Loading}>Submit</button>
      <button type="button" onClick={cancel} disabled={!Loading}>Cancel</button>
      </form>
      {Loading && <p>Submiting ...</p>}
      {error && <p style={{color:"crimson"}}>Submiting ...</p>}
      {result && (
      <>
      <h3>created</h3>
      <pre>{JSON.stringify(result,null,2)}</pre>
      </>
      )}
    </div>
    )
}
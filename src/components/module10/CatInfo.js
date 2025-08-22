import { useEffect, useState } from "react";
import './CatInfo.css'

export default function Catinfo(){

    const[Users, setUsers]=useState([])
    const[Loading, setLoading]=useState(true)
    const[factlist, setFactlist]=useState([])
    const[CText, setCtext]=useState([])


    const [br, setBr] = useState(255);
    const [bg, setBg] = useState(255);
    const [bb, setBb] = useState(255);

    const [bfr, setBfr] = useState(251);
    const [bfg, setBfg] = useState(211);
    const [bfb, setBfb] = useState(192);

    const [bmfr, setBmfr] = useState(255);
    const [bmfg, setBmfg] = useState(226);
    const [bmfb, setBmfb] = useState(213);


    const [tr, setTr] = useState(0);
    const [tg, setTg] = useState(0);
    const [tb, setTb] = useState(0);

    const [tSize, setTSize] = useState(17);

    useEffect(()=>{
        const ctrl = new AbortController();

        const loadUser = async ()=> {
            try{
                setLoading(true)
                const res = await fetch("https://catfact.ninja/fact", {signal:ctrl.signal})
                if (!res.ok)
                {
                    throw new Error("failed to fetch")
                }
                const data = await res.json()
                setUsers(data)
                setCtext((prev)=>
                  prev !==Users.fact ? data.fact : console.log("error Ctext"));
                setFactlist([data.fact])
                console.log([data.fact])
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

        return()=>ctrl.abort();
    },[]);
    const getNewFact = async()=>{
      const res = await fetch("https://catfact.ninja/fact")
      if (res.ok)
                {
                  const data= await res.json()
                  const UpFactList=Array(factlist.length+1)
                  for (let i=0 ;i< factlist.length;i++)
                  {
                    UpFactList[i]=factlist[i]
                    console.log("1")
                  }
                  UpFactList[factlist.length]=data.fact
                  setFactlist(UpFactList)
                  setCtext((prev)=>
                  prev !==Users.fact ? data.fact : data.fact
                  );
                }else{
                  console.log("error with array")
                }
    }
    const Bgstyle = {
      backgroundColor: `rgb(${br}, ${bg}, ${bb})`
    };
    const textStyle ={
      color: `rgb(${tr}, ${tg}, ${tb})`,
      fontSize: `${tSize}px`
    }
    const backgroundFact={
      backgroundColor: `rgb(${bfr}, ${bfg}, ${bfb})`,
      color: `rgb(${tr}, ${tg}, ${tb})`,
      fontSize: `${tSize}px`
    }
    const mainBgColor={
      backgroundColor: `rgb(${bmfr}, ${bmfg}, ${bmfb})`,
    }

    return(<div style={Bgstyle}>
        {Loading}
          <div class='currentFact' style={mainBgColor}>
            <p class='CfactText' style={textStyle}>{CText}</p>
            <button onClick={getNewFact} class='GetButton' >Get new fact</button>
          </div>
            <p class='factlist' style={textStyle}>All facts:</p>
            <ul>
              
              {factlist.map((fact , index)=>(
                <li key={index} style={backgroundFact}>{fact}</li>
              ))}
            </ul>
            <div className="currentFact" style={backgroundFact}>
                <h2 style={textStyle}>Background color</h2>
                <input type="number" value={br} onChange={(e) => setBr(Number(e.target.value))} />
                <input type="number" value={bg} onChange={(e) => setBg(Number(e.target.value))} />
                <input type="number" value={bb} onChange={(e) => setBb(Number(e.target.value))} />

                <h2 style={textStyle}>Fact background color</h2>
                <input type="number" value={bfr} onChange={(e) => setBfr(Number(e.target.value))} />
                <input type="number" value={bfg} onChange={(e) => setBfg(Number(e.target.value))} />
                <input type="number" value={bfb} onChange={(e) => setBfb(Number(e.target.value))} />

                <h2 style={textStyle}>Main Fact background color</h2>
                <input type="number" value={bmfr} onChange={(e) => setBmfr(Number(e.target.value))} />
                <input type="number" value={bmfg} onChange={(e) => setBmfg(Number(e.target.value))} />
                <input type="number" value={bmfb} onChange={(e) => setBmfb(Number(e.target.value))} />

                <h2 style={textStyle}>Text color</h2>
                <input type="number" value={tr} onChange={(e) => setTr(Number(e.target.value))} />
                <input type="number" value={tg} onChange={(e) => setTg(Number(e.target.value))} />
                <input type="number" value={tb} onChange={(e) => setTb(Number(e.target.value))} />

                <h2 style={textStyle}>Text Size</h2>
                <input type="number" value={tSize} onChange={(e) => setTSize(Number(e.target.value))} />
            </div>
    </div>
    )
}
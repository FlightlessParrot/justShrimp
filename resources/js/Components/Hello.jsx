import { useEffect, useState } from "react";
import Frame from "./Frames/Frame";
import Number from "./Numbers/Number";

export default function Hello({helloHeader, name}) {
  const [signes,setSignes]=useState(0)
  const shrimpSign=signes-helloHeader[1].length >0 ? signes-helloHeader[1].length  : 0;
  useEffect(
    ()=>{
      let timeout=null;
      if(signes<helloHeader[1].length+name[1].length)
      {
       timeout= setTimeout(() => {
          setSignes(s=>s+1)
        }, 120);
      }
      return ()=>clearTimeout(timeout)
    },[signes]
  )
  
  return (
    <Frame>
        <p className="text-center "><Number /></p>
        <div className="text-cyan-600 md:grid flex flex-col grid-rows-2 grid-cols-3 w-max gap-4 text-lg" >
      <b>{helloHeader[0]}</b><span className="col-span-2">{helloHeader[1].substr(0,signes)}</span>
        <b>{name[0]}</b><span className="col-span-2">{name[1].substr(0,shrimpSign)}</span>
        </div>
    </Frame>
  )
}
import { Parallax } from "react-scroll-parallax";
import LoadingBox from "../Loading/LoadingBox";
import { useEffect, useState } from "react";


export default function AgentText({children, imageVideo, title, text, trans}) {
  const [progress, setProgress]=useState(0)
  const [stringLength, setStringLength]=useState(0)
  const factor=window.innerHeight <1024 ? 0.3 :0.6
  const textLength=Math.ceil((progress/factor)*text.length)


 
  const myText=text.substr(0, stringLength)

  useEffect(
    ()=>{
      let timeout=null
      if(stringLength<textLength)
      {
       timeout= setTimeout(() => {
          setStringLength(s=>s+1)
        }, 10);
      }
      if(stringLength>textLength)
      {
        timeout= setTimeout(() => {
          setStringLength(s=>s-1)
        }, 10);
      }
      return ()=>clearTimeout(timeout)
    },[setStringLength, stringLength, textLength]
  )
  const sentences=myText.split('.')
  const jsxTexts=sentences.map((e,i)=>{
    if((i+1)%3===1)
    {
      let string=''
      let c=0
      while((i+c<sentences.length) && c<3)
      {
        if(sentences[i+c])
        {
        string+=sentences[i+c]+'.'
        }
        c++;
      }
      return <p className="my-10" key={i}>{string}</p>
    }
  })
  return (
    <Parallax onProgressChange={p=>setProgress(p)}>
    <div className="flex gap-6  flex-col lg:grid grid-rows-3 grid-cols-2 ">
      <div className="order-1 col-start-1 row-start-1 row-span-2 justify-self-center flex justify-center">
        {imageVideo}
      </div>
      <div className="order-3 col-start-1 row-start-3  w-full h-full p-4  flex justify-center items-center">
        <LoadingBox actual={progress} max={0.8 } />
      </div>
        <section className="min-h-[100vh] md:min-h-[80vh] text-cyan-600 p-4 col-start-2 row-span-3 order-2">
            <h2 className="m-4 text-2xl text-center tracking-[0.3em] mb-12">{title}</h2>
            <p className=" text-sm  tracking-[0.4em] mt-2 ">{trans}</p>
            <section className="m-4 text-base tracking-widest">{jsxTexts}</section>
            {children}
        </section>

    </div></Parallax>
  )
}
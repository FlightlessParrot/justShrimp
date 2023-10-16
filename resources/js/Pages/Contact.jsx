import Cover from "@/Components/Page/Cover";
import "../../css/contact.scss";
import { useEffect, useRef, useState } from "react";
import First from "@/Components/Page/First";
import Second from "@/Components/Page/Second";
import { Link, usePage } from "@inertiajs/react";
import SendingMail from "@/Components/SendingMail";
import Notyfication from "@/Components/Notyfication";
import ReturnButton from "@/Components/ReturnButton";

export default function Contact({lang}) {
    const [rotate, setRotate]=useState(false)
    const [isSending,setIsSending]=useState(false)
    const [showNotyfication, setShowNotyfication]=useState(false)
    const {flash}=usePage().props
    console.log(flash?.message)
    console.log(isSending)
    const ref= useRef()
    useEffect(
        ()=>{
            if(flash.message!==null)
            {
                setShowNotyfication(true)
                setIsSending(false)
            }else{
                setShowNotyfication(false) 
            }
        },[flash, setShowNotyfication, setIsSending]
    )
    useEffect(
        ()=>{
           ref.current.scrollIntoView()
        },[ref]
    )
    return (
        <div className="w-screen h-screen overflow-scroll contact">
           {isSending && <SendingMail />} 
           {showNotyfication && <Notyfication {...flash.message} setShowNotyfication={setShowNotyfication} />}
          <ReturnButton lang={lang} />
        <div className="flex justify-center items-center w-[200vw] h-[100vh] lg:w-screen lg:h-screen rotateFrame ">
            <div className="w-[200vh] sm:w-[180vw] h-[90vh] lg:w-[90vw] max-w-[1200px] max-h-[800px] grid grid-cols-2 relative top-0" onClick={()=>setRotate(s=>!s)}>
                <div className={"w-full h-full justify-self-start col-start-2 absolute top-0 z-10 "+(rotate ? ' myRotate' : 'nonRotate')} ref={ref}>
                   <Cover langCover={lang.cover} />  
                    <First langMail={lang.mail} setIsSending={setIsSending} />
                </div>
           
                <Second lang={lang.file} />
              
                
            </div>
        </div></div>
    );
}
// lg:w-[1200px] lg:h-[800px]
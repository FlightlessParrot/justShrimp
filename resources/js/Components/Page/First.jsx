import Page from "./Page";
import '../../../css/first.scss'
import MyInput from "../Forms/MyInput";
import { router } from "@inertiajs/react";

export default function First({className,langMail, setIsSending}) {
 
  
  const submitHandler=(e)=>{
    setIsSending(true)
    e.preventDefault();
    const formData= new FormData(e.target)
    router.post('/send/mail',formData)
  }

  return (
 <Page className={"absolute top-0 backface first border-black border-r-2 "+className}>
 <img loading='lazy' src='\images\Spin.webp' alt='' className="absolute z-20 top-[-1vh] left-1 rotate-180"/>
 <form onSubmit={submitHandler}  className="absolute z-10 top-6 left-4 h-5/6 w-[90%] overflow-scroll">
    <div className="bg-[#EFEADA] w-full h-fit p-2 " onClick={(e)=>e.stopPropagation()}>
        <h2 className="text-xl my-20">{langMail.head}</h2>
        <MyInput name={'subject'} label={langMail.titleLabel}  />
       
        <div className="my-12 ">
            <label htmlFor="message" className="block text-sm my-2">{langMail.messageLabel}</label>
            <textarea required rows='8' cols='25' className="w-full" id='message' name='message' maxLength={1000}></textarea>
        </div>
        <MyInput type='email' name='email' label={langMail.mailLabel} />
        <MyInput type='tel' name='tel' label={langMail.phoneLabel} />
        <button className="border border-blue-800 text-blue-800 rounded-md p-2 px-4 m-6  tracking-[0.2em]">{langMail.action}</button>
    </div>
 </form>
</Page>
  )
}

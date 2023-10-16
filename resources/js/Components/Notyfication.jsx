import {animated, useSpring} from "@react-spring/web"

export default function Notyfication({title, message, success, setShowNotyfication}) {
    const spring=useSpring({
        from: {
            x:-30,
            opacity: 0
        },
        to: {
            x: 0,
            opacity: 1
        }
    })
 const bg= success ? ' bg-green-500': ' bg-red-500'
  return (
    <animated.div style={spring} className={" rounded-md shadow-black absolute left-2 md:left-16 bottom-6 p-4 gap-6 tracking-wide grid grid-cols-6 grid-rows-2 w-60 md:w-80 z-50 text-slate-100 shadow-md "+bg}>
        <button onClick={e=>{e.preventDefault(); setShowNotyfication(false)}} className="text-lg col-start-6  text-slate-300">X</button>
      <h3 className="text-center font-normal text-xl row-start-1 col-span-5  self-center ">{title}</h3>
      <p className="row-start-2  col-span-6 ">{message}</p>
      </animated.div>
  )
}
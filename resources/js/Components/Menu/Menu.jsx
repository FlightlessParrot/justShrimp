import { useSpring, animated, config } from "@react-spring/web"
import Number from "../Numbers/Number"
import MenuLink from "./MenuLink"

export default function Menu({title, subtitle,links, linkTexts, className, style}) {
    const jsx=links.map((e,i)=>{
        return <div key={i} className="flex flex-col lg:flex-row justify-between md:p-4"><MenuLink href={e} text={linkTexts[i]} /> <Number /></div>
    })
    const spring=useSpring(
       { 
        from: {
            opacity: 1
        },
        to: {
            opacity: 0.5
        },
        loop: true,
        config: config.slow
    }
    )

    
  return (
    <div className={" bg-black bg-opacity-50 rounded transition-all p-2 "+className} style={{style}}>
        <animated.div style={spring} className="text-red-800">
            <strong className='text-2xl font-extrabold block text-center my-4 md:m-4'>{title}</strong>
            <b className="text-md text-center block m-2">{subtitle}</b>
        </animated.div>
        <div className="flex flex-col gap-4 p-2">
            {jsx}
        </div>
    </div>
  )
}
import { animated, useSpring, config } from "@react-spring/web"

export default function SendingMail() {
  const spring=useSpring(
    {
      from:{
        x:0
      },
      to:{
        x:window.innerWidth/2
      },
      config: config.gentle,
      loop: true
    }
  )
  return (
   <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-50  z-50 flex items-center">
    <animated.img style={spring} src='/images/gmail.webp' alt='gmail icon' width={150} height={119}/> 

    </div>
  )
}
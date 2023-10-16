export default function Page({children, className}) {
  return (
    <div className={"w-full h-full bg-[#E8DCB8] shadow-md  shadow-black page "+className}>
        {children}
        </div>
  )
}
export default function Frame({children, style, className}) {
  return (
    <div className={"p-6 px-12 bg-black border-2 border-transparent  border-l-cyan-600 border-r-cyan-600 rounded-xl w-max "+className} style={style}>
        {children}
    </div>
  )
}
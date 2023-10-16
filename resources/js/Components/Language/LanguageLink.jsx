import { Link } from "@inertiajs/react";

export default function LanguageLink({text,bgUrl, url}) {

  return (
    <Link className={`relative group hover:scale-110 rounded-md flex justify-center items-center    transition-all`} href={url} aria-label={'zmień język na / change language '+text} style={{
      backgroundImage: `url(${bgUrl})`,
      width: '80px',
      height: '40px'
    }}><span className="relative z-20 invisible group-hover:visible transition-all text-white"> {text}</span>  
      <div className="absolute w-full h-fit  group-hover:bg-none opacity-50 group-hover:bg-black group-hover:h-full transition-all">
     
     </div>
    </Link>
  )
}
import LanguageLink from "./LanguageLink"

export default function Languages() {
  const buttons= [
    {
      text: 'Polish',
      bgUrl: '/images/language/spyPl_80.webp',
      url: '/pl'
    },
    {
      text: 'English',
      bgUrl: '/images/language/spyEn_80.webp',
      url:'/en' 
    }
    
  ]
  const jsx=buttons.map(
    (e,i)=><LanguageLink key={i} {...e} />
  )
  return (
    <div className="m-10 w-max"> 
    
        <div className=" rounded-md bg-opacity-50 p-4 px-8 bg-black  text-cyan-600 ">
            <b className="block">Wybierz język</b>
            <b className="block">Choose language</b>
        
        </div>
     <div className="p-4 flex justify-center gap-6">
      {jsx}
      </div>
    </div>
  )
}
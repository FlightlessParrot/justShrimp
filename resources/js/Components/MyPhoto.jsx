export default function MyPhoto() {
  return (
    <div className="relative top-0 shrink overflow-clip">
        <div className="md:ml-6 md:mt-6 pb-0">
          <img
          width='600'
          height='610'
          className="w-80 md:w-full object-contain"
                    loading="lazy"
                    src="/images/Konrad_Strauss_300.webp"
                    srcSet="/images/Konrad_Strauss_300.webp 300w, \images\Konrad_Strauss_600.webp 600w"
                    sizes="(max-width:767)150px, 300px"
                    alt="Konrad Strauss"
                /></div>
          <div className="bg-[#E8DCB8] border-t shadow-sm w-full border-black absolute bottom-0 md:h-4 md:mx-2 invisible md:visible">
            </div>      
    </div>
  )
}
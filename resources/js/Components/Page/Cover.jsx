import Page from "./Page";

export default function Cover( {className, langCover}) {
  return (
    <Page className={"flex absolute top-0 "+className}>
        <div className="border-r border-black w-6 md:w-12  "></div>
                    <div className="w-full grid grid-rows-3">
                      <img loading='lazy' src='\images\Spin.webp' alt='' className="absolute top-[-1vh] right-1 rotate-180"/>
                        <div className="m-6 md:m-16">
                            <h1 className="text-5xl m-2 md:m-6 tracking-[0.6rem]">
                                {langCover.case}
                            </h1>
                            <i>{langCover.signature}</i>
                        </div>
                        <img
                            width={"285"}
                            height={"110"}
                            srcSet="/images/top_secret_120.webp 120w, /images/top_secret_300.webp 285w, \images\top_secret.webp 572w"
                            sizes="(max-width: 767px) 120px, (min-width: 768px) 285px"
                            alt="top secret"
                            loading="lazy"
                            src="/images/top_secret_300.webp"
                            className=" m-12 md:w-[285px] w-[120px] self-end rotate-3"
                        />
                        <div className="justify-self-center self-center m-4 w-3/4  flex flex-col gap-6">
                            <div className="w-full h-6  border-y border-y-black" />
                            <div className="w-full h-6  border-y border-y-black" />
                        </div>
                    </div>
    </Page>
  )
}
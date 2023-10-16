import MyPhoto from "../MyPhoto";
import Page from "./Page";

export default function Second({lang}) {
    return (
        <Page className="absolute top-0 justify-self-start col-start-2 z-0 p-2 gap-2 grid grid-rows-2 md:block">
            <div className="flex flex-col sm:grid grid-cols-2   ">
              <MyPhoto />
              <div className="col-start-2  md:p-2 text-base tracking-wider md:self-center" onClick={e=>e.stopPropagation()}> 
                {lang.data.map((e,i)=><p className="my-2 break-all" key={i}>{e}</p>)}
                <a className="block my-2 break-all text-blue-500" href='tel:+48730977004' >tel: +48 730 977 004</a>
                <a className="block my-2 break-all text-blue-500" href='mailto:shrimpinweb@gmail.com' >shrimpinweb@gmail.com</a>
              </div>
            </div>
            <div className="p-2 overflow-y-auto">
              <h2 className="my-6 md:my-12">{lang.desc.header}</h2>
              <p className="text-sm tracking-wider">{lang.desc.description}</p>
            </div>
        </Page>
    );
}

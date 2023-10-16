import { useEffect, useState } from "react";

export default function Loading({ percent }) {
    const [renderPercent, setRenderPercent]=useState(0)
    useEffect(
        ()=>{
            setRenderPercent(percent+ "%")
        },[percent]
    )
    return (
        <div className="w-full bg-transparent flex justify-start h-2 relative top-0 overflow-clip border-r border-cyan-600">
            <div style={{ width: renderPercent  }} className="bg-cyan-600 ">
           
            </div>
        </div>
    );
}

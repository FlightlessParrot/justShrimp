import Loading from "./Loading";

export default function LoadingBox({actual, max}) {
  return (
    <div className="flex flex-col gap-6 w-1/2 h-1/4">
        <Loading percent={(actual/max)*100} />
        <Loading percent={(actual+1/8*max)/max*100} />
        <Loading percent={(actual+1/4*max)/max*100}/>
    </div>
  )
}
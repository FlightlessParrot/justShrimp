import StepNumber from "./StepNumber";

export default function Step({ number, title, description }) {
    return (
        <div className="flex gap-6 bg-cyan-950 bg-opacity-30 rounded-xl p-6 max-w-lg hover:bg-opacity-20 hover:scale-95 ">
            <div className="self-top mt-6">
                <StepNumber>{number}</StepNumber>
            </div>
            <div className=" grid grid-rows-3">
                <b className="text-xl">{title}</b>
                <p className="text-md row-span-2">{description}</p>
            </div>
        </div>
    );
}

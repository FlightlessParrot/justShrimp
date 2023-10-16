export default function MyInput({name, label, type='text'}) {
  return (
  <div className="my-12 flex flex-col">
            <label htmlFor={name} className="text-sm my-2">{label}</label>
            <input id={name} type={type} name={name}  required maxLength={250}></input>
        </div>
  )
}
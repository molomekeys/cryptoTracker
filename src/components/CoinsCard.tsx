interface Props {
    title ? :string 
    imgUrl ? :string
    price ? :number
}
const CoinsCard = (props :Props) => {
  return (
    <div className="bg-indigo-700 flex flex-col h-32  rounded-lg gap-10 p-4">
      <div className="w-full flex justify-between">
        <h2 className="text-slate-300 font-semibold text-2xl">{props.title}</h2>
        <img src={props.imgUrl} className="h-8"/>
        </div>
    <p className="text-slate-200 font-medium text-lg">{props.price?.toFixed(5)}</p>

    </div>
  )
}
export default CoinsCard
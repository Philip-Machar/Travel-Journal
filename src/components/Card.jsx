import { FaLocationDot } from "react-icons/fa6";

const Card = (props) => {
  return (
    <>
        <div className="flex items-center gap-4 ml-8 mr-8">
            <img className="w-44 h-60 rounded-md object-cover" src={`/images/${props.data.image}`} alt="mount fuji" />
            <div>
                <div className="flex gap-2">
                    <FaLocationDot className="w-3 text-[#cd4e4f]" /><span className="text-gray-600 font-medium">{props.data.location}</span>
                    <a href={props.data.googleMapsUrl} className="text-gray-500 font-medium underline">View on Google Maps</a>
                </div>
                <div>
                    <h1 className="font-medium text-2xl mb-3">{props.data.title}</h1>
                    <h2 className="font-semibold mb-1">{props.data.startDate} - {props.data.endDate}</h2>
                    <p className="text-base">
                    {props.data.description}
                    </p>
                </div>
            </div>
        </div>
        {props.index !== props.cardsArray.length - 1 ? <hr className="border-b-[1px] border-gray-200 mt-6 mb-6 ml-8 mr-8"/> : <div className="mt-8"></div>}
    </>
  )
}

export default Card

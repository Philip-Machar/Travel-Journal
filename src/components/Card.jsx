import { FaLocationDot } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="flex items-center gap-4 ml-8 mr-8">
        <img className="w-44 h-60 rounded-md object-cover" src="/images/mount-fuji.jpeg" alt="mount fuji" />
        <div>
            <div className="flex gap-2">
                <FaLocationDot className="w-3 text-[#cd4e4f]" /><span className="text-gray-600 font-medium">JAPAN</span>
                <a href="#" className="text-gray-500 font-medium underline">View on Google Maps</a>
            </div>
            <div>
                <h1 className="font-medium text-2xl mb-3">Mount Fuji</h1>
                <h2 className="font-semibold mb-1">12 Jan, 2024 - 24 Jan, 2024</h2>
                <p className="text-base">
                    Mount Fuji, Japan's highest peak, is a beautiful, snow capped volcano and UNESCO World Heritage site. 
                    It holds deep cultural significance and attracts many visitors for its scenic beauty and spiritual importance.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card

import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"

const SongItem = ({name,image,desc,id}) => {

  const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={()=> playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transform hover:scale-105 transition duration-300 ease-in-out">
        <img className="rounded" src={image} alt="" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}

export default SongItem
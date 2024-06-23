import './reaction.css'
import { useState } from "react"

const ReactionCounter = () => {
    let [reactions, setReactions] = useState([100, 10, 0])
    return (
        <div>
            <span onClick={()=>{
                reactions[0]++
                setReactions([...reactions])
            }}>
                <img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Emotes-face-smile-icon.png" width="128" height="128"/>
                {reactions[0]}
            </span>
            <span onClick={()=>{
                reactions[1]++
                setReactions([...reactions])
            }}>
                <img src="https://icons.iconarchive.com/icons/fa-team/fontawesome/128/FontAwesome-Face-Sad-Cry-icon.png" width="128" height="128"/>
                {reactions[1]}
            </span>
            <span onClick={()=>{
                reactions[2]++
                setReactions([...reactions])
            }}>
                <img src="https://icons.iconarchive.com/icons/iconsmind/outline/128/Like-2-icon.png" width="128" height="128"/>
                {reactions[2]}
            </span>
        </div>
    )
}

export default ReactionCounter
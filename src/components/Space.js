import { useState } from "react"

export default function Space({clickHandler, chosenColor}){
    const [bgColor, setBgColor] = useState('aaa')

    const changeBackground = () => {
        setBgColor(chosenColor.hex)
    }
    return(
        <div 
            className="space-div"
            style={{backgroundColor: bgColor}}
            onClick={changeBackground}
        >
        </div>
    )
}
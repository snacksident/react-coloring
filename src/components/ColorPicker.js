import { CirclePicker } from 'react-color'

export default function ColorPicker({chosenColor,setChosenColor}) {
    const handleColorChange = (color) => {
        setChosenColor(color)
    }

    return(
        <>
            <h2>pick a color here</h2>
            <CirclePicker 
                color={chosenColor}
                onChange={handleColorChange}
                colors={["#FFFF00","#FFFF33","#FF0000","#FD1C03","#00FF00","#00FF33","#00FFFF","#099FFF","#FF00FF","#FF00CC","#9D00FF","#CC00FF"]}
            />
        </>
    )
}
import { CirclePicker } from 'react-color'

export default function ColorPicker({chosenColor,setChosenColor}) {
    // const [chosenColor,setChosenColor] = useState('#fff')

    const handleColorChange = (color) => {
        setChosenColor(color)
    }

    return(
        <>
            <h2>pick a color here</h2>
            <CirclePicker 
                color={chosenColor}
                onChange={handleColorChange}
            />
        </>
    )
}
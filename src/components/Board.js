import Space from "./Space"

export default function Board({ userName, chosenColor }) {

    return(
        <div className="board-div">
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
            <Space chosenColor={chosenColor}/>
        </div>
    )
}
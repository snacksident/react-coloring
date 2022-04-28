import Space from "./Space"

export default function Board({ userName, chosenColor, clickHandler }) {
    //state likely held here

    return(
        <>
            <h1>this is the board</h1>
            <h2>hello {userName}</h2>
            <Space 
                chosenColor={chosenColor}
                clickHandler={clickHandler}
            />
        </>
    )
}
import Space from "./Space"

export default function Board({ userName, chosenColor, clickHandler }) {

    return(
        <>
            <h2>hello {userName}</h2>
            <h1>this is the board</h1>
            <Space 
                chosenColor={chosenColor}
                clickHandler={clickHandler}
            />
            <Space 
                chosenColor={chosenColor}
                clickHandler={clickHandler}
            />
        </>
    )
}
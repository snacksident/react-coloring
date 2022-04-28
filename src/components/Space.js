export default function Space({clickHandler, chosenColor}){


    return(
        <div 
            className="space-div"
            // style={{backgroundColor: chosenColor}}
            onClick={clickHandler}
        >
            <p> </p>
        </div>
    )
}
import "./HumanBubble.css"
import AiBubble from "./aiBubble"

function HumanBubble(props)
{
    let message =props.user_input

    return(
        <>
            <ul className="liste">

                    {message.map((ele, index) => (
                        <li key={index}>
                            <div className='HumanMessage'>
                                <span className='profile'>OM</span>
                                <div className='humanresponce'>{ele}</div>
                            </div>

                            <AiBubble ai_response={props.ai_response} /> 
                        </li>
                    ))}
            </ul>
        </>

)}
export default HumanBubble
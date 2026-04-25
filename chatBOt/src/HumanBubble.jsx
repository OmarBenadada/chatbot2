import "./HumanBubble.css"
import AiBubble from "./aiBubble"

function HumanBubble(props)
{
    let messages = props.user_input
    let ai_responses = props.ai_response

    return(
        <>
            <ul className="liste">

                    {messages.map((message, index) => (
                        <li key={index}>
                            <div className='HumanMessage'>
                                <span className='profile'>OM</span>
                                <div className='humanresponce'>{message.input}</div>
                            </div>

                            <AiBubble ai_response={ { [message.id]: ai_responses[message.id] || "" } } /> 
                        </li>
                    ))}
            </ul>
        </>

)}
export default HumanBubble
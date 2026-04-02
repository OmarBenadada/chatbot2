import "./HumanBubble.css"

function HumanBubble(props)
{

    let message=props.user_input
    return(
        <>
            <ul className="liste">
                {message.map((ele,index)=>
                    <li key={index}>
                        <div className='HumanMessage' >
                                <span className='profile'>OM</span>
                                <div className='humanresponce'>{ele}</div>
                        </div>
                    </li>
                    )}
            </ul>
        </>

)}
export default HumanBubble
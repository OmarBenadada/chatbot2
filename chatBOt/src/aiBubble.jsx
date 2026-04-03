export default function AiBubble(props) 
{

        return (
                <div className='AIMessage'>
                    <span className='aiProfile'>✶</span>
                    <div className='aiResponse'>{props.ai_response}</div>
                </div>
                    
                )
}


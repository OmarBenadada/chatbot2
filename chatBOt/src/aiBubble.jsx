export default function AiBubble(props) 
{
    let ai_response = props.ai_response

        return (
                <>
                    <div className='AIMessage'>
                        <span className='aiProfile'>✶</span>
                        <div className='aiResponse'>
                            {Object.entries(ai_response).map(([id, response]) => (
                                <div key={id}>{response}</div>
                            ))}
                        </div>
                    </div>
                </>
                    
                )
}


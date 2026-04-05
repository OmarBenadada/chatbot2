export default function AiBubble(props) 
{
    let ai_response = props.ai_response

        return (
                <>
                <ul>
                    {ai_response.map((ele,index)=>
                        <li id={index}>
                            <div className='AIMessage'>
                                    <span className='aiProfile'>✶</span>
                                    <div className='aiResponse'>{ele}</div>
                            </div>
                        </li>
                    )}
                </ul>
                       
                        
                </>
                    
                )
}


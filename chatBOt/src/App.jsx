import './HumanBubble.jsx'
import './App.css'
import HumanBubble from './HumanBubble.jsx'
import { useState } from 'react'
import AiBubble from './aiBubble.jsx'

function App() {

    const [sendUserInput, SetsendUserInput] = useState(false)
    const [addingmessages, SetAddingmessages] = useState([]);
    const [user_input, setuser_input] = useState();
    const [ai_response, setai_response] = useState([]);

    const message = { input: user_input }


    const user_affair = async () => {

        SetAddingmessages(e => [...e, user_input])
        SetsendUserInput(true)
        await fetchResAi()

    }

    const fetchResAi = async () => {
        let res = await fetch("http://localhost:8000/something", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(message) })
        let decoder = res.body.pipeThrough(new TextDecoderStream());
        let fullres = decoder.getReader();

        while (true) 
        {
            const { value, done } = await fullres.read();

            if (done)
            {
               
                break
            }
            setai_response(e => [...e, value]);

        }
    }

    const getting_user_input = (event) => 
    {
        let input = event.target.innerText;
        setuser_input(input);
    }

    return (

        <div className='all'>

            <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>


            <div className='HistorySpace'>
                <span className='theAura'>Aura</span>
                <span className='thesentence'>Conversational Intelligence</span>

                <div className='thesonhistory'>

                    <div className='the_new_converation'>
                        <span className='theword'>New Converation</span>
                        <button className='theplusbutton'>+</button>
                    </div>

                    <div className='recent'>
                        <span className='recent'>Recent</span>
                    </div>

                    <div className='thehistory_it_self'>

                        <span className='history-1'>Something was said here</span>
                        <span className='history-2'>something</span>
                    </div>

                </div>
            </div>

            <div className='Half'>

                <div className='theHeader'>
                    <div className='profile'>
                        <span >OM</span>
                    </div>
                    <span>Omar Sama</span>
                    <div className='badge'>
                        <div className="model-dot"></div>
                        <span className='sonnet'>Omar Super saiyan </span>
                    </div>

                </div>

                <div className='theConvo'>

                   { sendUserInput && <HumanBubble user_input={addingmessages} ai_response={ai_response} />}


                </div>

                <div className='the_input_area'>

                    <div className='theborder'>
                        <div className='growing-input ' contentEditable="true" onInput={getting_user_input}></div>
                        <button className='sendbutton' onClick={user_affair}  >➤</button>
                    </div>
                    <span className='info'>Enter to send · Shift+Enter for new line</span>

                </div>

            </div>

        </div>

    )
}

export default App

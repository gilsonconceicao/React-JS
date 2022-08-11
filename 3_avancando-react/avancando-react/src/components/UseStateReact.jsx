import React, {useState} from "react"; 

const UseStateReact = () => {
    const somedata = 10; 
    const [number, setNumber] = useState(somedata); 
    const [textButton, setTextButton] = useState('Alterar o valor')
    return (
        <div>
            <h1>Use State (Hooks React JS)</h1>
            <div>
                <h2>{number}</h2>
                <button onClick={() => {
                    setNumber(15)
                    setTextButton('Valor alterado')
                    } 
                }>{textButton}</button>
            </div>            
        </div>
    )
}

export default UseStateReact;
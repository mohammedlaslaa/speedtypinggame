import React, {useState, useEffect, useRef} from "react"

/**
 * Challenge:
 * 
 * Make the input box focus (DOM elements have a method called .focus()) 
 * immediately when the game starts
 */

function App() {
    const TIME = 3
    const [text, setText] = useState('')
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(TIME)
    const [start, setStart] = useState(false)
    const textArea = useRef(null)
    
    const startGame = () => {
        setStart(true)
        setText('')
        setTime(TIME)
        textArea.current.disabled = false
        textArea.current.focus()
    }
      
    const endGame = () => {
        setStart(false)
        setCount(countWord)
    }
    
    const handleSubmit = e => {
        const {value} = e.target
        setText(value)
    }
    
    const countWord = () => {
        const result = text.trim().split(' ')
        return result.filter(e => e !== "").length
        }

    useEffect(()=>{
        if(time > 0 && start){
            setTimeout(()=> setTime(prev => prev-1) , 1000)   
        }else if (start == true){
            endGame()
        }
    }, [time, start])
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
              value = {text}
              onChange={handleSubmit}
              disabled={!start}
              ref={textArea}
            />
            <h4>Time remaining: {time}</h4>
            <button 
               onClick={startGame}
               disabled={start}
            >
                Start
            </button>
            <h1>Word count: {count}</h1>
        </div>
    )
}

export default App

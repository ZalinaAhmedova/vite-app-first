import { useState, useRef } from "react";

export default function InputValueForm() {
    const input = useRef()
    const [show, setShow] = useState(false)
  
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        setShow(true)
      }
    }
  
    return (
      <div>
        <h3>Input Value: {show && input.current.value}</h3>
        <input
          type="text" 
          className="control"
          ref={input}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }
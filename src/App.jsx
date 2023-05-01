import { useEffect } from 'react'
import './App.css'

export default function App() {
  useEffect(() => {
    const buttons = Array.from(document.getElementsByClassName("button"))

    buttons.map(button => {
      button.addEventListener("click", (e) => {
        calculator(e)
      })
    })

  }, [])

  const calculator = (e) => {
    const display = document.getElementById("display")
    const targetText = e.target.innerText
    
    switch(targetText) {
      case "C":
        display.value = ""
        break
      case "Del":
        if(display.value) {
          display.value = display.value.slice(0, -1)
        }
        break
      case "=":
        try {
          if(!display.value) {
            display.value = "Faça uma operação!"
          }
          else {
            display.value = eval(display.value)
          }
        }
        catch {
          display.value = "Operação inválida!"
        }
        break  
      default:
        display.value += targetText
    }
  }

  return (
    <>
      <section>
        <input type="text" placeholder='0' id='display' />

        <main>
          <span className='button clear'>C</span>
          <span className='button'>/</span>
          <span className='button'>*</span>
          <span className='button del'>Del</span>
          <span className='button'>7</span>
          <span className='button'>8</span>
          <span className='button'>9</span>
          <span className='button'>-</span>
          <span className='button'>4</span>
          <span className='button'>5</span>
          <span className='button'>6</span>
          <span className='button'>+</span>
          <span className='button'>1</span>
          <span className='button'>2</span>
          <span className='button'>3</span>
          <span className='button'>.</span>
          <span className='button'>(</span>
          <span className='button'>0</span>
          <span className='button'>)</span>
          <span className='button equal'>=</span>
        </main>
      </section>
    </>
  )
}
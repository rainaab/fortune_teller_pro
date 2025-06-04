import { useState } from 'react'
import ColorSelect from './components/ColorSelect.jsx';
import NumberSelect from "./components/NumberSelect.jsx";
import FortuneReveal from'./components/FortuneReveal.jsx';


function App() {
  const [count, setCount] = useState(1)
  const [color, setColor] = useState(null)
  const [round1, setRound1] = useState(null)
  const [round2, setRound2] = useState(null)
  const [fortune,setFortune] = useState('')

  const handleRestart = () => {
      setCount(1)
      setColor(null)
      setFortune('')
      setRound1(null)
      setRound2(null)

  }

  return (
      <div>
          {count === 1 && <ColorSelect onSelect={(chosen) => {
          setColor(chosen)
          setCount(2)}
          } />
          }

          {count === 2 && <NumberSelect color={color} round={1} onSelect={(num) => {
          setRound1(num)
          setCount(3)}
          } />
          }

          {count === 3 && <NumberSelect color={round1} round={2} onSelect={(num) => {
          setRound2(num)
          setCount(4)}
          } />
          }

        {count === 4 && <FortuneReveal number={round2} fortune={fortune} setFortune={setFortune} onRestart={handleRestart}
            />
        }
      </div>
  )

}
export default App
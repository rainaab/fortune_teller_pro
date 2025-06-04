import { useState } from 'react';
import ColorSelect from './components/ColorSelect.jsx';
import NumberSelect from './components/NumberSelect.jsx';
import FortuneReveal from'./components/FortuneReveal.jsx';


function App() {
  const [count, setCount] = useState(0)
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
}

export default App

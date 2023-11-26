import React from 'react'
import { useState } from 'react'

const Transporte = () => {
  const [count,setCount] = useState(0)

  const acelera = () => {
    setCount(count + 1)
  }

  const desacelera = () =>{
    setCount(count - 1)
  }

  return (
    <div>
      <br />
      <br />
      Velocidade: {count}
      <br />
      <button onClick={acelera}>Acelerar</button>
      <button onClick={desacelera}>Desacelera</button>
    </div>
  )
}

export default Transporte
import { useState } from 'react'
import './App.css'
import Carro from './components/Carro'

function App() {


  return (
    <>
      <Carro potencia={'20w'} ano={'2020'} marca={'Adidadas'} cor={'Vermelho'}/>
    </>
  )
}

export default App

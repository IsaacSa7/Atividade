import React, { useState } from 'react'
import Transporte from './Transporte'

const Carro = ({potencia, ano, marca, cor}) => {

  return (
    <div>
      <h2>Carro</h2>

      <b>Potencia: </b> {potencia} <br />
      <b>Ano: </b> {ano} <br />
      <b>Marca: </b> {marca} <br />
      <b>Cor: </b> {cor}

      <Transporte/>
    </div>
  )
}

export default Carro
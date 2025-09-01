import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div>
      <h3>Primeiro número = 2</h3>
      <h3>Segundo número = 2</h3>
      <Adicao num1={2} num2={2} />
      <Subtracao num1={2} num2={2} />
      <Multiplicacao num1={2} num2={2} />
      <Divisao num1={2} num2={2} />
    </div>
  )
}

export default App
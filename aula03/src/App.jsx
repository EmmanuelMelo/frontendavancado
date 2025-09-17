import React from 'react'
import Produto from './assets/components/Produto'

const App = () => {
  return (
    <div>
      {
        [
          {nome: 'Memória DDR4', preco: 250.00, categoria: 'outros', quantidade: 5},
          {nome: 'Monito', preco: 859.25, categoria: 'perifericos', quantidade: 0},
          {nome: 'Mouse', preco: 5.20, categoria: 'perifericos', quantidade: 10}
        ].map((produto) => 
          <Produto nome={produto.nome} preco={produto.preco} categoria={produto.categoria} quantidade={produto.quantidade}/>
        )
      }
    </div>
  )
}

export default App
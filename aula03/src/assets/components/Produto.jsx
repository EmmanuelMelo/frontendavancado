import React from 'react'

const Produto = ({ nome, preco, categoria, quantidade}) => {

  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Preço: {preco}</p>
        <p>Categoria: {categoria}</p>
        <p>Quantidade: {quantidade}</p>
        <p>Status: {quantidade > 0 ? 'DISPONIVEL' : 'ESGOTADO'}</p>
    </div>
  )
}

export default Produto
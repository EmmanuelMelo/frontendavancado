import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [numSorteado, setNumSorteado] = useState(null)
    const [sorteados, setSorteados] = useState([])

    function sortearNumero() {
        if (sorteados.length >= 6) {
            alert("Já temos 6 números sorteados!")
            return;
        }

        let novoNumero;
        do {
            novoNumero = Math.floor(Math.random() * 60) + 1;
        } while (sorteados.includes(novoNumero));
        setNumSorteado(novoNumero);
        setSorteados([...sorteados, novoNumero]);
    }

  return (
    <div>
        <h1>Sorteador da Mega em React! :)</h1>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h1>Ultimo Número Sorteado: {numSorteado}</h1>
        <h1>Sorteados: {sorteados[0]} - {sorteados[1]} - {sorteados[2]} - {sorteados[3]} - {sorteados[4]} - {sorteados[5]}</h1>
    </div>
  )
}

export default HookMegaSena
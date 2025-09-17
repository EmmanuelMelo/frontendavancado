import React from 'react'
import Aluno from './assets/components/Aluno'

const App = () => {
  return (
    <div>
      {
        [
          {nome: 'Ronnie James Dio', email: 'dio@gmail.com', curso: 'Musica', media: 5.5},
          {nome: 'Sol M. S.', email: 'solms@gmail.com', curso: 'Quimica', media: 9.5},
          {nome: 'Liz M S', email: 'lizms@gmail.com', curso: 'Física', media: 10}
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>
        )
      }
    </div>
  )
}

export default App
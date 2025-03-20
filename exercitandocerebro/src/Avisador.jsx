import React, { useState } from 'react'

function Avisador() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false)

  return (
    <div>
     <button onClick={() => setMostrarMensagem(true)}>Clique aqui</button>
      {mostrarMensagem && <h2>Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.</h2>}
    </div>
  )
}

export default Avisador
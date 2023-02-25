import React from 'react'

function Tarea({texto, fecha, Terminada}) {
  return (
    <div className={`task ${(Terminada)? 'finished':''}`}>
        <h3>{texto}<span>X</span></h3>
        <p>{fecha}</p>
    </div>
  )
}

export default Tarea
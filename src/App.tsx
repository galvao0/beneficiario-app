import { useState } from 'react'
import './App.css'

function App() {
  const [v, setV] = useState("")
  const [status, setStatus] = useState("")

  const verif = async () => {
    const resp = await fetch("http://10.0.0.64:3000/beneficiario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cpf: v })
    })
    const data = await resp.json()
    setStatus(data.status)
  }


  return (
    <div className='body'>
      <p className="t">Consultar status do<br />Beneficiario</p>
      <div>
        <input placeholder='CPF' onChange={(e) => setV(e.target.value)} />
        <button onClick={verif}>Verificar</button>
      </div>
      {(status !== "") && (
        <div className='div-status'>
          <p>Status: <span className={`${status.toLocaleLowerCase()}`}>{status}</span></p>
        </div>
      )}
    </div>
  )
}

export default App

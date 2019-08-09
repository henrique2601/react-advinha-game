import React, { useState } from 'react'

const Adivinha = () => {
  // ENTRADA, JOGANDO, FIM
  const [estado, setEstado] = useState('ENTRADA')

  // chute 0 - 500
  const [numPalpites, setNumPalpites] = useState(1)
  const [minimo, setMinimo] = useState(0)
  const [maximo, setMaximo] = useState(501)

  // palpites da maquina
  const [palpite, setPalpite] = useState(250)


  const iniciarJogo = () => {
    setEstado('JOGANDO')
    setMaximo(501)
    setMinimo(0)
    setNumPalpites(1)
    setPalpite(250)
  }

  const acertou = () => {
    setEstado('FIM')
  }

  const menor = () => {
    setNumPalpites(numPalpites+1)
    setMaximo(palpite)
    const proxPalpite = parseInt((palpite - minimo)/2) + minimo
    setPalpite(proxPalpite)
  }

  const maior = () => {
    setNumPalpites(numPalpites+1)
    setMinimo(palpite)
    const proxPalpite = parseInt((maximo - palpite)/2) + palpite
    setPalpite(proxPalpite)
  }


  if (estado === 'ENTRADA') {
    return (
      <button onClick={iniciarJogo}>Começar o jogo</button>
    )
  }

  if (estado === 'FIM') {
    return (
      <>
      <p>Acertei o número {palpite} com {numPalpites} chutes!</p>
      <button onClick={iniciarJogo}>Jogar novamente</button>
      </>
    )
  }

  return (
    <>
      <p>O seu número é {palpite}</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </>
  )
}

export default Adivinha

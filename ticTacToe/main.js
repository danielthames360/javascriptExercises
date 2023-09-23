import './style.css'
import iconXWhite from './src/assets/icon-x-white.svg'
import iconOWhite from './src/assets/icon-o-white.svg'
import iconO from './src/assets/icon-o.svg'
import iconX from './src/assets/icon-x.svg'

const imgTurn = document.querySelector('#imgTurn')
const scorePlayer1 = document.querySelector('#scorePlayer1')
const scoreTies = document.querySelector('#scoreTies')
const scorePlayer2 = document.querySelector('#scorePlayer2')
const optionList = document.querySelectorAll('.option')

// Turn X -> player1 = 1
// Turn O -> player2 = 2
let turn = 1

let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
/*
[0,0,0]
[0,0,0]
[0,0,0]
*/

optionList.forEach((option) => {
  option.addEventListener('click', insertarImagen)
})

function insertarImagen(e) {
  e.preventDefault()
  if (!e.target.src.includes('empty')) return
  e.target.src = turn === 1 ? iconX : iconO
  turn = turn === 1 ? 2 : 1
}

import knightMoves from "./knight.js"
let knight = { row: 5, col: 4 }
let isMoving = false

for (let row = 1; row <= 8; row++) {
	for (let col = 1; col <= 8; col++) {
		const squareElement = document.createElement('div')
		squareElement.className = `square ${getColourClass(row, col)}`
		squareElement.id = getSquareText(row, col)
		squareElement.textContent = getSquareText(row, col)
		if (row === knight.row && col === knight.col) {
			const image = new Image()
			image.src = 'assets/knight.svg'
			squareElement.append(image)
		}
		document.addEventListener('click', moveKnight)
		document.querySelector('.board').append(squareElement)
	}
}

async function renderKnight(path) {
	const timer = ms => new Promise(resolve => setTimeout(resolve, ms))

	for (const square of path) {
		console.log(square)
		document.querySelector('.square img').remove()
		const image = new Image()
		image.src = 'assets/knight.svg'
		document.getElementById(`${square[0]}-${square[1]}`).append(image)
		await timer(1000)
	}
	const [finishRow, finishCol] = path[path.length - 1]
	knight = { row: finishRow, col: finishCol }
	isMoving = false
	console.log() // line break
}

function isEven (n) { return n % 2 === 0 }
function isOdd (n) { return  n % 2 !== 0 }

function getColourClass (row, col) {
	if (isOdd(row) && isOdd(col) || isEven(row) && isEven(col)) return 'white'
	return 'black'
}

function getSquareText (row, col) {
	return `${row}-${col}`
}

function moveKnight (e) {
	if (isMoving) return
	isMoving = true
	const [targetRow, targetCol] = e.target.id.split('-')
	const path = knightMoves(
		[knight.row, knight.col], [parseInt(targetRow), parseInt(targetCol)]
	)
	renderKnight(path)
}

import Node from './node.js'
export default function knightMoves (pos, target) {
	const visited = new Set()
	const [ row, col ] = pos
	const queue = [ new Node(row, col) ]

	while (queue.length) {
		const node = queue.shift()
		const { row, col, path } = node
		if (row === target[0] && col === target[1]) return path
		visited.add(node.getNodeString())

		// Add unvisited neighbours to the queue
		for (const child of node.getNeighbours()) {
			if (visited.has(child.getNodeString())) continue
			queue.push(child)
		}
	}
}

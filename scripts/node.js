export default function Node (row, col, path) {
	if (row < 1 || row > 8 || col < 1 || col > 8) return null

	return {
		row,
		col,
		path: path ? [...path, [row, col]] : [[row, col]],
		getNeighbours,
		getNodeString
	}

	function getNeighbours () {
		const children = [
			Node(row - 2, this.col + 1, this.path),
			Node(row - 2, this.col - 1, this.path),
			Node(row + 2, this.col + 1, this.path),
			Node(row + 2, this.col - 1, this.path),
			Node(row - 1, this.col + 2, this.path),
			Node(row - 1, this.col - 2, this.path),
			Node(row + 1, this.col + 2, this.path),
			Node(row + 1, this.col - 2, this.path)
		]
		return children.filter(child => child !== null)
	}

	function getNodeString () {
		return `${this.row}-${this.col}`
	}
}

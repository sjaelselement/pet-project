import { useState, useEffect } from 'react'
import styles from './GameXO.module.scss'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

type SquareValue = 'X' | 'O' | null

const Cell: React.FC<{ value: SquareValue; onSquareClick: () => void }> = ({
	value,
	onSquareClick,
}) => {
	return (
		<div className={styles.block}>
			<button
				className={value === 'X' ? styles.cellX : styles.cellO}
				onClick={onSquareClick}
				disabled={value !== null}
			>
				{value}
			</button>
		</div>
	)
}

const Board: React.FC = () => {
	const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null))
	const [valueXNext, setValueXNext] = useState<boolean>(Math.random() < 0.5)
	const [winner, setWinner] = useState<SquareValue | null>(null)
	const navigate = useNavigate()

	useEffect(() => {
		checkWinner(squares)
	}, [squares])

	const handleUpdate = () => {
		setSquares(Array(9).fill(null))
		setValueXNext(Math.random() < 0.5)
	}

	const checkWinner = (squares: SquareValue[]) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]
		for (const [a, b, c] of lines) {
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				setWinner(squares[a])
				return
			}
		}
		if (squares.every(square => square !== null)) {
			setTimeout(handleUpdate, 3000)
		}
	}

	const handleClick = (i: number) => {
		if (winner || squares[i]) {
			return
		}
		const nextSquares = [...squares]
		nextSquares[i] = valueXNext ? 'X' : 'O'
		setSquares(nextSquares)
		setValueXNext(!valueXNext)
	}

	let status
	let chronology
	const x = 'X'
	const o = 'O'
	if (winner) {
		status = 'Победитель: ' + winner
	} else {
		chronology = 'Ход игрока: ' + (valueXNext ? x : o)
	}

	return (
		<div className={styles.board}>
			<button
				className={styles.exit}
				onClick={() => {
					navigate('/random')
				}}
			>
				<LogOut />
			</button>
			<h2>Игра</h2>
			<p className={status ? styles.text : ''}>
				{status ? status : chronology}
			</p>
			<div className={styles.row}>
				<Cell value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Cell value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Cell value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className={styles.row}>
				<Cell value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Cell value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Cell value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className={styles.row}>
				<Cell value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Cell value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Cell value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
			<button className={winner ? styles.active : ''} onClick={handleUpdate}>
				Обновить
			</button>
		</div>
	)
}

const GameXO: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<Board />
		</div>
	)
}

export default GameXO

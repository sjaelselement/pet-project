import { useState } from 'react'
import compliment from './compliment.json'
import styles from './Compliment.module.scss'
import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'

const Compliment: React.FC = (): JSX.Element => {
	const [currentCompliment, setCurrentCompliment] = useState(1)

	const navigate = useNavigate()

	const handleNextCompliment = () => {
		setCurrentCompliment(currentCompliment + 1)
	}

	const handlePrevCompliment = () => {
		setCurrentCompliment(currentCompliment - 1)
	}

	const onReset = () => {
		setCurrentCompliment(1)
	}

	console.log(currentCompliment)
	return (
		<>
			{currentCompliment < compliment.length && (
				<div className={styles.wrapper} key={compliment[currentCompliment]}>
					<button
						className={styles.exit}
						onClick={() => {
							navigate('/random')
						}}
					>
						<LogOut />
					</button>
					<span className={styles.check}>{currentCompliment}</span>
					<p key={compliment[currentCompliment].id}>
						{compliment[currentCompliment].compliment}
					</p>
					<div className={styles.buttons}>
						<button
							disabled={currentCompliment >= 2 ? false : true}
							onClick={handlePrevCompliment}
						>
							назад
						</button>
						<button onClick={handleNextCompliment}>Дальше</button>
					</div>
				</div>
			)}

			{currentCompliment === compliment.length && (
				<div className={styles.wrapper}>
					<p>
						Комплименты закончились - мы можем повторить? Но ты также можешь
						выбрать и другие разделы перейдя в главное меню
					</p>
					<div className={styles.buttons}>
						<button onClick={onReset}>Повторить</button>
						<button
							onClick={() => {
								navigate('/')
							}}
						>
							Перейти в меню
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Compliment

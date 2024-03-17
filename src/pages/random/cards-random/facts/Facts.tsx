import { useState } from 'react'
import styles from './Facts.module.scss'
import facts from './facts.json'
import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
const Facts: React.FC = (): JSX.Element => {
	const [currentFacts, setCurrentFacts] = useState(1)

	const navigate = useNavigate()

	const handleNextFacts = () => {
		setCurrentFacts(currentFacts + 1)
	}

	const handlePrevFacts = () => {
		setCurrentFacts(currentFacts === 1 ? currentFacts : currentFacts - 1)
	}

	const onReset = () => {
		setCurrentFacts(1)
	}

	return (
		<>
			{currentFacts < facts.length && (
				<div className={styles.wrapper} key={facts[currentFacts]}>
					<button
						className={styles.exit}
						onClick={() => {
							navigate('/random')
						}}
					>
						<LogOut />
					</button>
					<span className={styles.check}>{currentFacts}</span>
					<p key={facts[currentFacts].id}>{facts[currentFacts].facts}</p>
					<div className={styles.buttons}>
						<button
							disabled={currentFacts >= 2 ? false : true}
							onClick={handlePrevFacts}
						>
							назад
						</button>
						<button onClick={handleNextFacts}>Дальше</button>
					</div>
				</div>
			)}

			{currentFacts === facts.length && (
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

export default Facts

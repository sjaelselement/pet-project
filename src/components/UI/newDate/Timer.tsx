import { useEffect, useState } from 'react'
import styles from './Timer.module.scss'
import { Hourglass, MousePointer } from 'lucide-react'

const Timer = () => {
	const [seconds, setSeconds] = useState(0)
	const [isActive, setIsActive] = useState(false)

	function toggle() {
		setIsActive(!isActive)
	}

	function reset() {
		setSeconds(0)
		setIsActive(false)
	}

	useEffect(() => {
		let interval = null
		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1)
			}, 1000)
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [isActive, seconds])

	return (
		<>
			<div className={styles.wrapper}>
				<span className={styles.time}>{seconds} секунд</span>
				<div className={styles.buttons}>
					<button onClick={toggle}>
						<span>{isActive ? 'Пауза' : 'Старт'}</span>
					</button>
					{isActive ? (
						<div className={styles.animation}>
							<Hourglass />
						</div>
					) : (
						<div className={styles.stop}>
							<MousePointer />
						</div>
					)}
					<button onClick={reset}>
						<span>Сброс</span>
					</button>
				</div>
			</div>
		</>
	)
}

export default Timer

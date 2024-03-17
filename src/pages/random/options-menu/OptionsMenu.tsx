import { useNavigate } from 'react-router-dom'
import styles from './OptionsMenu.module.scss'

const OptionsMenu: React.FC = (): JSX.Element => {
	const navigate = useNavigate()

	return (
		<div className={styles.wrapper}>
			<h2>Меню</h2>
			<button onClick={() => navigate('/random/generate-compliment')}>
				хочу комплиментов
			</button>
			<button onClick={() => navigate('/random/facts')}>хочу факты</button>
			<button onClick={() => navigate('/random/xo')}>хочу поиграть</button>
		</div>
	)
}

export default OptionsMenu

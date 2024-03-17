import { useNavigate } from 'react-router-dom'
import styles from './Card.module.scss'
export interface ICardPreview {
	id: number
	url: string
	title: string
	img: string
}

const CardPreview: React.FC<ICardPreview> = ({ id, url, img, title }) => {
	const navigate = useNavigate()
	return (
		<span onClick={() => navigate(url)} className={styles.card} key={id}>
			<p>{title}</p>
			<img src={img} alt={title} />
		</span>
	)
}

export default CardPreview

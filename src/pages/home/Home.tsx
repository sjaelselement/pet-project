import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import styles from './Home.module.scss'
import CardPreview, { ICardPreview } from './card-preview/Card'
import { cardPreview } from './card-preview/card-preview'

const Home: React.FC = (): JSX.Element => {
	return (
		<>
			<Header />
			<section className={styles.home}>
				<div className={styles.cards}>
					{cardPreview.map((card: ICardPreview) => {
						return <CardPreview key={card.id} {...card} />
					})}
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Home

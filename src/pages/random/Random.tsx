import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import OptionsMenu from './options-menu/OptionsMenu'
import styles from './Random.module.scss'
import Facts from './cards-random/facts/Facts'
import Compliment from './cards-random/compliment/Compliment'

const Random: React.FC = (): JSX.Element => {
	const location = useLocation()
	return (
		<>
			<Header />
			<section className={styles.section}>
				<p>
					Дорогие молодые творческие души! Ваше искусство - это нечто уникальное
					и ценное, что может изменить этот мир. Не бойтесь выражать свои идеи,
					чувства и вдохновение через свое искусство. Ваш голос важен, ваш
					взгляд уникален. Даже в моменты сомнений помните, что ваш творческий
					вклад имеет значение. Открывайте новые горизонты, идите вперед с
					уверенностью и вдохновением. Пусть ваше искусство разбудит, вдохновит
					и изменит мир!
				</p>
				{location.pathname === '/random' ? <OptionsMenu /> : null}
				{location.pathname === '/random/facts' ? <Facts /> : null}
				{location.pathname === '/random/generate-compliment' ? (
					<Compliment />
				) : null}
				<p>
					Истинная кулинария не для робких, наберитесь отваги! Пробуйте,
					экспериментируйте... Не позволяйте никому загонять вас в рамки.
					Единственные ваши рамки - ваша душа. То, что я говорю - правда:
					готовить сможет каждый... но лишь бесстрашные достигают величия.
					<span> - И дело вовсе не в еде!</span>
				</p>
			</section>
			<Footer />
		</>
	)
}

export default Random

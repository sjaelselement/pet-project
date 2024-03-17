import Logo from '../UI/logo/Logo'
import styles from './Footer.module.scss'

const Footer: React.FC = (): JSX.Element => {
	return (
		<footer className={styles.footer}>
			<Logo />
			<p>
				Спасибо за то, что посетили наш сайт. Мы ценим вашу поддержку. Пусть
				ваши мечты взлетят, а ваше воображение парит. Исследуйте дальше и
				откройте для себя мир возможностей.
			</p>
		</footer>
	)
}

export default Footer

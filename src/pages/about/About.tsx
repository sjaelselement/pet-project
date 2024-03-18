import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ContentAbout from './content-about/ContentAbout'
import styles from './About.module.scss'

const About: React.FC = (): JSX.Element => {
	return (
		<div>
			<Header />
			<section className={styles.about}>
				<ContentAbout />
			</section>
			<Footer />
		</div>
	)
}

export default About

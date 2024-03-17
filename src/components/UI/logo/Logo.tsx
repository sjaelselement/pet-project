import styles from './Logo.module.scss'

const Logo: React.FC = (): JSX.Element => {
	return (
		<a className={styles.logo}>
			<div className={styles.wrapper}>
				<img src='/logo.svg' alt='logo' />
				<span>structure</span>
			</div>
		</a>
	)
}

export default Logo

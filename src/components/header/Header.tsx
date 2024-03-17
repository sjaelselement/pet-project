import { ArrowRightFromLine } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import Logo from '../UI/logo/Logo'
const Header: React.FC = (): JSX.Element => {
	const navigate = useNavigate()
	const location = useLocation()

	// const handleExit = () => {}

	return (
		<header className={styles.header}>
			<Logo />
			<nav className={styles.nav}>
				<button
					disabled={location.pathname === '/' ? true : false}
					onClick={() => navigate('/')}
				>
					Home
				</button>
				<button
					disabled={location.pathname === '/about' ? true : false}
					onClick={() => navigate('/about')}
				>
					About Me
				</button>
				<button
					disabled={location.pathname === '/portfolio' ? true : false}
					onClick={() => navigate('/portfolio')}
				>
					Portfolio
				</button>
				<button
					disabled={location.pathname === '/random' ? true : false}
					onClick={() => navigate('/random')}
				>
					Random
				</button>
			</nav>
			<button className={styles.logout}>
				<ArrowRightFromLine />
			</button>
		</header>
	)
}

export default Header

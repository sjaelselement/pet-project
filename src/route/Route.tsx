import { Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Portfolio from '../pages/portfolio/Portfolio'
import Random from '../pages/random/Random'
import Home from '../pages/home/Home'
import { ROUTES } from '../utils/constants/routes'

const AppRoute = () => {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path={ROUTES.ABOUT} element={<About />} />
				<Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
				<Route path={ROUTES.RANDOM} element={<Random />} />
				<Route path={ROUTES.CardCompliment} element={<Random />} />
				<Route path={ROUTES.CardFacts} element={<Random />} />
				<Route path={ROUTES.GameXO} element={<Random />} />
			</Routes>
		</>
	)
}

export default AppRoute

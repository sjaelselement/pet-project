import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import PrivateRoute from './utils/router/privateRoute'
import Auth from './pages/auth/Auth'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'
import Random from './pages/random/Random'
// import Facts from './components/cards-random/poems/Facts'
// import Compliment from './components/cards-random/compliment/Compliment'

function App() {
	return (
		<>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path='/about' element={<About />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/' element={<Home />} />
					<Route path='/random' element={<Random />} />
					<Route path='/random/generate-compliment' element={<Random />} />
					<Route path='/random/facts' element={<Random />} />
				</Route>
				<Route path='/login' element={<Auth />} />
				<Route path='/register' element={<Auth />} />
			</Routes>
		</>
	)
}

export default App

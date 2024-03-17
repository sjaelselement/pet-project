import { useLocation, useNavigate } from 'react-router-dom'
import LoginPage from './login/Login'
import RegisterPage from './register/Register'
import { Box } from '@mui/material'
import styles from './Auth.module.scss'
import { useState } from 'react'
// import { useAppDispatch } from '../../hook/hooks'
import { login } from '../../store/slice/auth/authSlice'
import axios from 'axios'
import { useAppDispatch } from '../../hook/hooks'
import { AppErrors } from '../../common/errors/errors'

const Auth: React.FC = (): JSX.Element => {
	const location = useLocation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [name, setName] = useState('')
	const [nickName, setNickName] = useState('')
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (location.pathname === '/login') {
			try {
				const userData = {
					email,
					password,
				}
				const user = await axios.post('http://localhost:3000/login', userData)
				// localStorage.setItem('token', user.data.accessToken)
				await dispatch(login(user.data))
				navigate('/')
			} catch (e) {
				return e
			}
		} else if (location.pathname === '/register') {
			if (password === repeatPassword) {
				try {
					const userData = {
						email,
						repeatPassword,
						name,
						nickName,
						password,
					}
					const newUser = await axios.post(
						'http://localhost:3000/register',
						userData
					)
					await dispatch(login(newUser.data))
					navigate('/')
				} catch (e) {
					return e
				}
			} else {
				throw new Error(AppErrors.PasswordNotMatch)
			}
		} else {
			return null
		}
	}

	return (
		<div className={styles.auth}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<Box className={styles.box}>
					{location.pathname === '/login' ? (
						<LoginPage
							setEmail={setEmail}
							setPassword={setPassword}
							navigate={navigate}
						/>
					) : location.pathname === '/register' ? (
						<RegisterPage
							setEmail={setEmail}
							setPassword={setPassword}
							navigate={navigate}
							setNickName={setNickName}
							setName={setName}
							setRepeatPassword={setRepeatPassword}
						/>
					) : null}
				</Box>
			</form>
		</div>
	)
}

export default Auth

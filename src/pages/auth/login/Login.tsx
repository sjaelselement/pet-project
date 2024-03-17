import { Button, TextField, Typography } from '@mui/material'
import styles from './Login.module.scss'
import { IPropsLogin } from '../../../common/types/auth/auth.interface'

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	const { setEmail, setPassword, navigate } = props

	console.log(setEmail)
	return (
		<div className={styles.form}>
			<Typography variant='h3' component='h2'>
				Авторизация
			</Typography>
			<TextField
				onChange={e => {
					setEmail(e.target.value)
				}}
				required={true}
				placeholder='введите ваш Email'
				variant='outlined'
			/>
			<TextField
				onChange={e => {
					setPassword(e.target.value)
				}}
				type='password'
				required={true}
				placeholder='введите ваш пароль'
				variant='outlined'
			/>
			<Button type='submit' variant='outlined'>
				Войти
			</Button>
			<Typography variant='h5' component='h3'>
				Нет аккаунта?
				<span onClick={() => navigate('/register')}>Регистрация</span>
			</Typography>
		</div>
	)
}

export default LoginPage

import { Button, TextField, Typography } from '@mui/material'
import styles from './Register.module.scss'
import { IPropsRegister } from '../../../common/types/auth/auth.interface'
const RegisterPage: React.FC<IPropsRegister> = (
	props: IPropsRegister
): JSX.Element => {
	const {
		setEmail,
		setName,
		setPassword,
		setNickName,
		setRepeatPassword,
		navigate,
	} = props
	return (
		<div className={styles.form}>
			<Typography variant='h3' component='h2'>
				Регистрация
			</Typography>
			<TextField
				onChange={e => {
					setName(e.target.value)
				}}
				required={true}
				placeholder='введите ваше имя'
				variant='outlined'
			/>
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
					setNickName(e.target.value)
				}}
				required={true}
				placeholder='введите ваш NickName'
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
			<TextField
				onChange={e => {
					setRepeatPassword(e.target.value)
				}}
				type='password'
				required={true}
				placeholder='повторите ваш пароль'
				variant='outlined'
			/>
			<Button type='submit' variant='outlined'>
				Зарегистрироваться
			</Button>
			<Typography variant='h5' component='h3'>
				Есть аккаунт?{''}
				<span onClick={() => navigate('/login')}>Авторизация</span>
			</Typography>
		</div>
	)
}

export default RegisterPage

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAuth = () => {
	// const isLogged = useAppSelector(state => state.auth.isLogged)
	const isLogged = true

	return isLogged
}

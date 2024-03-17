import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from '../../../common/types/auth/auth.interface'

const initialState: IInitialState = {
	user: {
		id: null,
		name: '',
		nickName: '',
		email: '',
		createdAt: '',
		updateAt: '',
		watchList: [
			{
				id: null,
				name: '',
				assetId: '',
				createdAt: '',
				updatedAt: '',
				user: null,
			},
		],
	},
	isLogged: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			state.user = action.payload
			state.isLogged = true
		},
		register(state, action) {
			state.user = action.payload
			state.isLogged = true
		},
		logout(state, action) {
			state.user = action.payload
			state.isLogged = false
		},
	},
})

export const { login, logout, register } = authSlice.actions
export default authSlice.reducer

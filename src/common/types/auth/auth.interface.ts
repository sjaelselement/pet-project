export interface IPropsLogin {
	setPassword: (value: string) => void
	setEmail: (value: string) => void
	navigate: (value: string) => void
}
export interface IPropsRegister {
	navigate: (value: string) => void
	setPassword: (value: string) => void
	setEmail: (value: string) => void
	setName: (value: string) => void
	setRepeatPassword: (value: string) => void
	setNickName: (value: string) => void
}

export interface IInitialState {
	user: IPublicUser
	isLogged: boolean
}

interface IPublicUser {
	id: number | null
	createdAt: string
	updateAt: string
	email: string
	nickName: string
	name: string
	watchList: [IWatchList]
}

interface IWatchList {
	id: number | null
	name: string
	assetId: string
	createdAt: string
	updatedAt: string
	user: number | null
}

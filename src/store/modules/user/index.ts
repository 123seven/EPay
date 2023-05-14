import { useLocalStorageState } from 'ahooks'

export interface UserInfo {
  id: string
  email: string
  avatar: string
  username: string
  auth: boolean
  token: string
}

export interface UserState {
  userInfo: UserInfo
}

const defaultUserState: UserState = {
  userInfo: {
    id: '',
    avatar: 'https://i2.100024.xyz/2023/04/01/kbe6yb.webp',
    username: 'Admin',
    email: 'seven@gmail.com',
    auth: false,
    token: '',
  },
}

export function useUserStore() {
  const [value, setValue] = useLocalStorageState<UserState>('EPay-User-Store', {
    defaultValue: defaultUserState,
  })

  function updateUserInfo(userInfo: Partial<UserInfo>) {
    if (!value) {
      return
    }

    const userInfoData = { ...value, ...userInfo }
    setValue(userInfoData)
  }

  function setUserAuth() {
    const userInfoData = { ...value, auth: true }
    setValue(userInfoData)
  }

  function setUserSignOut() {
    const userInfoData = { ...value, auth: false }
    setValue(userInfoData)
  }

  function resetUserInfo() {
    setValue(defaultUserState)
  }

  return {
    updateUserInfo,
    setUserAuth,
    setUserSignOut,
    resetUserInfo,
  }
}

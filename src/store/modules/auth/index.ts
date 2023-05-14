import { useLocalStorageState } from 'ahooks'
import { fetchSession } from '@/api'

export interface AuthState {
  token: string | undefined
  session: boolean
}

const defaultAuthState: AuthState = {
  token: undefined,
  session: false,
}

export function useAuthStore() {
  const [value, setValue] = useLocalStorageState<AuthState>('EPay-Auth-Store', {
    defaultValue: defaultAuthState,
  })

  function getToken() {
    return value?.token
  }

  function setToken(token: string) {
    const state = {
      token: token,
      session: true,
    }
    setValue(state)
  }

  async function getSession() {
    try {
      if (!value) {
        return Promise.resolve()
      }
      const { data } = await fetchSession<{ auth: boolean }>()
      const state = {
        ...value,
        session: true,
      }
      setValue(state)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  function removeToken() {
    setValue(defaultAuthState)
  }

  return {
    getToken,
    getSession,
    setToken,
    removeToken,
  }
}

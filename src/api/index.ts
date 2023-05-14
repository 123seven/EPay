import { post, get } from '@/utils/request'


export function fetchSignIn<T>(email: string, password: string) {
  return post<T>({
    url: '/api/v1/user/signin',
    data: { email: email, password: password },
  })
}


export function fetchSession<T>() {
  return post<T>({
    url: '/session',
  })
}

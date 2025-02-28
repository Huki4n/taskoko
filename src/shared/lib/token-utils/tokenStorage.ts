export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken')

  return accessToken || null
}

export const saveTokenToStorage = (token: string) => {
  localStorage.setItem('accessToken', token)
}

export const removeAccessToken = () => {
  localStorage.setItem('accessToken', '')
}

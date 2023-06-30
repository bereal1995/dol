export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export const setLocalStorage = (key: string, newData: any) => {
  localStorage.setItem(key, JSON.stringify(newData))
}

export const getCookie = (key: string) => {
  const cookie = document.cookie
  const cookieData = cookie.split(';').find((item) => item.includes(key))

  return cookieData ? cookieData.split('=')[1] : null
}

export const setCookie = (key: string, newData: any) => {
  document.cookie = `${key}=${newData}`
}

export const getLocalData = (key: string) => {
  const data = getLocalStorage(key) || getCookie(key)

  if (data === null) {
    return
  }
  return data
}

export const setLocalData = (key: string, newData: any) => {
  setLocalStorage(key, newData)
  setCookie(key, newData)
}

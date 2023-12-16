import { getFromLS, setToLS } from './storage'

export function getCurrentTheme() {
  let theme: string = ''

  const storageTheme = getFromLS('theme')
  if (storageTheme) theme = storageTheme

  if (theme !== '') return theme

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
    setToLS('theme', 'dark')
  } else {
    theme = 'light'
    setToLS('theme', 'light')
  }

  return theme
}

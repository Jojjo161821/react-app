import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [isDarkmodeOn, setIsDarkmodeOn] = useState(false);

  function switchToDark() {
    const newMode = !isDarkmodeOn;
    setIsDarkmodeOn(newMode);

    if(newMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme','dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if(savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDarkmodeOn(true)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDarkmodeOn(false)
    }

  }, [])

  return (
    <ThemeContext.Provider value={{ switchToDark, isDarkmodeOn }}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeProvider
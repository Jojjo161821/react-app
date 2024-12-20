import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./views/Contact"
import Home from "./views/Home"
import Header from './components/Header'
import Footer from './components/Footer'
import AppFeatures from "./views/AppFeatures"
import AppProvider from "./services/AppProvider"
import ThemeProvider from "./services/ThemeProvider"

function App() {

  return (
    <AppProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appfeatures" element={<AppFeatures />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
        </ThemeProvider>
    </AppProvider>
  )
}

export default App
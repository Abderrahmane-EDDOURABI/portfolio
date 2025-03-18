import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Root from './pages/RootPage/Root'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import "./i18n"; // Importer la configuration i18n

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    // document.body.setAttribute("data-theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header/>
        <Root/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default App

import Hero from './pages/Hero'
import About from './pages/About'
import SecondTest from './pages/Projects'
import Header from './components/Header'

// TODO: fixa size på profilkort för mobile view, fixa responsive mobile+padda view
// fixa styling generellt, fixa fonts, kolla på text ser bra ut i mobile view
//footer?

function App() {

  return (
    <div className="min-h-screen">
      <Header/>
      <Hero />
      <About />
      <SecondTest />
    </div>
  )
}

export default App

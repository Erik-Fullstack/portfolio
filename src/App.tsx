import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'

// TODO:
// lägg till mina stacks, cv
//footer?

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App

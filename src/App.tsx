import Hero from './pages/Hero'
import About from './pages/About'
import SecondTest from './pages/Projects'
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
      <SecondTest />
    </div>
  )
}

export default App

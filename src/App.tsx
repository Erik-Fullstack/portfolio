import Hero from './pages/Hero'
import TestPage from './pages/About'
import SecondTest from './pages/SecondTest'

// TODO: fixa size på profilkort för mobile view, fixa responsive mobile+padda view, kolla på projekt komponent o fixa glitch med 1px som visar
// fixa styling generellt, fixa fonts, kolla på text ser bra ut i mobile view
//lägg till header med länkar för att hoppa till olika sidor?

function App() {

  return (
    <div className="min-h-screen">
      <header className='h-0.5 w-full bg-black'></header>
      <Hero />
      <TestPage />
      <SecondTest />
    </div>
  )
}

export default App

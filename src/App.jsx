import CharacterList from './components/CharacterList';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Locations from './components/Locations';
import Footer from './components/Footer';
import Episodes from './components/Episodes';
function App() {

  return (
    // absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700 to-zinc-800
    <div className='flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700 to-zinc-800'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<CharacterList />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/episodes' element={<Episodes />} />
        </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App;
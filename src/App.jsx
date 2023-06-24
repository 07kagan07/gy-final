import './App.css'
import Header from './components/Header/Header'
import Route from './routes/Route'

function App() {

  return (
    <>
      <Header/>
      <main className='container mt-5'>
      <Route/>
      </main>
    </>
  )
}

export default App

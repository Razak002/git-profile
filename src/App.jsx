import { BrowserRouter, Routes, Route }
from 'react-router-dom';
import Header from './components/Header'
import Profile from './pages/Profile';
import logo from './assets/logo.svg'
import './App.css'
import Projects from './pages/Projects';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
<Header logo={logo}/>
<Profile userName="Razak002" />
<Routes>
  <Route
    path='/'
  element= {<Projects userName="Razak002"/>}
  />
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App

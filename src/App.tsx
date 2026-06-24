import './App.css'
import NaiveForm from './01-react-hook-form/naive-form'
import UsingReactHookForm from './01-react-hook-form/using-react-hook-form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/react-hook-form">
            <Route path="good" element={<UsingReactHookForm />} />
            <Route path="naive" element={<NaiveForm />} />
          </Route>
        </Routes>

      </BrowserRouter >

    </>
  )
}

export default App

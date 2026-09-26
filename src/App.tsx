import './App.css'
import NaiveForm from './01-react-hook-form/naive-form'
import UsingReactHookForm from './01-react-hook-form/using-react-hook-form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './03-tanstack-query/query-client'
import { Page } from './03-tanstack-query/page'

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes >
          <Route path="/react-hook-form">
            <Route path="good" element={<UsingReactHookForm />} />
            <Route path="naive" element={<NaiveForm />} />
          </Route>
          <Route path='/infinite-query' element={<Page />}>
          </Route>
        </Routes>
      </BrowserRouter >
    </QueryClientProvider>
  )
}

export default App

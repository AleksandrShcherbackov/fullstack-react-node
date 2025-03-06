import reactLogo from './assets/react.svg'
import { TrpcProvider } from './lib/trpc'
import { AllUsersPage } from './pages/AllUsersPage'
import { UserViewPage } from './pages/UserViewPage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getAllUserRoute, getUserViewRoute, viewRouteUserParams } from './lib/routes'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllUserRoute()} element={<AllUsersPage />} />
          <Route path={getUserViewRoute(viewRouteUserParams)} element={<UserViewPage />} />
        </Routes>
      </BrowserRouter>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </TrpcProvider>
  )
}

export default App

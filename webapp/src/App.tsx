import viteLogo from "../../../../vite.svg"
import reactLogo from './assets/react.svg'
import { TrpcProvider } from './lib/trpc'
import { AllUsersPage } from './pages/AllUsersPage'
import './App.css'

export const App = () => {
  return (
    <TrpcProvider>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <AllUsersPage />
    </TrpcProvider>
  )
}

export default App

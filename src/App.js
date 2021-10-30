import './App.css'
import LogoutButton from './components/LogoutButton'
import LoginButton from './components/LoginButton'
import Profile from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) return <h1>Loading.....</h1>

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  )
}

export default App

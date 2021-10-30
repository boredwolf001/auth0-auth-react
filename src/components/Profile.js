import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>
        <p>
          <strong>Email: </strong> {user.email}
        </p>
      </div>
    )
  )
}

export default Profile

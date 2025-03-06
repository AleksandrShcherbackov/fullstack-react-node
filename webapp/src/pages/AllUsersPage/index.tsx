import { Link } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import { getUserViewRoute } from '../../lib/routes'

export const AllUsersPage = () => {
  const { data, error, isLoading, isError } = trpc.getUsers.useQuery()

  if (isLoading) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data.users.map(({ id, name }) => (
          <li key={id}>
            <Link to={getUserViewRoute({ id })}>{name}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

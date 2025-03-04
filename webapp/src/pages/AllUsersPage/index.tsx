import { trpc } from '../../lib/trpc'

export const AllUsersPage = () => {
    const { data, error, isLoading, isError } = trpc.getUsers.useQuery();

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
                {data.users.map((el) => (
                    <li key={el.id}>
                        {el.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}
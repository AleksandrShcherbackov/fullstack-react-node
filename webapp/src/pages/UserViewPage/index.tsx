import { useParams } from "react-router-dom"
import { ViewRouteUserParamsTypes } from "../../lib/routes"
import { trpc } from '../../lib/trpc'

export const UserViewPage = () => {
    const { id } = useParams() as ViewRouteUserParamsTypes;
    const { data, error, isLoading, isError, isFetching } = trpc.getUserById.useQuery({ id });
    
    if (isLoading || isFetching) {
      return <span>Loading...</span>
    }
    if (isError) {
      return <span>Error: {error.message}</span>
    }

    if (!data.user) {
      return <span>User not found...</span>
    }

    const { user } = data;
  return (
    <div>
      <h1>UserName: {user.name} </h1>
      <p>Surname: {user.surname}</p>
      <div dangerouslySetInnerHTML={{ __html: user.text }}/>
    </div>
  )
}

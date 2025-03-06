import { useParams } from "react-router-dom"
import { ViewRouteUserParamsTypes } from "../../lib/routes";

export const UserViewPage = () => {
    const { id } = useParams() as ViewRouteUserParamsTypes;

  return (
    <div>
      <h1>UserName{id}</h1>
      <p>Description</p>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis consequatur explicabo alias expedita,
          ab sequi, esse sunt sapiente voluptatum quos laboriosam nesciunt tempora blanditiis unde vitae, debitis
          temporibus aliquid!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis consequatur explicabo alias expedita,
          ab sequi, esse sunt sapiente voluptatum quos laboriosam nesciunt tempora blanditiis unde vitae, debitis
          temporibus aliquid!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis consequatur explicabo alias expedita,
          ab sequi, esse sunt sapiente voluptatum quos laboriosam nesciunt tempora blanditiis unde vitae, debitis
          temporibus aliquid!
        </p>
      </div>
    </div>
  )
}

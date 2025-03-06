const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}


export const getAllUserRoute = () => '/';

export const viewRouteUserParams = getRouteParams({ id: true });
export type ViewRouteUserParamsTypes = typeof viewRouteUserParams;
export const getUserViewRoute = ({ id }: ViewRouteUserParamsTypes) => `/user-view/${id}`;

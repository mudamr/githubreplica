import { useLoaderData } from "react-router-dom";
import ListGitReposApi from "../api/gitrepositorybyuser";
import UserDetail from "../components/UserDetail";

const Detail = () => {
  const data = useLoaderData();

  return (
    <>
      <h1>Work In progress</h1>
      <UserDetail userDetail={data} />
    </>
  );
};

export default Detail;

export const loader = async ({ request, params }) => {
  const userId: string = params.userId;
  const response = await ListGitReposApi(userId);
  return response;
};

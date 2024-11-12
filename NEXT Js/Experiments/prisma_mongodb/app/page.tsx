import { createPost, fetchAllPosts } from "@/utility/postFunctions";
import { fetchAllUsers, createUser } from "@/utility/userFunctions"



export default async function Home() {
  // await createPost();
  // await createUsers();
  const allUsers = await fetchAllUsers();
  // const allPosts = await fetchAllPosts();

  console.log(allUsers);
  return (
    <h1>Hello World!</h1>
  );
}
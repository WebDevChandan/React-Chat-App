import Image from "next/image";

const getPostsData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

const getUsersData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}

const getDogData = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random', {
        cache: "no-store"    //Fetch Different data on every reload
        
        // next: {
        //     revalidate: 3, //Fetch Different data after 3 of every relaod
        // }
    });
    return response.json();
}

export default async function Listofposts() {
    const [posts, users, dog] = await Promise.all([getPostsData(), getUsersData(), getDogData()]);

    return (
        <div>
            <Image
                src={dog.message}
                alt="dog Image"
                width={300}
                height={300}
            />
            <h2>Posts</h2>
            {posts.map((post: any) => {
                return <p>{post.title}</p>;
            })}

            <br />
            <h2>Users</h2>
            {users.map((user: any) => {
                return <p>{user.name}</p>;
            })}
        </div>
    );
}
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <button
        onClick={() => refetch()}
        className="mb-4 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Refetch Posts
      </button>
      <ul className="space-y-2">
        {data.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// src/pages/index.tsx
export async function getServerSideProps() {
  // Fetch data from an external API or a database
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Pass data to the page via props
  return {
    props: {
      posts,
    },
  };
}

export default function SSRPage({ posts }) {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
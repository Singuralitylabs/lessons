import Button from "../ui/Button";

// ✅ 良い例：責任を分離したコンポーネント
export function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <Button onClick={() => alert("プロフィール編集")}>プロフィール編集</Button>
    </div>
  );
}

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUserPosts(userId).then(setPosts);
  }, [userId]);

  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

// ❌ より明確に悪い例：複数の無関係な責任を持つコンポーネント
function UserDashboard({ user }) {
  const [posts, setPosts] = useState([]);
  const [weather, setWeather] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // ユーザーの投稿取得
  useEffect(() => {
    fetchUserPosts(user.id).then(setPosts);
  }, [user.id]);

  // 天気情報取得
  useEffect(() => {
    fetchWeather().then(setWeather);
  }, []);

  // 通知取得
  useEffect(() => {
    fetchNotifications().then(setNotifications);
  }, []);

  // ログアウト処理
  const handleLogout = () => {
    logout();
    redirect("/login");
  };

  return (
    <div>
      {/* ユーザー情報表示 */}
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {/* 天気情報表示 */}
      <div>今日の天気: {weather?.condition}</div>

      {/* 通知一覧表示 */}
      <div>
        {notifications.map(n => (
          <div key={n.id}>{n.message}</div>
        ))}
      </div>

      {/* 投稿一覧表示 */}
      <div>
        {posts.map(post => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>

      {/* ログアウトボタン */}
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
}

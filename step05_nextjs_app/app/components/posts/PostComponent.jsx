// 子コンポーネント
export function PostTitle({ title }) {
  return <h1>{title}</h1>;
}

export function PostContent({ content }) {
  return <div>{content}</div>;
}

export function PostFooter({ author, date }) {
  return (
    <footer>
      <p>投稿者ID: {author}</p>
      <p>投稿日: {date}</p>
    </footer>
  );
}

"use client"

import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./components/Todo";

export default function Home() {
  const alertFunc = () => {
    alert("Hello, World!");
  }

  return (
    <div>
      <Header />
      <h1>Todoリスト</h1>
      <Todo />
      <Footer />
      <button onClick={alertFunc}>Hello, World!</button>
      <br />
      <Link href="/about">Aboutページへ</Link>
    </div>
  );
}

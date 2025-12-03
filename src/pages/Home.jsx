import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const categories = [
    { title: "대기 오염", path: "/air" },
    { title: "수질 오염", path: "/water" },
    { title: "토양 오염", path: "/soil" },
    { title: "산림 복원", path: "/forest" },
    { title: "해양 생태계", path: "/marine" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-green-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">환경 복원 프로젝트</h1>
      </header>

      <section className="p-6 grid gap-6 md:grid-cols-2">
        {categories.map(cat => (
          <Link
            key={cat.title}
            to={cat.path}
            className="block bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">{cat.title}</h2>
            <p className="text-gray-600 mt-2">자세히 보기</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

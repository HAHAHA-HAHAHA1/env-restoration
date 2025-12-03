import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <nav className="mt-2">
        <Link to="/" className="text-white hover:underline mr-4">홈</Link>
      </nav>
    </header>
  );
}

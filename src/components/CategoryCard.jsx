// src/components/CategoryCard.jsx
import { Link } from "react-router-dom";

export default function CategoryCard({ name, description, link, color }) {
  return (
    <Link to={link}>
      <div className={`p-6 rounded-xl shadow-lg hover:scale-105 transform transition ${color}`}>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
}

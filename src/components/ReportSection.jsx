// src/components/ReportSection.jsx
export default function ReportSection({ title, content }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-l-8 border-green-400 hover:shadow-xl transition">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

import { Link } from "react-router-dom";

const categories = [
  { title: "대기 오염", color: "from-green-200 to-green-100", path: "/air" },
  { title: "수질 오염", color: "from-blue-200 to-blue-100", path: "/water" },
  { title: "토양 오염", color: "from-yellow-200 to-yellow-100", path: "/soil" },
  { title: "산림 복원", color: "from-green-400 to-green-200", path: "/forest" },
  { title: "해양 생태계", color: "from-cyan-200 to-cyan-100", path: "/marine" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">환경 복원 조사 보고서</h1>
        <p className="text-xl text-gray-700">
          각 환경 영역별 복원 소요 시간과 전략을 한눈에 확인하세요.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.title} to={cat.path}>
            <div className={`p-6 rounded-xl shadow-xl bg-gradient-to-br ${cat.color} hover:scale-105 transform transition-all`}>
              <h2 className="text-3xl font-bold mb-2">{cat.title}</h2>
              <p className="text-gray-800">
                클릭하여 상세 정보와 복원 소요 시간을 확인하세요.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

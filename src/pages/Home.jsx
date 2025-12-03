// src/pages/Home.jsx
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  const categories = [
    { name: "대기 오염", description: "산업·교통·정책 대응 사례", link: "/air", color: "bg-green-200" },
    { name: "수질 오염", description: "강, 호수, 해양 복원 사례", link: "/water", color: "bg-blue-200" },
    { name: "토양 오염", description: "중금속 오염 지역, 토양 정화", link: "/soil", color: "bg-yellow-200" },
    { name: "산림 복원", description: "벌채 지역 나무 심기, 관리", link: "/forest", color: "bg-green-400" },
    { name: "해양 생태계", description: "산호초, 온도 상승, 보호 구역", link: "/marine", color: "bg-cyan-200" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 p-10">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        환경 복원 조사 보고서
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            name={cat.name}
            description={cat.description}
            link={cat.link}
            color={cat.color}
          />
        ))}
      </div>
    </div>
  );
}

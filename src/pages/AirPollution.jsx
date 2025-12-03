export default function Air() {
  const reports = [
    { title: "복원 시간", value: "수개월 ~ 수십 년", color: "border-green-500" },
    { title: "주요 전략", value: "산업 활동 감소, 오염원 제거, 정책 시행, 자연 정화", color: "border-green-400" },
    { title: "대표 사례", value: "2020년 팬데믹 초기 도시 대기 질 회복", color: "border-green-600" },
  ];

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">대기 오염 복원</h1>
        <p className="text-gray-700">
          대기 오염 복원 과정과 소요 시간을 시각적으로 확인할 수 있습니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.map((r) => (
          <div key={r.title} className={`p-6 rounded-xl shadow-lg bg-white border-l-4 ${r.color} flex flex-col justify-between`}>
            <h3 className="text-2xl font-semibold mb-2">{r.title}</h3>
            <p className="text-gray-800">{r.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

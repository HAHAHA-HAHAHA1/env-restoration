export default function Forest() {
  const reports = [
    { title: "복원 시간", value: "수십 년 ~ 수백 년", color: "border-green-700" },
    { title: "주요 전략", value: "나무 심기, 자연 재생, 산림 관리", color: "border-green-500" },
    { title: "대표 사례", value: "브라질 아마존 벌채 지역 복원", color: "border-green-600" },
  ];

  return (
    <div className="min-h-screen bg-green-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">산림 복원</h1>
        <p className="text-gray-700">
          산림 복원 과정과 소요 시간을 시각적으로 확인할 수 있습니다.
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

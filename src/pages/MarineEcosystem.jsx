export default function Marine() {
  const reports = [
    { title: "복원 시간", value: "수십 년", color: "border-cyan-500" },
    { title: "주요 전략", value: "온도 조절, 보호 구역 설정, 오염물질 관리", color: "border-cyan-400" },
    { title: "대표 사례", value: "산호초 복원 사례", color: "border-cyan-600" },
  ];

  return (
    <div className="min-h-screen bg-cyan-50 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">해양 생태계 복원</h1>
        <p className="text-gray-700">
          해양 생태계 복원 과정과 소요 시간을 시각적으로 확인할 수 있습니다.
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

export default function Water() {
  const reports = [
    { title: "복원 시간", value: "수십 년 ~ 수백 년", color: "border-blue-500" },
    { title: "주요 전략", value: "오염 물질 제거, 습지 복원, 생태계 회복", color: "border-blue-400" },
    { title: "대표 사례", value: "미국 체사피크 만 복원 사례", color: "border-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">수질 오염 복원</h1>
        <p className="text-gray-700">
          수질 오염 복원 과정과 소요 시간을 시각적으로 확인할 수 있습니다.
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

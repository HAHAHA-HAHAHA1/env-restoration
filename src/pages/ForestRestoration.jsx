// src/pages/Forest.jsx
import ReportSection from "../components/ReportSection";

export default function Forest() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-green-100 to-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">산림 복원</h1>

      <ReportSection
        title="벌채 지역 나무 심기"
        content="브라질 아마존 등 벌채 지역에서 나무 심기, 자연 재생, 산림 관리 등 장기적 복원 노력 필요."
      />

      <ReportSection
        title="생태계 관리"
        content="토양 보전, 동식물 복원, 산림 보호 정책을 병행해야 효과적."
      />

      <ReportSection
        title="복원 소요 시간"
        content="수십 년에서 수백 년까지 소요되며, 장기적 모니터링과 관리 필수."
      />
    </div>
  );
}

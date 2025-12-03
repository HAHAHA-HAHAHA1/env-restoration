// src/pages/Marine.jsx
import ReportSection from "../components/ReportSection";

export default function Marine() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-cyan-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">해양 생태계 복원</h1>

      <ReportSection
        title="산호초 복원"
        content="온도 상승과 산성화 문제로 산호초 복원 속도는 느리며, 보호구역 설정과 오염물질 관리 필요."
      />

      <ReportSection
        title="해양 생태계 관리"
        content="물고기, 조류, 식물 등 전체 해양 생태계 회복을 위한 종합적 접근 필요."
      />

      <ReportSection
        title="복원 소요 시간"
        content="대부분 수십 년이 걸리며, 기후 변화 대응 및 지속적 모니터링 필수."
      />
    </div>
  );
}

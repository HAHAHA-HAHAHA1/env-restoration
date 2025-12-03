// src/pages/Air.jsx
import ReportSection from "../components/ReportSection";

export default function Air() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">대기 오염 복원</h1>

      <ReportSection
        title="산업 및 교통 활동 감소"
        content="산업 활동과 교통량 감소로 대기 질이 회복된 사례가 있음. 대표적 예는 2020년 팬데믹 초기 도시 대기 개선."
      />

      <ReportSection
        title="정책 시행 및 자연 정화"
        content="환경 정책과 규제, 자연 정화 작용을 통해 대기질 개선. 장기적 모니터링과 지속적 관리 필요."
      />

      <ReportSection
        title="복원 소요 시간"
        content="수개월에서 수십 년까지 소요되며, 오염 정도와 지역 특성에 따라 달라짐."
      />
    </div>
  );
}

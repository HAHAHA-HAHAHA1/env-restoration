// src/pages/Soil.jsx
import ReportSection from "../components/ReportSection";

export default function Soil() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-yellow-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">토양 오염 복원</h1>

      <ReportSection
        title="중금속 및 화학물 제거"
        content="중금속 오염 지역은 토양 제거, 세척, 식생 복원을 통해 정화 가능. 매우 장기적 과정."
      />

      <ReportSection
        title="토양 정화 및 식생 복원"
        content="토양 정화와 오염원 제거 후, 식생을 복원하여 생태계 균형 회복."
      />

      <ReportSection
        title="복원 소요 시간"
        content="수십 년 이상 소요될 수 있으며, 지역 특성에 맞춘 지속적 관리 필요."
      />
    </div>
  );
}

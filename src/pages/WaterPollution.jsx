// src/pages/Water.jsx
import ReportSection from "../components/ReportSection";

export default function Water() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">수질 오염 복원</h1>

      <ReportSection
        title="오염 물질 제거"
        content="강, 호수, 해양 오염 물질 제거를 통해 수질 개선. 미국 체사피크 만 사례: 화학물 제거와 습지 복원."
      />

      <ReportSection
        title="생태계 회복"
        content="물고기, 식물, 미생물 생태계 회복 과정이 포함되며, 복합적인 관리 필요."
      />

      <ReportSection
        title="복원 소요 시간"
        content="수십 년에서 수백 년까지 소요될 수 있으며, 지속적 모니터링과 정책 지원 필요."
      />
    </div>
  );
}

import React from "react";
import Header from "../components/Header";

export default function ForestRestoration() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header title="산림 복원" />
      <main className="p-6 text-gray-800">
        <p className="mb-4">
          산림 복원은 생태계 복잡성으로 인해 수십 년에서 수백 년이 걸립니다. 브라질 아마존 벌채 지역 복원 사례는 나무 심기, 자연 재생, 장기적인 산림 관리가 필요합니다.
        </p>
      </main>
    </div>
  );
}

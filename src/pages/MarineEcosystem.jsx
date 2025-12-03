import React from "react";
import Header from "../components/Header";

export default function MarineEcosystem() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header title="해양 생태계" />
      <main className="p-6 text-gray-800">
        <p className="mb-4">
          해양 생태계 복원은 수십 년이 걸리며, 산호초 복원은 온도 상승과 산성화로 속도가 느립니다. 온도 조절, 보호 구역 설정, 오염물질 관리가 중요합니다.
        </p>
      </main>
    </div>
  );
}

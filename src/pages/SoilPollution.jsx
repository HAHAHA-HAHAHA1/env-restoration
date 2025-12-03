import React from "react";
import Header from "../components/Header";

export default function SoilPollution() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header title="토양 오염" />
      <main className="p-6 text-gray-800">
        <p className="mb-4">
          토양 오염 복원은 중금속 오염 지역에서 토양 제거, 세척, 식생 복원이 필요하며 수십 년 이상 소요됩니다.
        </p>
      </main>
    </div>
  );
}

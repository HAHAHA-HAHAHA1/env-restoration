import React from "react";
import Header from "../components/Header";

export default function AirPollution() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header title="대기 오염" />
      <main className="p-6 text-gray-800">
        <p className="mb-4">
          대기 오염 복원은 산업 활동 감소, 오염원 제거, 정책 시행, 자연 정화 등을 통해 수개월에서 수십 년까지 걸립니다. 2020년 팬데믹 초기 도시 대기 질 회복 사례가 대표적입니다.
        </p>
      </main>
    </div>
  );
}

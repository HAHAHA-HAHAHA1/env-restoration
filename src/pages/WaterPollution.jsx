import React from "react";
import Header from "../components/Header";

export default function WaterPollution() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header title="수질 오염" />
      <main className="p-6 text-gray-800">
        <p className="mb-4">
          수질 오염 복원은 오염 물질 종류에 따라 수십 년에서 수백 년이 필요합니다. 미국 체사피크 만 복원 사례는 오염 물질 제거, 습지 복원, 생태계 회복의 복합적 과정을 보여줍니다.
        </p>
      </main>
    </div>
  );
}

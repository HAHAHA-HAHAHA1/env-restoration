import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/env-restoration/',  // <-- 여기 레포 이름 입력
  plugins: [react()],
});

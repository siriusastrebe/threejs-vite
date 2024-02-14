import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['/server/'],
  },
  compress: {
    keep_fnames: /^.*/, // Use a regular expression to match all function names
  },
  server: {
    proxy: {
      // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      '/socket.io': {
        target: 'ws://localhost:9000',
        ws: true,
      },
    }
  }
})

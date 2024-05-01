import { Workbox } from 'workbox-sw';

const wb = new Workbox('sw-precache-cache', {
  cacheId: 'my-pwa-course',
  debug: true
});

wb.precache([
  'index.html',
  'style.css',
  'script.js',
  'images/image1.jpg',
  'images/image2.png',
  'audio/audio1.mp3',
  'video/video1.mp4'
]);

wb.skipWaiting();
wb.clientsClaim();

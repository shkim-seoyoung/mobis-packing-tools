// Scoped to the PWA test directory. No fetch interception: Supabase and application resources remain network-first.
const CACHE_NAME = 'mobis-pwa-beta-shell-v1';
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(['./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'])));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('mobis-pwa-beta-shell-') && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

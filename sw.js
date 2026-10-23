// App path only. Never intercept or cache the shared main HTML or Supabase requests.
const CACHE='mobis-app-shell-v2';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./manifest.webmanifest','./icons/icon-192.png?v=2','./icons/icon-512.png?v=2'])));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('mobis-app-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});

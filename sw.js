/* StudyPlan service worker. Upload once next to index.html. You never need to edit it. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||!(u.origin===location.origin||u.hostname==='www.gstatic.com'))return;
 e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open('sp').then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.openWindow('./'))});

self.addEventListener('install', function(e) {
  console.log('install');
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(e) {
  console.log('activate');

  /* 第一次加载页面时不会调用服务工作者的fetch事件处理程序,
   * 因为服务工作者尚未“声明”该页面,这意味着它不在服务工作者
   * 的控制之下.默认情况下,第一次访问注册服务工作者的站点时,
   * 服务工作者的安装(并可能激活)事件处理程序将运行,但在服务
   * 工作者获得控制权之前不会触发获取.下次导航到服务工作者范
   * 围下的页面时,或者重新加载当前页面时,会发生这种情况. */

  /* 您可以通过在 activate 事件处理程序中调用
   * self.clients.claim() 来覆盖此默认行为并让服务工作者
   * 在初始导航期间获得控制权. */
  
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
  console.log('fetch', e.request);
  if (e.request.url === 'http://localhost:8080/test.txt') {
    console.log('已拦截')
    e.respondWith(new Promise(resolve => {
      var myBlob = new Blob();
      var init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" };
      var myResponse = new Response(myBlob,init);

      // let response = new Response('1234679879');
      // response.url = 'http://localhost:8080/test.txt?000000';
      // response.statusText = 'fdsafdsafds';
      resolve(myResponse);
    }));
  } else {
    console.log('未拦截')
  }
});
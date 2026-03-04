var posts=["2026/03/01/hello-world/","2026/03/01/hello-world2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
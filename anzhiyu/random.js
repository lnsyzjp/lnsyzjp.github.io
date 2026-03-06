var posts=["2026/03/06/android/","2026/03/01/hello-world2/","2026/03/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
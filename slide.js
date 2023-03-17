var img = document.getElementById('img');

var images = ['slide-1.jpg','slide-2.jpg','slide-3.jpg','slide-4.jpg','slide-5.jpg'];

var x  = 0;

function slider(){
  if(x < images.length){
    x = x+1;
  }else{
    x = 1;
  }

  img.innerHTML = "<img src=img-slide/" +images[x-1]+">";

}

setInterval(slider,3000);
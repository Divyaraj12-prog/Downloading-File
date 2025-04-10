var btn = document.querySelector('button');
var percent = document.querySelector('h2');
var innerline = document.querySelector('.innerline');
var grow = 0;
var flag=0;
btn.addEventListener('click',function(){
  if(flag==0){
    var int = setInterval(function(){
        grow++;
        percent.innerHTML = grow+'%';
        innerline.style.width = grow+'%';
      },50);
      setTimeout(function(){
        clearInterval(int);
        btn.style.backgroundColor = 'lightgreen';
      },5000);
      flag=1;
  }else{
    btn.innerHTML = 'Download again?';
    btn.style.backgroundColor = 'red';
  }
})
'use strict';

{
 
  const images = document.querySelectorAll('.image');
  const navContainer = document.querySelector('.nav-container');
  
  const totalImages = images.length;
  let imageIndex = 0;
  let intervalId;

  // ボタン要素の作成
  for(let i = 0; i < totalImages; i++){
    const button = document.createElement('button');
    button.classList.add('nav-btn');
    navContainer.appendChild(button);
  }
  
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
      imageIndex = index;
      updateSlider();
      resetInterval();
    });
  });

  // 画像とボタンの更新
  function updateSlider(){
    images.forEach((image) =>{
      image.classList.remove('image-active');
    });
    buttons.forEach((button) =>{
      button.classList.remove('btn-active');
    });
  
    images[imageIndex].classList.add('image-active');
    buttons[imageIndex].classList.add('btn-active');
  }

  // 次の画像を指定して表示
  function nextImage(){
    imageIndex++;
    if(imageIndex > totalImages -1){
      imageIndex = 0;
    }
    updateSlider();
  }

  // 8秒ごとに自動再生
  function autoPlay(){
    intervalId = setInterval(nextImage, 8000);
  }

  // いったん停止してから自動再生
  function resetInterval(){
    clearInterval(intervalId);
    autoPlay();
  }

  // スライドショーの開始
  updateSlider();
  autoPlay();

}  



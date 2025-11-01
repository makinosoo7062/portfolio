'use strict';

{
 
  const images = document.querySelectorAll('.image');
  const navContainer = document.querySelector('.nav-container');
  
  const totalImages = images.length;
  let imageIndex = 0;
  let intervalId;
  
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
      console.log(imageIndex);
    });
  });
  
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

  updateSlider();
  

}  



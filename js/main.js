'use strict';

{

  const name = document.getElementById('name');
  const tel = document.getElementById('tel');
  const mail = document.getElementById('mail');
  const message = document.getElementById('message');
  const btn = document.getElementById('btn');

  name.addEventListener('input',()=>{
    if(name.value.length !== 0) {
      name.classList.remove('dark');
    } else {
      name.classList.add('dark');
    }
  });

  tel.addEventListener('input',()=>{
    if(tel.value.length !== 0) {
      tel.classList.remove('dark');
    } else {
      tel.classList.add('dark');
    }
  });

  mail.addEventListener('input',()=>{
    if(mail.value.length !== 0) {
      mail.classList.remove('dark');
    } else {
      mail.classList.add('dark');
    }
  });

  message.addEventListener('input',()=>{
    if(message.value.length !== 0) {
      message.classList.remove('dark');
    } else {
      message.classList.add('dark');
    }
  });

  btn.addEventListener('click',()=>{
    if(!name.value){
      alert('名前を入力して下さい');
    }
    if(!tel.value){
      alert('電話番号を入力して下さい');
    }
    if(!mail.value){
      alert('メールアドレスを入力して下さい');
    }
  })

}


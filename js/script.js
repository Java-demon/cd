document.addEventListener('DOMContentLoaded', () => {
  document.body.style.background = 'url(../appl/img/apple_true.jpg)';
  
  const menu = document.querySelector('.menu');
  const liItems = document.querySelectorAll('.menu-item');
  const listItems2 = document.getElementsByTagName('li');
  const childsMenu = menu.children;
  

  console.log(liItems);
  console.log(childsMenu);
  console.log(listItems2);
  
  liItems.forEach((item, index, arr) => {

    if(index == 1) {
      // let temp = item.textContent
      // item.textContent = arr[index + 1].textContent;
      // arr[index + 1].textContent = temp;
      [item.textContent, arr[index + 1].textContent] = [arr[index + 1].textContent,item.textContent];
      return;
    }
  })
  const li = document.createElement('li');
  li.textContent = 'Пятый пункт';
  li.classList.add('menu-item');
  menu.append(li);
  const title = document.querySelector('.title');
  title.textContent = 'Мы продаем только подлинную технику Apple';
  const adv = document.querySelector('.adv');
  adv.remove();

})


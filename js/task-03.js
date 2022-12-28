const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// for(let el of images) document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', `<li><img src="${el.url}" alt="${el.alt}"></li>`);

const ulEl = document.querySelector('.gallery');

const imagesEl = images.map(item => 
 `<li class ='image-item' ><img src = "${item.url}" alt = "${item.alt}" width ="450" height ="300"
  ></img></li>`);

 ulEl.insertAdjacentHTML('afterbegin', imagesEl.join(""))
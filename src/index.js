import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


console.log('simple console log changes');
import jugoshealthy from '../assets/images/jugoshealthy.jpg';
import black_smoothie from '../assets/images/black_smoothie.jpg';
import exotic from '../assets/images/exotic.jpg';
import f_explotion from '../assets/images/fruit_explotion.jpg';
import pink_smoothie from '../assets/images/pink_smoothie.jpg'

function element(parentId, childType, content, childId, ...styles){
  const child = document.createElement(childType);
  child.innerHTML=content;
  child.classList.add(...styles);
  document.getElementById(parentId).appendChild(child);
  if(childId!=''){
    child.id = childId;
  }
}

function style(parentId, ...styles){
  const parent = document.getElementById(parentId);
  parent.classList.add(...styles);
}
function unstyle(parentId, ...styles){
  const parent = document.getElementById(parentId);
  parent.classList.remove(...styles);
}

function img(imgId, src, ...styles){
  const imagen =document.getElementById(imgId);;
  imagen.src = src;
  imagen.classList.add(...styles);
}

function btn(btnId, onclick, ...styles ){
  const btn =document.getElementById(btnId);;
  btn.onclick = onclick;
  btn.classList.add(...styles);
}

function header() {
  style('header', 'd-flex', 'justify-content-center', 'flex-column', 'align-items-center')
  element('header','h1', 'FRUTASTIC','', 'd-block');
  element('header','p', 'HEALTHY FOOD & FRUIT EXPLOTION','', 'subtitle');

}

function gotophotos() {
  style('nav_photos', 'selected');
  unstyle('nav_opinions', 'selected');
  unstyle('nav_menu', 'selected');

  style('menulink', 'd-none');
  unstyle('products', 'd-none');
  style('opinions', 'd-none');
}

function gotopinions() {
    style('nav_opinions', 'selected');
    unstyle('nav_photos', 'selected');
    unstyle('nav_menu', 'selected');

    style('menulink', 'd-none');
    style('products', 'd-none');
    unstyle('opinions', 'd-none');
}

function gotomenu() {
    style('nav_menu', 'selected');
    unstyle('nav_opinions', 'selected');
    unstyle('nav_photos', 'selected');

    unstyle('menulink', 'd-none');
    style('products', 'd-none');
    style('opinions', 'd-none')
}

function navbar( ){
  style('navbar', 'd-flex', 'justify-content-around');
  element('navbar', 'div', 'PHOTOS', 'nav_photos', 'noselected');
  element('navbar', 'div', 'OPINIONS', 'nav_opinions', 'noselected');
  element('navbar', 'div', 'MENU', 'nav_menu', 'noselected');
  
  document.getElementById('nav_menu').addEventListener("click", gotomenu);
  document.getElementById('nav_photos').addEventListener("click", gotophotos);
  document.getElementById('nav_opinions').addEventListener("click", gotopinions);

}

function menulink() {
  style('menulink','row', 'p-4')
  element('menulink','div','','div1', 'col-6', 'p-5');
  element('menulink','div','','div2', 'col-6' , 'm-auto');

  //Div1
  element('div1','img','','menuimg', 'w-100');
  img('menuimg', jugoshealthy, 'rounded');

  //Div2
  element('div2','h2','FRUTASTIC MENU','', 'w-100');
  const text = "Para personas que aman los desayunos completos, quienes comen delicioso y saludable";
  element('div2','p',text,'', 'd-block');
  element('div2','button','MENU','btnMenu', 'd-block');
  btn('btnMenu','#', 'btn', 'btn-success')

}

function products(){
  style('products', 'p-5');
  element('products','h2','GALERIA DE FOTOS','', 'w-100');
  element('products','p','Los mejores platillos deas la semana','', 'w-100');
  
  element('products','div', '','div_product', 'row', 'p-4');
  element('div_product','div','','div1_p', 'col-4');
  element('div_product','div','','div2_p', 'col-4');
  element('div_product','div','','div3_p', 'col-4');

  element('div1_p','h3','JUGOS HEALTHY','', 'w-100');
  element('div1_p','img','','img_product1', 'w-100');
  img('img_product1', black_smoothie, 'image');

  element('div2_p','h3','JUGOS HEALTHY','', 'w-100');
  element('div2_p','img','','img_product2', 'w-100');
  img('img_product2', exotic, 'image');

  element('div3_p','h3','JUGOS HEALTHY','', 'w-100');
  element('div3_p','img','','img_product3', 'w-100');
  img('img_product3', f_explotion, 'image');
}

function opinions(){
  const text = "A NEW EXPERIENCE IN TASTE AND SERVICE"
  style('opinions', 'change-bg', 'p-3')
  element('opinions','h2', text,'', 'row', 'p-4');
  element('opinions','div','','div_opinions', 'row', 'p-4');

  element('div_opinions','div','','div_opinion1', 'col-4');
  element('div_opinions','div','','div_opinion2', 'col-4');
  element('div_opinions','div','','div_opinion3', 'col-4');

  element('div_opinion1','h3','JESSICA FARIAS','', 'd-block');
  element('div_opinion2','h3','MILDRED MARGARITA','', 'd-block');
  element('div_opinion3','h3','CARLOS QUINTAL','', 'd-block');

  const opinion1 = 'Una opcion saludable, y un hermoso lugar para ir a pasar un buen rato';
  const opinion2 = 'No puedes estar más contenta con el servicio, definiticiamente se convirtió en mi lugar favorito para desayunar'
  const opinion3 = 'Un ambiente agradable, y servicio de calidad hasta para el cliente más exigente'

  element('div_opinion1','p',opinion1,'', 'd-block');
  element('div_opinion2','p',opinion2,'', 'd-block');
  element('div_opinion3','p',opinion3,'', 'd-block');

}

function footer(){
  element('footer','img','','img_footer', 'w-100');
  img('img_footer', pink_smoothie, 'image');
  
  element('footer', 'div', '','div_footer', 'd-flex','justify-content-between', 'p-5', 'change-bg')
  element('div_footer','h2','CONTACT','', 'w-25');
  element('div_footer','h3','PHONE: 9993861435','', 'd-block');
  element('div_footer','h3','EMAIL: frutastic@gmail.com','', 'w-25');
  element('div_footer','h3','ADRESS: Pensiones, Mérida','', 'd-block');
}

header();
navbar(); 
menulink();
products();
opinions();
gotophotos();
footer();
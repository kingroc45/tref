const data=[{
    id:1,
    name:"thomas",
    job:'web develope',
    img:"img/hii.png",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eum vel sunt ratione voluptatibus qui deserunt rem iusto dolores culpa"
    
},{
    id:2,
    name:"isral mas",
    job:'web developer',
    img:"img/hii.png",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eum vel sunt ratione voluptatibus qui deserunt rem iusto dolores culpa"
    
},{
    id:1,
    name:"antony",
    job:'web developer',
    img:"img/hii.png",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eum vel sunt ratione voluptatibus qui deserunt rem iusto dolores culpa"
    
},{
    id:1,
    name:"lucas",
    job:'web develop',
    img:"img/hii.png",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eum vel sunt ratione voluptatibus qui deserunt rem iusto dolores culpa"
    
},{
    id:1,
    name:"kevin john",
    job:'web developer',
    img:"img/hii.png",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eum vel sunt ratione voluptatibus qui deserunt rem iusto dolores culpa"
    
}];

const name=document.querySelector("#name");
const job=document.querySelector("#job");
const img=document.querySelector("#pic");
const para=document.querySelector("#cont");
const left=document.querySelector(".left");
const right=document.querySelector(".right");
 let index=0;

window.addEventListener("DOMContentLoaded",function(){
    const first=data[0]
   value(first);
})
function value(data){
    img.src=data.img;
    job.textContent=data.job
    name.textContent=data.name
    para.textContent= data.text
}
left.addEventListener("click",function(){
    index ++;
if(index>data.length-1){
    index=0;
}
value(data[index]);
});
right.addEventListener("click",function(){
    index --;
if(index<0){
    index=data.length-1;
}
value(data[index]);
console.log(value);
});
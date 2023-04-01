const bodyelement = document.getElementsByTagName("body")[0];
const helloelement  = document.getElementsByTagName("div")[0];
helloelement.classList.add("hello");
const hello = document.getElementsByClassName("hello")[0];

const text = document.createTextNode("hello");
const child = document.getElementsByClassName("child")[0];

child.appendChild(text);
child.textContent = "";

console.log(child.textContent);
//child.innerHTML ="";
const child2 = document.getElementsByClassName("child")[1];




const checkcss = getComputedStyle(hello).backgroundColor;
console.log(checkcss);
const photo = document.getElementById("photo")
const original = photo.src;

const img = [
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
 
]
let count=0;
const myfunction =() =>{
  if(count === 3){
    photo.src = original;
    count = 0;
    
  
  }
  else{ 
    let link = img[count];
  
  photo.src = link;
  count += 1;
  console.log(count)
  }
  
    
  }
const olderlist = document.getElementsByClassName("olderlist")[0];



const button = document.getElementById("button");
//button.onclick = myfunction;
button.addEventListener("click", myfunction);

const box = document.getElementsByClassName("box")[0];
const itemcontainer = document.getElementsByClassName("item")[0];


function callitem(event){
  const value = (event.target.value);
  const item = document.createElement("li");
  item.append(value);
  itemcontainer.append(item);
  item.classList.add("list");

}
box.addEventListener("change",callitem)








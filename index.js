// console.log("hello,mia");
// let age = 21;
// console.log(age);

// let firstName = "tharun"
// age = 22;
// let male = true;
// console.log(firstName)
// console.log(age);
// console.log(male);

// console.log("hello  you,Mr.",firstName);
// console.log("hello  you",age,"years old");
// console.log("hello  you are male,",male);

// // document.getElementById("p1").innerHTML = "hello " + firstName ;
// document.getElementById("p2").innerHTML = "you are " + age ;
// document.getElementById("p3").innerHTML = "hello you are " + male ;

// let stdnts = 40;
//stdnts = stdnts + 1; if we assign a variable without let var what will happen
//stdnts = stdnts - 1;
//stdnts = stdnts * 2;
//stdnts = stdnts % 6;

// stdnts += 2;
// stdnts -= 2;
// stdnts *= 2;
// stdnts %= 2;
// stdnts /= 7;
// console.log(stdnts);

// var x = 5.6789
// console.log(x);

// operator [precedence= brackets=>exponents=>multiplication&division=>addition&substraction]
//method 1, what it is useful for ?let username = window.prompt("are you,") 
// console.log(username);

//method 2, let fullname;
// 
// document.getElementById("mybutton").onclick = function(){
// 
// fullname = document.getElementById("mytext").value;
// document.getElementById("mylabel").innerHTML = "i'm username" + fullname;
// }
// let age = window.prompt();
// age = Number(age);
// age += 1;
// console.log("now you are,",age,"old");
// var a;
// var b;
// var c;
// var d;
// a = Number("22.3");
// b = Boolean("22.3");
// c = String(56);
// d = Boolean("")
// console.log(a,typeof a);
// console.log(b,typeof b);
// console.log(c,typeof c);
// console.log(d,typeof d);

// use const amd face it=>
// const pie = 3.14;
// let radius = window.prompt("enter the radius of circle:");
// pie = Number("3.14");
// radius = Number(radius);
// circumference = 2 * pie * radius
// console.log("circumference of the cirle is:",circumference)

// let j = 3.14;
// console.log(Math.floor(j));
// console.log(Math.ceil(j));
// console.log(Math.round(j));    =>>> =>doubt?
// console.log(Math.pow(j-3.14));=>>> =>doubt?
// console.log(Math.sqrt(j,2));=>>> =>doubt?
// console.log(Math.abs(j));=>>> =>doubt?
// console.log(Math.min(j));=>>> =>doubt?
// console.log(Math.max(j));=>>> =>doubt?

// let x = 12;
// let n = 123;
// let x2 = 1234;
// let xx = 12345;
// let x1;
// x1 = Math.PI;
// console.log(Math.max(x,n,x2,xx,x1));
// console.log(Math.min(x,n,x2,xx,x1));
// why cant we write adding string is the min and maximum values;====>


// ?\doubt??????==>
// document.getElementById("mybutton").onclick = function(){
// 
// a = document.getElementById("a text").value;
// a = Number(a);
// 
// b = document.getElementById("b text").value;
// b = Number(b);
// 
// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// 
// document.getElementById("c label").innerHTML = "side c:" + c;
// 
// }

// let count = 0;
// document.getElementById("decreasebtn").onclick = function(){
//     count -= 1;
//     document.getElementById("countlabel").innerHTML = count;
// }
// document.getElementById("resetbtn").onclick = function(){
//     count = 0;
//     document.getElementById("countlabel").innerHTML = count;
// }
// document.getElementById("increasebtn").onclick = function(){
//     count += 1;
//     document.getElementById("countlabel").innerHTML = count;
// }

// let datas = [
//     {
//         question: "what is your gender ?",
//         options: ["Male", "Female", "Gay", "None"]
//     },
//     {
//         question: "what is your age ?",
//         options: ["< 18>", "> 18", "baby", "old man"]
//     }

// ];
// let content = "";

// datas.forEach(data => {
//     content += `
//         <h2>${data.question}</h2>
//         <select name="options" id="">
//             <option>${data.options[0]}</option>
//             <option>${data.options[1]}</option>
//             <option>${data.options[2]}</option>
//             <option>${data.options[3]}</option>
//         </select>
//     `;
// });

// document.body.innerHTML += content;



// window.onload = () => {
//     const container = document.querySelector('.container');

//     const SIZE = 3;
//     const EQ = 3;
//     let content = "";

//     const images = ["data:image/jpeg;base64,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", "https://th.bing.com/th/id/OIP.B2H83ms9zt95YkVAXM29FAHaHN?w=149&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7", "https://th.bing.com/th/id/OIP.s6hmrfe0XBoMbQZdnEiWqwHaHa?rs=1&pid=ImgDetMain"]



//     function getRandom(avaliablePlaces) {
//         const places = Object.keys(avaliablePlaces);
//         const random = Math.floor(Math.random() * places.length);    
//         delete avaliablePlaces[places[random]]
//         return places[random];
//     }

//     for (let j = 0; j < SIZE; j++) {
//         content += `
//         <div class='item'>
//             <div class='item-bg'></div>
//         </div>
//         `;
//     }

//     for (let i = 0; i < SIZE; i++) {
//         container.innerHTML += `
//             <div class='inner'>
//                 ${content}
//             </div>
//         `;
//     }


//     const items = document.getElementsByClassName('item');
//     const itemsBg = document.getElementsByClassName('item-bg');


//     let avaliablePlaces = {};
//     for (let i = 0; i < items.length; i++) {
//         avaliablePlaces[i] = true;
//     }

//     for(let i = 0; i < items.length; i++){
//         const pos = getRandom(avaliablePlaces);
//         itemsBg[pos].style.backgroundImage = `url(${images[i % EQ]})`;
//         itemsBg[pos].style.backgroundSize = 'cover';
//         itemsBg[pos].style.display = 'none';
//     }

//     let opened = 0;
//     let list = [];
//     let score = 0;

//     for (let i = 0; i < items.length; i++) {
//         const item = items[i];

//         item.addEventListener("click", () => {
//             if(opened < EQ){            
//                 opened += 1;
//                 score += 1;
//                 document.querySelector('.score').innerHTML = "Score: "  + score;
//                 itemsBg[i].style.display = 'block';
//                 list.push(i);
//                 if(opened === EQ){
//                     let allEqual = true;
//                     for(let i = 1; i < list.length; i++){
//                         if(itemsBg[list[i]].style.backgroundImage != itemsBg[list[i - 1]].style.backgroundImage){
//                             allEqual = false;
//                         }
//                     }


//                     if(allEqual){
//                         opened = 0;
//                         list.forEach(li => {
//                             items[li].style.border = "5px solid lime";
//                         list = [];
//                     });

//                     }else{
//                         setTimeout(() => {
//                             list.forEach(li => {
//                                 itemsBg[li].style.display = "none";
//                             });
//                             opened = 0;
//                             list = [];
//                         }, 1000);
//                     }

                    
//                 }

//             }
//         });
//     }


// }


// console.log("hei")
// let aged = 21
// document.getElementById("myelements").innerHTML = "This text is changed using JavaScript" + aged;
let datas = [
{
    question:"what is your name ?",
    option:[
        "naresh","mahesh","suresh"
    ]
}
];
let content;
datas.forEach(data =>)
{
    content += `
    <h1>${datas.question}</h1>
    <select name="option" id=""></select>
    <option></option>
    <option></option>
    <option></option>
    <option></option>

    

}

// let count = 0;
// document.getElementById("D").onclick = function(){
    // count -= 1;
    // document.getElementById("C").innerHTML = count;
// }
// document.getElementById("R").onclick = function(){
    // count = 0;
    // document.getElementById("C").innerHTML = count;
// }
// document.getElementById("I").onclick = function(){
    // count +=1;
    // document.getElementById("C").innerHTML = count;
// 
// }
// let k;
// let l;
// let m;
// let n;
// document.getElementById("rollbtn").onclick = function(){
    // k = Math.floor(Math.random()*3);
    // l = Math.floor(Math.random()*6);
    // m = Math.floor(Math.random()*9);
    // n = Math.floor(Math.random()*12);
// 
    // document.getElementById("klabel").innerHTML = k;
    // document.getElementById("llabel").innerHTML = l;
    // document.getElementById("mlabel").innerHTML = m;
    // document.getElementById("nlabel").innerHTML = n;
// }
// let data = [
    // {
        // Question:"who's u r first crush ?",
        // Options:["student","madam","aaya","poltician"]
    // },
    // {
        // Question:"At what's age u r first love?",
        // Options:["<10","<15","<18","pfn"]
    // },
    // {
        // Question:"what's age u r first lunch ?",
        // Options:["1","3","4","what the crap"]
    // }
// 
// ]
// let content ="";
// data.forEach(data =>
    // content += `
    // <h3>${data.Question}</h3>
    // <select name="Options" id="">
    // <option>${data.Options[0]}</option>
    // <option>${data.Options[1]}</option>
    // <option>${data.Options[2]}</option>
    // <option>${data.Options[3]}</option>
    // </select>
    // `);
    // document.body.innerHTML += content;

    // let count = 0;
    // var buttonElement = document.getElementsById("d")
    // document.getElementsByName("d").onclick = function(){
        // count -= 1;
        // document.getElementsByName("c").innerHTML = count;
    // }
    // var buttonElement = document.getElementsById("r")
    // document.getElementsByName("r").onclick = function(){
        // count = 0;
        // document.getElementsByName("c").innerHTML = count;
    // }
    // var buttonElement = document.getElementsById("i")
    // document.getElementsByName("i").onclick = function(){
        // count += 1;
        // document.getElementsByName("c").innerHTML = count;
    // }

let data = [
    {
    Question : "whats u r name?",
    Options: ["varun","arun","tarun"]
    },
    {
    Question : "whats u r age?",
    Options: ["run","not a run","18"]    
    },
    {
    Question : "whats u r sex?",
    Options: ["pf nto say ","female","tarun"]
    },

]

let matter = "";
data.forEach(data =>
matter += `
<h2>${data.Question}</h2>
    <label for="Options">${data.Options[0]}</label>
    <input type = "radio"  name="maw" id="Options" >
    <label for="Options">${data.Options[1]}</label>
    <input type = "radio"   name="ma" id="Options" >
    <label for="Options">${data.Options[2]}</label>
    <input type = "radio"  name="m" id="Options" >

   
`);
document.body.innerHTML += matter; 
    
    // 
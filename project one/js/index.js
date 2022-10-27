/*
 title: js file of para generator .
 desc: this file was creating for a simple js para convertor project. 
 date: 27 / 10 / 2022
 mood: 🛬 
*/
//  selecting elements 
const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");
//  Generator function 
const generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //  foor loop 🎧 
    for(let  i = 0; i < n; ++i){
        const random = (Math.random() * 25).toFixed(0);
        //  text == letters[random]
        text += letters[random];
    }
    //  return something
    return text;
};
//  onother Array function #️⃣ 
  const generatePara = () => {
    const numOfWords = Number(input.value);
    //  para 
    const para = document.createElement("p");
    // data
    let data = ""; 
    //  for loop[*__!]
      for (let i = 0; i < numOfWords; ++i) {
    const randomNumber = (Math.random() * 15).toFixed(0);
    data += generateWord(randomNumber);
    data += " ";
  }
    // inner text 
    para.innerText = data;
    para.setAttribute("class", "paras");

    //  append
    container.append(para);
  }
//   change theme in js 
let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('change', ()=> {
  document.body.classList.toggle('dark');
})

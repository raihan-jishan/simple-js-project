/*
  title: App file for sunctionality . 
  frsc: A simplevalnila js file for written simple js. 
  date: 27 / 10/ 2022
  mood: nothing. 
  battery:   🔋 69%


*/
//  selecting elements
const name = document.getElementById('name');
const tagCon = document.querySelector('.tags'); 
//  function task If : else
 const addName = () => {
    if(name.value === ""){
        return null;
    }

    const tag = document.createElement('div'); 
    tag.setAttribute('class', 'tag');
    //  finally written code 
    tag.innerHTML  = `Hey I am ${name.value}`;

    // append
    tagCon.append(tag);
 }
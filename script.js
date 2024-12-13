//fetch is used to extract the data from the API
fetch('https://emoji-api.com/emojis?access_key=634bc38fd77938fd7c49c4a716e834888c8e28c2')
//.then is to represent once we have the data, what do we do then, and we are taking the result and converting it to JSON format.
    .then(res => res.json())
//once the data is loaded, we are calling the function upon this data that would perform some actions.
    .then(data => loadEmoji(data))


function loadEmoji(data){

const btn = document.querySelector("#emoji");
const name = document.querySelector("#emoji-name");
const group = document.querySelector("#emoji-group");
const subgroup = document.querySelector("#emoji-sg");
var index = Math.floor(Math.random()*1859);
btn.addEventListener("mouseover", ()=> {
    index = Math.floor(Math.random()*1859);
    emoji.innerHTML = data[index].character;
    name.innerHTML = "Name: "+ data[index].unicodeName.slice(5, data[index].unicodeName.length);;;
    group.innerHTML = "Group: "+ data[index].group;
    subgroup.innerHTML = "Sub-Group: " + data[index].subGroup;
})
  
btn.addEventListener("click", ()=> {
    index = Math.floor(Math.random()*1859);
    emoji.innerHTML = data[index].character;
    name.innerHTML = "Name: "+ data[index].unicodeName.slice(5, data[index].unicodeName.length);;;
    group.innerHTML = "Group: "+ data[index].group;
    subgroup.innerHTML = "Sub-Group: " + data[index].subGroup;
})
}
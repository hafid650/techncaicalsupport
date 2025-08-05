// اسم المستخدم
let userName = localStorage.getItem("name");
// عرض اسم المستخدم
document.getElementById("greeting").innerHTML = `مرحبا، ${userName}`;


let slides = document.querySelectorAll(".slide");

const searchForm=document.getElementById('search');

searchForm.addEventListener('submit', function(event){
event.preventDefault();
removeHighlight();
const searchText =searchForm.searchFeild.value;

const content = document.getElementById('content');

const tags=content.querySelectorAll('*');

for(let tag of tags){
const text = tag.innerHTML;

if(searchText && text.includes(searchText)){
   
    tag.innerHTML=text.replaceAll(searchText,`<span class="highlight"> ${searchText} </span>`)

}
}
 searchForm.searchFeild.value="";
 function removeHighlight(){
    const content = document.getElementById('content');
    const tags = content .querySelectorAll('*');
    for(let tag of tags){
        tag.classList.remove('highlight');
    }
 }

})



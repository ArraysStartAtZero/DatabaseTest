const link= "https://spreadsheets.google.com/feeds/list/1fHsRSd_Tmfh9H42ZnznUGrsS9jUri0Q-zcFDmpPlJ_M/od6/public/values?alt=json";
window.addEventListener("DOMContentLoaded", getData);

function getData() {
  fetch(link)
    .then(res => res.json())
    .then(handleData);
}

function handleData(data) {
  const myData = data.feed.entry;
  console.log("myData - console");
  console.log(myData);
  myData.forEach(showData);
}
function showData(singleRowData) {
  console.log(singleRowData - console);
  console.log(singleRowData);
  
  
  const template = document.querySelector('template').content;
  const clone = template.cloneNode(true);
  const h2 = clone.querySelector('h2');
  h2.textContent = singleRowData.gsx$pcb.$t;

  const h4_span = clone.querySelector('h4 span');
  h4_span.textContent = singleRowData.gsx$price.$t;

  document.querySelector('main').appendChild(clone);
}


const imglink = singleRowData.gsx$images.$t
imglink = "<img src=" + singleRowData.gsx$images + ">";

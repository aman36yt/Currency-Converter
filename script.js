const currFirst = document.querySelector("#currency-first");
const currSecond = document.querySelector("#currency-second");
const rateFirst = document.querySelector("#worth-first");
const rateSecond = document.querySelector("#worth-second");
const para = document.querySelector(".exchange-amount");

let url ="https://v6.exchangerate-api.com/v6/a4cf94b080381a37782d690d/latest/";

async function updateRate(){
   let res = await axios.get(`${url+currFirst.value}`);
   let converted = res.data.conversion_rates[currSecond.value];
   rateSecond.value = (rateFirst.value*converted).toFixed(2);
   para.innerText = `1 ${currFirst.value} = ${converted +" "+ currSecond.value} `;
};
updateRate();

currFirst.addEventListener("change",updateRate);
currSecond.addEventListener("change",updateRate);
rateFirst.addEventListener("change",updateRate);
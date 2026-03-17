const inputNumber = document.getElementById("input-number");
const inputName = document.getElementById("input-name");
const inputCVV = document.getElementById("input-cvv");

const viewNumber = document.getElementById("view-number");
const viewName = document.getElementById("view-name");
const viewCVV = document.getElementById("view-cvv");
const viewExpiry = document.getElementById("view-expiry");

const card = document.getElementById("card-inner");

const daySel = document.getElementById("exp-day");
const monthSel = document.getElementById("exp-month");
const yearSel = document.getElementById("exp-year");

/* DIAS */
for(let i=1;i<=31;i++){
daySel.innerHTML += `<option>${String(i).padStart(2,"0")}</option>`;
}

/* MESES */
const months=["01","02","03","04","05","06","07","08","09","10","11","12"];
months.forEach(m=>{
monthSel.innerHTML += `<option>${m}</option>`;
});

/* AÑOS dinámicos (hoy + 20 años) */
const currentYear = new Date().getFullYear();

for(let i = 0; i < 20; i++){
let year = currentYear + i;
yearSel.innerHTML += `<option>${year}</option>`;
}
/* EXP */
function updateExpiry(){
viewExpiry.innerText = `${daySel.value||"DD"}/${monthSel.value||"MM"}/${yearSel.value?yearSel.value.slice(-2):"YY"}`;
}

daySel.onchange = updateExpiry;
monthSel.onchange = updateExpiry;
yearSel.onchange = updateExpiry;

/* NUMERO */
inputNumber.addEventListener("input",()=>{
let value = inputNumber.value.replace(/\D/g,"").slice(0,16);
value = value.replace(/(.{4})/g,"$1 ").trim();
inputNumber.value = value;
viewNumber.innerText = value || "**** **** **** ****";
});

/* NOMBRE */
inputName.addEventListener("input",()=>{
let value = inputName.value.replace(/[^a-zA-Z\s]/g,"").toUpperCase();
inputName.value = value;
viewName.innerText = value || "NOMBRE";
});

/* CVV */
inputCVV.addEventListener("focus",()=>{
card.classList.add("flip");
});

inputCVV.addEventListener("blur",()=>{
card.classList.remove("flip");
});

inputCVV.addEventListener("input",()=>{
let value = inputCVV.value.replace(/\D/g,"").slice(0,4);
inputCVV.value = value;
viewCVV.innerText = value || "***";
});
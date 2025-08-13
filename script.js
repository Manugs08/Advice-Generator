
const showAdvice= async()=>{
    const guidance=await axios("https://api.adviceslip.com/advice");
    document.querySelector(".advice").textContent=`“${guidance.data.slip.advice}”`;
    document.querySelector(".adviceNumber").textContent=`ADVICE #${guidance.data.slip.id}`
}

document.addEventListener("DOMContentLoaded", showAdvice )
const btn=document.querySelector(".btn")
const btnImg = document.querySelector(".btnImg");
btn.addEventListener("click",()=>{
    showAdvice();
    btnImg.classList.add("animar");
    btnImg.addEventListener("animationend", function handler() {
        btnImg.classList.remove("animar");
        btnImg.removeEventListener("animationend", handler);
    });
})
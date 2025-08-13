
const showAdvice= async()=>{
    const guidance=await axios("https://api.adviceslip.com/advice");
    document.querySelector(".advice").textContent=guidance.data.slip.advice;
    document.querySelector(".adviceNumber").textContent=`ADVICE #${guidance.data.slip.id}`
}

const btn=document.querySelector(".btn")
btn.addEventListener("click",showAdvice)
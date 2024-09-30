function sanitize(input){
    input=input.toLowerCase()
    input=input.trim()

    return input
}

function percentuale(input){
    perc = c*100/7
    console.log("Risposte corrette: " + c + " --> " + Math.floor(perc) + "%")

    return perc

}

 let c = 0
 let perc
 
 let ans1 = prompt("1. Chi ha scritto la Divina Commedia?")
 while(ans1 === null) {
     ans1 = prompt("1. Chi ha scritto la Divina Commedia?")
 }
 ans1 = sanitize(ans1)
 
 if(ans1 === "dante") {
     c++
 } else {
     alert("La risposta corretta era: dante")
 }
 
 let ans2 = prompt("2. Capoluogo della Puglia")
 while(ans2 === null) {
     ans2 = prompt("2. Capoluogo della Puglia")
 }
 ans2 = sanitize(ans2)
 
 if(ans2 === "bari") {
     c++
 } else {
     alert("La risposta corretta era: bari")
 }
 
 let ans3 = prompt("3. Cosa c'è dopo il due")
 while(ans3 === null) {
     ans3 = prompt("3. Cosa c'è dopo il due")
 }
 ans3 = sanitize(ans3)
 
 if(ans3 === "tre") {
     c++
 } else {
     alert("La risposta corretta era: tre")
 }
 
let ans4 = prompt("4. Chi ha vinto il mondiale 2022?")
 while(ans4 === null) {
     ans4 = prompt("4. Chi ha vinto il mondiale 2022?")
 }
 ans4 = sanitize(ans4)
 
 if(ans4 === "argentina") {
     c++
 } else {
     alert("La risposta corretta era: argentina")
 }
 
 let ans5 = prompt("5. Il migliore amico dell'uomo")
 while(ans5 === null) {
     ans5 = prompt("5. Il migliore amico dell'uomo")
 }
 ans5 = sanitize(ans5)
 
 if(ans5 === "cane") {
     c++
 } else {
     alert("La risposta corretta era: cane")
 }
 
 let ans6 = prompt("6. Chi ha vinto Sanremo 2024?")
 while(ans6 === null) {
     ans6 = prompt("6. Chi ha vinto Sanremo 2024?")
 }
 ans6 = sanitize(ans6)
 
 if(ans6 === "angelina") {
     c++
 } else {
     alert("La risposta corretta era: angelina")
 }
 
 let ans7 = prompt("7. La limonata è fatti di?")
 while(ans7 === null) {
     ans7 = prompt("7. La limonata è fatti di?")
 }
 ans7 = sanitize(ans7)
 
 if(ans7 === "limoni") {
     c++
 } else {
     alert("La risposta corretta era: limoni")
 }
 
 percentuale()
 let c = 0
 let media
 
 let ans1 = prompt("1. Chi ha scritto la Divina Commedia?")
 while(ans1 === null) {
     ans1 = prompt("1. Chi ha scritto la Divina Commedia?")
 }
 
 ans1 = ans1.toLowerCase()
 ans1 = ans1.trim()
 
 if(ans1 === "dante") {
     c++
 } else {
     alert("La risposta corretta era: dante")
 }
 
 let ans2 = prompt("2. Capoluogo della Puglia")
 while(ans2 === null) {
     ans2 = prompt("2. Capoluogo della Puglia")
 }
 ans2 = ans2.toLowerCase()
 ans2 = ans2.trim()
 
 if(ans2 === "bari") {
     c++
 } else {
     alert("La risposta corretta era: bari")
 }
 
 let ans3 = prompt("3. Cosa c'è dopo il due")
 while(ans3 === null) {
     ans3 = prompt("3. Cosa c'è dopo il due")
 }
 ans3 = ans3.toLowerCase()
 ans3 = ans3.trim()
 
 if(ans3 === "tre") {
     c++
 } else {
     alert("La risposta corretta era: tre")
 }
 
let ans4 = prompt("4. Chi ha vinto il mondiale 2022?")
 while(ans4 === null) {
     ans4 = prompt("4. Chi ha vinto il mondiale 2022?")
 }
 ans4 = ans4.toLowerCase()
 ans4 = ans4.trim()
 
 if(ans4 === "argentina") {
     c++
 } else {
     alert("La risposta corretta era: argentina")
 }
 
 let ans5 = prompt("5. Il migliore amico dell'uomo")
 while(ans5 === null) {
     ans5 = prompt("5. Il migliore amico dell'uomo")
 }
 ans5 = ans5.toLowerCase()
 ans5 = ans5.trim()
 
 if(ans5 === "cane") {
     c++
 } else {
     alert("La risposta corretta era: cane")
 }
 
 let ans6 = prompt("6. Chi ha vinto Sanremo 2024?")
 while(ans6 === null) {
     ans6 = prompt("6. Chi ha vinto Sanremo 2024?")
 }
 ans6 = ans6.toLowerCase()
 ans6 = ans6.trim()
 
 if(ans6 === "angelina") {
     c++
 } else {
     alert("La risposta corretta era: angelina")
 }
 
 let ans7 = prompt("7. La limonata è fatti di?")
 while(ans7 === null) {
     ans7 = prompt("7. La limonata è fatti di?")
 }
 ans7 = ans7.toLowerCase()
 ans7 = ans7.trim()
 
 if(ans7 === "limoni") {
     c++
 } else {
     alert("La risposta corretta era: limoni")
 }
 
 media = c*100/7
 console.log("Risposte corrette: " + c + " --> " + Math.floor(media) + "%")
 



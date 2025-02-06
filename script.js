let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    let user1 = document.getElementById("user1");
    let user2 = document.getElementById("user2");
    let s1 = document.getElementById("s1");
    s1.innerHTML = user1.value;
    let s2 = document.getElementById("s2");
    s2.innerHTML = user2.value;
    let d1 = document.getElementById("dice1");
    d1.classList.add("roll");
    let d2 = document.getElementById("dice2"); 
    d2.classList.add("roll");
    let n1  = Math.round(Math.random()*5)+1;
    let n2 = Math.round(Math.random()*5)+1;
    setTimeout(()=>{
        d1.innerHTML = n1;     
        d2.innerHTML = n2;
        let h = document.getElementById("h3");
        if(n1>n2){
            h.innerHTML = "Winner is " + user1.value;
        }
        else if(n1<n2){
            h.innerHTML = "Winner is " + user2.value;
        }   
        else{
            h.innerHTML = "It's a draw"
        }
        d1.classList.remove("roll");
        d2.classList.remove("roll");
    },1000);
    d1.innerHTML = "";     
    d2.innerHTML = "";
})


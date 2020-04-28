let counter= document.querySelector('h1');
let count=1;
setInterval(() => {
    
    counter.innerText=count;
    count++;
    if(count>4) 
    location.replace('CarWorld%Signup.html');
}, 1000);
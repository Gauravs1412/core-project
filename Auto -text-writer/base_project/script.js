const text = "my viewers on the twith are best";
// console.log(text.length)

let index = 0;

function writeText(){
    document.body.innerText = text.slice(0,index);
    index++;

    if(text.length<index){
        index = 0;
    }

    
}

setInterval(writeText,100)

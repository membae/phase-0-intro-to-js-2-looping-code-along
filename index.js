function writeCards(names,event){
    let messages=[];
    names = ["Guadalupe", "Ollie", "Aki"];
    event = "surprise";
    for(let i=0;i<names.length;i++){
        let message =`Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message);
    }
    return messages;
}
function countDown(number){
    for(let i=number;i>=0;i--){
        console.log(i);
    }
}
countDown(10);

// var inpvalue = document.getElementById('inp')
var intervel ;
var count = 0;
var isStarted = false;

// function FanRotate (){
//     console.log(inpvalue)
//  document.getElementById('myImage').style.transform = `rotate(${inpvalue.value}deg)`

 


// }

function timer (){
    count++
    console.log(count)
    document.getElementById('myImage').style.transform = `rotate(${count}deg)`

 

}

function start (){
    if(isStarted){
        return
    }
    isStarted= true;

    intervel= setInterval(timer , 1)
}


console.log(timer)

function stop(){

    clearInterval(intervel)

}


    

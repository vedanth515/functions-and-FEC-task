
function herodetails(){

    obj={
       hero_name:"prabhas",
       movie_name:"salar",
       director_name:"neel",
       plot_of_movie:"friendship"
    }
      //  console.log(`hero_name:${obj.hero_name} moviename:${obj.moviename} directorname:${obj.directorname} plotofmovie:${obj.plotofmovie}`)
       console.log(obj);
       
   }
   herodetails()



for(i=0;i<=10;i++){
    console.log(i);
    
}


for(i=10;i>0;i--){
    console.log(i);
    
}


for(i=-1;i>=-10;i--){
    console.log(i);
}
  


for(i=-10;i<=-1;i++){
    console.log(i);
}



var a=-0;
while(a>=-10){
    a--
    console.log(a);
}


var a=-10;
while(a<=-1){
    a++
    console.log(a);
}


var userInput=prompt("enter a digit");
console.log(typeof userInput)

for( i=0;i<userInput.length;i++){
    if(userInput[i] % 2 == 0){
        console.log(userInput[i],"even number")
    }else{
        console.log(userInput[i],"odd number")
    }
}


/print Even and Odd using while Loop.///

var userInput=prompt("enter a digit");
var i=0;
while(i<userInput.length){
    if(userInput[i] % 2 == 0){
        console.log(userInput[i],"even number")
    }else{
        console.log(userInput[i],"odd number")
    }
    i++
}



var userInput=prompt("enter a digit");
var sumEven=0;
var sumOdd=0;
for(i=0;i<userInput.length;i++){
    if(userInput[i] % 2 == 0){
        sumEven += Number(userInput[i])
    }else{
        sumOdd += Number(userInput[i])
    }
}
console.log(sumEven,"even sum")
console.log(sumOdd,"oddsum")




var userInput=prompt("enter a digit");
var sumeven=0;
var sumodd=0;
i=0;
while(i<userInput.length){
    if(userInput[i] % 2 == 0){
        sumeven += Number(userInput[i])
    }else{
        sumodd += Number(userInput[i])
       
    }
    i++
}
console.log(sumeven,"even sum");
console.log(sumodd,"odd sum");




var userInput=prompt("enter a digit");
var sumeven=1;
var sumodd=1;
i=1;
while(i<userInput.length){
    if(userInput[i] % 2 == 0){
        sumeven *= Number(userInput[i])
    }else{
        sumodd *= Number(userInput[i])
       
    }
    i++
}
console.log(sumeven,"even sum");
console.log(sumodd,"odd sum");




let userInput=prompt("enter a digit");
let number=Number(userInput);
enter = 0;
for(i=2;i<number;i++){
    if(number % i == 0){
        enter++;
        console.log("not prime")
        break
    }
}
if(enter == 0){
    console.log("prime")
}





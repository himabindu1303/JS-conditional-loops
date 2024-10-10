for(let a=1;a<=10;a++){                                   //1st
    console.log("a= "+a);   
}

var a=1;
while(a<=10){
    console.log("a= "+a);
    a++;    
}

var a=1;
do{
    console.log("a= "+a);
    a++;
}
while(a<=10)


for(let b=1;b<=10;b++){                                     //2nd
    if(b%2==0){
        console.log(b+" is a even number");        
    }
}

var b=10;
while(b>=1){
    if(b%2==0){
        console.log(b+" is a even number");        
    }
    b--;
}

var b=1;
do{
    if(b%2==0){
        console.log(b+" is a even number");        
    }
    b++;
}while(b<=15)


for(c=1;c<=15;c++){                                              //3rd
    if(c%2==1){
        console.log(c+" is a odd number");       
    }
}

var c=10;
while(c<=20){
    if(c%2==1){
        console.log(c+" is a odd number");       
    }
    c++;
}

var c=30;
do{
    if(c%2==1){
        console.log(c+" is a odd number");       
    }
    c++; 
}while(c<=50)


var a=40;                                                           //4th
if(a>=90){
    console.log("GRADE A, Excellent")  
}else if(a>=75 && a<90){
    console.log("GRADE B, Nice")    
}else if(a>=45 && a<75){
    console.log("GRADE C, Good")    
}else if(a>=35 && a<45){
    console.log("GRADE D, Fair")    
}else{
    console.log("GRADE E, Keep Working hard")   
}
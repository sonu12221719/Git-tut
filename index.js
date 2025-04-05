// var str1="sonu"
// var str2="kumar"

// let i=0;
// var str="";

// while(i < str1.length && i < str2.length){
//     str+=str1[i]+str2[i];
//     i++;
// }

// while(i < str1.length){
//     str+=str1[i++];
// }

// while(i < str2.length){
//     str+=str2[i++];
// }

// console.log(str);


// let a;
// console.log(a);

// let b=null;
// console.log(b);

// if([]){
//     console.log("array is truthy");
// }
// else{
//     console.log("array is falsy");
// }

// console.log([]==false);

const waitFor2Seconds = () => {
    const startTime = Date.now();
    while(Date.now() - startTime < 2000){
        // do nothing
    }
    console.log("2 seconds done");
}

waitFor2Seconds();




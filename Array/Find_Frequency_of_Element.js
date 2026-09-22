const getting = [10,20,30,50,10,20,10,80,20,2,50,40,10,15];

// method 1

const obj1={}

for(let i=0;i<getting.length;i++){

    if(obj1[getting[i]]){
        obj1[getting[i]]++
    }
    else{
        obj1[getting[i]]=1
    }
}

console.log(obj1);

// method 2
const getting2 = [11,22,33,44,11,44,55,12,33];

let obj2={}
for(let val of getting2){
    
    if(obj2[val]){
        obj2[val]++
    }
    else{
        obj2[val]=1;
    }
}
console.log(obj2)

// method 3

// yaha pe ye yad rakhna hai ki accumate me ka dal na hai initally like acc=0 or accu=[] or accu={}
const method3 = getting2.reduce((accumate,curr,index)=>{

    if(accumate[curr]){
        accumate[curr]++
    }
else{
    accumate[curr]=1
}
    return accumate;
},{})

console.log(method3)
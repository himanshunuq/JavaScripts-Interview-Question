// find the maximum element of array

const arr=[12,44,55,53,54,13,33];
let maxx=arr[0];

for(let i =0;i<arr.length;i++){

    if(arr[i]>maxx){

        maxx=arr[i];
    }
}

console.log(maxx)
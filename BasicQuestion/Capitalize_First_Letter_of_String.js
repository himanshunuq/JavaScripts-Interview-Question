/* 
example = "himanshu shekhar done" ---> "Himanshu shekhar done"
*/


const cap="himanshu shekhar done";
// console.log(cap.slice(1))

console.log(cap.toUpperCase()); //HIMANSHU SHEKHAR DONE
console.log(cap.toLowerCase()); //himanshu shekhar done

// method 1

let result=cap[0].toUpperCase();
//console.log(result)

for(let i=1;i<cap.length;i++){

    result=result+cap[i]
}

console.log(result);

// method 2

let result2=cap.charAt(0).toUpperCase() + cap.slice(1)
console.log("Method 2: ",result2)



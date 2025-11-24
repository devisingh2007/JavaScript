// var array=[25,36,55,77,33,99,11,55,36];
// var num=0;
// for(var a=0; a<array.length; a++)
// {
//     if(array[a]>num)
//     {
//         num=array[a];
//     }
// }
// console.log(num);

// //---==>>
// // using function splet opretor
// function max(arr)
// {
//  let rev=Math.max(...arr);
//  return rev;
// }

// max(array);
// //  <<==---

// const counts = {};
// let array2 = ["a", "b", "c", "c", "a", "a"];

// array2.forEach(item => {
//   counts[item] = (counts[item] || 0) + 1;
  
// });



// const counts = {};
// let str = "Raunak shahu";

// for (let i = 0; i < str.length; i++) {
//   let item = str[i];

//   if (counts[item]) {
//     counts[item] += 1;
//   } else {
//     counts[item] = 1;
//   }
// }

// console.log(counts)

// str1="hello";

// let obj={}
// for(let i=0; i<str1.length;i++)
// {
//   if(obj[str1[i]])
//   {
//     obj[str1[i]]++;
//   }
//   else{
//     obj[str1[i]]=1;
//   }
// }
// console.log(obj);

//-->  Remove Duplicates From an array  <--

let array3 = [2,556,8,6,3,9,2,3,6,9,5,2,8,3,9,];
let Remove=[];
let obj1={}
for(let i=0; i<array3.length; i++)
{  let item = array3[i];
  if(!obj1[item])
  {
    Remove.push(item);
    obj1[item]=true;
  }
 

}
console.log(Remove)
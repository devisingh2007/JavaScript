// var heading = document.getElementById("heading");
// console.log(heading);

// const smallheading = document.getElementsByClassName("smallheading");
// const smallheading2 = document.getElementsByClassName("smallheading");
// console.log(smallheading2);

// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// heading.style.backgroundColor = "red";
// heading.style.color="white";
// smallheading2[0].style.backgroundColor="blue";
// console.log(smallheading2.length);


//  heading=document.querySelector("#heading");
// console.log(heading);

// heading=document.querySelector("h2");

// console.log(heading);

 document.getElementById("demo").innerHTML+=" &nbsp; hello worls";

const newHeading = document.createElement("h1");
const newpera = document.createElement("p");
newHeading.textContent = "This is a new headi";
newpera.textContent = "This is a new pera ";
document.body.appendChild(newHeading);
document.body.appendChild(newpera);
newpera.style.fontSize="50px";
newpera.style.backgroundColor="grey";
newpera.style.margin="0";
newpera.style.display="block";

newpera.style.width="50vw";
newpera.style.height="10vw";




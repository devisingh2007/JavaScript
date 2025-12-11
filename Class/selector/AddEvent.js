const name1=document.querySelector('#name1');
const submit=document.querySelector('button');



//data will be used in two ways...

name1 = name1.value.split("");

//travel-> starting from the zeroth index -> name array...

function nameCheck(){
name1.forEach((data)=>{
    if(data != "!" && data != "@" && data != "&"){
        console.log("the given character doesn't contain any special character symbols" + data );
    }
    else{
        console.log("the current character is equal to one of the given special character " + data);
    }
})
};



// step-2 we must apply the event  listner on the dependent-> submit btn

submit.addEventListener('click',()=>
{
    console.log("user pressed the submit button and the user name is "+name1.value);
    name1.value="";
})

submit.addEventListener('click',function()
{
    
    console.log("user pressed the submit button and the user name is "+name1.value);
})

submit.addEventListener('click',complete)

function complete()
{
    console.log("user pressed the submit button and the user name is "+name1.value);

}

name1.addEventListener('keypress',(event)=>
{
    if(event.key==='Enter')
    {
        nameCheck();
    }
});

const hover=document.querySelector('#card');
console.log(hover);
hover.addEventListener("mouseenter",()=>
{
    hover.style.backgroundColor="yellow";
});
hover.addEventListener("mouseleave",()=>
{
    hover.style.backgroundColor="green";
});

// puriwindow me kisi bhi element pe vo pura elsement ya uske attributes aa jaye 
//--> attribute pe double click krne pe
document.addEventListener('dblclick', (event) => {
    console.log(event.target.getAttribute('placeholder'));
});

//-->element pe double click krne pe
document.addEventListener('dblclick', (event) => {
    console.log(event.target);
});

// mouse ke cursor ki location ko track krna
document.addEventListener('mousemove',(event) => {
    console.log(`the current mouse location is x:${event.clientX}  Y:${event.clientY}`);

});
// focus event -> when the user focuses on the input field
name1.addEventListener('focus',()=>
{
    name1.style.border="15px ridge red";
});


//     -------------------------------------------------------------------------------------------------------------  \\
// mouse scroll krne pe event
document.addEventListener('wheel',(event)=>
{
    if(event.deltaY>0)
    {
        console.log("the user is scrolling down");
    }
    else if(event.deltaY<0)
    {
        console.log("the user is scrolling up");
    }
    else
    {
        console.log("no scrolling");
        
    }
});

//      -------------------------------------------------------------------------------------------------------------        \\

var h1=document.querySelector('h1');

document.addEventListener('copy',(event)=>
{
    console.log(event.target);
});
document.addEventListener('cut',(event)=>
{
    h1.style.color="red";
});
document.addEventListener('paste',(event)=>
{
    h1.style.color="green";
});
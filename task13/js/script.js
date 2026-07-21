const element = document.querySelectorAll(".item")
const subbutton = document.querySelector(".btn")
console.log(element);


subbutton.addEventListener(`click`,function(e){ 
    if(element[0].value===""||element[1].value===""||element[2].value==="")
    {
        alert("Please fill all fields");
        return;
    }
    if(element[1].value< 18)
    { alert( `underage`)}
    else {
         alert (`submission complete`)
    }

    console.log( `name: ${element[0].value}`);
    console.log( `age: ${element[1].value}`);
    console.log( `job: ${element[2].value}`);

})
 
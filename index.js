const circle = document.getElementById("circle");
const btn = document.getElementById("btn");


btn.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle=document.createElement("span");
    circle.classList.add("circle");

    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    console.log("inside circle",circle);
    btn.appendChild(circle);

    setTimeout(()=>circle.remove(),800);

})

// btn.addEventListener("mousedown", (e) => {
//     const x = e.clientX;
//     const y = e.clientY;

//     const buttonTop = e.target.offsetTop;
//     const buttonLeft = e.target.offsetLeft;

//     const xInside = x - buttonLeft;
//     const yInside = y - buttonTop;

//     circle.style.top = yInside + "px";
//     circle.style.left = xInside + "px";
    
//     circle.style.transform=`scale(0)`;
//     circle.style.opacity="0";

// })


// btn.addEventListener("mouseup", (e) => {
//     // circle.style.transitionDuration="0s";
    

//     circle.style.opacity=`1`;
//     circle.style.transform=`scale(1)`;


// })
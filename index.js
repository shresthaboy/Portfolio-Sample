const myImg = document.querySelector("img");
console.log(myImg);

myImg.onclick = () =>{
    const mySrc = myImg.getAttribute("src");
    if(mySrc === "images/pic01.png"){
        myImg.setAttribute("src","images/pic02.png");
    }
    else{
        myImg.setAttribute("src","images/pic03.png");
    }
};
let btn = document.querySelector("button")
let parant = document.querySelector(".parent")
let box = document.querySelectorAll(".box-1")
btn.addEventListener(("click") , ()=>{
    parant.style.visibility = "visible"
    let number = Math.floor(Math.random() * box.length )
    let img = document.createElement("img")
            img.style.width = "100%"
            img.style.height = "100%"
            for(let [index,element] of box.entries()){
                console.log(element);
                element.addEventListener(("click") , ()=>{
                    if(index + 1 === number){
                        img.src = "./img/bird.jpg"
                        box[index].appendChild(img)
                        alert("You Are Find Bird")
                        setTimeout(()=>{
                            location.reload()
                        },2000)
                    }                    
                    else{
                        element.classList.add("cross")
                    }
                })
            }
})
const imageClass = document.getElementById('images');
let images = [];

for(let i=1; i<=66; i++)
{
    images.push('assets/images/'+i+".jpg");
}

images.forEach(src =>{
 //   const link = document.createElement('a');
  //  link.href = src;
    const img = document.createElement('img');
    img.src = src;
   // link.appendChild(img);
    imageClass.appendChild(img);
    
});

const initSlider = ()=>{
    const slideButtons = document.querySelectorAll(".slider .slide-button");
    const imageList = document.querySelector(".slider .image-list");

    
    slideButtons.forEach(button => {
        button.addEventListener("click", ()=>{
            const direction = button.id === "next-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left:scrollAmount, behavior:"smooth"});
        })
    })

    
}

initSlider();
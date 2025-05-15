const data = [
    { img: "images/img1.webp", text: "This is image 1" },
    { img: "images/img2.webp", text: "This is image 2" },
    { img: "images/img3.webp", text: "This is image 3" },
    { img: "images/img4.webp", text: "This is image 4" },
    { img: "images/img5.webp", text: "This is image 5" },
    { img: "images/img6.webp", text: "This is image 6" },
    { img: "images/img7.webp", text: "This is image 7" },
    { img: "images/img8.webp", text: "This is image 8" },
    { img: "images/img9.webp", text: "This is image 9" },
    { img: "images/img10.webp", text: "This is image 10" },
    
    // Add up to 100 items
  ];
  
  const list = document.getElementById("imageList");
  
  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<img src="${item.img}"><p>${item.text}</p>`;
    list.appendChild(div);
  });
  

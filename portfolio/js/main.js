const education = {
    content:[{
        name: "SMAN 2 Surabaya",
        image: "logo-sman-2-surabaya.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Sepuluh Nopember Institute of Technology",
        image: "logo-its.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Bangkit Program 2023",
        image: "logo-bangkit.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }]
}

const educationContent = document.querySelector("#education-content");

var markup = "";

education.content.forEach(element => {
    markup += `
    <div class="education-item"> 
        <div class="logo-image">
            <img src="img/${element.image}">
        </div>
        <div class="description">
            <h3> ${element.name} </h3>
            <p> ${element.description} </p>
        </div>  
    </div>
    `
});

educationContent.innerHTML += markup
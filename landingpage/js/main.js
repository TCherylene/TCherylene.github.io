const education = {
    content:[{
        name: "SMAN 2 Surabaya",
        image: "logo-sman-2-surabaya.jpg",
        description: "(2017 - 2020) I'm not very active in organization. To support the need of non-academic activities, I joined International Mathematics Olympiad (IMO) as my extracurricular which made me getting better in mathematics"
    },
    {
        name: "Sepuluh Nopember Institute of Technology",
        image: "logo-its.png",
        description: "(2020 - now) Information Technology Student. I want to challenge myself by joining some organization because I never done it before. Currently I'm active at Himpunan Mahasiswa Teknologi Informasi (HMIT) as general secretary"
    },
    {
        name: "Bangkit Program 2023",
        image: "logo-bangkit.png",
        description: "(2023 - now) By choosing Cloud Computing as my program in Bangkit 2023, I want to challenge myself to be much much better version of myself. I want to maximize the opportunity given to me by joining Bangkit Program."
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
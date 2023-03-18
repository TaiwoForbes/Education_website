const teamMembers = [
    {
        id: 1,
        name: "Shatta Wale", 
        img: "./assets/images/tm1.jpg",
    },
    {
        id: 2,
        name: "Mia Jones", 
        img: "./assets/images/tm2.jpg",
    },
    {
        id: 3,
        name: "Diana Ayi", 
        img: "./assets/images/tm3.jpg",
    },
    {
        id: 4,
        name: "John Dumel", 
        img: "./assets/images/tm4.jpg",
    },
    {
        id: 5,
        name: "Ruth Shockings", 
        img: "./assets/images/tm5.jpg",
    },
    {
        id: 6,
        name: "Edem Quist", 
        img: "./assets/images/tm6.jpg",
    },
    {
        id: 7,
        name: "Lila James", 
        img: "./assets/images/tm7.jpg",
    },
    {
        id: 8,
        name: "Menz Gold", 
        img: "./assets/images/tm8.jpg",
    },
]


const teamContainer = document.querySelector('.team__container')
window.addEventListener('DOMContentLoaded',function(){
    displayTeam(teamMembers)
})
function displayTeam(team){
    display = team.map(function(item){
        return `<article class="team__member">
        <div class="team__member-image">
          <img src=${item.img} alt="">  
        </div>
        <div class="team__member-info">
            <h4>${item.name}</h4>
            <p>Expert Tutor</p>
        </div>
        <div class="team__member-socials">
            <a href="http://instagram.com" target="_blank"> <i class="uil uil-instagram"></i></a>
            <a href="http://twitter.com" target="_blank"> <i class="uil uil-twitter"></i></a>
            <a href="http://linkedin.com" target="_blank"> <i class="uil uil-linkedin"></i></a>
        </div>
       </article> `
    }).join('')
    teamContainer.innerHTML = display

}

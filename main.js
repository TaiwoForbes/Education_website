//================= Navbar scroll ========================

const nav = document.querySelector('.nav')
window.addEventListener('scroll', () =>{
    /* const navScroll= window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height
    if(navScroll > navHeight){
        nav.classList.add('window-scroll')
    }
    else{
        nav.classList.remove('window-scroll')
    }
 */
    // or
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



/*============================== Faq ================================*/
const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')

        const icon = faq.querySelector('.faq__icon i')
        if(icon.className === 'uli uli-plus'){
            icon.classNmae = 'uli uli-minus'
        }
        else{
            icon.className = 'uli uli-plus'
        }
        
    })
})


//  ================ Show Menu ====================
const menu = document.querySelector('.nav__menu')
const openBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

/* openBtn.addEventListener('click', ()=>{
    menu.style.display = 'block'
    closeBtn.style.display = 'inline-block'
    openBtn.style.display = 'none'
})

// close nav menu
const closeNav = ()=> {
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
    openBtn.style.display = 'inline-block'
}

closeBtn.addEventListener('click',closeNav) */

openBtn.addEventListener('click',()=>{
    if(menu.classList.contains('show__menu')){
        menu.classList.remove('show__menu')
        openBtn.innerHTML = `<i class="uil uil-bars"></i>`
    }else{
        menu.classList.add('show__menu')
        openBtn.innerHTML = `<i class="uil uil-multiply"></i>` 
    }        
})


/* ================ COURSES ================== */
const courses = [
    {
    id: 1,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course1.jpg",
    },
    
    {
    id: 2,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course2.jpg",
    },

    {
    id: 3,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course3.jpg",
    },

    {
    id: 4,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course4.jpg",
    },

    {
    id: 5,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course5.jpg",
    },

    {
    id: 6,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course6.jpg",
    },

    {
    id: 7,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course7.jpg",
    },

    {
    id: 8,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course2.jpg",
    },


    {
    id: 9,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course9.jpg",
    },

    {
    id: 10,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course10.jpg",
    },

    {
    id: 11,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course11.jpg",
    },

    {
    id: 12,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course12.jpg",
    },

    {
    id: 13,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course13.jpg",
    },

    {
    id: 14,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course14.jpg",
    },

    {
    id: 15,
    title: "Responsive Social Media Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
    
    img: "./assets/images/course15.jpg",
    },
]


const section = document.querySelector('.dynamic')

window.addEventListener('DOMContentLoaded',function(){
    displayCourse(courses)
})

function displayCourse(course){
    let display = course.map(function(item){
        return `<article class="course">
        <div class="course__image">
            <img src=${item.img} alt="">
        </div>
        <div class="course__info">
            <h4>${item.title}</h4>
            <p>
                ${item.desc}
            </p>
            <a href="course.html" class="btn btn-primary">Learn More</a>
        </div>
    </article>`
    })

    display = display.join('')
    section.innerHTML = display
}



/* ================ INDEX.HTML(COURSES) ================== */
const Indexcourses = [
    {
        id: 1,
        title: "Responsive Social Media Website",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
        
        img: "./assets/images/course1.jpg",
        },
        
        {
        id: 2,
        title: "Responsive Social Media Website",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
        
        img: "./assets/images/course2.jpg",
        },
    
        {
        id: 3,
        title: "Responsive Social Media Website",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro quis doloribus est?Placeat, amet.",
        
        img: "./assets/images/course3.jpg",
        },
]

const IndexSection = document.querySelector('.index')

window.addEventListener('DOMContentLoaded',function(){
    displayIndexCourse(Indexcourses)
})

function displayIndexCourse(course){
    let display = course.map(function(item){
        return `<article class="course">
        <div class="course__image">
            <img src=${item.img} alt="">
        </div>
        <div class="course__info">
            <h4>${item.title}</h4>
            <p>
                ${item.desc}
            </p>
            <a href="course.html" class="btn btn-primary">Learn More</a>
        </div>
    </article>`
    })

    display = display.join('')
    IndexSection.innerHTML = display
}


/* ================= TESTIMONIALS ===================== */
const testimonials = [
    {
    id: 1,
    name: "Diana Ayi",
    title: "Student",
    img: "./assets/images/avatar1.jpg",
    },
    {
    id: 2,
    name: "Ernest Achiever",
    title: "Web Developer",
    img: "./assets/images/avatar2.jpg",
    },
    {
    id: 3,
    name: "Edem Quis",
    title: "Student",
    img: "./assets/images/avatar3.jpg",
    },
    {
    id: 4,
    name: "Hajia Bintu",
    title: "Instructor",
    img: "./assets/images/avatar4.jpg",
    },
    {
    id: 5,
    name: "Jane Doe",
    title: "Student",
    img: "./assets/images/avatar5.jpg",
    },
]

const testimonialSection = document.querySelector(".testinomials__container")
console.log(testimonialSection)
window.addEventListener('DOMContentLoaded',function(){
    displayTestimonial(testimonials)
})

function displayTestimonial(testimonials){
    let display = testimonials.map(function(item){
        return `<article class="testimonial ">
        <div class="avatar">
            <img src=${item.img} alt="">
        </div>
        <div class="testimonial__info">
            <h5>${item.name}</h5>
            <small>${item.title}</small>
        </div>
        <div class="testimonial__body">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repudiandae odit ipsam soluta nam consequuntur! Nemo molestias laborum expedita dicta dolorem, suscipit, accusantium ut facilis sequi totam a doloremque cupiditate?
            </p>
        </div>
    </article>`
    })

    display = display.join('')
    testimonialSection.innerHTML = display
}


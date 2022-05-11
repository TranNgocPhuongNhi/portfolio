// =============================== NAVBAR MOBILE ================================
const body = document.getElementsByTagName('body')[0];
const navMobile = document.querySelector('.nav-mobile')

navMobile.addEventListener('click', () => {
    body.classList.toggle('sidebar-expand')
})

// =============================== END NAVBAR MOBILE ================================

// =============================== SWITCH TAB ================================
const navItems = document.querySelectorAll('.navbar-item')
const wrapperItems = document.querySelectorAll('.wrapper section')

navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        // Remove all nav item
        navItems.forEach((item) => {
            item.classList.remove('nav-active')
        })

        // Remove all content
        wrapperItems.forEach((wrapperItem) => {
            wrapperItem.classList.remove('show')
        })

        navItem.classList.add('nav-active')
        wrapperItems[index].classList.add('show')
    })
})


// =============================== END SWITCH TAB ================================

// ============================== BACK TO TOP ==================================
const backToTop = document.querySelector('.back-to-top');
window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    if(offset > 500) {
        backToTop.style.display = 'block';
    }
    else {
        backToTop.style.display = 'none';
    }
})

// ============================== END BACK TO TOP ==================================

// ============================== PRODUCT JSON ==================================
const products_content = document.querySelector('.portfolio__products')
const products = [
    {
      id: 1,
      link: 'https://tranngocphuongnhi.github.io/helium/',
      image: './resources/img/helium.png',
      name: 'Helium',
      description: 'First website is cloned to practice. Helium is a portfolio which is made by bootstrap 4, designed and developed by UIdeck.',
      tag: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
      filter: 'web',
    },
    {
      id: 2,
      link: 'https://tranngocphuongnhi.github.io/find-house/',
      image: './resources/img/find-house.png',
      name: 'Find House',
      description: 'Second website is cloned to practice. Find House is a website for anyone have demands to buy houses, properties.',
      tag: ['HTML', 'CSS', 'JavaScript'],
      filter: 'web',
    },
    {
      id: 3,
      link: 'https://tranngocphuongnhi.github.io/portfolio-v1/',
      image: './resources/img/portfolio-v1.png',
      name: 'Portfolio version 1',
      description: 'First portfolio is designed by Adobe XD.',
      tag: ['HTML', 'CSS', 'JavaScript', 'Adobe XD'],
      filter: 'web',
    },
    {
      id: 4,
      link: 'https://www.behance.net/gallery/139844791/Design-UI-Sign-in-Sign-up',
      image: './resources/img/web-dago.png',
      name: 'Dago',
      description: 'Sign in and sign up form for website study multiple languages.',
      tag: ['Figma', 'Illustrator'],
      filter: 'ui-ux',
    },
    {
      id: 5,
      link: 'https://www.behance.net/gallery/136576735/Comic-Reading-Online-App',
      image: './resources/img/comic-reading-online-app.png',
      name: 'Comic reading online app',
      description: 'A comic reading online app',
      tag: ['Figma'],
      filter: 'ui-ux',
    },
    {
        id: 6,
        link: 'https://www.behance.net/gallery/130974135/Tea-Landing-Page',
        image: './resources/img/tea-landing-page.png',
        name: 'Tea landing page',
        description: 'A landing page about tea',
        tag: ['Figma'],
        filter: 'ui-ux',
    },
    {
      id: 7,
      link: 'https://tranngocphuongnhi.github.io/portfolio/',
      image: './resources/img/portfolio-v2.png',
      name: 'Portfolio version 2',
      description: 'First portfolio is designed by Adobe XD.',
      tag: ['HTMl', 'CSS', 'JavaScript', 'jQuery'],
      filter: 'web',
    },

]

function renderProducts() {
    html = ''
    const content = products.map((item, index) => {
            html += `
                <li class="portfolio-item ${item.filter}" data-item="${item.filter}">
                    <div class="portfolio-content">
                        <img class="portfolio-img" src="${item.image}" alt="background">
                        <div class="portfolio-info">
                            <h3 class="portfolio-name">${item.name}</h3>
                            <ul class="portfolio-list-skill">
                                ${item.tag.map( i => {
                                    return '<li> '+ i +'</li>'
                                }).join('')}
                            </ul>
                            <p class="portfolio-desc">
                                ${item.description}
                            </p>
                        </div>
                    </div>
                    <a target="_blank" href="${item.link}" class="portfolio-live-view">Live View</a>
                </li>
            `
            return html
    })
    products_content.innerHTML = html
}

renderProducts()





// ============================== END PRODUCT JSON ==================================

// ============================== PORTFOLIO ==================================
$(document).ready(function() {
    $('.portfolio__choose-link').click(function() {
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.portfolio-item').show('1000');
        }
        else {
            $('.portfolio-item').not('.'+value).hide('1000');
            $('.portfolio-item').filter('.'+value).show('1000');
        }
    })

    $('.portfolio__choose-link').click(function() {
        $(this).addClass('choose-active').siblings().removeClass('choose-active')
    })
})


// ================================= END PORTFOLIO ======================================

// ============================= SWITCH THEME ==============================
const body = document.getElementsByTagName('body')[0];
const themeIcon = document.querySelectorAll('.switch-theme i');

const themeDark = 'dark' 
const themeLight = 'light' 
// const themCookieName = 'theme'

// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//     var name = cname + "="
//     var ca = document.cookie.split(';')
//     for(var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while(c.charAt(0) == ' ') {
//             c = c.substring(1)
//         }
//         if(c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length)
//         }
//     }
//     return ""
// }

// loadTheme()

// function loadTheme() {
//     var theme = getCookie(themCookieName)
//     body.classList.add(theme === "" ? themeLight : theme)
// }

themeIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        if(body.classList.contains(themeLight)) {
            body.classList.remove(themeLight)
            body.classList.add(themeDark)
            setCookie(themCookieName, themeDark)
        }
        else {
            body.classList.remove(themeDark)
            body.classList.add(themeLight)
            setCookie(themCookieName, themeLight)
        }
    })
})

// ============================= END SWITCH THEME ==============================

// =============================== NAVBAR MOBILE ================================
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

// ============================== ANIMATED PAGINATION ==================================
// let paginationItems = document.querySelector('.pagination-number')

// paginationItems.querySelectorAll('li').forEach((a, i) => {
//     a.onclick = (e) => {
//         if (a.classList.contains('pagination-active'))

//             paginationItems.querySelectorAll('li').forEach(el => {
//                 el.classList.remove('pagination-active')
//             })

//         a.classList.add('pagination-active')

//         let pagination_indicator = paginationItems.querySelector('.pagination-indicator')
//         pagination_indicator.style.left = `calc(${(i * 70)}px)`
//     }
// })
// ============================== END ANIMATED PAGINATION ==================================


// ============================== PRODUCT JSON ==================================
const products_content = document.querySelector('.product')
const numberPage = document.querySelector('.pagination-number')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

const products = [
    {
      id: 1,
      link: 'https://tranngocphuongnhi.github.io/helium/',
      image: './resources/img/helium.png',
      name: 'Helium',
    },
    {
      id: 2,
      link: 'https://tranngocphuongnhi.github.io/find-house/',
      image: './resources/img/find-house.png',
      name: 'Find House',
    },
    {
      id: 3,
      link: 'https://tranngocphuongnhi.github.io/portfolio-v1/',
      image: './resources/img/portfolio-v1.png',
      name: 'Portfolio version 1',
    },
]

const itemPerPage = 6
let currentPage = 1
let start = 0
let end = itemPerPage

let totalPages = Math.ceil(products.length / itemPerPage)

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * itemPerPage
    end = currentPage * itemPerPage
    // end = Math.min(start + itemPerPage - 1, totalPages - 1)
    // let pages = Array.from(Array((end + 1) - start).keys()).map(i => start + i);
}

function renderProducts() {
    html = ''
    const content = products.map((item, index) => {
        // if(index >= start && index < end) {
            html += `
                <li class="product-item">
                    <a href="${item.link}" class="product-link">
                        <img src="${item.image}" alt="background">
                        <div class="product-content">
                            <h2 class="product-name">${item.name}</h2>
                        </div>
                    </a>
                </li>
            `
            return html
        // }
    })
    products_content.innerHTML = html
}

renderProducts()
// renderListPage()

// function renderListPage() {
//     let html = ''
//     html += `
//                 <span class="pagination-indicator"></span>
//                 <li class="pagination-active">${1}</li>
//             `
//     for(let i=2; i <= totalPages; i++) {
//         if(i <= 3) {
//             html += `<li>${i}</li>`
//         }
//         else {
//             html += `<li>${i}</li>`.replace(`${i}`,`${i+1}`)
//         }
//     }
//     numberPage.innerHTML = html
// }

// function changePage() {
//     const currentPages = numberPage.querySelectorAll('li')
//     for(let i = 0; i < currentPages.length; i++) {
//         currentPages[i].addEventListener('click', () => {
//             let value = i + 1
//             currentPage = value

//             numberPage.querySelectorAll('li').forEach(li => {
//                 li.classList.remove('pagination-active')
//             })
//             currentPages[i].classList.add('pagination-active')

//             let pagination_indicator = numberPage.querySelector('.pagination-indicator')
//             pagination_indicator.style.left = `calc(${(i * 70)}px)`
            
//             if(currentPage > 1 && currentPage < totalPages) {
//                 btnPrev.classList.remove('btn-disabled')
//                 btnNext.classList.remove('btn-disabled')
//             }

//             if(currentPage === 1) {
//                 btnPrev.classList.add('btn-disabled')
//                 btnNext.classList.add('btn-disabled')
//             }

//             if(currentPage === totalPages) {
//                 btnNext.classList.add('btn-disabled')
//             }

//             if(currentPage === totalPages && btnPrev.classList.contains('btn-disabled')) {
//                 btnPrev.classList.remove('btn-disabled')
//             }

//             if(currentPage === 1 && btnNext.classList.contains('btn-disabled')) {
//                 btnNext.classList.remove('btn-disabled')
//             }

//             getCurrentPage(currentPage)
//             renderProducts()
//         })
//     }
// }

// changePage()

// btnNext.addEventListener('click', () => {
//     currentPage++

//     if(currentPage > totalPages) {
//         currentPage = totalPages
//     }
//     if(currentPage === totalPages) {
//         btnNext.classList.add('btn-disabled')
//     }

//     btnPrev.classList.remove('btn-disabled')
//     numberPage.querySelectorAll('li').forEach(li => {
//         li.classList.remove('pagination-active')
//     })
//     $(`.pagination-number li:eq(${currentPage-1})`).addClass('pagination-active')
    
//     for(let i = 0; i < currentPage; i++) {
//         let pagination_indicator = numberPage.querySelector('.pagination-indicator')
//         pagination_indicator.style.left = `calc(${(i * 70)}px)`
//     }

//     getCurrentPage(currentPage)
//     renderProducts()
// })

// btnPrev.addEventListener('click', () => {
//     currentPage--

//     if(currentPage <= 1) {
//         currentPage = 1;
//     }
//     if(currentPage === 1) {
//       btnPrev.classList.add('btn-disabled')
//     }
    
//     btnNext.classList.remove('btn-disabled')
//     numberPage.querySelectorAll('li').forEach(li => {
//         li.classList.remove('pagination-active')
//     })
//     $(`.pagination-number li:eq(${currentPage-1})`).addClass('pagination-active')
    
//     for(let i = 0; i < currentPage; i++) {
//         let pagination_indicator = numberPage.querySelector('.pagination-indicator')
//         pagination_indicator.style.left = `calc(${(i * 70)}px)`
//     }
    
//     getCurrentPage(currentPage)
//     renderProducts()
// })

// ============================== END PRODUCT JSON ==================================



// ============================== PRODUCT HOVER ==================================
// const productItems = document.querySelectorAll('.product-item')

// productItems.forEach(product => {
//     let content = document.querySelector('.product-link .product-content')
//     let footer = content.querySelector('.product-desc')

//     content.style.bottom = `-${footer.offsetHeight}px`

//     // card hover
//     product.addEventListener('mouseover', () => {
//         content.style.bottom = `0`
//     })

//     product.addEventListener('mouseleave', () => {
//         content.style.bottom = `-${footer.offsetHeight}px`
//     })
// })
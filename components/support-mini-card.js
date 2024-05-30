
class supportMiniCard extends HTMLElement { 
    constructor() { 
        super()
    }
    connectedCallback() { 
        let imgSrc = this.getAttribute('img-src')
        let imgSize = this.getAttribute('img-size')
        let itemName = this.getAttribute('img-name')
        this.setAttribute('class', 'mx-3 w-[173px] h-[109px]')
        this.innerHTML  = `
            <div class="flex flex-col justify-center text-center items-center w-full h-full">
                <div>
                    <img class="${imgSize}" src="${imgSrc}" alt="">
                </div>
                <span class="text-[17px] hover:underline hover:cursor-pointer">${itemName}</span>
            </div>

            `
        } 
}

customElements.define('support-mini-card', supportMiniCard)

class supportGriddedMiniCard extends HTMLElement { 
    constructor() { 
        super()
    }
    connectedCallback() { 
        let imgSrc = this.getAttribute('img-src')
        let itemName = this.getAttribute('img-name')
        this.setAttribute('class', 'col-span-12 tab:col-span-6 tab2:col-span-4')
        this.innerHTML  = `
            <div class="bg-[#f5f5f7] h-[181px] py-10 px-10 tab:px-[27px] tab2:px-[25px] rounded-xl flex justify-center flex-col items-center">
                <div class="h-16 w-16 mb-4">
                    <img class="w-full h-full" src="${imgSrc}" alt="">
                </div>
                <p class="text-[17px] text-[#0066cc]">${itemName}</p>
            </div>

            `
        } 
}

customElements.define('support-mini-grid-card', supportGriddedMiniCard)



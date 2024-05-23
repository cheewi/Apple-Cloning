
class HeroCard extends HTMLElement { 
    constructor() { 
        super()
    }
    connectedCallback() { 
        const imgContainer = this.getAttribute('imageContainer');
        const img = this.getAttribute('image')
        const heading = this.getAttribute('heading')
        const subHeading = this.getAttribute('sub-heading')
        const detailPosition = this.getAttribute('detail-position')
        const cardSize = this.getAttribute('card-size')
        this.innerHTML  = `
        <section class="${cardSize}">
            <div class="apple-2030">
                <div class="absolute w-full h-full">
                    <img src="${img}" class="w-full h-full object-cover">
                </div>
                <div class="absolute w-full h-full mx-2 flex flex-col justify-start items-center ${detailPosition}">
                    <h2 class="pt-9 font-semibold tracking-tight leading-[1.07143] text-[32px] tab:text-[56px]">${heading}</h2>
                    <div class="max-w-[420px] md:max-w-[720px] text-center">
                        <h3 class="mt-2 font-light text-[19px] des:text-[28px]">${subHeading}</h3>
                    </div>
                    <div>
                        <button class="mt-[19px] py-[10px] px-[20px] font-light bg-[#0071e3] text-white border-none rounded-full hover:bg-[#2b86e2] transition duration-200 ease-in-out text-[14px] tab:text-[17px]">Learn more</button>
                    </div>
                </div>
            </div>
    </section>
            `
        } 
}

customElements.define('hero-card', HeroCard)
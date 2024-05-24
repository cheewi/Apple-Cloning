
class itemCard01 extends HTMLElement { 
    constructor() { 
        super()
    }
    connectedCallback() { 
        const img = this.getAttribute('image')
        const heading = this.getAttribute('heading')
        const subHeading = this.getAttribute('sub-heading')
        const detailPosition = this.getAttribute('detail-position')
        const cardSize = this.getAttribute('card-size')
        const buttonDetail = this.getAttribute('button-detail')
        const h2Style = this.getAttribute('h2-style')
        const button = this.getAttribute('button-size')
        const buttonDisplay = this.getAttribute('button-display')
        this.innerHTML  = `
        <div class="mb-3 w-full relative ${cardSize}">
            <div class="apple-2030">
                <div class="absolute w-full h-full">
                    <img src="${img}" class="w-full h-full object-cover">
                </div>
                <div class="absolute w-full h-full mx-2 flex flex-col justify-start items-center ${detailPosition}">
                    <div>
                        <h2 class="${h2Style} font-[500] tracking-tight leading-[1.07143] pt-9">${heading}</h2>
                    </div>
                    <div class="max-w-[420px] md:max-w-[720px] text-center">
                        <h3 class="mt-2 font-light text-[19px] des:text-[28px]">${subHeading}</h3>
                    </div>
                    <div class="gap-3">
                        <button class="${button} mt-[19px] py-[10px] px-[20px] font-light bg-[#0071e3] text-white border-none rounded-full hover:bg-[#2b86e2] transition duration-200 ease-in-out text-[14px]">Learn more</button>
                        <button class="${button} ${buttonDisplay} font-light mt-[19px] py-[10px] px-[20px] border-[1px] border-solid border-[#0071e3] text-[#0071e3] rounded-full text-[14px] tab:text-[17px] duration-200 ease-in-out hover:bg-[#0071e3] hover:text-white">${buttonDetail}</button>
                    </div>
                </div>
            </div>
    </div>
            `
        } 
}

customElements.define('item-card', itemCard01)


class itemCard02 extends HTMLElement { 
    constructor() { 
        super()
    }
    connectedCallback() { 
        const img = this.getAttribute('image')
        const subHeading = this.getAttribute('sub-heading')
        const detailPosition = this.getAttribute('detail-position')
        const cardSize = this.getAttribute('card-size')
        const buttonDetail1 = this.getAttribute('button-detail')
        const buttonDisplay = this.getAttribute('button-display')
        const imageHeading = this.getAttribute('image-heading')
        const logoDetail = this.getAttribute('heading-logo')
        const buttonDetail2 = this.getAttribute('button-1')
        this.innerHTML  = `
        <div class="mb-3 w-full relative ${cardSize}">
            <div class="apple-2030">
                <div class="absolute w-full h-full">
                    <img src="${img}" class="w-full h-full object-cover">
                </div>
                <div class="absolute w-full h-full mx-2 flex flex-col justify-start items-center ${detailPosition}">
                    <div class="${logoDetail}">
                        <img class="w-full h-full" src="${imageHeading}" alt="">
                    </div>
                    <div class="max-w-[320px] md:max-w-[720px] text-center">
                        <h3 class="mt-2 font-light text-[19px] des:text-[28px]">${subHeading}</h3>
                    </div>
                    <div class="gap-3">
                        <button class="mt-[19px] py-[10px] px-[20px] font-light bg-[#0071e3] text-white border-none rounded-full hover:bg-[#2b86e2] transition duration-200 ease-in-out text-[14px]">${buttonDetail1}</button>
                        <button class="font-light mt-[19px] py-[10px] px-[20px] border-[1px] border-solid border-[#0071e3] text-[#0071e3] rounded-full text-[14px]duration-200 ease-in-out hover:bg-[#0071e3] hover:text-white ${buttonDisplay}">${buttonDetail2}</button>
                    </div>
                </div>
            </div>
        </div>
            `
        } 
}

customElements.define('item-cardd', itemCard02)
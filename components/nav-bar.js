const createHeaderComponent = () => { 
    return `
        <nav class="relative w-full">
            <ul class="nav-list-smaller w-full justify-between p-0 m-0 flex items-center opacity-100 tab:absolute tab:px-6 tab:justify-center tab:opacity-0">
                <div class="flex">
                    <li>
                        <img src="/images/icons/apple.svg" alt="" class="nav-smaller-hidden flex w-12 h-12">
                    </li>
                    <div class="right-div flex items-center mr-24">
                        <li>
                            <img src="/images/icons/search.svg" class="nav-smaller-hidden flex w-12 h-12">
                        </li>
                        <li>
                            <img src="/images/icons/bag.svg" alt="" class="nav-smaller-hidden flex w-12 h-12">
                        </li>
                        
                    </div>
                </div>
                <div class="flex">
                    <div class="hamburger flex flex-col cursor-pointer justify-center right-14 z-50 fixed">
                        <span class="line line-top absolute w-6 h-[2px] bg-[#6e6e73] mt-[9px]"></span>
                        <span class="line line-bottom absolute w-6 h-[2px] bg-[#6e6e73] mt-[-9px]"></span>
                    </div>
                </div> 
            </ul>

            <ul class="nav-list-larger p-0 m-0 fixed top-0 h-0 block bg-white z-20 py-5 tab:opacity-100 tab:flex tab:items-center tab:absolute tab:px-6 justify-center w-full ">
                <li class=" hidden tab:flex">
                    <img src="/images/icons/apple.svg" class="flex w-12 h-12">
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">Store</a>
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">Mac</a>
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">iPad</a>
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">iPhone</a>
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">Watch</a>
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">Vision</a>
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">Airpods</a>
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 text-nowrap tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">TV & Home</a>
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">Entertainment</a>
                </li>
                <li>
                    <a href="#" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">Accessories</a>
                </li>
                <li>
                    <a href="src/pages/support.html" class="text-[#1d1d1f] font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">Support</a>
                </li>
                <li class=" hidden tab:flex">
                    <img src="/images/icons/search.svg" class="flex w-12 h-12">
                </li>
                <li class=" hidden tab:flex">
                    <img src="/images/icons/bag.svg" class="flex w-12 h-12">
                </li>
            </ul>
        </nav>
    `;
};
document.addEventListener('DOMContentLoaded', () => {
    const selectElement = (element) => document.querySelector(element);
    const hamburger = selectElement('.hamburger')
    hamburger.addEventListener('click', () => {
    selectElement('nav').classList.toggle('active')
  })
});
class headerComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.setAttribute('class', 'active:h-[100%] active:bg-white fixed z-40 w-full bg-white bg-opacity-70');
        this.innerHTML = createHeaderComponent();
    }
};

customElements.define('nav-bar', headerComponent)
const navItems = [
    { name: 'Store', href: '#' },
    { name: 'Mac', href: '#' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#' },
    { name: 'Watch', href: '#' },
    { name: 'Vision', href: '#' },
    { name: 'AirPods', href: '#' },
    { name: 'TV & Home', href: '#' },
    { name: 'Entertainment', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Support', href: './pages/support.html' },
];

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = (element) => document.querySelector(element);
    const hamburger = selectElement('.hamburger');
    hamburger.addEventListener('click', () => {
        selectElement('nav').classList.toggle('active');
    });
});

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const customPath = this.getAttribute('custom-path') || '';
        this.setAttribute('class', 'fixed z-40 w-screen bg-white bg-opacity-70');
        this.innerHTML = createHeaderComponent(customPath);
    }
}

const createHeaderComponent = (customPath) => {
    let navLinks = navItems.map(item => `
        <li class="px-2">
            <a href="${item.href}" class="text-[#1d1d1f] text-nowrap font-semibold leading-tight text-3xl p-0 tab:text-[12px] tab:px-2 tab:py-2 tab:flex tab:font-normal">${item.name}</a>
        </li>
    `).join('');

    return `
        <nav class="relative w-screen overflow-hidden">
            <ul class="nav-list-smaller p-0 m-0 flex justify-between items-center opacity-100 tab:px-6 tab:justify-center tab:opacity-0">
                <div class="flex">
                    <li>
                        <a href="${customPath}index.html">
                            <img src="${customPath}images/icons/apple.svg" alt="Apple" class="nav-smaller-hidden flex w-12 h-12">
                        </a>
                    </li>
                    <div class="right-div flex items-center mr-24">
                        <!-- Placeholder for additional content if needed -->
                    </div>
                </div>
                <div class="flex items-center">
                    <li>
                        <img src="${customPath}images/icons/search.svg" alt="Search" class="nav-smaller-hidden flex w-12 h-12">
                    </li>
                    <li>
                        <img src="${customPath}images/icons/bag.svg" alt="Bag" class="nav-smaller-hidden flex w-12 h-12">
                    </li>
                    <div class="hamburger flex flex-col w-6 h-6 cursor-pointer justify-center z-50 mx-4">
                        <span class="line line-top absolute w-4 h-[2px] bg-[#6e6e73] mt-[9px]"></span>
                        <span class="line line-bottom absolute w-4 h-[2px] bg-[#6e6e73] mt-[-9px]"></span>
                    </div>
                </div> 
            </ul>

            <ul class="nav-list-larger p-0 m-0 fixed top-0 h-0 block z-20 py-5 tab:opacity-100 tab:flex tab:items-center tab:absolute tab:px-6 justify-center w-screen">
                <li class="hidden tab:flex">
                    <a href="${customPath}index.html">
                        <img src="${customPath}images/icons/apple.svg" alt="Apple" class="nav-smaller-hidden flex w-8 h-10">
                    </a>
                </li>
                ${navLinks}
                <li class="hidden tab:flex">
                    <img src="${customPath}images/icons/search.svg" alt="Search" class="flex w-8 h-10">
                </li>
                <li class="hidden tab:flex">
                    <img src="${customPath}images/icons/bag.svg" alt="Bag" class="flex w-8 h-10">
                </li>
            </ul>
        </nav>
    `;
}

customElements.define('nav-bar', HeaderComponent);

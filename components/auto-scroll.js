const createAutoScrollComponent = () => { 
    return `
    <section class="mx-auto flex flex-row relative mb-14">
        <div class="auto-scroll-content whitespace-nowrap animate-scroll" id="auto-scroll-content" >                     
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="/images/auto-scroll/834x472 (1).jpg" alt="">
                </div>
            </div>
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="/images/auto-scroll/834x472 (2).jpg" alt="">
                </div>
            </div>
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="/images/auto-scroll/834x472 (3).jpg" alt="">
                </div>
            </div>
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="/images/auto-scroll/834x472.jpg" alt="">
                </div>
            </div>
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="images/auto-scroll/834x472 (4).jpg" alt="">
                </div>
            </div>
            <!-- repeat -->
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="/images/auto-scroll/834x472 (1).jpg" alt="">
                </div>
                
            </div>
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="/images/auto-scroll/834x472 (2).jpg" alt="">
                </div>
                
            </div>
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="/images/auto-scroll/834x472 (3).jpg" alt="">
                </div>
                
            </div>
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="/images/auto-scroll/834x472.jpg" alt="">
                </div>                       
            </div>
            <div class="inline-flex items-center overflow-hidden h-[134px] w-[238px] p-[3px] tab:p-[5px] tab2:p-[8px] tab:h-[161px] tab:w-[286px] tab2:w-[417px] tab2:h-[236px] tab2:py-[20px]">
                <div class="w-full h-full">
                    <img src="images/auto-scroll/834x472 (4).jpg" alt="">
                </div>
            </div>
        </div>
        <div class="m-3 h-6 w-6 rounded-full absolute right-0 -bottom-14 bg-gray-200 hover:bg-gray-300 flex">
            <button id="cute-button" class="flex items-center justify-center">
                <img id="img1" class=" w-[50%]" src="data:image/svg+xml;base64,PHN2ZyBpZD0iRXhwb3J0YWJsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAgMjAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMWQxZDFmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0icGF1c2UiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMy43NSIgeT0iMyIgd2lkdGg9IjQuNSIgaGVpZ2h0PSIxNCIgcng9IjEuNSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTEuNzUiIHk9IjMiIHdpZHRoPSI0LjUiIGhlaWdodD0iMTQiIHJ4PSIxLjUiLz48L2c+PC9zdmc+" alt="">
                <img id="img2" class=" w-[50%] hidden" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PGc+PHBhdGggZD0iTTUsMTUuMjVWNC43N0ExLjQ0LDEuNDQsMCwwLDEsNi40NCwzLjE1YTEuODYsMS44NiwwLDAsMSwxLjExLjMxbDguNTMsNWMuNzYuNDQsMS4xNy44LDEuMTcsMS41MXMtLjQxLDEuMDctMS4xNywxLjUxbC04LjUzLDVhMS44NiwxLjg2LDAsMCwxLTEuMTEuMzFBMS40MiwxLjQyLDAsMCwxLDUsMTUuMjVaIi8+PC9nPjwvc3ZnPg==" alt="">
            </button>
        </div>
    </section>
    `
}

class AutoScrollComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = createAutoScrollComponent();
        this.classList.add('block', 'h-full');
    }
}

customElements.define('auto-scroll', AutoScrollComponent);

document.addEventListener('DOMContentLoaded', () => {
    const autoScroll = document.querySelector('.auto-scroll-content');
    const playButton = document.getElementById('cute-button');
    let isAnimatingscroll = true;
    const buttonPause = document.getElementById('img2');
    const buttonPlay = document.getElementById('img1');

    playButton.addEventListener('click', () => {
        if (isAnimatingscroll) {
            autoScroll.style.animationPlayState = 'paused';
            isAnimatingscroll = false;
            buttonPause.style.display = 'flex';
            buttonPlay.style.display = 'none';
        } else {
            autoScroll.style.animationPlayState = 'running';
            isAnimatingscroll = true;
            buttonPause.style.display = 'none';
            buttonPlay.style.display = 'flex';
        }
    });
});
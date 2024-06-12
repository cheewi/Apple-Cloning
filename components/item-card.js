// Class for the item-cards in homepage
class itemCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const cardSize = this.getAttribute('card-size');
        const img = this.getAttribute('image');
        const detailPosition = this.getAttribute('detail-position');
        const logoDetail = this.getAttribute('logo-detail');
        const headingDetail = this.getAttribute('heading-detail');
        const heading = this.getAttribute('heading');
        const imageHeading = this.getAttribute('image-heading');
        const headingImageDisplay = this.getAttribute('heading-image-display');
        const subHeading = this.getAttribute('sub-heading');
        const subHeadingSize = this.getAttribute('sub-heading-size')
        const buttonDetail1 = this.getAttribute('button-detail1');
        const buttonTitle1 = this.getAttribute('button-title1');
        const buttonDetail2 = this.getAttribute('button-detail2');
        const buttonTitle2 = this.getAttribute('button-title2');

        // Note (line 31 to 34) : some item-cards have images as headers so when the image is displayed, the text is not hence the need for an img and h3 element in the div
        this.innerHTML = `
            <div class="mb-3 w-full relative ${cardSize}">
                <div class="apple-2030">
                    <div class="absolute w-full h-full">
                        <img src="${img}" class="w-full h-full object-cover">
                    </div>
                    <div class="absolute w-full h-full mx-2 flex flex-col justify-start items-center ${detailPosition}">
                        <div class="${logoDetail}">
                            <img class="w-full h-full ${headingImageDisplay}" src="${imageHeading}" alt="">
                            <h2 class="${headingDetail} font-[500] tracking-tight leading-[1.07143] pt-9">${heading}</h2>
                        </div>
                        <div class="max-w-[320px] md:max-w-[720px] text-center">
                            <h3 class="mt-2 font-light ${subHeadingSize}">${subHeading}</h3>
                        </div>
                        <div class="gap-3">
                            <button class="mt-[19px] py-[10px] px-[20px] font-light bg-[#0071e3] text-white border-none rounded-full hover:bg-[#2b86e2] transition duration-200 ease-in-out ${buttonDetail1}">${buttonTitle1}</button>
                            <button class="font-light mt-[19px] py-[10px] px-[20px] border-[1px] border-solid border-[#0071e3] text-[#0071e3] rounded-full duration-200 ease-in-out hover:bg-[#0071e3] hover:text-white ${buttonDetail2}">${buttonTitle2}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
// Defining the custom element
customElements.define('item-card', itemCard);

// Function loops through array containing objects with all the item-card details 
const createAndAppendItemCards = (dataArray, containerSelector) => {
    // item-cards put into the HTML via the parent container
    const container = document.querySelector(containerSelector);

    dataArray.forEach(data => {
        const itemCard = document.createElement('item-card');
        itemCard.setAttribute('card-size', data.cardSize);
        itemCard.setAttribute('image', data.image);
        itemCard.setAttribute('detail-position', data.detailPosition);
        itemCard.setAttribute('logo-detail', data.logoDetail);
        itemCard.setAttribute('heading', data.heading);
        itemCard.setAttribute('image-heading', data.imageHeading);
        itemCard.setAttribute('heading-detail', data.headingDetail);
        itemCard.setAttribute('heading-image-display', data.headingImageDisplay);
        itemCard.setAttribute('sub-heading', data.subHeading);
        itemCard.setAttribute('sub-heading-size', data.subHeadingSize)
        itemCard.setAttribute('button-detail1', data.buttonDetail1); 
        itemCard.setAttribute('button-title1', data.buttonTitle1);
        itemCard.setAttribute('button-detail2', data.buttonDetail2); 
        itemCard.setAttribute('button-title2', data.buttonTitle2);

        // Card details that were fetched are appened in
        container.appendChild(itemCard);
    });
};

// items-card Array 1 for the three crds in the hero section
const itemCardsData1 = [
    {
        cardSize: "h-[500px] tab:h-[650px] des:h-[692px]",
        image: "./images/apple-2023/hero_environment__eo8uw34krxg2_largetall.jpg",
        detailPosition: "justify-start",
        heading: "Apple 2030",
        subHeadingSize : "text-[19px] tab:text-[24px] des:text-[28px]",
        headingDetail: "text-[32px] tab:text-[56px]",
        headingImageDisplay: "hidden",
        subHeading: "A plan as innovative as our products.",
        buttonTitle1 : "Learn more", 
        buttonTitle2 : "...",
        buttonDetail1 : "text-[14px] tab:text-[17px]",
        buttonDetail2 : "hidden"
    },
    {
        cardSize: "h-[500px] tab:h-[650px] des:h-[692px]",
        image: "./images/apple-iphone/apple-iphone-large.jpeg",
        detailPosition: "justify-start text-white",
        heading: "iPhone",
        headingDetail: "text-[32px] tab:text-[56px]",
        headingImageDisplay: "hidden",
        subHeading: "Our most powerful cameras yet. Ultrafast chips. And USB-C.",
        subHeadingSize : "text-[19px] tab:text-[24px] des:text-[28px]",
        buttonTitle1 : "Learn more", 
        buttonTitle2 : "Shop iPhone",
        buttonDetail1 : "text-[14px] tab:text-[17px]",
        buttonDetail2 : "text-[14px] tab:text-[17px]"
    },
    {
        cardSize: "h-[500px] tab:h-[650px] des:h-[692px]",
        image: "./images/iphone-15/iphone15-large-tall.jpg",
        detailPosition: "justify-start",
        heading: "iPhone 15",
        headingDetail: "text-[32px] tab:text-[56px]",
        headingImageDisplay: "hidden",
        subHeading: "New Camera. New Design. Newphoria.",
        subHeadingSize : "text-[19px] tab:text-[24px] des:text-[28px]",
        buttonTitle1 : "Learn more", 
        buttonTitle2 : "Buy",
        buttonDetail1 : "text-[14px] tab:text-[17px]",
        buttonDetail2 : "text-[14px] tab:text-[17px]"
    },
];

createAndAppendItemCards(itemCardsData1, '.hero-container');

// items-card Array 2 for the six cards within the gridded section 
const itemCardsData2 = [
    { 
        cardSize: "h-[500px] tab:h-[490px] des:h-[590px]",
        image: "./images/vision/promo_apple_vision_pro__f4v4zp0sum2y_large_2x.jpg",
        detailPosition: "justify-end pb-5",
        imageHeading : "./images/vision/promo_logo_apple_vision_pro__90zi46p7dc2y_large_2x (1).png",
        logoDetail : "h-[27px] des:h-[34px] w-auto",
        headingDetail : "hidden",
        headingImageDisplay: "flex",
        subHeading: "Welcome to the era of spatial computing.",
        subHeadingSize : "text-[20px] des:text-[24px]",
        buttonTitle1 : "Learn more", 
        buttonTitle2 : "Buy",
        buttonDetail1 : "text-sm tab:text-[14px]",
        buttonDetail2 : "text-sm tab:text-[14px]"
    }, 
    { 
        cardSize: "h-[500px] tab:h-[490px] des:h-[590px]",
        image: "./images/macbook-air/macbook-air-m3-large.jpg",
        detailPosition: "justify-start pt-5",
        heading : "MacBook Air",
        headingDetail: "text-[32px]",
        headingImageDisplay: "hidden",
        subHeading: "Lean.Mean.M3 Machine.",
        subHeadingSize : "text-[20px] des:text-[24px]",
        buttonTitle1 : "Learn more", 
        buttonTitle2 : "Buy",
        buttonDetail1 : "text-sm tab:text-[14px]",
        buttonDetail2 : "text-sm tab:text-[14px]"
    }, 
    { 
        cardSize: "h-[500px] tab:h-[490px] des:h-[590px]",
        image: "./images/watch-series-9/apple-watch-series-9-large-2x.jpg",
        detailPosition: "justify-start text-white pt-5",
        imageHeading : "./images/watch-series-9/promo-logo-apple-watch-series-9-large.png",
        logoDetail : "h-[46px] des:h-[64px] w-auto",
        headingDetail : "hidden",
        headingImageDisplay: "flex",
        subHeading: "Smarter. Brighter. Mightier",
        subHeadingSize : "text-[20px] des:text-[24px]",
        buttonTitle1 : "Learn more", 
        buttonTitle2 : "Buy",
        buttonDetail1 : "text-sm tab:text-[14px]",
        buttonDetail2 : "text-sm tab:text-[14px]"
    }, 
    { 
        cardSize: "h-[500px] tab:h-[490px] des:h-[590px]",
        image: "./images/ipad/ipad-large-2x.jpg",
        detailPosition: "justify-start pt-5",
        heading : "iPad",
        headingDetail: "text-[32px]",
        headingImageDisplay: "hidden",
        subHeading: "Lovable.Drawable.Magical",
        subHeadingSize : "text-[20px] des:text-[24px]",
        buttonTitle1 : "Learn more", 
        buttonTitle2 : "Buy",
        buttonDetail1 : "text-sm tab:text-[14px]",
        buttonDetail2 : "text-sm tab:text-[14px]"
    }, 
    { 
        cardSize: "h-[500px] tab:h-[490px] des:h-[590px]",
        image: "./images/card/card-l.jpg",
        detailPosition: "justify-start pt-5",
        imageHeading : "./images/card/card-logo-s.png",
        logoDetail : "h-[27px] des:h-[36px] w-auto",
        headingDetail : "hidden",
        headingImageDisplay: "flex",
        subHeading: "Get up to 3% Daily Cash back with every purchase",
        subHeadingSize : "text-[20px] des:text-[24px]",
        buttonTitle1 : "Learn more", 
        buttonTitle2 : "Apply Now",
        buttonDetail1 : "text-sm tab:text-[14px]",
        buttonDetail2 : "text-sm tab:text-[14px]"
    }, 
    { 
        cardSize: "h-[500px] tab:h-[490px] des:h-[590px]",
        image: "./images/trade-in/trade-in-large-2x.jpg",
        detailPosition: "justify-start pt-5",
        imageHeading : "./images/trade-in/logo-trade-in-large.png",
        logoDetail : "h-[27px] des:h-[36px] w-auto",
        headingDetail : "hidden",
        headingImageDisplay: "flex",
        subHeading: "Get $170-$630 in credit when you trade in iPhone 11 or higher.",
        subHeadingSize : "text-[20px] des:text-[24px]",
        buttonTitle1 : "Get your Estimate", 
        buttonTitle2 : "...",
        buttonDetail1 : "text-sm tab:text-[14px]",
        buttonDetail2 : "hidden"
    }
];

createAndAppendItemCards(itemCardsData2, '.gridded-container');
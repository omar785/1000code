// Property data in JavaScript
const properties = [
    { id: 1, type: "سكني", emirate: "الشارقة", area: "الابار الآبار", price: 0, size: 2500, imgSrc: "https://images.1000aqar.com/5-2024/D-01-souq_alaqarat-20-05-24.jpeg", description: "أرض للبيع في السحمة الشارقة" },/* سوق */ 
    { id: 2, type: "تجاري", emirate: "الشارقة", area: "الصناعية 3", price: 5100000, size: 5000, imgSrc: "https://images.1000aqar.com/5-2024/D-02-souq_alaqarat-20-05-24.jpeg", description: "بناية للبيع في الصناعية 3 الشارقة 5000 قدم" },/* سوق */ 
    { id: 3, type: "سكني", emirate: "الشارقة", area: "السحمة", price: 4800000, size: 8000, imgSrc: "https://images.1000aqar.com/5-2024/D-03-souq_alaqarat-20-05-24.jpeg", description: "فيلا دوبلكس للبيع في الآبار الشارقة مساحة 8000 قدم" },/* سوق */ 
    { id: 4, type: "سكني", emirate: "الشارقة", area: "المطرق", price: 300000, size: 2900, imgSrc: "https://images.1000aqar.com/5-2024/D-04-qasr_almadina-12-03-24.jpeg", description: "أرض سكنية في المطرق الشارقة" },
    { id: 5, type: "سكني", emirate: "الشارقة", area: "السحمة", price: 320000, size: 2400, imgSrc: "https://images.1000aqar.com/5-2024/D-05-qasr_almadina-03-05-24.jpeg", description: "أرض للبيع في السحمة الشارقة" },
    { id: 6, type: "سكني", emirate: "الشارقة", area: "الحوشي", price: 300000, size: 3600, imgSrc: "https://images.1000aqar.com/5-2024/D-06-qasr_almadina-30-03-24.jpeg", description: "أرض سكنية في الحوشي الشارقة مساحة الأرض 3600 قدم" },
    { id: 7, type: "سكني", emirate: "الشارقة", area: "المطرق", price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-08-souq_alaqarat-30-03-24.jpeg", description: "أرض للبيع في المطرق الشارقة" },
    { id: 8, type: "سكني", emirate: "الشارقة", area: "المجاز", price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-07-souq_alaqarat-20-05-24.jpeg", description: "شقة طابقين للبيع في برج المروة1 المجاز الشارقة 5غرف نوم 4حمامات" },
    { id: 9, type: "تجاري", emirate: "الشارقة", area: "مويلح", price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-09-souq_alaqarat-30-03-24.jpeg", description: "أرض للبيع في الفلاح مويلح الشارقة موقع مميز" },
    { id: 10, type: "تجاري", emirate: "الشارقة", area: "الطي التجارية", price: 300000, size: 3600, imgSrc: "https://images.1000aqar.com/5-2024/D-010-alhaibah_realestate-17-05-24.jpeg", description: "أرض للبيع في الطي التجارية الشارقة" },
    { id: 11, type: "سكني", emirate: "الشارقة", area: "السحمة", price: 280000, size: 2400,size: 2421, imgSrc: "https://images.1000aqar.com/5-2024/D-011-alhaibah_realestate-05-05-24.jpeg", description: " أرض سكنية للبيع في السحمة الشارقة مساحة 2400 قدم موقع مميز" },
    { id: 12, type: "سكني", emirate: "الشارقة", area: "المطرق", price: 310000, size: 2670,size: 2700, imgSrc: "https://images.1000aqar.com/5-2024/D-012-alhaibah_realestate-03-05-24.jpeg", description: "أرض سكنية للبيع في المطرق 2700 قدم" },
    { id: 13, type: "سكني", emirate: "الشارقة", area: "", price: 0, size: 0,size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-013-al_fazaah_real_estate-15-05-24.jpeg", description: "للبيع فيلا في الشارقة " },/* مطلوب تفاصيل العقار !!!!!!!!!!!!!!!  */
    { id: 14, type: "سكني", emirate: "الشارقة", area: "", price: 0, size: 0,size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-014-al_fazaah_real_estate-07-05-24.jpeg", description: "للبيع فيلا في الشارقة " },/* مطلوب تفاصيل العقار !!!!!!!!!!!!!!!  */
    { id: 15, type: "سكني", emirate: "الشارقة", area: "", price: 0, size: 0,size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-015-al_fazaah_real_estate-16-05-24.jpeg", description: "للبيع فيلا في الشارقة " },/* مطلوب تفاصيل العقار !!!!!!!!!!!!!!!  */
    { id: 16, type: "سكني", emirate: "الشارقة", area: "تلال", area: "مدينة تلال", price: 1000000,size: 4500, imgSrc: "https://images.1000aqar.com/5-2024/D-16-souq_alaqarat-30-03-24.jpeg", description: "أرض سكنبة للبيع في مدينة تلال الشارقة 4500 قدم" },  /* سوق */ 
    { id: 17, type: "سكني", emirate: "الشارقة", area: "العزرة", price: 1200000,size: 10000, imgSrc: "https://images.1000aqar.com/5-2024/D-17-souq_alaqarat-30-03-24.jpeg", description: "للبيع بيت في العزرة الشارقة موقع مميز 10000 قدم" },  /* سوق */ 
    { id: 18, type: "سكني", emirate: "الشارقة", area: "روضة القرط", price: 320000, size: 3000, imgSrc: "https://images.1000aqar.com/5-2024/D-18-souq_alaqarat-30-03-24.jpeg", description: "للبيع أرض سكنية في روضة القرط الشارقة 3000 قدم" }, /* سوق */ 
    { id: 19, type: "سكني", emirate: "الشارقة", area: "روضة القرط", price: 1000000, size: 12800, imgSrc: "https://images.1000aqar.com/5-2024/D-019-alqudrah_realestate-16-05-24.jpeg", description: "للبيع أرض سكنية في روضة القرط الشارقة مساحة 12800 قدم" },
    { id: 20, type: "سكني", emirate: "الشارقة", area: "السحمة", price: 1350000, size: 17000, imgSrc: "https://images.1000aqar.com/5-2024/D-020-alqudrah_realestate-11-05-24.jpeg", description: "للبيع أرض سكنية في روضة القرط الشارقة مساحة 17000 قدم" },
    { id: 21, type: "سكني", emirate: "الشارقة", area: "بسااتين الزبير", price: 480000, size: 4800, imgSrc: "https://images.1000aqar.com/5-2024/D-021-alqudrah_realestate-23-04-24.jpeg", description: "للبيع أرض سكنية في بساتين الزبير الشارقة مساحة 4800 قدم" },
    { id: 22, type: "سكني", emirate: "الشارقة", area: "الحوشي", price: 850000, size: 5100, imgSrc: "https://images.1000aqar.com/5-2024/D-022-sama_alsharjah_real_estate-16-05-24.jpeg", description: "للبيع أرض سكنية في الحوشي الشارقة مساحة 5100 قدم موقع مميز" },
    { id: 23, type: "تجاري", emirate: "الشارقة", area: "الفلاح", price: 1950000, size: 4800, imgSrc: "https://images.1000aqar.com/5-2024/D-023-sama_alsharjah_real_estate-13-05-24.jpeg", description: "للبيع أرض تجارية في الفلاح الشارقة مساحة 4800 قدم موقع مميز" },
    { id: 24, type: "سكني", emirate: "الشارقة", area: "روضه القرط", area: "روضة القرط", price: 520000, size: 5100, imgSrc: "https://images.1000aqar.com/5-2024/D-024-sama_alsharjah_real_estate-12-05-24.jpeg", description: "للبيع أرض سكنية في روضة القرط الشارقة مساحة 5100 قدم موقع مميز" },
    { id: 25, type: "سكني", emirate: "الشارقة", area: "الحوشي", area: "حوشي", price: 0,size: 10000, imgSrc: "https://images.1000aqar.com/5-2024/D-25-souq_alaqarat-30-03-24.jpeg", description: "أرض سكنية للبيع في الحوشي الشارقة مساحة 10000 قدم " },          /* سوق */ 
    { id: 26, type: "سكني", emirate: "الشارقة", area: "الطي", area: "الرقيبة", price: 0,size: 11000, imgSrc: "https://images.1000aqar.com/5-2024/D-26-souq_alaqarat-30-03-24.jpeg", description: "أرض للبيع في الرقيبة الشارقة مساحة 11000 قدم  على شارعين " }, /* سوق */ 
    { id: 27, type: "سكني", emirate: "الشارقة", area: "الصجعه", area: "الصجعة", price: 5500000, size: 17500, imgSrc: "https://images.1000aqar.com/5-2024/D-27-souq_alaqarat-30-03-24.jpeg", description: "أرض صناعية للبيع في الصجعة الشارقة  مساحة 17500 قدم دخل 9%" }, /* سوق */ 
    { id: 28, type: "سكني", emirate: "الشارقة", area: "الحوشي", price: 520000, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-028-tamleekuae_ae-12-05-24.jpeg", description: "للبيع فيلا سكنية في الحوشي الشارقة" },
    { id: 29, type: "سكني", emirate: "الشارقة", area: "الحوشي", price: 1950000, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-029-tamleekuae_ae-12-05-24.jpeg", description: "للبيع فيلا سكنية في الحوشي الشارقة" },
    { id: 30, type: "سكني", emirate: "الشارقة", area: "شرقان", price: 910000, size: 5200, imgSrc: "https://images.1000aqar.com/5-2024/D-030-tamleekuae_ae-08-05-24.jpeg", description: "للبيع أرض سكنية في شرقان الشارقة مساحة 5200 قدم زاوية على شارع إسفلت " },
    { id: 31, type: "0", emirate: "الشارقة", area: "مزيرعة", area: "الرحمانية", price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-031-aljazzat-18-03-24.png", description: "للبيع أرض في الرحمانية الشارقة  " },
    { id: 32, type: "0", emirate: "الشارقة", area: "مزيرعة", price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-032-aljazzat-18-03-24.png", description: "للبيع أرض في مزيرعة الشارقة" },
    { id: 33, type: "0", emirate: "الشارقة", area: "السحمة",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-033-aljazzat-18-03-24.png", description: "أرض للبيع في السحمة الشارقة" },
    { id: 34, type: "0", emirate: "الشارقة", area: "مزيرعة", area: "الرحمانية", price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-34-souq_alaqarat-30-03-24.jpeg", description: "للبيع أرض في الرحمانية الشارقة  " },/* سوق */ 
    { id: 35, type: "0", emirate: "الشارقة", area: "مزيرعة", price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-35-souq_alaqarat-30-03-24.jpeg", description: "للبيع أرض في مزيرعة الشارقة" },/* سوق */ 
    { id: 36, type: "0", emirate: "الشارقة", area: "السحمة",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-36-souq_alaqarat-30-03-24.jpeg", description: "أرض للبيع في السحمة الشارقة" },/* سوق */ 
    { id: 37, type: "0", emirate: "عجمان", area: "الزاهية سكوير", area: "الزاهية", price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-037-alrasikhoon_ae-12-05-24.jpeg", description: "أرض تاون هاوس للبيع في الزاهية عجمان ",description: "أراضي تاون هاوس للبيع في الزاهية سكوير عجمان  " },
    { id: 38, type: "سكني", emirate: "عجمان", area: "الزاهية P11", area: "الزاهية", price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-038-alrasikhoon_ae-5-02-24.jpeg", description: "للبيع أرض سكنية في الزاهية عجمان " },
    { id: 39, type: "تجاري", emirate: "عجمان", area: "الحليو",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-039-alrasikhoon_ae-23-01-24.jpeg", description: "أرض تجارية للبيع في الحليو عجمان " },
    { id: 40, type: "سكني", emirate: "عجمان", area: "الراشدية",  price: 2800000, size: 10000, imgSrc: "https://images.1000aqar.com/5-2024/D-040-abf_realestate92-06-03-24.jpeg", description: "بيت للبيع في الراشدية عجمان مؤجر مساحة 10000 قدم " },
    { id: 41, type: "سكني", emirate: "دبي", area: "الورقاء 3",  price: 3500000, size: 12000, imgSrc: "https://images.1000aqar.com/5-2024/D-041-abf_realestate92-27-02-24.jpeg", description: "أرض سكنية للبيع في الورقاء 3 عجمان مساحة 12000 قدم" },
    { id: 42, type: "سكني", emirate: "دبي", area: "تلال جبل علي",  area: "جبل علي هيلز",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-042-abf_realestate92-14-03-24.jpeg", description: "أرض سكنية للبيع في جبل علي " },
    { id: 43, type: "سكني", emirate: "دبي", area: "تلال جبل علي",  area: "جبل علي هيلز",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-43-souq_alaqarat-30-03-24.jpeg", description: "أرض سكنية للبيع في جبل علي " },/* سوق */ 
    { id: 44, type: "سكني", emirate: "دبي", area: "تلال جبل علي",  area: "جبل علي هيلز",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-44-souq_alaqarat-30-03-24.jpeg", description: "أرض سكنية للبيع في جبل علي " },/* سوق */ 
    { id: 45, type: "سكني", emirate: "دبي", area: "تلال جبل علي",  area: "جبل علي هيلز",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-45-souq_alaqarat-30-03-24.jpeg", description: "أرض سكنية للبيع في جبل علي " },/* سوق */ 
    { id: 46, type: "سكني", emirate: "الشارقة", area: "السيوح",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-046-muhamed_abo_hazem-04-11-23.jpeg", description: "فيلا للبيع في السيوح الشارقة " },
    { id: 47, type: "صناعي", emirate: "الشارقة", area: "الصجعة S", area: "الصجعة",  price: 520000, size: 10000, imgSrc: "https://images.1000aqar.com/5-2024/D-047-muhamed_abo_hazem-14-06-23.jpeg", description: "أرض صناعية للبيع في الصجعة مساحة 10000 قدم " },
    { id: 48, type: "سكني", emirate: "الشارقة", area: "السيوح",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-048-muhamed_abo_hazem-07-09-23.jpeg", description: "فيلا للبيع في السيوح الشارقة 5 غرف ماستر" },
    { id: 49, type: "سكني", emirate: "عجمان", area: "العالية",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-049-almajedrealestateuae-18-05-24.jpg", description: "فيلا للبيع في العالية عجمان " },
    { id: 50, type: "سكني", emirate: "عجمان", area: "الحليو 2", area: "الحليو",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-050-almajedrealestateuae-28-03-24.jpeg", description: "فيلا للبيع في الحليو عجمان  " },
    { id: 51, type: "سكني", emirate: "عجمان", area: "العامرة",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-051-almajedrealestateuae-24-04-24.jpeg", description: "فيلا للبيع في العامرة عجمان" },
    { id: 52, type: "سكني", emirate: "دبي", area: "تلال جبل علي",  area: "جبل علي هيلز",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-52-souq_alaqarat-30-03-24.jpeg", description: "أرض سكنية للبيع في جبل علي " },/* سوق */ 
    { id: 53, type: "سكني", emirate: "دبي", area: "تلال جبل علي",  area: "جبل علي هيلز",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-53-souq_alaqarat-30-03-24.jpeg", description: "أرض سكنية للبيع في جبل علي " },/* سوق */ 
    { id: 54, type: "سكني", emirate: "دبي", area: "تلال جبل علي",  area: "جبل علي هيلز",  price: 0, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-54-souq_alaqarat-30-03-24.jpeg", description: "أرض سكنية للبيع في جبل علي " },/* سوق */ 
    { id: 55, type: "سكني", emirate: "أبوظبي", area: "مدينة شخبوط", area: "مدينة الشيخ شخبوط",  price: 11200000, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-055-brokerabudhabi-24-05-24.jpeg", description: "فيلا فخمة للبيع في مدينة الشيخ شخبوط أبوظبي " },
    { id: 56, type: "سكني", emirate: "أبوظبي", area: "بني ياس", area: "بوابة الشرق",  price: 3400000, size: 0, imgSrc: "https://images.1000aqar.com/5-2024/D-056-brokerabudhabi-23-05-24.jpeg", description: "فيلا للبيع في بوابة الشرق بني ياس أبوظبي" },
    { id: 57, type: "سكني", emirate: "أبوظبي", area: "بني ياس", area: "بوابة الشرق",  price: 0, size: 12000, imgSrc: "https://images.1000aqar.com/5-2024/D-057-brokerabudhabi-22-05-24.jpeg", description: "فيلا 5 غرف ماستر للبيع في مشروع بوابة الشرق بني ياس أبوظبي مساحة 12000 قدم" },




];

// Function to format price with comma separator
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to create property cards
function createPropertyCards() {
    const propertyGrid = document.getElementById('property-grid');
    propertyGrid.innerHTML = '';
    properties.forEach(property => {
        // Create post element
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML =
        /*    line is new     
<a href="?id=${property.id}">
*/ `
         <a href="?id=${property.id}">
            <img src="${property.imgSrc}" loading="lazy" alt="Property Image" onclick="openModal(${property.id})">
            <h3 class="hidden-description">${property.type}</h3>
            <p class="hidden-description">الإمارة: ${property.emirate}</p>
            <p class="hidden-description">المنطقة: ${property.area}</p>
            <p class="hidden-description">السعر: ${formatPrice(property.price)} درهم</p>
            <p class="hidden-description">المساحة: ${property.size} قدم مربع</p>
            <p class="hidden-description">${property.description}</p>
        `;
        propertyGrid.appendChild(postElement);
    });
}


// new omar added start

// Function to open modal with details
function openPropertyDetails(propertyId) {
    const property = properties.find(p => p.id == propertyId);
    if (property) {
        const modalContent = document.getElementById('myModal');
        modalContent.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="swiper-container">
                <div class="swiper-wrapper" id="swiper-wrapper">
                    <div class="swiper-slide"><img src="${property.imgSrc}" alt="Property Image"></div>
                </div>
            </div>
            <div class="property-detials-zoom">
            <h3 class="hidden-description">${property.type}</h3>
            <p class="hidden-description">الإمارة: ${property.emirate}
            المنطقة: ${property.area}
            السعر: ${formatPrice(property.price)} درهم
            المساحة: ${property.size} قدم مربع
            ${property.description}</p>
            </div>
            <a href="${generateWhatsAppLink(property.id, property.description)}" target="_blank"><button class="call-button whatsapp-button">اتصل عبر الواتساب</button></a>
        `;
        document.getElementById('myModal').style.display = 'block';
        mySwiper.update();
        mySwiper.slideTo(0);
    }
}

// Parse URL parameters to open property details if ID is present
function parseURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    if (propertyId) {
        openPropertyDetails(propertyId);
    }
}

// Initialize property cards
createPropertyCards();
parseURLParams();

// new omar added end




// Function to generate WhatsApp link
function generateWhatsAppLink(propertyId, propertyDescription) {
    const phoneNumber = "971501400860"; // Replace with your actual WhatsApp phone number
    const message = encodeURIComponent(`أنا مهتم بالعرض العقاري رقم ID=${propertyId} وصف العرض: ${propertyDescription}`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
}

// Function to open modal with swiper
function openModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (property) {
        const swiperWrapper = document.getElementById('swiper-wrapper');
        swiperWrapper.innerHTML = `
            <div class="swiper-slide"><img src="${property.imgSrc}" loading="lazy" alt="Property Image"></div>
            <h4 class="call-button">رقم العرض العقاري: ${property.id}</h4>
        `;

        // Add the call button and WhatsApp button
        const modalContent = document.getElementById('myModal');
        modalContent.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="swiper-container">
                <div class="swiper-wrapper" id="swiper-wrapper">
                    <div class="swiper-slide"><img src="${property.imgSrc}" loading="lazy" alt="Property Image"></div>
                </div>
            </div>
            <a href="${generateWhatsAppLink(property.id, property.description)}" target="_blank"><button class="call-button whatsapp-button">اتصل عبر الواتساب</button></a>
        `;

        document.getElementById('myModal').style.display = 'block';

        // Update Swiper to show the new content
        mySwiper.update();
        mySwiper.slideTo(0); // Ensure the new image is displayed

        // Push a new state to the browser's history
        history.pushState({ modalOpen: true }, null, ''); // CHANGED

        // Add a popstate listener to close the modal
        window.addEventListener('popstate', handleCloseModalOnBack); // CHANGED
    }
}

// Function to handle closing the modal when back button is pressed
function handleCloseModalOnBack(event) { // CHANGED
    closeModal();
}

// Function to filter properties
function filterProperties() {
    const emirateFilter = document.getElementById('emirate-filter').value;
    const areaFilter = document.getElementById('area-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    const filteredProperties = properties.filter(property => {
        const matchesEmirate = emirateFilter === "" || property.emirate === emirateFilter;
        const matchesArea = areaFilter === "" || property.area.toLowerCase().includes(areaFilter.toLowerCase());
        const matchesPrice = priceFilter === "" || property.price <= parseInt(priceFilter);
        const matchesSearch = property.description.toLowerCase().includes(searchInput);
        return matchesEmirate && matchesArea && matchesPrice && matchesSearch;
    });

    const propertyGrid = document.getElementById('property-grid');
    const noResultsMessage = document.getElementById('no-results');

    propertyGrid.innerHTML = '';

    if (filteredProperties.length > 0) {
        noResultsMessage.style.display = 'none';
        filteredProperties.forEach(property => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <img src="${property.imgSrc}" loading="lazy" alt="Property Image" onclick="openModal(${property.id})">
                <h3 class="hidden-description">${property.type}</h3>
                <p class="hidden-description">الإمارة: ${property.emirate}</p>
                <p class="hidden-description">المنطقة: ${property.area}</p>
                <p class="hidden-description">السعر: ${formatPrice(property.price)} درهم</p>
                <p class="hidden-description">المساحة: ${property.size} قدم مربع</p>
                <p class="hidden-description">${property.description}</p>
            `;
            propertyGrid.appendChild(postElement);
        });
    } else {
        noResultsMessage.style.display = 'block';
    }
}

// Function to close modal
function closeModal() { // CHANGED
    document.getElementById('myModal').style.display = 'none';
    // Remove the popstate listener to prevent memory leaks
    window.removeEventListener('popstate', handleCloseModalOnBack); // CHANGED
    // If a modal state is in history, go back one step
    if (history.state && history.state.modalOpen) { // CHANGED
        history.back(); // CHANGED
    }
}

// Event listener for Enter key in search input
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        filterProperties();
    }
});


// omar last -------------------------------------------------------------------------------------------------------------------------

// Function to open modal with details
function openPropertyDetails(propertyId) {
    const property = properties.find(p => p.id == propertyId);
    if (property) {
        const modalContent = document.getElementById('myModal');
        modalContent.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="swiper-container">
                <div class="swiper-wrapper" id="swiper-wrapper">
                    <div class="swiper-slide"><img src="${property.imgSrc}" alt="Property Image"></div>
                </div>
            </div>
            <h3 class="hidden-description">${property.type}</h3>
            <p class="hidden-description">الإمارة: ${property.emirate}</p>
            <p>المنطقة: ${property.area}</p>
            <p class="hidden-description">السعر: ${formatPrice(property.price)} درهم</p>
            <p class="hidden-description">المساحة: ${property.size} قدم مربع</p>
            <p class="hidden-description">${property.description}</p>
            <a href="${generateWhatsAppLink(property.id, property.description)}" target="_blank"><button class="call-button whatsapp-button">اتصل عبر الواتساب</button></a>
        `;
        document.getElementById('myModal').style.display = 'block';
        mySwiper.update();
        mySwiper.slideTo(0);
    }
}
// Parse URL parameters to open property details if ID is present
function parseURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    if (propertyId) {
        openPropertyDetails(propertyId);
    }
}

// Initialize property cards
createPropertyCards();
parseURLParams();
// omar last-------------------------------------------






// Initialize Swiper when the page loads
const mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize property cards
createPropertyCards();

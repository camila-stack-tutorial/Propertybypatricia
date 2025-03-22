document.addEventListener("DOMContentLoaded", function () {
    //property data
    const properties = {
        ThikaGrooveChania: {
            title: "Thika Grove Chania",
            location: "Thika, Murang'a, Kenya",
            description: [
                "Nested just 2 km from Thika Super Highway and a 2-minute drive from Blue Post, Thika Grove Chania Phase II offers an exceptional living and investment opportunity in Murang'a county",
                "At the heart of this development is a lush, green environment, designed as a secure, gated estate, providing the perfect balance of modern convinience and natural beauty. Whether your'e looking to build your dream home or secure a high-potential investment, Thika Groove Chania offers the ideal setting for your future.",
                "Formerly a thriving macadamia farm, this well planned mixed-use development by Finsco Africa seamlessly blends residential and commercial spaces, catering to both homeowners and investors eeking value and growth.",
                "Join a community where nature meets progress, and experience serenity, luxury, and a future full of possibilities. Reach out below and Secure your space today!.",
                "Good news to NOTE! You can purchase with bank financing for a stress-free investment for as long as 10 years."

            ],
            images: ["images/thika/Thika_groove_1.webp", "images/thika/thika_grove_2.jpg", "images/thika/thika_grove_3.jpg", "images/thika/thika_grove_4.jpg", "images/thika/thika_grove_5.jpg", "images/thika/thika_grove_6.jpg", "images/thika/thika_grove_7.jpg", "images/thika/thika_grove_8.jpg", "images/thika/thika_grove_9.jpg", "images/thika/thika_grove_10.jpg"],
            ptitle: "Features of Thika Grove Chania",
            tablePtype: "Plots",
            tablePsize: "1/2 Acre  @ 14,000,000.00",
            tablePsize2: "1/4 Acre  @ 7,300,000.00",
            tablePsize3: "1/8 Acre  @ 3,950,000.00",
            tableUtility: "Tarmaced Roads, Security, Water & Electricity",
            tablePay: "Cash & Flexible Bank Financing",
            testimonial: "What Thika Grove Chania Clients Say"
        },
        LegacyRidgesAnnexe: {
            title: "Legacy Ridges Annexe",
            location: "Tatu City, Ruiru, Kenya",
            description: [
                "Own Your Dream Property at Legacy Ridges – A Prime Investment in Ruiru Legacy Ridges is a prestigious gated community in Ruiru, Kiambu County, just 600m off Ruiru-Kiambu Road, directly opposite Nova Pioneer Girls and only 20km from Nairobi CBD.",
                "This breathtaking 200-acre development offers a world-class master plan, designed for those seeking affordable luxury in a strategic and well-connected location. Enjoy easy access to top-tier amenities including malls, schools, and hospitals—ensuring a modern and convenient lifestyle. Secure your spot today and be part of this thriving community!"
            ],
            images: ["images/legacyridges/legacy1.jpg"],
            ptitle: "Features of Legacy Ridges Annexe",
            tablePtype: "Plots",
            tablePsize: "1/4 Acre  @ 8,500,000.00",
            tableUtility: "Tarmaced Roads, Security, Water & Electricity",
            tablePay: "Cash & Flexible Bank Financing",
            testimonial: "What Legacy Ridges Annexe Clients Say"
        },
        RiverlineRidges: {
            title: "Riverline Ridges",
            location: "Ruiru, Kiambu, Kenya",
            description: [
                "Invest in Riverline Ridges – A Thriving Mixed-Use Development in Ruiru",
                "Riverline Ridges is a prime 427-acre mixed-use development designed to offer a modern, sustainable lifestyle in a serene natural setting. Located just 5km from Thika Superhighway, behind Spur Mall, and touching Ruiru-Mugutha Road, this project is strategically positioned for high returns on investment.",
                "With rapidly growing infrastructure and a workforce of over 200,000 professionals in Ruiru and Kiambu County, Riverline Ridges offers exceptional capital appreciation opportunities. Choose from residential, commercial, or industrial plots, ranging from 1/8 acre to 1 acre and beyond, ideal for large-scale development, subdivision, or a private retreat.",
                "Secure your investment today and be part of a future-ready community!"
            ],
            images: ["images/riverline/riverline-ridges-1.jpg", "images/riverline/riverline-ridges-2.jpg"],
            ptitle: "Features of Riverline Ridges",
            tablePtype: "Plots",
            tablePsize: "1/2 Acre  @ 9,500,000.00",
            tablePsize2: "1/4 Acre  @ 5,500,000.00",
            tablePsize3: "1/8 Acre  @ 2,800,000.00",
            tableUtility: "Tarmaced Roads, Security, Water & Electricity",
            tablePay: "Cash & Flexible Bank Financing",
            testimonial: "What Riverline Ridges Clients Say"
        },
        VantageView: {
            title: "Vantage View",
            location: "Juja, Kenya",
            description: [
                "Take a view in Vantage View – Your Ideal Home & Investment Destination",
                "Located just 8 minutes from Juja Town along Gatundu Road, Kiambu, Vantage View is a premium real estate development offering the perfect balance of modern living and natural tranquility. Nestled in a serene and well-connected location, this project provides spacious plots and contemporary housing options, making it ideal for homeowners and investors alike.",
                "With easy access to essential amenities and seamless connectivity to major towns, Vantage View is a thriving neighborhood where convenience meets comfort.",
                "Secure your piece of this prime location today!"
            ],
            images: ["images/vantageview/vantage-1.jpg", "images/vantageview/vantage-2.jpg"],
            ptitle: "Features of Vantage View",
            tablePtype: "Plots",
            tablePsize: "1/4 Acre  @ 4,900,000.00",
            tablePsize2: "1/8 Acre  @ 2,500,000.00",
            tableUtility: "Tarmaced Roads, Security, Water & Electricity",
            tablePay: "Cash & Flexible Bank Financing",
            testimonial: "What Vantage View Clients Say"
        },
        BlissSemiDetachedVilla: {
            title: "Bliss Semi-Detached Villa",
            location: "Bliss Waterpark Naivasha",
            description: [
                "Experience Bliss at Bliss Water Park, Naivasha",
                "Welcome to Bliss Water Park Naivasha, where luxury, tranquility, and adventure come together in the heart of Naivasha.",
                "Developed by Finsco Africa, this exclusive holiday home concept offers breathtaking views of Mount Longonot and Lake Naivasha, creating the perfect escape from the ordinary.",
                "Conveniently located just 800 meters from Moi South Lake Road, Bliss Water Park is designed for ultimate relaxation and seamless connection to nature.",
                "Featuring a spacious 100 SQM villa, the elegant architecture blends comfort and sophistication, ensuring an unforgettable stay for tourists and holidaymakers. With proximity to key amenities, guests can immerse themselves in the beauty of Naivasha while enjoying modern convenience.",
                "Your dream getaway starts here!"
            ],
            images: ["images/blissSemiDetached/bliss-semi-detached.jpg", "images/blissSemiDetached/bliss-semi-detached-2.jpg", "images/blissSemiDetached/bliss-semi-detached-3.jpg", "images/blissSemiDetached/bliss-semi-detached-4.jpg"],
            ptitle: "Features of Bliss Semi-Detached Villa",
            tablePtype: "Holiday Homes",
            tablePsize: "2 Bedrooms  @ 12,325,000.00",
            tableUtility: "Air Conditioning, Sauna, Swimming Pool, Wi-Fi, Security, Dryer, Laundry",
            tablePay: "Cash & Flexible Bank Financing",
            testimonial: "What Bliss Semi-Detached Villa Clients Say"
        },
        BlissVilla: {
            title: "Bliss Villa",
            location: "Bliss waterpark Naivasha, Nakuru, Kenya",
            description: [
                "Experience Luxury & Serenity at Bliss Water Park, Naivasha",
                "Welcome to Bliss Water Park Naivasha, where luxury, tranquility, and adventure come together in perfect harmony.",
                "Developed by Finsco Africa, this exclusive holiday home concept is strategically located just 800 meters from Moi South Lake Road, offering breathtaking views of Mount Longonot and the serene expanse of Lake Naivasha.",
                "Indulge in the 1-Bedroom Deluxe Suite, a spacious 50 SQM and 70 SQM, and a 3-bedroom Deluxe Suite 130 SQM, haven designed for comfort and elegance. With nature as your backdrop and essential amenities within easy reach, you’ll enjoy unmatched relaxation and peace of mind.",
                "Whether you seek a quiet retreat or a chance to explore Naivasha’s breathtaking landscapes, Bliss Water Park is your perfect getaway."
            ],
            images: ["images/blissSemiDetached/bliss-3bed-1.jpg", "images/blissSemiDetached/bliss-3bed-2.jpg", "images/blissSemiDetached/bliss-3bed-3.jpg"],
            ptitle: "Features of Bliss Villa",
            tablePtype: "Holiday Homes",
            tablePsize: "1 Bedroom  @ 5,800,000.00 (50m²) & @ 7,975,000.00 (70m²)",
            tablePsize2: "3 Bedroom  @ 17,400,000.00",
            tableUtility: "Gym, Air Conditioning, Sauna, Swimming Pool, Wi-Fi, Dryer, Laundry, Tarmac road, Electricity, Security, Water",
            tablePay: "Cash & Flexible Bank Financing",
            testimonial: "What Bliss Villa Clients Say"
        },
        TheMarra: {
            title: "The Marra",
            location: "Finpark Estate, Ruai, Nairobi, Kenya",
            description: [
                "Finpark Estate Ruai – Your Ideal Gated Community",
                "Discover Finpark Estate Ruai, a well-planned gated community featuring exquisite 4-bedroom maisonettes (all ensuite) plus DSQ, designed for modern living in a prime Ruai location.",
                "These homes showcase a sleek flat-roof design, spacious interiors, and high-end finishes, providing the perfect blend of comfort, style, and functionality for today’s families.",
                "Prime Location & Accessibility:",
                "📍 1.8 km from Quickmart Ruai",
                "🚗 10 min to the expanded Eastern Bypass",
                "✈️ 25 min to JKIA",
                "🛣️ 25 min to Thika Road",
                "🚆 35 min to SGR",
                "🏭 20 min to the Industrial Area",
                "🏙️ 40 min to Nairobi CBD",
                "🏥 1 km from Ruai Family Hospital",
                "With unmatched convenience and a thriving community, Finpark Estate Ruai is the perfect place to call home!"
            ],
            images: ["images/marra/the_marra_1.webp", "images/marra/the_marra_2.webp", "images/marra/the_marra_3.webp", "images/marra/the_marra_4.webp", "images/marra/the_marra_5.webp", "images/marra/the_marra_6.webp", "images/marra/the_marra_7.webp"],
            ptitle: "Features of The Marra",
            tablePtype: "Homes",
            tablePsize: "4 Bedrooms  @ 13,500,000.00",
            tableUtility: "Laundry, Tarmac road, Electricity, Security, Water",
            tablePay: "Cash & Flexible Bank Financing",
            testimonial: "What The Marra Clients Say"
        },
        Deluxe: {
            title: "Deluxe",
            location: "Bliss waterpark Naivasha, Nakuru, Kenya",
            description: [
                "Experience the perfect blend of luxury, tranquility, and adventure at Bliss Water Park, a premier holiday destination in the heart of Naivasha.",
                "Developed by Finsco Africa, this exclusive retreat redefines relaxation with breathtaking views of Mount Longonot and the serene waters of Lake Naivasha.",
                "Conveniently located just 800 meters from Moi South Lake Road, Bliss Water Park offers a seamless escape into nature while keeping you close to essential amenities.",
                "Step into a world of elegance and comfort with our 50 SQM Deluxe Suite, thoughtfully designed to harmonize with its natural surroundings. From its sophisticated architecture to its spacious interiors, this suite provides an unparalleled experience of convenience and serenity—giving you a front-row seat to Naivasha’s breathtaking landscapes."
            ],
            images: ["images/blissSemiDetached/bliss-3bed-1.jpg", "images/blissSemiDetached/bliss-3bed-2.jpg", "images/blissSemiDetached/bliss-3bed-3.jpg", "images/blissSemiDetached/deluxe1.jpeg", "images/blissSemiDetached/deluxe2.jpeg", "images/blissSemiDetached/deluxe3.jpg"],
            ptitle: "Features of Deluxe Suites",
            tablePtype: "Holiday Homes",
            tablePsize: "1 Bedrooms  @ 5,800,000.00",
            tableUtility: "Laundry, Tarmac road, Electricity, Security, Water",
            tablePay: "Cash & Flexible Bank Financing",
            testimonial: "What Deluxe Suite Clients Say"
        }
    };
    // Function to get query parameter
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    
    //Get property ID from URL
    const propertyID = getQueryParam("id");

    //Validate and update content
    if (propertyID && properties[propertyID]) {
        const property = properties[propertyID];

        //update title and breadcrumb
        document.querySelector(".heading").textContent = property.title;
        document.querySelector(".breadcrumb-item.active").textContent = property.title;

        //Update property title and location
        document.querySelector(".heading.text-primary").textContent = property.title;
        document.querySelector(".meta").textContent = property.location;

        document.querySelector(".ptitle.mt-5").textContent = property.ptitle;
        document.querySelector(".tableProject").textContent = property.title;
        document.querySelector(".tableLocation").textContent = property.location;
        document.querySelector(".tablePtype").textContent = property.tablePtype;
        document.querySelector(".tablePsize").textContent = property.tablePsize;
        document.querySelector(".tablePsize2").textContent = property.tablePsize2;
        document.querySelector(".tablePsize3").textContent = property.tablePsize3;
        document.querySelector(".tableUtility").textContent = property.tableUtility;
        document.querySelector(".tablePay").textContent = property.tablePay;
        document.querySelector(".testimonial").textContent = property.testimonial;


        //Update Description (Handles Multiple Paragraphs)
        const descParagraphs = document.querySelectorAll(".text-black-50");
        property.description.forEach((text, index) => {
            if (descParagraphs[index]) descParagraphs[index].textContent = text;
        });

        //Update Images
        const imgContainer = document.querySelector(".img-property-slide");
        imgContainer.innerHTML = ""; //Clear existing images
        property.images.forEach(imgSrc => {
            const slideDiv = document.createElement("div");
            slideDiv.classList.add("slide"); //

            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.alt = "Property Image";
            imgElement.classList.add("img-fluid");

            slideDiv.appendChild(imgElement)
            imgContainer.appendChild(slideDiv);
        });

        //Reinitialize tiny slider
        setTimeout(() => {
            if (window.tns) {
                tns({
                    container: ".img-property-slide",
                    items: 1,
                    slideBy: "page",
                    autoplay: true,
                    autoplayButton: false,
                    autoplayButtonOutput: false,
                    controls: false,
                    nav: true,
                    mouseDrag: false
                });
            }
        }, 500);

    } 
    
    else {
        document.body.innerHTML = "<h1>Property Not Found</h1>";
    }
});
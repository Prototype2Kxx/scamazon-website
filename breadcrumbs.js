document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbContainer = document.getElementById("breadcrumbs");

    if (!breadcrumbContainer) return;

    // Define the hierarchy
    const hierarchy = {
        // Root-level pages
        "index.html": { parent: null, name: "Home" },
        "about.html": { parent: "index.html", name: "About" },
        "contact.html": { parent: "index.html", name: "Contact" },
        "books.html": { parent: "index.html", name: "Books" },
        "headphones-landing-page.html": { parent: "index.html", name: "Headphones" },
        "homeandgarden-landing-page.html": { parent: "index.html", name: "Home and Garden" },
        "laptops-landing-page.html": { parent: "index.html", name: "Laptops" },
        "lighting.html": { parent: "index.html", name: "Lighting" },
        "tvs-landing-page.html": { parent: "index.html", name: "TVs" },
        "videogames-landing-page.html": { parent: "index.html", name: "Video Games" },
        "smartphones-landing-page.html": { parent: "index.html", name: "Smartphones" },
        
    
        // Books Section
        "books.html": { parent: "index.html", name: "Books" },
        "book-computing-automate-with-python.html": { parent: "books.html", name: "Automate with Python" },
        "book-computing-html-and-css.html": { parent: "books.html", name: "HTML and CSS" },
        "book-history-egypt.html": { parent: "books.html", name: "History of Egypt" },
        "book-history-ww2.html": { parent: "books.html", name: "History of WW2" },
        "books-computing-and-internet.html": { parent: "books.html", name: "Computing and Internet" },
        "books-history.html": { parent: "books.html", name: "History Books" },
    
        // Headphones Section
        "headphones-landing-page.html": { parent: "index.html", name: "Headphones" },
        "samsung-headphones.html": { parent: "headphones-landing-page.html", name: "Samsung Headphones" },
        "samsung-headphones-buds-2-pro.html": { parent: "samsung-headphones.html", name: "Buds 2 Pro" },
        "samsung-headphones-buds-3.html": { parent: "samsung-headphones.html", name: "Buds 3" },
        "apple-headphones.html": { parent: "headphones-landing-page.html", name: "Apple Headphones" },
        "apple-headphones-airpods-max.html": { parent: "apple-headphones.html", name: "AirPods Max" },
        "apple-headphones-airpods-pro-2.html": { parent: "apple-headphones.html", name: "AirPods Pro 2" },
        "beats-headphones.html": { parent: "headphones-landing-page.html", name: "Beats Headphones" },
        "beats-headphones-studio-3.html": { parent: "beats-headphones.html", name: "Beats Studio 3" },
        "beats-headphones-solo-4.html": { parent: "beats-headphones.html", name: "Beats Solo 4" },
    
        // Laptops Section
        "laptops-landing-page.html": { parent: "index.html", name: "Laptops" },
        "office-multimedia-laptops.html": { parent: "laptops-landing-page.html", name: "Office and Multimedia Laptops" },
        "office-multimedia-laptops-macbook-air.html": { parent: "office-multimedia-laptops.html", name: "MacBook Air" },
        "office-multimedia-laptops-microsoft-surface.html": { parent: "office-multimedia-laptops.html", name: "Microsoft Surface" },
        "gaming-laptop-acer-nitro-16.html": { parent: "laptops-landing-page.html", name: "Acer Nitro 16" },
        "gaming-laptop-asus-strix-g16.html": { parent: "laptops-landing-page.html", name: "ASUS Strix G16" },
        "gaming-laptop-lenovo-think-pad-l14-gen-5.html": { parent: "laptops-landing-page.html", name: "Lenovo ThinkPad P14 Gen 5" },
        "gaming-laptop-msi-raider-16.html": { parent: "laptops-landing-page.html", name: "MSI Raider 16" },
    
        // TVs Section
        "tvs-landing-page.html": { parent: "index.html", name: "TVs" },
        "tv-hisense.html": { parent: "tvs-landing-page.html", name: "Hisense" },
        "tv-lg.html": { parent: "tvs-landing-page.html", name: "LG" },
        "tv-philips.html": { parent: "tvs-landing-page.html", name: "Philips" },
        "tv-samsung.html": { parent: "tvs-landing-page.html", name: "Samsung TVs" },
        "tv-samsung-du7100.html": { parent: "tv-samsung.html", name: "DU7100" },
        "tv-samsung-q60b.html": { parent: "tv-samsung.html", name: "Q60B" },
        "tv-samsung-qn85d.html": { parent: "tv-samsung.html", name: "QN85D" },
        "tv-panasonic.html": { parent: "tvs-landing-page.html", name: "Panasonic TVs" },
        "tv-panasonic-55z80aey.html": { parent: "tv-panasonic.html", name: "55Z80AEY" },
        "tv-panasonic-65w8-aey.html": { parent: "tv-panasonic.html", name: "65W8 AEY" },
        "tv-sony.html": { parent: "tvs-landing-page.html", name: "Sony TVs" },
        "tv-sony-bravia-kd75x75wl.html": { parent: "tv-sony.html", name: "Sony Bravia KD75X75WL" },
        "tv-sony-bravia-xr-83a84l.html": { parent: "tv-sony.html", name: "Sony Bravia XR-83A84L" },
        "tv-toshiba.html": { parent: "tvs-landing-page.html", name: "Toshiba TVs" },
        "tv-toshiba-uf3f.html": { parent: "tv-toshiba.html", name: "UF3F" },
    
        // Smartphones Section
        "smartphones-landing-page.html": { parent: "index.html", name: "Smartphones" },
        "smartphones-apple.html": { parent: "smartphones-landing-page.html", name: "Apple Smartphones" },
        "smartphones-google-pixel.html": { parent: "smartphones-landing-page.html", name: "Google Pixel Smartphones" },
        "smartphones-samsung.html": { parent: "smartphones-landing-page.html", name: "Samsung Smartphones" },
        "samsung-galaxy-s24-ultra.html": { parent: "smartphones-landing-page.html", name: "Samsung S24 Ultra" },
        "samsung-galaxy-s23-ultra.html": { parent: "smartphones-landing-page.html", name: "Samsung S23 Ultra" },
        "google-pixel-8-pro.html": { parent: "smartphones-google-pixel.html", name: "Pixel 8 Pro" },
        "google-pixel-9-pro.html": { parent: "smartphones-google-pixel.html", name: "Pixel 9 Pro" },
        "apple-iphone-16-pro-max.html": { parent: "apple.html", name: "Apple Iphone 16 Pro Max" },
        "apple-iphone-15-pro-max.html": { parent: "apple.html", name: "Apple Iphone 15 Pro Max" },
        "apple-iphone-14-pro-max.html": { parent: "apple.html", name: "Apple Iphone 14 Pro Max" },
    
        // Video Games Section
        "videogames-landing-page.html": { parent: "index.html", name: "Video Games" },
        "videogames-pc.html": { parent: "videogames-landing-page.html", name: "PC Games" },
        "videogames-playstation.html": { parent: "videogames-landing-page.html", name: "PlayStation Games" },
        "videogames-xbox.html": { parent: "videogames-landing-page.html", name: "Xbox Games" }

       
    };
    

    // Get the raw path (current file name)
    const rawPath = decodeURIComponent(window.location.pathname.split("/").pop());

    // Check if the rawPath exists in the hierarchy
    if (!hierarchy[rawPath]) {
        console.warn(`Page "${rawPath}" is not defined in the hierarchy.`);
        breadcrumbContainer.innerHTML = `
            <span class="breadcrumb-item active" aria-current="page">
                ${rawPath.replace(".html", "").replace(/-/g, " ")}
            </span>`;
        return;
    }

    // Generate the breadcrumb trail
    const breadcrumbs = [];
    let currentPage = rawPath;

    while (currentPage && hierarchy[currentPage]) {
        const { parent, name } = hierarchy[currentPage];
        const isCurrentPage = breadcrumbs.length === 0; // Last breadcrumb is the current page

        breadcrumbs.unshift(
            isCurrentPage
                ? `<span class="breadcrumb-item active" aria-current="page">${name}</span>`
                : `<a href="${currentPage}" class="breadcrumb-item">${name}</a>`
        );

        currentPage = parent; // Move up to the parent
    }

    // Check if "Home" is already in the breadcrumbs
    if (!breadcrumbs.some((breadcrumb) => breadcrumb.includes('Home'))) {
        breadcrumbs.unshift(`<a href="index.html" class="breadcrumb-item">Home</a>`);
    }

    // Inject the breadcrumbs into the container
    breadcrumbContainer.innerHTML = breadcrumbs.join(" <span class='breadcrumb-separator'>/</span> ");
});

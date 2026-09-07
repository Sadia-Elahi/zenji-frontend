document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton = document.querySelector(".mobile-menu");
    const mobileNav = document.querySelector(".mobile-nav");

    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", () => {

            mobileNav.classList.toggle("active");

            menuButton.textContent =
                mobileNav.classList.contains("active")
                    ? "CLOSE"
                    : "MENU";
        });
    }


    /* =====================================================
       ZENJI INFORMATION DATA
    ===================================================== */

    const infoData = {

        /* =================================================
           FAQ
        ================================================= */

        faq: {
            title: "FAQ",

            content: `
                <div class="modal-intro">
                    EVERYTHING YOU NEED TO KNOW
                    ABOUT ZENJI.
                </div>

                <div class="faq-item">
                    <h3>WHAT IS ZENJI?</h3>
                    <p>
                        ZENJI is an anime-inspired streetwear
                        brand built around Japanese culture,
                        gaming, anime and contemporary street fashion.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>WHERE IS ZENJI BASED?</h3>
                    <p>
                        ZENJI is an Australia-based brand with
                        a global vision. The brand combines
                        Japanese-inspired aesthetics with modern
                        streetwear.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>DO YOU SHIP WORLDWIDE?</h3>
                    <p>
                        Shipping availability depends on the
                        destination and the current delivery
                        options available at checkout.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>ARE ZENJI PRODUCTS LIMITED?</h3>
                    <p>
                        Yes. ZENJI focuses on limited drops.
                        Selected designs are released in limited
                        quantities to keep each collection exclusive.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>WILL SOLD OUT PRODUCTS BE RESTOCKED?</h3>
                    <p>
                        ZENJI follows a limited-drop philosophy.
                        Once a design sells out, it may not return.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>HOW DO I CHOOSE MY SIZE?</h3>
                    <p>
                        Always check the size information available
                        on the individual product page before ordering.
                        Consider your preferred fit when selecting
                        between sizes.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>HOW SHOULD I WASH MY ZENJI TEE?</h3>
                    <p>
                        Follow the care instructions supplied with
                        your product. Gentle washing and avoiding
                        excessive heat can help preserve the fabric
                        and printed artwork.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>HOW LONG DOES SHIPPING TAKE?</h3>
                    <p>
                        Delivery times vary depending on destination,
                        shipping method and order volume.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>CAN I CHANGE MY ORDER?</h3>
                    <p>
                        If you need to make a change, contact support
                        as soon as possible. Changes may not be
                        possible once an order has entered processing.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>HOW CAN I CONTACT ZENJI?</h3>
                    <p>
                        Use the Contact Us section to send an enquiry
                        regarding products, orders, shipping,
                        collaborations or general questions.
                    </p>
                </div>
            `
        },


        /* =================================================
           REVIEWS
        ================================================= */

        review: {
            title: "REVIEWS",

            content: `
                <div class="modal-intro">
                    THE COMMUNITY SPEAKS.
                    THE ARC CONTINUES.
                </div>

                <div class="review-card">
                    <div class="review-top">
                        <span>★★★★★</span>
                        <small>VERIFIED CUSTOMER</small>
                    </div>

                    <h3>THE QUALITY IS CRAZY</h3>

                    <p>
                        "The print quality is honestly better
                        than I expected. The tee feels premium
                        and the design looks even better in person."
                    </p>

                    <span class="review-name">
                        — ALEX M.
                    </span>
                </div>


                <div class="review-card">
                    <div class="review-top">
                        <span>★★★★★</span>
                        <small>VERIFIED CUSTOMER</small>
                    </div>

                    <h3>EXACTLY MY STYLE</h3>

                    <p>
                        "I've been looking for anime-inspired
                        streetwear that doesn't feel cheap.
                        ZENJI absolutely nailed the aesthetic."
                    </p>

                    <span class="review-name">
                        — DANIEL K.
                    </span>
                </div>


                <div class="review-card">
                    <div class="review-top">
                        <span>★★★★★</span>
                        <small>VERIFIED CUSTOMER</small>
                    </div>

                    <h3>THE FIT IS PERFECT</h3>

                    <p>
                        "The oversized fit is exactly what I wanted.
                        Super comfortable and the design gets
                        compliments every time I wear it."
                    </p>

                    <span class="review-name">
                        — MICHAEL R.
                    </span>
                </div>


                <div class="review-card">
                    <div class="review-top">
                        <span>★★★★★</span>
                        <small>VERIFIED CUSTOMER</small>
                    </div>

                    <h3>LOVE THE DETAILS</h3>

                    <p>
                        "The whole package feels really thought out.
                        From the artwork to the packaging,
                        everything feels premium."
                    </p>

                    <span class="review-name">
                        — JOSHUA T.
                    </span>
                </div>


                <div class="review-card">
                    <div class="review-top">
                        <span>★★★★★</span>
                        <small>VERIFIED CUSTOMER</small>
                    </div>

                    <h3>MY NEW FAVOURITE TEE</h3>

                    <p>
                        "I've already ordered another one.
                        The design is subtle enough for everyday
                        wear but still has that anime energy."
                    </p>

                    <span class="review-name">
                        — ETHAN P.
                    </span>
                </div>


                <div class="review-card">
                    <div class="review-top">
                        <span>★★★★★</span>
                        <small>VERIFIED CUSTOMER</small>
                    </div>

                    <h3>FEELS LIKE A REAL DROP</h3>

                    <p>
                        "I really like the limited-drop concept.
                        It makes every piece feel more special
                        instead of just another graphic tee."
                    </p>

                    <span class="review-name">
                        — RYAN S.
                    </span>
                </div>


                <div class="review-card">
                    <div class="review-top">
                        <span>★★★★★</span>
                        <small>VERIFIED CUSTOMER</small>
                    </div>

                    <h3>SUPER CLEAN DESIGN</h3>

                    <p>
                        "The artwork is really clean and wearable.
                        It has that anime influence without looking
                        like a generic graphic shirt."
                    </p>

                    <span class="review-name">
                        — NOAH B.
                    </span>
                </div>


                <div class="review-card">
                    <div class="review-top">
                        <span>★★★★★</span>
                        <small>VERIFIED CUSTOMER</small>
                    </div>

                    <h3>WOULD DEFINITELY BUY AGAIN</h3>

                    <p>
                        "Really happy with the purchase.
                        The fit, quality and overall presentation
                        made the whole experience feel premium."
                    </p>

                    <span class="review-name">
                        — LIAM W.
                    </span>
                </div>


                <div class="review-summary">
                    <strong>4.9 / 5</strong>
                    <span>COMMUNITY RATING</span>
                </div>
            `
        },


        /* =================================================
           PRIVACY POLICY
        ================================================= */

        privacy: {
            title: "PRIVACY POLICY",

            content: `
                <div class="modal-intro">
                    YOUR PRIVACY MATTERS.
                </div>

                <div class="policy-block">
                    <h3>INFORMATION WE COLLECT</h3>
                    <p>
                        When using a complete ecommerce service,
                        information such as name, email address,
                        shipping details and order information
                        may be collected when voluntarily provided.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>HOW INFORMATION IS USED</h3>
                    <p>
                        Information may be used to communicate
                        with customers, process orders, provide
                        support and improve the overall shopping
                        experience.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>DATA SECURITY</h3>
                    <p>
                        Reasonable security practices should be
                        used to protect personal information from
                        unauthorized access, alteration or disclosure.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>THIRD-PARTY SERVICES</h3>
                    <p>
                        Ecommerce websites may rely on trusted
                        third-party services for functions such as
                        payment processing, analytics or delivery.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>YOUR CHOICES</h3>
                    <p>
                        Customers may contact the brand regarding
                        questions about their personal information
                        or communication preferences.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>ASSESSMENT PROJECT</h3>
                    <p>
                        This frontend demonstration does not
                        implement a backend, database, authentication
                        system or payment processing system.
                    </p>
                </div>
            `
        },


        /* =================================================
           TERMS
        ================================================= */

        terms: {
            title: "TERMS",

            content: `
                <div class="modal-intro">
                    ZENJI // TERMS OF USE
                </div>

                <div class="policy-block">
                    <h3>WEBSITE USE</h3>
                    <p>
                        By accessing this website, you agree to
                        use the website responsibly and in
                        accordance with applicable laws.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>PRODUCT INFORMATION</h3>
                    <p>
                        Product images, descriptions, prices,
                        availability and other information may
                        change without prior notice.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>LIMITED DROPS</h3>
                    <p>
                        ZENJI products may be released as limited
                        drops. Availability is not guaranteed and
                        sold-out products may not return.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>INTELLECTUAL PROPERTY</h3>
                    <p>
                        Brand names, logos, artwork, graphics,
                        photography and website content should
                        not be reproduced or used without permission.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>WEBSITE AVAILABILITY</h3>
                    <p>
                        Website content and services may be
                        modified, suspended or updated at any time.
                    </p>
                </div>
            `
        },


        /* =================================================
           HELP
        ================================================= */

        help: {
            title: "HELP",

            content: `
                <div class="modal-intro">
                    NEED ASSISTANCE?
                    START HERE.
                </div>

                <div class="help-block">
                    <h3>ORDER QUESTIONS</h3>
                    <p>
                        If you have questions about an order,
                        keep your order details available when
                        contacting support.
                    </p>
                </div>

                <div class="help-block">
                    <h3>SIZE HELP</h3>
                    <p>
                        Always review the product-specific size
                        information before purchasing. Consider
                        whether you prefer a regular or oversized fit.
                    </p>
                </div>

                <div class="help-block">
                    <h3>SHIPPING HELP</h3>
                    <p>
                        Delivery times can vary depending on
                        destination and shipping method.
                    </p>
                </div>

                <div class="help-block">
                    <h3>PRODUCT HELP</h3>
                    <p>
                        For product-specific questions, check
                        the relevant product page first for
                        available information.
                    </p>
                </div>

                <div class="help-block">
                    <h3>RETURN HELP</h3>
                    <p>
                        If you need help with a return, contact
                        support with your order information and
                        the reason for your request.
                    </p>
                </div>

                <div class="help-block">
                    <h3>STILL NEED HELP?</h3>
                    <p>
                        Contact the ZENJI team with your question
                        and the relevant details so the issue can
                        be handled efficiently.
                    </p>
                </div>
            `
        },


        /* =================================================
           RETURN POLICY
        ================================================= */

        return: {
            title: "RETURN POLICY",

            content: `
                <div class="modal-intro">
                    SIMPLE. CLEAR. FAIR.
                </div>

                <div class="policy-block">
                    <h3>ELIGIBLE RETURNS</h3>
                    <p>
                        Eligible products should generally be
                        unworn, unused and returned in their
                        original condition.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>PRODUCT CONDITION</h3>
                    <p>
                        Products showing signs of wear, washing,
                        damage or alteration may not qualify
                        for return.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>SALE PRODUCTS</h3>
                    <p>
                        Sale, promotional or special-release
                        products may have different return
                        conditions.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>HOW TO REQUEST A RETURN</h3>
                    <p>
                        Contact the support team with your
                        order information and reason for the
                        return before sending an item back.
                    </p>
                </div>

                <div class="policy-block">
                    <h3>REFUNDS</h3>
                    <p>
                        Approved refunds are handled according
                        to the applicable payment and return
                        process.
                    </p>
                </div>
            `
        },


        /* =================================================
           CONTACT US
        ================================================= */

        contact: {
            title: "CONTACT US",

            content: `
                <div class="contact-form">

                    <div class="modal-intro">
                        HAVE A QUESTION?
                        LET'S TALK.
                    </div>

                    <div class="contact-form-grid">

                        <div class="form-group">

                            <label for="contactName">
                                YOUR NAME
                            </label>

                            <input
                                type="text"
                                id="contactName"
                                placeholder="Enter your name"
                                autocomplete="name"
                            >

                        </div>


                        <div class="form-group">

                            <label for="contactEmail">
                                EMAIL ADDRESS
                            </label>

                            <input
                                type="email"
                                id="contactEmail"
                                placeholder="Enter your email"
                                autocomplete="email"
                            >

                        </div>

                    </div>


                    <div class="form-group">

                        <label for="contactSubject">
                            SUBJECT
                        </label>

                        <select id="contactSubject">

                            <option value="">
                                Select a subject
                            </option>

                            <option value="order">
                                Order Support
                            </option>

                            <option value="product">
                                Product Question
                            </option>

                            <option value="shipping">
                                Shipping
                            </option>

                            <option value="return">
                                Return / Exchange
                            </option>

                            <option value="collaboration">
                                Collaboration
                            </option>

                            <option value="other">
                                Other
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label for="contactMessage">
                            MESSAGE
                        </label>

                        <textarea
                            id="contactMessage"
                            rows="6"
                            placeholder="Write your message..."
                        ></textarea>

                    </div>


                    <button
                        type="button"
                        class="contact-submit"
                        id="contactSubmit"
                    >
                        <span>SEND MESSAGE</span>
                        <span>→</span>
                    </button>


                    <div
                        class="contact-success"
                        id="contactSuccess"
                    >
                        MESSAGE SENT SUCCESSFULLY.
                        THANK YOU FOR CONTACTING ZENJI.
                    </div>

                </div>
            `
        }

    };


    /* =====================================================
       MODAL ELEMENTS
    ===================================================== */

    const modal = document.getElementById("infoModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalContent =
        document.getElementById("modalContent");

    const modalClose =
        document.getElementById("modalClose");

    const modalOverlay =
        document.querySelector(".info-modal-overlay");


    /* =====================================================
       OPEN INFORMATION MODAL
    ===================================================== */

    if (modal && modalTitle && modalContent) {

        document.querySelectorAll(".info-link").forEach(link => {

            link.addEventListener("click", (event) => {

                event.preventDefault();

                const type = link.dataset.info;
                const data = infoData[type];

                if (!data) {
                    return;
                }

                modalTitle.textContent = data.title;
                modalContent.innerHTML = data.content;

                modal.classList.add("active");

                document.body.style.overflow = "hidden";

            });

        });

    }


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeModal() {

        if (!modal) {
            return;
        }

        modal.classList.remove("active");

        document.body.style.overflow = "";
    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeModal
        );

    }


    /* =====================================================
       ESC KEY — MODAL
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeModal();

        }

    });


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    document.addEventListener("click", (event) => {

        const submitButton =
            event.target.closest("#contactSubmit");

        if (!submitButton) {
            return;
        }


        const name =
            document.getElementById("contactName");

        const email =
            document.getElementById("contactEmail");

        const subject =
            document.getElementById("contactSubject");

        const message =
            document.getElementById("contactMessage");

        const success =
            document.getElementById("contactSuccess");


        if (
            !name ||
            !email ||
            !subject ||
            !message ||
            !success
        ) {
            return;
        }


        /* Remove old error states */

        name.classList.remove("form-error");
        email.classList.remove("form-error");
        subject.classList.remove("form-error");
        message.classList.remove("form-error");


        /* Validation */

        let hasError = false;


        if (name.value.trim() === "") {

            name.classList.add("form-error");

            hasError = true;
        }


        if (email.value.trim() === "") {

            email.classList.add("form-error");

            hasError = true;
        }


        /* Correct email pattern */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            email.value.trim() !== "" &&
            !emailPattern.test(email.value.trim())
        ) {

            email.classList.add("form-error");

            hasError = true;
        }


        if (subject.value === "") {

            subject.classList.add("form-error");

            hasError = true;
        }


        if (message.value.trim() === "") {

            message.classList.add("form-error");

            hasError = true;
        }


        if (hasError) {

            success.classList.remove("active");

            return;
        }


        /* Success */

        success.classList.add("active");


        /* Clear fields */

        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";


        /* Remove success message after 4 seconds */

        setTimeout(() => {

            success.classList.remove("active");

        }, 4000);

    });


    /* =====================================================
       DROP MEGA MENU
    ===================================================== */

    const dropTrigger =
        document.querySelector(".drop-trigger");

    const dropContainer =
        document.querySelector(".nav-drop");


    if (dropTrigger && dropContainer) {

        const dropArrow =
            dropTrigger.querySelector(".drop-arrow");


        /* Open / Close DROP */

        dropTrigger.addEventListener("click", (event) => {

            event.preventDefault();

            event.stopPropagation();

            dropContainer.classList.toggle("active");


            /* Change + to − */

            if (dropArrow) {

                dropArrow.textContent =
                    dropContainer.classList.contains("active")
                        ? "−"
                        : "+";
            }

        });


        /* Keep menu open when clicking inside */

        const dropMenu =
            dropContainer.querySelector(".drop-menu");

        if (dropMenu) {

            dropMenu.addEventListener("click", (event) => {

                event.stopPropagation();

            });

        }


        /* Close when clicking outside */

        document.addEventListener("click", (event) => {

            if (!dropContainer.contains(event.target)) {

                dropContainer.classList.remove("active");

                if (dropArrow) {
                    dropArrow.textContent = "+";
                }

            }

        });


        /* Close with ESC */

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                dropContainer.classList.remove("active");

                if (dropArrow) {
                    dropArrow.textContent = "+";
                }

            }

        });


        /* Close after selecting a product */

        dropContainer
            .querySelectorAll(".drop-product")
            .forEach(product => {

                product.addEventListener("click", () => {

                    dropContainer.classList.remove("active");

                    if (dropArrow) {
                        dropArrow.textContent = "+";
                    }

                });

            });


        /* Close after VIEW ALL DROPS */

        const viewAllDrops =
            dropContainer.querySelector(".drop-menu-info a");

        if (viewAllDrops) {

            viewAllDrops.addEventListener("click", () => {

                dropContainer.classList.remove("active");

                if (dropArrow) {
                    dropArrow.textContent = "+";
                }

            });

        }

    }
   /* =====================================================
   DROP CATEGORY FILTER
===================================================== */

const categoryLinks = document.querySelectorAll(
    ".drop-category-grid a"
);

const productShop = document.querySelector(
    ".product-shop"
);

const productHeading = document.querySelector(
    ".product-shop .section-heading h2"
);

const productCards = document.querySelectorAll(
    ".product-shop .drop-card"
);


categoryLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const categoryName =
            link.querySelector("strong")
                ?.textContent
                .trim()
                .toLowerCase();

        if (!categoryName) {
            return;
        }


        /* ACTIVE CATEGORY */

        categoryLinks.forEach((item) => {
            item.classList.remove("category-active");
        });

        link.classList.add("category-active");


        /* FILTER PRODUCTS */

        let visibleCount = 0;

        productCards.forEach((product) => {

            const categories =
                product.dataset.category || "";

            if (categories.includes(categoryName)) {

                product.style.display = "";
                visibleCount++;

            } else {

                product.style.display = "none";

            }

        });


        /* CHANGE HEADING */

        if (productHeading) {

            if (categoryName === "tees") {
                productHeading.textContent =
                    "TEES COLLECTION";
            }

            else if (categoryName === "oversized") {
                productHeading.textContent =
                    "OVERSIZED FIT";
            }

            else if (categoryName === "limited") {
                productHeading.textContent =
                    "LIMITED DROPS";
            }

            else if (categoryName === "new arrivals") {
                productHeading.textContent =
                    "NEW ARRIVALS";
            }

        }


        /* CLOSE DROP MENU */

        const dropContainer =
            document.querySelector(".nav-drop");

        const dropArrow =
            document.querySelector(".drop-arrow");

        if (dropContainer) {
            dropContainer.classList.remove("active");
        }

        if (dropArrow) {
            dropArrow.textContent = "+";
        }


        /* SCROLL TO REAL PRODUCTS */

        if (productShop) {

            setTimeout(() => {

                productShop.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 200);

        }

   
         });
 });
});
 
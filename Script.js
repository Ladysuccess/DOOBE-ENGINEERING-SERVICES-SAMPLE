/* =====================================================
   DOOBE ENGINEERING & SERVICES
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");


    if (!menuToggle || !mainNav) {
        return;
    }


    /* =====================================
       OPEN / CLOSE MENU
    ===================================== */

    menuToggle.addEventListener("click", function () {

        const isOpen =
            menuToggle.classList.toggle("active");

        mainNav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* =====================================
       CLOSE MENU WHEN LINK IS CLICKED
    ===================================== */

    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menuToggle.classList.remove("active");

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /* =====================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================== */

    document.addEventListener("click", function (event) {

        if (
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            menuToggle.classList.remove("active");

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* =====================================
       CLOSE MENU WHEN SCREEN BECOMES DESKTOP
    ===================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            menuToggle.classList.remove("active");

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});


/* =====================================================
   WHATSAPP QUOTE FORM
===================================================== */

const quoteForm =
    document.querySelector("#quoteForm");


if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get form values */

            const name =
                document
                    .querySelector("#name")
                    ?.value
                    .trim();


            const phone =
                document
                    .querySelector("#phone")
                    ?.value
                    .trim();


            const service =
                document
                    .querySelector("#service")
                    ?.value;


            const message =
                document
                    .querySelector("#message")
                    ?.value
                    .trim();


            /* Basic validation */

            if (!name || !phone || !message) {

                alert(
                    "Please complete your name, phone number and project details."
                );

                return;

            }


            /* Create WhatsApp message */

            const whatsappMessage =

                `Hello DOOBE Engineering & Services Ltd,

I would like to make a project enquiry.

Name:
${name}

Phone:
${phone}

Service:
${service}

Project Details:
${message}

Please contact me regarding this project.`;


            /* Encode message */

            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            /* DOOBE WhatsApp number */

            const whatsappNumber =
                "2348068286634";


            /* WhatsApp URL */

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


            /* Open WhatsApp */

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =====================================================
   AUTOMATIC COPYRIGHT YEAR
===================================================== */

const yearElements =
    document.querySelectorAll("#year");


yearElements.forEach(function (element) {

    element.textContent =
        new Date().getFullYear();

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".cards article, .gallery a, .feature-list > div, .case, .video, .service-detail article"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

            observer.observe(
                element
            );

        }
    );

}


/* =====================================================
   ACTIVE PAGE NAVIGATION
===================================================== */

const currentPage =
    window.location.pathname.split("/").pop()
    || "index.html";


navLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (
        linkPage &&
        linkPage.includes(currentPage)
    ) {

        link.classList.add("active");

    }

});


/* =====================================================
   HEADER SHADOW ON SCROLL
===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) return;


        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    },
    {
        passive: true
    }
);


/* =====================================================
   ESCAPE KEY CLOSES MOBILE NAV
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            nav &&
            nav.classList.contains("open")
        ) {

            nav.classList.remove(
                "open"
            );


            if (menu) {

                menu.innerHTML = "☰";

            }

        }

    }
);
/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

.reveal {
    opacity: 0;
    transform: translateY(25px);
    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

.header.scrolled {
    box-shadow: 0 8px 30px rgba(8, 16, 51, 0.08);
}


/* =====================================================
   STAGGERED CARD ANIMATION
===================================================== */

.cards article:nth-child(1) {
    transition-delay: 0.05s;
}

.cards article:nth-child(2) {
    transition-delay: 0.10s;
}

.cards article:nth-child(3) {
    transition-delay: 0.15s;
}

.cards article:nth-child(4) {
    transition-delay: 0.20s;
}

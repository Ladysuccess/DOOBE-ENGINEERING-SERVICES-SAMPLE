/* =====================================================
   DOOBE ENGINEERING & SERVICES
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menu = document.querySelector(".menu");
const nav = document.querySelector("header nav");


if (menu && nav) {

    menu.addEventListener("click", function () {

        nav.classList.toggle("open");

        if (nav.classList.contains("open")) {

            menu.innerHTML = "✕";

            menu.setAttribute(
                "aria-label",
                "Close navigation"
            );

        } else {

            menu.innerHTML = "☰";

            menu.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

const navLinks = document.querySelectorAll(
    "header nav a"
);

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {

            nav.classList.remove("open");

        }

        if (menu) {

            menu.innerHTML = "☰";

            menu.setAttribute(
                "aria-label",
                "Open navigation"
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

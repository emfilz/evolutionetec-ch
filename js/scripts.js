const navToggle = document.getElementById("button");
        const navMenu = document.getElementById("menu");
        const menu_links = document.querySelectorAll('.nav-menu_link');

        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav-menu_visible")

            if (navMenu.classList.contains("nav-menu_visible")) {
                navToggle.setAttribute("aria-label", "Cerrar menú")
            }
            else {
                navToggle.setAttribute("aria-label", "Abrir menú")
            }
        });


        menu_links.forEach(link => {
            link.addEventListener('click', function handleClick(event) {
                navMenu.classList.toggle("nav-menu_visible")

                if (navMenu.classList.contains("nav-menu_visible")) {
                    navToggle.setAttribute("aria-label", "Cerrar menú")
                }
                else {
                    navToggle.setAttribute("aria-label", "Abrir menú")
                }
            });
        });


        const card1btn = document.getElementById("beneficios-tarjeta-1-btn");
        const card1 = document.getElementById("beneficios-tarjeta-1");
        const card1close = document.getElementById("beneficios-tarjeta-1-close");

        card1btn.addEventListener("click", () => {
            card1.classList.toggle("beneficios-tarjeta-hidden");
        });

        card1close.addEventListener("click", () => {
            card1.classList.toggle("beneficios-tarjeta-hidden");
        });


        const card2btn = document.getElementById("beneficios-tarjeta-2-btn");
        const card2 = document.getElementById("beneficios-tarjeta-2");
        const card2close = document.getElementById("beneficios-tarjeta-2-close");

        card2btn.addEventListener("click", () => {
            card2.classList.toggle("beneficios-tarjeta-hidden");
        });

        card2close.addEventListener("click", () => {
            card2.classList.toggle("beneficios-tarjeta-hidden");
        });


        const card3btn = document.getElementById("beneficios-tarjeta-3-btn");
        const card3 = document.getElementById("beneficios-tarjeta-3");
        const card3close = document.getElementById("beneficios-tarjeta-3-close");

        card3btn.addEventListener("click", () => {
            card3.classList.toggle("beneficios-tarjeta-hidden");
        });

        card3close.addEventListener("click", () => {
            card3.classList.toggle("beneficios-tarjeta-hidden");
        });


        const card4btn = document.getElementById("beneficios-tarjeta-4-btn");
        const card4 = document.getElementById("beneficios-tarjeta-4");
        const card4close = document.getElementById("beneficios-tarjeta-4-close");

        card4btn.addEventListener("click", () => {
            card4.classList.toggle("beneficios-tarjeta-hidden");
        });

        card4close.addEventListener("click", () => {
            card4.classList.toggle("beneficios-tarjeta-hidden");
        });


        const card5btn = document.getElementById("beneficios-tarjeta-5-btn");
        const card5 = document.getElementById("beneficios-tarjeta-5");
        const card5close = document.getElementById("beneficios-tarjeta-5-close");

        card5btn.addEventListener("click", () => {
            card5.classList.toggle("beneficios-tarjeta-hidden");
        });

        card5close.addEventListener("click", () => {
            card5.classList.toggle("beneficios-tarjeta-hidden");
        });


        const card6btn = document.getElementById("beneficios-tarjeta-6-btn");
        const card6 = document.getElementById("beneficios-tarjeta-6");
        const card6close = document.getElementById("beneficios-tarjeta-6-close");

        card6btn.addEventListener("click", () => {
            card6.classList.toggle("beneficios-tarjeta-hidden");
        });

        card6close.addEventListener("click", () => {
            card6.classList.toggle("beneficios-tarjeta-hidden");
        });
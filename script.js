window.addEventListener("scroll", function() {
        let header=document.querySelector("header");

        if (window.scrollY > 50) {
            header.style.backgroundColor="rgba(6, 56, 45, 0.9)";
        }

        else {
            header.style.backgroundColor="#06382d";
        }
    });

function scrollToContact() {
        document.getElementById("contact-us").scrollIntoView({
            behavior: "smooth"
        });
}
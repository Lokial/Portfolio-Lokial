// Simple scroll animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// Certificate image click

const certificateImages = document.querySelectorAll(".certificate img");

certificateImages.forEach(image => {

    image.addEventListener("click", () => {

        window.open(image.src, "_blank");

    });

});

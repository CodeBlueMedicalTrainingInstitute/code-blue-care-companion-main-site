document.addEventListener("DOMContentLoaded", function () {
    const contactHomeCare = document.getElementById("contact-home-care");
    const homeCareFormSection = document.getElementById("home-care-form-section");
    const nextStepButton = document.getElementById("next-step-button");
    const nextStepFormSection = document.getElementById("next-step-form-section");
    const homeCareForm = document.getElementById("home-care-form");
    const nextStepForm = document.getElementById("next-step-form");

    contactHomeCare.addEventListener("click", function () {
        document.getElementById("contact-section").classList.add("d-none");
        homeCareFormSection.classList.remove("d-none");
    });

    nextStepButton.addEventListener("click", function () {
        homeCareFormSection.classList.add("d-none");
        nextStepFormSection.classList.remove("d-none");
    });

    nextStepForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Show confirmation modal
        const confirmationModal = new bootstrap.Modal(document.getElementById("confirmationModal"));
        confirmationModal.show();
    });

    const confirmationOkButton = document.getElementById("confirmation-ok-button");
    confirmationOkButton.addEventListener("click", function () {
        // Redirect to home page
        window.location.href = "index.html";
    });
});

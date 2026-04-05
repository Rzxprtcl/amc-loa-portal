document.addEventListener("DOMContentLoaded", () => {

    const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfOIAed-_b1WV4yQkaM0_hlSWh9da5BQUKABYPf-ZrqW0EYhw/viewform";
    const DASHBOARD_LINK = "https://docs.google.com/spreadsheets/d/1VOfLQfEfvKt4qTMJq3HsLVlu2UjlvmQV5F4O8EQNPhw/edit";

    const submitBtn = document.getElementById("submitBtn");
    const dashboardBtn = document.getElementById("dashboardBtn");
    const notice = document.querySelector(".notice");

    if (submitBtn) {
        submitBtn.onclick = () => {
            if (confirm("Proceed to submit LoA?")) {
                window.open(FORM_LINK, "_blank");
            }
        };
    }

    if (dashboardBtn) {
        dashboardBtn.onclick = () => {
            window.open(DASHBOARD_LINK, "_blank");
        };
    }

    if (notice) {
        notice.onclick = () => {
            notice.classList.toggle("expanded");
        };
    }

});

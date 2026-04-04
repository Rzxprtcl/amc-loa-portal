document.addEventListener("DOMContentLoaded", () => {

    console.log("SCRIPT LOADED");

    const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfOIAed-_b1WV4yQkaM0_hlSWh9da5BQUKABYPf-ZrqW0EYhw/viewform";
    const DASHBOARD_LINK = "https://docs.google.com/spreadsheets/d/1VOfLQfEfvKt4qTMJq3HsLVlu2UjlvmQV5F4O8EQNPhw/edit";

    document.getElementById("submitBtn").onclick = () => {
        window.open(FORM_LINK, "_blank");
    };

    document.getElementById("dashboardBtn").onclick = () => {
        window.open(DASHBOARD_LINK, "_blank");
    };

    document.getElementById("notice").onclick = () => {
        document.getElementById("notice").classList.toggle("expanded");
    };

});

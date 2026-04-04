const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfOIAed-_b1WV4yQkaM0_hlSWh9da5BQUKABYPf-ZrqW0EYhw/viewform?usp=dialog";
const DASHBOARD_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfOIAed-_b1WV4yQkaM0_hlSWh9da5BQUKABYPf-ZrqW0EYhw/viewform?usp=sharing&ouid=109016722131600709192";

document.getElementById("submitBtn").onclick = () => {
    if (confirm("Proceed to submit LoA?")) {
        window.open(FORM_LINK, "_blank");
    }
};

document.getElementById("dashboardBtn").onclick = () => {
    window.open(DASHBOARD_LINK, "_blank");
};

document.getElementById("notice").onclick = () => {
    document.getElementById("notice").classList.toggle("expanded");
};

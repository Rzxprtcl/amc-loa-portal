const FORM_LINK = "YOUR_GOOGLE_FORM";
const DASHBOARD_LINK = "YOUR_PRIVATE_SHEET";

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

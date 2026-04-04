const FORM_LINK = "https://forms.gle/YOUR_FORM_LINK";

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("submitBtn");
    const notice = document.getElementById("noticeBox");
    const status = document.getElementById("statusText");

    btn.addEventListener("click", () => {
        const confirmed = confirm("Proceed to Leave of Absence submission form?");
        if (confirmed) {
            window.open(FORM_LINK, "_blank");
        }
    });

    notice.addEventListener("click", () => {
        notice.classList.toggle("expanded");
    });

    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();

        if (hours >= 2 && hours <= 4) {
            status.textContent = "System Status: Maintenance Window";
            status.style.color = "#f59e0b";
        } else {
            status.textContent = "System Status: Operational";
            status.style.color = "#22c55e";
        }
    }, 5000);
});
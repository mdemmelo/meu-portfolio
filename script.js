document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".main-content h1, h2").forEach(el => {
        const txt = el.textContent.trim();
        el.innerHTML = '<span class="typed-text"></span><span class="cursor">|</span>';
        let i = 0;
        
        (function type() {
            if (i < txt.length) {
                el.querySelector(".typed-text").textContent += txt.charAt(i++);
                setTimeout(type, 80);
            }
        })();
    });

    const navs = [...document.querySelectorAll(".nav-item")];
    const active = navs.findIndex(n => n.classList.contains("active"));

    navs.forEach((btn, idx) => {
        btn.addEventListener("click", (e) => {
            if (idx === active) return;
            e.preventDefault();
            document.body.classList.add(idx > active ? "exit-to-left" : "exit-to-right");
            setTimeout(() => window.location.href = btn.getAttribute("href"), 300);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.body.oncontextmenu = () => false;

    let a = document.createElement("div");
    a.className = "container muncul";

    let b = document.createElement("img");
    b.src = "file-UAKKuGrvxRw7ZMW8YWWhve.webp";
    b.className = "logo";

    let c = document.createElement("h2");
    c.textContent = "Repository";

    let d = document.createElement("h3");
    d.textContent = "Enter credentials to continue";

    let e = document.createElement("form");
    e.id = "form";

    let f = document.createElement("label");
    f.htmlFor = "kode";
    f.textContent = "Username:";

    let g = document.createElement("input");
    g.type = "text";
    g.id = "kode";
    g.placeholder = "Masukkan Username...";

    let h = document.createElement("label");
    h.htmlFor = "pass";
    h.textContent = "Password:";

    // Container input password + icon mata
    let passwordContainer = document.createElement("div");
    passwordContainer.style.position = "relative";
    passwordContainer.style.display = "flex";
    passwordContainer.style.alignItems = "center";

    let i = document.createElement("input");
    i.type = "password";
    i.id = "pass";
    i.className = "select";
    i.placeholder = "Masukkan password...";
    i.style.width = "100%";
    i.style.paddingRight = "30px"; // Ruang untuk ikon

    let toggleIcon = document.createElement("span");
    toggleIcon.textContent = "\u{1F611}";
    toggleIcon.style.position = "absolute";
    toggleIcon.style.right = "10px";
    toggleIcon.style.bottom = "20px";
    toggleIcon.style.cursor = "pointer";
    toggleIcon.style.userSelect = "none"; // Mencegah pemilihan teks

    toggleIcon.addEventListener("click", function () {
        if (i.type === "password") {
            i.type = "text";
            toggleIcon.textContent = "\u{1F62F}"; // Ubah ikon jadi mata tertutup
        } else {
            i.type = "password";
            toggleIcon.textContent = "\u{1F611}"; // Ubah ikon jadi mata terbuka
        }
    });

    passwordContainer.append(i, toggleIcon);

    let j = document.createElement("button");
    j.type = "submit";
    j.textContent = "Submit";

    let k = document.createElement("div");
    k.id = "customAlert";
    k.className = "custom-alert";

    e.append(f, g, h, passwordContainer, j);
    a.append(b, c, d, e);
    document.body.append(a, k);

    function l(m) {
        k.textContent = m;
        k.classList.add("show-alert");
        setTimeout(() => k.classList.remove("show-alert"), 3000);
    }

    e.addEventListener("submit", function (n) {
        n.preventDefault();
        let o = g.value.trim(),
            p = i.value.trim();
        if (!o || !p) return void l("Masukkan kredensial yang tepat!");
        window.location.href = "Open/" + encodeURIComponent(o) + "/" + encodeURIComponent(p);
    });

    let q = 0,
        r;
    document.addEventListener("click", function () {
        q++, 3 === q && location.reload(), clearTimeout(r), (r = setTimeout(() => (q = 0), 100));
    });
});
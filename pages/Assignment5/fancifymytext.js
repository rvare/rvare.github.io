window.onload = function start() {
    const btn = document.getElementById("big");
    btn.onclick = changeTextSize;

    const fancy_btn = document.getElementById("fancy");
    fancy_btn.onchange = FancyShmancy;

    const boring_btn = document.getElementById("boring");
    boring_btn.onchange = BoringBetty;

    const moo_btn = document.getElementById("moo");
    moo_btn.onclick = MooFunc;
}

function changeTextSize() {
    document.getElementById("text-input").style.fontSize = "24pt";
}

function FancyShmancy() {
    let el = document.getElementById("text-input");
    el.style.fontWeight = "bold";
    el.style.color = "blue";
    el.style.textDecoration = "underline";
}

function BoringBetty() {
    document.getElementById("text-input").removeAttribute("style");
}

function MooFunc() {
    const textAreaInput = document.getElementById("text-input");
    let text_str = textAreaInput.value.toUpperCase();
    let str_parts = text_str.split(".");

    text_str = str_parts.join("-Moo.");

    textAreaInput.value = text_str;
}
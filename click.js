document.addEventListener("DOMContentLoaded", function () {
    const fooButton = document.getElementById("foo");
    const barButton = document.getElementById("bar");
    const foobarButton = document.getElementById("foobar");
    const mainTag = document.querySelector("main");

    fooButton.addEventListener("click", function () {
        const h3 = document.createElement("h3");
        h3.textContent = "Foo";
        mainTag.appendChild(h3);
    });

    barButton.addEventListener("click", function () {
        const h3 = document.createElement("h3");
        h3.textContent = "Bar";
        mainTag.appendChild(h3);
    });

    foobarButton.addEventListener("click", function () {
        const h2 = document.createElement("h2");
        h2.textContent = "FooBar";
        mainTag.appendChild(h2);
    });
});
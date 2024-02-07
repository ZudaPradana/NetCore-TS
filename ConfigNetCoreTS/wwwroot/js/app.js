function TSButton() {
    var paragraph = document.getElementById("random-name");
    if (!paragraph) {
        alert("Element with ID 'random-name' not found.");
        return;
    }
    // Daftar nama acak
    var names = ["Alice", "Bob", "Charlie", "David", "Emma"];
    // Pilih nama acak dari daftar
    var randomName = names[Math.floor(Math.random() * names.length)];
    // Buat atau perbarui nilai elemen <p>
    if (paragraph.innerHTML === "") {
        paragraph.innerHTML = randomName;
    }
    else {
        paragraph.innerHTML = randomName;
    }
}
//# sourceMappingURL=app.js.map
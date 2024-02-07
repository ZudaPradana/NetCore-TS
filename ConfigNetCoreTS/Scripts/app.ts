function TSButton() {
    const paragraph = document.getElementById("random-name");

    if (!paragraph) {
        alert("Element with ID 'random-name' not found.");
        return;
    }

    // Daftar nama acak
    const names = ["Alice", "Bob", "Charlie", "David", "Emma"];

    // Pilih nama acak dari daftar
    const randomName = names[Math.floor(Math.random() * names.length)];

    // Buat atau perbarui nilai elemen <p>
    if (paragraph.innerHTML === "") {
        paragraph.innerHTML = randomName;
    } else {
        paragraph.innerHTML = randomName;
    }
}

// Fungsi untuk menambah data ke tabel
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form submit default

    // Ambil data dari formulir
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Buat elemen baru untuk tabel
    var table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = name;
    cell2.textContent = email;
    cell3.innerHTML = `<button class="edit" onclick="editRow(this)">Edit</button>
                       <button class="delete" onclick="deleteRow(this)">Hapus</button>`;

    // Kosongkan form setelah data ditambahkan
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});

// Fungsi untuk mengedit data
function editRow(button) {
    var row = button.parentElement.parentElement;
    var name = row.cells[0].textContent;
    var email = row.cells[1].textContent;

    // Isi kembali data ke dalam form
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;

    // Hapus baris setelah edit
    deleteRow(button);
}

// Fungsi untuk menghapus data
function deleteRow(button) {
    var row = button.parentElement.parentElement;
    row.remove();
}
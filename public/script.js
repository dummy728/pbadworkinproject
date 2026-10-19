let vehicles = [];

/* ----------  Mengakses elemen DOM ---------- */
const vehicleForm = document.getElementById("vehicleForm");
const plateNumberInput = document.getElementById("plateNumber");
const brandInput = document.getElementById("brand");
const modelInput = document.getElementById("model");
const statusInput = document.getElementById("status");
const officerNoteInput = document.getElementById("officerNote");
const vehicleContainer = document.getElementById("vehicleContainer");



/* State untuk filter & search */
let currentSearchQuery = "";
let currentStatusFilter = "all";


/* ----------  Fungsi Render (filter + search) ---------- */
function renderVehicles() {

    if (!vehicleContainer) return;

    /* Render dengan map() */
    vehicleContainer.innerHTML = vehicles
        .map(vehicle => `
            <div class="vehicle-card">
                <h3>${vehicle.plateNumber}</h3>
                <p class="vehicle-meta">
                    ${vehicle.brand} ${vehicle.model}
                </p>
                <span class="badge ${vehicle.status}">
                    ${vehicle.status}
                </span>
                ${vehicle.officerNote
                    ? `<p class="note">${vehicle.officerNote}</p>`
                    : ""}
                <button
                    class="btn-delete"
                    data-id="${vehicle.id}"
                >
                    Hapus
                </button>
            </div>
        `)
        .join("");

    /* Pasang event listener untuk tombol Hapus */
    const deleteButtons = vehicleContainer.querySelectorAll(".btn-delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);
            deleteVehicle(id);
        });
    });
}

/* Fungsi Fetch Data */

async function fetchVehicles() {
    try {
        const response = await fetch("http://localhost:3000/api/vehicles");

        if (!response.ok) {
            throw new Error("Gagal mengambil data kendaraan");
        }

        vehicles = await response.json();
        console.log(vehicles)

        renderVehicles();

    } catch (error) {
        console.error(error);
    }
}


async function createVehicle(vehicle) {
    const response = await fetch("http://localhost:3000/api/vehicles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicle),
    });

    if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
}


/* ---------- Fungsi Hapus Data ---------- */
function deleteVehicle(id) {
    const index = vehicles.findIndex(vehicle => vehicle.id === id);

    if (index !== -1) {
        vehicles.splice(index, 1);
    }

    renderVehicles();
}

/* ---------- Event Submit Form ---------- */
vehicleForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    /* Baca input */
    const plateNumber = plateNumberInput?.value.trim() ?? "";
    const brand = brandInput?.value.trim() ?? "";
    const model = modelInput?.value.trim() ?? "";
    const status = statusInput?.value ?? "";
    const officerNote = officerNoteInput?.value.trim() ?? "";

    /* Validasi */
    if (plateNumber === "" || brand === "" || model === "" || status === "") {
        alert("Lengkapi data kendaraan (Nomor Polisi, Merek, Model, Status wajib diisi).");
        return;
    }

    /* Object Vehicle baru */
    const newVehicle = {
        id: Date.now(),
        plateNumber,
        brand,
        model,
        status,
        officerNote: officerNote !== "" ? officerNote : undefined
    };

    try {
        /* Kirim data ke server */
        const result = await createVehicle(newVehicle);

        console.log("Server response:", result);

        /* Reset form */
        vehicleForm.reset();
        plateNumberInput?.focus();
        

        console.log("Kendaraan berhasil ditambahkan:", newVehicle);

    } catch (error) {
        console.error("Gagal kirim data:", error);
        alert("Gagal mengirim data ke server. Cek console.");
    }

    /* Reset form */
    vehicleForm.reset();

    /* Fokus balik ke input pertama */
    plateNumberInput?.focus();

    console.log("Kendaraan berhasil ditambahkan:", newVehicle);
    console.log("Total kendaraan:", vehicles.length);
});


fetchVehicles();

console.log("Aplikasi Sistem Peminjaman Kendaraan siap digunakan.");
console.log("Data awal:", vehicles);
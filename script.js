let dataSiswa = [];

fetch("data.json")
.then(response => response.json())
.then(data => {
    dataSiswa = data;
});

function cekData(){

    let nama = document.getElementById("nama").value.trim().toUpperCase();

    let hasil = document.getElementById("hasil");

    hasil.innerHTML = "🔍 Sedang mencari data...";

    setTimeout(()=>{

        let ditemukan = dataSiswa.find(item => item.nama.toUpperCase() === nama);

        if(ditemukan){

            confetti({
                particleCount:200,
                spread:100,
                origin:{y:0.6}
            });

            hasil.innerHTML = `
            <div style="color:green">
            <h2>🎉 SELAMAT 🎉</h2>

            <h3>${ditemukan.nama}</h3>

            <p>DINYATAKAN</p>

            <h1 style="color:green">DITERIMA</h1>

            <p>SD NEGERI CIBINONG 03</p>

            </div>
            `;

        }else{

            hasil.innerHTML = `
            <div style="color:red">

            <h3>Nama tidak ditemukan</h3>

            <p>Periksa kembali penulisan nama.</p>

            </div>
            `;

        }

    },2000);

}

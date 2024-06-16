console.log ('text');
fetch("http://localhost:3000/kegiatan_gereja/fe").then((res) => res.json()).then((res) => {
    for(const row of res){
    console.log(res);
    const kegiatan_gereja = document.createElement("div");
    const kiri = document.createElement("div");
    const kanan = document.createElement("div");
    const waktu = document.createElement("div");
    const jalan = document.createElement("div");
    const image1 = document.createElement("img");
    image1.src = "assets/gambar/fotodoa.jpg";
    const para1 = document.createElement("h2");
    const node1 = document.createTextNode(row.tanggal_kegiatan);
    const para2 = document.createElement("h5");
    const node2 = document.createTextNode(row.jam_kegiatan);
    const para3 = document.createElement("h5");
    const node3 = document.createTextNode(row.nama_kegiatan);
    const image2 = document.createElement("img");
    image2.src = "assets/gambar/location.png";
    const para4 = document.createElement("p");
    const node4 = document.createTextNode(row.lokasi_kegiatan);
    
    kiri.classList.add("left");
    kanan.classList.add("right");
    waktu.classList.add("waktu");
    jalan.classList.add("jalan");
    kiri.appendChild(image1);
    para1.appendChild(node1);
    para2.appendChild(node2);
    para3.appendChild(node3);
    para4.appendChild(image2);
    para4.appendChild(node4);
    kanan.appendChild(waktu);
    kanan.appendChild(para3);
    kanan.appendChild(jalan);
    waktu.appendChild(para1);
    waktu.appendChild(para2);
    jalan.appendChild(para4);
    kegiatan_gereja.appendChild(kiri);
    kegiatan_gereja.appendChild(kanan);
    para4.classList.add("jalan");
    kegiatan_gereja.classList.add("jadwal-item");
    
    document.getElementById("event").appendChild(kegiatan_gereja);
    }
}).catch((error) => {
    console.error(error)
})
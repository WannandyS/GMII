console.log ('text');
fetch("http://localhost:3000/retret/fe").then((res) => res.json()).then((res) => {
    for(const row of res){
    console.log(res);
    const frame = document.createElement("div");
    const para = document.createElement("p");
    const node = document.createTextNode(row.informasi_retret);
    const embed = document.createElement("embed");
    embed.src = row.file_informasi_retret;
    
    para.appendChild(node);
    document.getElementById("mundur").appendChild(para);
    frame.appendChild(embed);
    frame.classList.add("framework");
    document.getElementById("mundur").appendChild(frame);
    }
}).catch((error) => {
    console.error(error)
})
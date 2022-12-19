function mudarCor() {
   let cor =  document.body;
   let nameColor = document.getElementById("nomeCor")
   const colors = ["blue", "red", "green", "white" ]
   let corUsada = colors[Math.floor(colors.length * Math.random())];
   
   cor.style.backgroundColor = corUsada;
   nameColor.style.color = corUsada;
   nameColor.innerHTML = corUsada;



}


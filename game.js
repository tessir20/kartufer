<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tebak Hadiah</title>

<style>
body{
  background: radial-gradient(red, darkred);
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  font-family:Arial;
  cursor: url('https://cur.cursors-4u.net/magic/mag-1/mag87.cur'), auto;
}

.container{
  display:grid;
  grid-template-columns: repeat(4, 100px);
  gap:20px;
}

.box{
  width:100px;
  height:100px;
  background:#b30000;
  color:white;
  font-size:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:15px;
  box-shadow:0 0 15px lime;
  cursor:pointer;
  transition:0.3s;
}

.box:hover{
  transform:scale(1.1);
}

.reveal{
  background:gold;
  color:black;
  font-size:18px;
}
</style>
</head>

<body>

<div class="container" id="grid"></div>

<script>
const hadiahList = [
 "ZONK","ZONK","10 Koin","ZONK",
 "50 Koin","ZONK","100 Koin","ZONK",
 "ZONK","200 Koin","ZONK","500 Koin"
];

hadiahList.sort(()=> Math.random() - 0.5);

const grid = document.getElementById("grid");

for(let i=0;i<12;i++){
  let box = document.createElement("div");
  box.className="box";
  box.innerText=i+1;

  box.onclick=function(){
    box.classList.add("reveal");
    box.innerText=hadiahList[i];
    box.style.pointerEvents="none";
  }

  grid.appendChild(box);
}
</script>

</body>
</html>
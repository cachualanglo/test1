let n = document.getElementById("Number");
let btnCheck = document.getElementById('inRa');
let row = "";

btnCheck.onclick = () => {
document.write("Hình tam giác: ");
document.write("<br><br><br>");

for (let i = 1; i <= n.value ; i++ ){
    for (let j = 1; j <= i ; j++){
        document.write("*")
        row += "*"
    }
    row= "";
    document.write("<br>")
}
}
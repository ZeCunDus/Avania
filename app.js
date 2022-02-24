/*let Lotto = prompt("ใส่เลขที่คุณซื้อ :")
console.log(Lotto) 

var atari = Math.floor(Math.random() * 100)

console.log(atari)

document.getElementById("result").innerHTML = atari
document.getElementById("numberbuy").innerHTML = Lotto

if (atari == Lotto) {
    window.alert("คุณถูกรางวัล (มั้ง)")
} else {
    window.alert("เสียใจด้วย โดนแดก")
}
*/

/*let age = prompt("กรุณากรอกอายุของคุณ")
console.log(age)
if(age <= 13){
    window.alert("เข้าบ่ได้เด้อ")
}
else{
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/gXyIPk6_qOg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}*/

/*let round = prompt("How many rounds?")
var score = 0

for (var i = 1; i <= round ; i++){
    var answer = confirm("Head(OK) or Tail(Cancel)")
    var ans = ""
    var HT = "false"
    if (Math.floor(Math.random()*10) <=4){
        HT = "true"
    }

    if (answer == HT){
        ans = "Correct!!"
        window.alert(ans)
        score++
    }
    else {
        ans = "Wrong!!"
        window.alert(ans)
    }
    document.getElementById("list").innerHTML += i + ") Your answer is " + answer + "/ Correct answer is " + HT + " | " + ans + "<br>"

}
    document.getElementById("game").innerHTML = "Your score is " + score + "/" + round
*/

function toCelsius(fah)
{
    let value = (fah - 32) * 5 / 9
    return value.toFixed(2) + " Degree Celsius"
}

function tofah(Celsius)
{
    let value = (Celsius*9/5) + 32
    return  value.toFixed(2) + " Degree Fahrenheit"
}

function display(elementId, text)
{
    document.getElementById(elementId).innerHTML = text
}
//toCelsius(prompt("Fahrenheit :"))
//tofah(prompt("Celsius :"))
//display("Cel", toCelsius(prompt("Fahrenheit :")))
//display("Fah", tofah(prompt("Celsius :")))


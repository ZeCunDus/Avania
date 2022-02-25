
var goa = 0
var nova = 0
let nexus = 0

function enhance(level){
    nova = nova + (level+1)*10
    if (level >= 8){
        goa = goa + 15
    }
    else if (8 > level > 5){
        goa = goa +10
    }
    else {
    goa = goa + (level+1)
    }

    if (Math.floor(Math.random()*100) < (100-(level*10))){
        nexus++
        alert ("สวยพี่สวย")
    }
    else {
        nexus--
        alert ("สมน้ำหน้า")
    }
    document.getElementById("0").innerHTML = "Your current Nexus level is " + nexus
    document.getElementById("1").innerHTML = "Total GOA used " + goa.toLocaleString()
    document.getElementById("2").innerHTML = "Total NOVA used " + nova.toLocaleString()
}
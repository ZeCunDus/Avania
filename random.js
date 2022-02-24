const Guardian = [];
    Guardian [0] = "Neutral Falkor"
    Guardian [1] = "Water Falkor"
    Guardian [2] = "Wind Falkor"
    Guardian [3] = "Earth Falkor"
    Guardian [4] = "Thunder Falkor"
    Guardian [5] = "Ice Falkor"
    Guardian [6] = "Fire Falkor"
    Guardian [7] = "Spirit Falkor"
    Guardian [8] = "Neutral Slimy"
    Guardian [9] = "Dark Slimy"
    Guardian [10] = "Earht Slimy"
    Guardian [11] = "Light Slimy"
    Guardian [12] = "Spirit Slimy"
    Guardian [13] = "Ice Slimy"
    Guardian [14] = "Thunder Slimy"
    Guardian [15] = "Wind Slimy"
    Guardian [16] = "Neutral Slark"
    Guardian [17] = "Water Slark"
    Guardian [18] = "Earht Slark"
    Guardian [19] = "Ice Slark"
    Guardian [20] = "Thunder Slark"
    Guardian [21] = "Spirit Slark"
    Guardian [22] = "Fire Slark"
    Guardian [23] = "Poison Slark"
    Guardian [24] = "Neutral Fenris"
    Guardian [25] = "Light Fenris"
    Guardian [26] = "Fire Fenris"
    Guardian [27] = "Dark Fenris"
    Guardian [28] = "Water Fenris"
    Guardian [29] = "Thunder Fenris"
    Guardian [30] = "Wind Fenris"
    Guardian [31] = "Nature Fenris"
    Guardian [32] = "Neutral Vewing"
    Guardian [33] = "Wind Vewing"
    Guardian [34] = "Light Vewing"
    Guardian [35] = "Fire Vewing"
    Guardian [36] = "Ice Vewing"
    Guardian [37] = "Water Vewing"
    Guardian [38] = "Thunder Vewing"
    Guardian [39] = "Nature Vewing"
    Guardian [40] = "Neutral Raqnar"
    Guardian [41] = "Poison Raqnar"
    Guardian [42] = "Wind Raqnar"
    Guardian [43] = "Nature Raqnar"
    Guardian [44] = "Thunder Raqnar"
    Guardian [45] = "Earth Raqnar"
    Guardian [46] = "Dark Raqnar"
    Guardian [47] = "Fire Raqnar"
    Guardian [48] = "Neutral Cameliott"
    Guardian [49] = "Ice Cameliott"
    Guardian [50] = "Earth Cameliott"
    Guardian [51] = "Light Cameliott"
    Guardian [52] = "Spirit Cameliott"
    Guardian [53] = "Poison Cameliott"
    Guardian [54] = "Nature Cameliott"
    Guardian [55] = "Water Cameliott"
    Guardian [56] = "Neutral Botanica"
    Guardian [57] = "Nature Botanica"
    Guardian [58] = "Ice Botanica"
    Guardian [59] = "Wind Botanica"
    Guardian [60] = "Fire Botanica"
    Guardian [61] = "Dark Botanica"
    Guardian [62] = "Water Botanica"
    Guardian [63] = "Poison Botanica"



function main(){
    function RandGuardian ()
{
    Rand = Math.floor(Math.random()*64)
    return Guardian [Rand]
}
function hasDuplicates(result) {
    return new Set(result).size !== result.length;
}



const result = []
function process (){
for (var i = 0; i<5; i++){

    result [i] = RandGuardian()
}
}

process()

while (hasDuplicates(result)){
process()
}
/*if (hasDuplicates(result)) {
    console.log("Duplicate elements found.");
}
else {
    console.log("No Duplicates found.");
}*/




const skill = [1,2,3,4,5,6]
const skillrand1 = []
const skillrand2 = []
const skillrand3 = []
const skillrand4 = []
const skillrand5 = []

function processskill (x){
for (var i = 0; i<4; i++){
    
    x[i] = skill[Math.floor(Math.random()*skill.length)];
}
}


processskill(skillrand1)
processskill(skillrand2)
processskill(skillrand3)
processskill(skillrand4)
processskill(skillrand5)
    
while (hasDuplicates(skillrand1)){
processskill(skillrand1)
}
while (hasDuplicates(skillrand2)){
processskill(skillrand2)
}
while (hasDuplicates(skillrand3)){
processskill(skillrand3)
}
while (hasDuplicates(skillrand4)){
processskill(skillrand4)
}
while (hasDuplicates(skillrand5)){
processskill(skillrand5)
}

function show(){
document.getElementById("0").innerHTML = result[0] + "  " + skillrand1
document.getElementById("1").innerHTML = result[1] + "  " + skillrand2
document.getElementById("2").innerHTML = result[2] + "  " + skillrand3
document.getElementById("3").innerHTML = result[3] + "  " + skillrand4
document.getElementById("4").innerHTML = result[4] + "  " + skillrand5
}
show()
}
console.log (skillrand1)
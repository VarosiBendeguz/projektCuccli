const koKartya = document.getElementById("ko")
const papirKartya = document.getElementById("papir")
const olloKartya = document.getElementById("ollo")
const gyikKartya = document.getElementById("gyik")
const spockKartya = document.getElementById("spock")
const ai = document.getElementById("ai")

const kepek = ["kep1", "kep2", "kep3", "kep4", "kep5"]


let kivalasztott = null;
let nyert = false;

function JatekMenet(req){
    kivalasztott = req;
    index = 0;
    setInterval(function(index){
        index++;
        if(index >= kepek.length){
            index = 0;
        }
        ai.src = kepek[index];  
    }, 5)

    let aivalaszt = null;
    switch(index){
        case 0:
            aivalaszt = "ko";
            break;
        case 1:
            aivalaszt = "papir";
            break;
        case 2:
            aivalaszt = "ollo";
            break;
        case 3:
            aivalaszt = "gyik";
            break;
        case 4:
            aivalaszt = "spock";
            break;
    }

    let valaszt = valasztott.id;

    switch(aivalaszt){
        case "ko":
            if(valaszt == "spock" || valaszt == "papir"){
                nyert = true;
            }
            break;
        case "papir":
            if(valaszt == "ollo" || valaszt == "gyik"){
                nyert = true;
            }
            break;
        case "ollo":
            if(valaszt == "spock" || valaszt == "ko"){
                nyert = true;
            }
            break;
        case "gyik":
            if(valaszt == "ollo" || valaszt == "ko"){
                nyert = true;
            }
            break;
        case "spock":
            if(valaszt == "papir" || valaszt == "gyik"){
                nyert = true;
            }
            break;
    }

    //TODO: felugró modal, ha nyert



}
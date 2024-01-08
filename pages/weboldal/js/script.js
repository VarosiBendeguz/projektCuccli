const koKartya = document.getElementById("ko")
const papirKartya = document.getElementById("papir")
const olloKartya = document.getElementById("ollo")
const gyikKartya = document.getElementById("gyik")
const spockKartya = document.getElementById("spock")
const ai = document.getElementById("ai")

const kepek = ["rock-removebg-preview.png", "paerp-removebg-preview.png", "scissores-removebg-preview.png", "gyikocskaaa-removebg-preview.png", "spocki-removebg-preview.png"]


let kivalasztott = null;
let nyert = false;

function eval(){
    let aivalaszt = null;
    switch(index2){
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

    let valaszt = kivalasztott.id;

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
    alert(nyert)
}

function JatekMenet(req){
    kivalasztott = req;
    index2 = 0;
    let interval = setInterval(function()
    {
        index2++
        if(index2 >= kepek.length){
            index2 = 0;
        }
        if(index2 != 5 && ai.src != "../kepek/" + kepek[index2]){
            ai.src = "../kepek/" + kepek[index2]; 
        }

        let num = (Math.floor(Math.random()*6));
        console.log(num)
        if(num == 5){
            clearInterval(interval)
            eval()
        }

    }, 700)

    

    //TODO: Továbblép képpel amikor vége



}

koKartya.addEventListener('click', function(){
    JatekMenet("ko")
} )
papirKartya.addEventListener('click', function(){
    JatekMenet("papir")
})
olloKartya.addEventListener('click', function(){
    JatekMenet("ollo")
})
gyikKartya.addEventListener('click', function(){
    JatekMenet("gyik")
} )
spockKartya.addEventListener('click', function(){
    JatekMenet("spock")
} )
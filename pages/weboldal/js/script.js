const koKartya = document.getElementById("ko")
const papirKartya = document.getElementById("papir")
const olloKartya = document.getElementById("ollo")
const gyikKartya = document.getElementById("gyik")
const spockKartya = document.getElementById("spock")
const ai = document.getElementById("ai")

const kepek = ["rock-removebg-preview.png", "paerp-removebg-preview.png", "scissores-removebg-preview.png", "gyikocskaaa-removebg-preview.png", "spocki-removebg-preview.png"]


let kivalasztott = null;
let nyert = false;

async function eval(){
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

    let valaszt = kivalasztott;

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
    if(valaszt == aivalaszt){
        $('#endTxt').css("color", "black")
        $('#endTxt').text('Azonos választás, nincs nyertes!')
    }
    else{
        if(nyert){ 
            $('#endTxt').css("color", "darkgreen")
            $('#endTxt').text('Nyertél!')
        }
        else{
            $('#endTxt').css("color", "red")
            $('#endTxt').text('Sajnos ez most nem sikerült!')
        }
    }
    $('#endModal').modal('show');
}

function JatekMenet(req){
    kivalasztott = req;
    index = 0;
    index2 = 0;
    const interval = setInterval(function()
    {
        index2++
        $("#aiTxt1").text("Az Ai választása: ")
        if(index2 >= kepek.length){
            index2 = 0;
        }
        if(index2 != 5 && ai.src != "../kepek/" + kepek[index2]){
            ai.src = "../kepek/" + kepek[index2]; 
            switch(index2){
                case 0:
                    $("#aiTxt2").text("Kő")
                    break;
                case 1:
                    $("#aiTxt2").text("Papír")
                    break;
                case 2:
                    $("#aiTxt2").text("Olló")
                    break;
                case 3:
                    $("#aiTxt2").text("Gyík")
                    break;
                case 4:
                    $("#aiTxt2").text("Spock")
                    break;
            }
        }
        let num = (Math.floor(Math.random()*7));
        if(num == 6 && index > 10){
            clearInterval(interval)
            eval()
        }

        index++;

    }, 200)
}

koKartya.addEventListener('click', function(){
    $("#valasztas").text("Választott kártya: Kő")
    JatekMenet("ko")
} )
papirKartya.addEventListener('click', function(){
    $("#valasztas").text("Választott kártya: Papír")
    JatekMenet("papir")
})
olloKartya.addEventListener('click', function(){
    $("#valasztas").text("Választott kártya: Olló")
    JatekMenet("ollo")
})
gyikKartya.addEventListener('click', function(){
    $("#valasztas").text("Választott kártya: Gyík")
    JatekMenet("gyik")
} )
spockKartya.addEventListener('click', function(){
    $("#valasztas").text("Választott kártya: Spock")
    JatekMenet("spock")
} )

szabalyzat.addEventListener("click", function(){
    $("#szabalyzatModal").modal("show");
})

tortenet.addEventListener('click', function(){
    $("#tortenetModal").modal("show");
})

$("#tortenetModal").on('hidden.bs.modal', function (e) {
    $("#tortenetModal iframe").attr("src", $("#tortenetModal iframe").attr("src"));
});

csapat.addEventListener('click', function(){
    $("#csapatModal").modal('show');
})

reset.addEventListener('click', function(){
    $("#valasztas").text("Válassz kártyát!")


    $("#aiTxt1").text("Az AI választása")
    $("#aiTxt2").text("")

    ai.src = "";
})
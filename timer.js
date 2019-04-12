/* funckja dzięki której stworzymy pobieranie czasu co sekundę bez ponownej konieczności ładowania strony*/
function odliczanie()
{
/*var to zmienna wymyślona przez nas wprowadzamy do niej nowy obiekt klasy "date", utworzyliśmy nowy obiekt klasy DATE który zawiera informacje o dacie i czasu pobrane z komputera lokalnego, a do pojedynczych szufladek zmiennych wprowadzamy */;

/* nie trzeba typować zmiennej bo jest automatycznie przypisywany przez przeglądarkę */;
var dzisiaj = new Date();

var dzien = dzisiaj.getDate();
var miesiac = dzisiaj.getMonth()+1;
var rok = dzisiaj.getFullYear();

var godzina = dzisiaj.getHours();
    if(godzina<10)
        {
            var godzina = "0"+dzisiaj.getHours()
        }
var minuta = dzisiaj.getMinutes();
var sekunda = dzisiaj.getSeconds();
        /*to zapis ZELENTA powyżej napisany przeze mnie oba działają*/
    if(sekunda<10) sekunda = "0"+sekunda
        

/* każemy htmlowi znaleźć element o id = zegar i podmienić wszystko co znajduje się w środku elementu (pomiędzy tagami DIV na to co wpiszemy po "innerhtml" podmianka) */;
/* konkatenacja to klejenie zmiennych i napisów*/
/*jeśli nie używalibyśmy funckji ten zapis podmieniający musielibyśmi umieścić ponownie w sekcji script po zadeklarowaniu w sekcji body pojemnika (div) zegar */	
document.getElementById("Zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+" || "+godzina+":"+minuta+":"+sekunda;

/* do cyklicznych powtarzanych co jakiś czas działań istnieje w JS funckja o nazwe setTimeout() wywołuje inną funkcję po upływie określonego czasu w milisekundach*/	
    
    setTimeout("odliczanie()",1000);
}
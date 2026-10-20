const change = document.getElementById("change")
change.addEventListener("click", change_all)

function change_all(){
     if(document.getElementsByTagName("div")[0].innerHTML==="Иванова") {
         document.getElementsByTagName("div")[0].innerHTML = "Ivanova"
         document.getElementsByTagName("div")[1].innerHTML = "Masha"
         document.getElementsByTagName("div")[2].innerHTML = "Ivanovna"
         document.getElementsByTagName("div")[3].innerHTML="Fem &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01.01.2000"
         document.getElementsByTagName("div")[5].innerHTML="01.01.2014&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;770-070"
         document.getElementsByTagName("div")[6].innerHTML="GU MVD PO G.MOSCOW"
         document.getElementsByTagName("div")[7].innerHTML="G.MOSCOW"
        
     }
     else{
         document.getElementsByTagName("div")[0].innerHTML="Иванова"
         document.getElementsByTagName("div")[1].innerHTML="Маша"
         document.getElementsByTagName("div")[2].innerHTML="Ивановна"
         document.getElementsByTagName("div")[3].innerHTML="Жен &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01.01.2000"
         document.getElementsByTagName("div")[5].innerHTML="01.01.2014&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;770-070"
         document.getElementsByTagName("div")[6].innerHTML="ГУ МВД ПО Г.МОСКВЕ"
         document.getElementsByTagName("div")[7].innerHTML="Г.МОСКВА"
        
     }
}
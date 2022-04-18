function date_heure(id)
       { 
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        j = date.getDate();
        jour = date.getDay();
        jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        resultat = jours[jour]+'/'+j+' /'+mois[moi]+'/ '+annee+'  '+h+':'+m+':'+s;
        document.getElementById("heure").innerHTML = resultat;
        setTimeout('date_heure("'+id+'");','1000');
       
}
window.onload = date_heure;

function modifCould()
        {var m;
        
         m=document.getElementById("z").value;
         document.querySelector("body").style.backgroundColor=m;
	      }


       function valider()
       
       { var h=0;
       var z=isNaN(document.getElementById("age").value);
       var tel=isNaN(document.getElementById("tel").value);
       	if(document.getElementById("prenom").value!="" && document.getElementById("nom").value!="" &&
       	   document.getElementById("text").value!="" && document.getElementById("age").value!=""&& z==false 
       	   && document.getElementById("tel").value!=""&& tel==false )
       	h=1;
       	if(h==1)
       	 alert("formulaire envoyer");
         else
         alert("formulaire mal remplit")   
             
        
        }     
              
       
         function valideri()
       {
        var h=0;
       var z=isNaN(document.getElementById("agei").value);
       var tel=isNaN(document.getElementById("teli").value);
       	if(document.getElementById("prenomi").value!="" && document.getElementById("nomi").value!="" &&
       	   document.getElementById("texti").value!="" && document.getElementById("agei").value!=""&& z==false 
       	   && document.getElementById("teli").value!=""&& tel==false )
       	h=1;
       	if(h==1)
       	 alert("formulaire envoyer");
         else
         alert("formulaire mal remplit")   
             
        
        }     
              
       
             
                  
              




       	
       	
       	
       	


            

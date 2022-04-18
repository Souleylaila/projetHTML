var p= new Array();
var i=0;
var time = 1000; 
p[0]="../images/c.jpeg";
p[1]="../images/t.jpeg";
p[2]="../images/q.jpeg";
p[3]="../images/h.jpeg";
p[4]="../images/i.jpeg";	
p[5]="../images/montloura.jpeg";
p[6]="../images/o.jpeg";
p[7]="../images/p.jpg";
p[8]="../images/r.jpeg";
p[9]="../images/v.jpg";				
p[10]="../images/w.jpeg";	
function defilp()
                 {
                	document.getElementById("can").src = p[i];
                	if(i<p.length-1)
                        i++;               
	               else
		                  i=0;
	               setTimeout("defilp()", time*4);	
                  }
                   		
 function changes ()
                    {
                    	var j=document.getElementById("f").selectedIndex;        
	                  document.getElementById("can").src=p[j];
                    	}         	
                    	
 function date_heure()
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
                             h = "0"+h;
                     m = date.getMinutes();
                     if(m<10)
                             m = "0"+m;
                     s = date.getSeconds();
                     if(s<10)
                              s = "0"+s;
                     resultat = jours[jour]+'/'+j+'/ '+mois[moi]+'/ '+annee+'  '+h+':'+m+':'+s;
                     document.getElementById("heure").innerHTML = resultat;
                     setTimeout("date_heure()",time);
                     }
window.onload = function () {defilp();date_heure()};

function pays()
               {
               
                var r=document.getElementById("g").selectedIndex;               	
                if(r==1)
                document.getElementById("env").href="malidesc.html";
                if(r==2)
                document.getElementById("env").href="guindesc.html";
                if(r==3)
                document.getElementById("env").href="senedesc.html";                
               
                
   }
                
 
 
 
 
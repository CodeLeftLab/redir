var sw_targ=true; var ff_targ=''; var qs= querySt('t'); switch(qs) {
case 'b22'	:ff_targ_text='forsalehere Forsalehere ForSaleHere';  ff_targ='https://www.setz.gq'; break; // bit.ly/forsalehere https://codeleftlab.github.io/redir/rdst2.htm?t=b22					
case 'b23'	: ff_targ_text='Finance Group Menu'; ff_targ='https://fgmenu.around.gq';break;  // http://bit.ly/stfgmenu https://codeleftlab.github.io/redir/rdst2.htm?t=b23	
case 'b24'	:ff_targ_text='StART Finance Group Shared files';  ff_targ='https://drive.google.com/drive/folders/1rn8I3jvmShCZEPgse2yeLo_sH89dYV5_?usp=sharing';break; 
        // bit.ly/stfgfiles https://codeleftlab.github.io/redir/rdst2.htm?t=b24					
case 'b25'	:ff_targ_text='StART Community-Led Homes Group Feasibilty Study Aug – Sep 2020'; ff_targ='https://docs.google.com/document/d/1RRcdADCGnX_oEbBM0UK1D-CLnmKM-fTVWoY5OHIVBeQ/edit?usp=sharing';break; 
        // bit.ly/stclhfeas https://codeleftlab.github.io/redir/rdst2.htm?t=b25					
case 'b26'	:ff_targ='https://www.livingstreets.org.uk/get-involved/local-groups/haringey'; ff_targ_text='Healthy Streets Bruce Grove & West Green'; break; 
        // https://bit.ly/2ZarQi6 bit.ly/hsbgwg HSBGWG https://codeleftlab.github.io/redir/rdst2.htm?t=b26 bit.ly/HSBGWG https://codeleftlab.github.io/redir/rdst2.htm?t=b26&v1					
case 'b27'	:ff_targ_text='tttttttttttttttttt'; ff_targ='done'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdst2.htm?t=b27					
case 'b28'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdst2.htm?t=b28					
case 'b29'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdst2.htm?t=b29					
case 'b30'	:ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdst2.htm?t=b30					
case 'b31'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdst2.htm?t=b31					
case 'b32'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdst2.htm?t=b32					
case 'b33'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdst2.htm?t=b33					
case 'b34'	:ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
        // bit.ly/stm34 https://codeleftlab.github.io/redir/rdst2.htm?t=b34					
case 'b35'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm35 https://codeleftlab.github.io/redir/rdst2.htm?t=b35					
case 'b36'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm36 https://codeleftlab.github.io/redir/rdst2.htm?t=b36					
case 'b37'	:ff_targ_text='tttttttttttttttttt'; ff_targ='  '; break; 
        // bit.ly/stm37 https://codeleftlab.github.io/redir/rdst2.htm?t=b37					
case 'b38'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm38 https://codeleftlab.github.io/redir/rdst2.htm?t=b38					
case 'b39'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm39 https://codeleftlab.github.io/redir/rdst2.htm?t=b39					
case 'b40'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm40 https://codeleftlab.github.io/redir/rdst2.htm?t=b40									

default:sw_targ=false;break;
}
if (sw_targ==true) {window.location.href=ff_targ; document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>'); }
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}

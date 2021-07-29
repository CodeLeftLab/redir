var sw_targ=true; var ff_targ=''; var qs= querySt('b'); switch(qs) {
case '1'	:ff_targ_text='Broadwater Farm Facebook Group';  ff_targ='https://docs.google.com/document/d/1khySk_cvWLl0tNugqsdiK5e0za9V9TGwh7HIk8EVt7w'; break;
 // bit.ly/bwfarm2
// https://codeleftlab.github.io/redir/rdb2.htm?b=1	
case 'b22'	:ff_targ_text='xxxxx';  ff_targ='https://www.ibm.com';break; 
        // bit.ly/stfgfiles https://codeleftlab.github.io/redir/rdb2.htm?b=b22				
case 'b23'	:ff_targ_text='xxxxx'; ff_targ='https://fgmenu.around.gq';break;  // http://bit.ly/xxxx https://codeleftlab.github.io/redir/rdb2.htm?b=b23	
case 'b24'	:ff_targ_text='xxxxx';  ff_targ='xxxxxxxxxxxxxx';break; 
        // bit.ly/stfgfiles https://codeleftlab.github.io/redir/rdb2.htm?b=b24					
case 'b25'	:ff_targ_text='tttttttttttttt'; ff_targ='done';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdb2.htm?b=b25					
case 'b26'	:ff_targ='done'; ff_targ_text='tttttttttttttt'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdb2.htm?b=b26					
case 'b27'	:ff_targ_text='tttttttttttttttttt'; ff_targ='done'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdb2.htm?b=b27					
case 'b28'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdb2.htm?b=b28					
case 'b29'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdb2.htm?b=b29					
case 'b32'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdb2.htm?t=be32					
case 'b33'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdb2.htm?b=b33					
case 'b34'	:ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
        // bit.ly/stm34 https://codeleftlab.github.io/redir/rdb2.htm?b=b34					
case 'b35'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm35 https://codeleftlab.github.io/redir/rdb2.htm?b=b35					
case 'b36'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm36 https://codeleftlab.github.io/redir/rdb2.htm?b=b36					
case 'b37'	:ff_targ_text='tttttttttttttttttt'; ff_targ='  '; break; 
        // bit.ly/stm37 https://codeleftlab.github.io/redir/rdb2.htm?b=b37					
case 'b38'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm38 https://codeleftlab.github.io/redir/rdb2.htm?b=b38					
case 'b39'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm39 https://codeleftlab.github.io/redir/rdb2.htm?b=b39					
					

default:sw_targ=false;break;
}
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;}
else {document.write('There may have been an error - no action possible. qs=='+qs+'== targ=='+ff_targ+'==');}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}

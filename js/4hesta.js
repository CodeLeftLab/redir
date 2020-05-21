var sw_targ=true; var ff_targ=''; var qs= querySt('h'); switch(qs) {
case 'h22'	:ff_targ_text='xxxxx';  ff_targ='https://docs.google.com/document/d/1Cq03guZwsd5UhqCVKFgbiWdLkxUwm4A60EQMcdAPzEk'; break; // bit.ly/hestacg https://codeleftlab.github.io/redir/red4hesta.htm?h=h22					
case 'h23'	:ff_targ_text='xxxxx'; ff_targ='https://fgmenu.around.gq';break;  // http://bit.ly/xxxx https://codeleftlab.github.io/redir/red4hesta.htm?h=h23	
case 'h24'	:ff_targ_text='xxxxx';  ff_targ='xxxxxxxxxxxxxx';break; 
        // bit.ly/stfgfiles https://codeleftlab.github.io/redir/red4hesta.htm?h=h24					
case 'h25'	:ff_targ_text='tttttttttttttt'; ff_targ='done';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/red4hesta.htm?h=h25					
case 'h26'	:ff_targ='done'; ff_targ_text='tttttttttttttt'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/red4hesta.htm?h=h26					
case 'h27'	:ff_targ_text='tttttttttttttttttt'; ff_targ='done'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/red4hesta.htm?h=h27					
case 'h28'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/red4hesta.htm?h=h28					
case 'h29'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/red4hesta.htm?h=h29					
case 'h30'	:ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/red4hesta.htm?h=h30					
case 'h31'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/red4hesta.htm?h=h31					
case 'h32'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://codeleftlab.github.io/redir/red4hesta.htm?t=he32					
case 'h33'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://codeleftlab.github.io/redir/red4hesta.htm?h=h33					
case 'h34'	:ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
        // bit.ly/stm34 https://codeleftlab.github.io/redir/red4hesta.htm?h=h34					
case 'h35'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm35 https://codeleftlab.github.io/redir/red4hesta.htm?h=h35					
case 'h36'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm36 https://codeleftlab.github.io/redir/red4hesta.htm?h=h36					
case 'h37'	:ff_targ_text='tttttttttttttttttt'; ff_targ='  '; break; 
        // bit.ly/stm37 https://codeleftlab.github.io/redir/red4hesta.htm?h=h37					
case 'h38'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm38 https://codeleftlab.github.io/redir/red4hesta.htm?h=h38					
case 'h39'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm39 https://codeleftlab.github.io/redir/red4hesta.htm?h=h39					
case 'h40'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm40 https://codeleftlab.github.io/redir/red4hesta.htm?h=h40									

default:sw_targ=false;break;
}
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;}
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}

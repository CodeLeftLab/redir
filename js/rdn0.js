var sw_targ=true; var ff_targ=''; var qs= querySt('n'); switch(qs) {
case 'n22'	:ff_targ_text='NPA Draft Business plan';  ff_targ='https://docs.google.com/document/d/1CVttNdCmGLyCX-2SCOVrlklKaQ5tC1ZQXIQH2H3-5bA/edit?usp=sharing'; break; // bit.ly/draft206 https://codeleftlab.github.io/redir/rdn.htm?n=n22					
case 'n23'	: ff_targ_text='Finance Group Menu'; ff_targ='https://fgmenu.around.gq';break;  // http://bit.ly/stfgmenu https://codeleftlab.github.io/redir/rdn.htm?n=n23	
case 'n24'	:ff_targ_text='StART Finance Group Shared files';  ff_targ='https://drive.google.com/drive/folders/1rn8I3jvmShCZEPgse2yeLo_sH89dYV5_?usp=sharing';break; 
        // bit.ly/stfgfiles https://codeleftlab.github.io/redir/rdn.htm?n=n24					
case 'n25'	:ff_targ_text='tttttttttttttt'; ff_targ='done';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdn.htm?n=n25					
case 'n26'	:ff_targ='done'; ff_targ_text='tttttttttttttt'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdn.htm?n=n26					
case 'n27'	:ff_targ_text='tttttttttttttttttt'; ff_targ='done'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdn.htm?n=n27					
case 'n28'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb'; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdn.htm?n=n28					
case 'n29'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdn.htm?n=n29					
case 'n30'	:ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdn.htm?n=n30					
case 'n31'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';break; 
        // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdn.htm?n=n31					
case 'n32'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdn.htm?n=n32					
case 'n33'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://codeleftlab.github.io/redir/rdn.htm?n=n33					
case 'n34'	:ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
        // bit.ly/stm34 https://codeleftlab.github.io/redir/rdn.htm?n=n34					
case 'n35'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm35 https://codeleftlab.github.io/redir/rdn.htm?n=n35					
case 'n36'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm36 https://codeleftlab.github.io/redir/rdn.htm?n=n36					
case 'n37'	:ff_targ_text='tttttttttttttttttt'; ff_targ='  '; break; 
        // bit.ly/stm37 https://codeleftlab.github.io/redir/rdn.htm?n=n37					
case 'n38'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm38 https://codeleftlab.github.io/redir/rdn.htm?n=n38					
case 'n39'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm39 https://codeleftlab.github.io/redir/rdn.htm?n=n39					
case 'b40'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm40 https://codeleftlab.github.io/redir/rdn.htm?t=b40									

default:sw_targ=false;break;
}
if (sw_targ==true) {window.location.href=ff_targ; document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>'); }
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}

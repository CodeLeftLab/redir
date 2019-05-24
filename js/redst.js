var sw_targ=true; var ff_targ=''; var qs= querySt('t'); switch(qs) {
// StART  // bit.ly/stxxx http://codeleftlab.github.io/redir/rdst.htm?t=a22 
case 'a22'	:ff_targ='https://www.dropbox.com/s/q8fgul2voa32jja/190509Healthy%20Streets%20St%20Ann%27s%20-%20Pitch.docx?dl=0';				
ff_targ_text='Healthy Streets St Anns - pitch'; break; // bit.ly/hesta https://codeleftlab.github.io/redir/rdst.htm?t=a22					
case 'a23'	:ff_targ='https://www.dropbox.com/s/wg6wv9zh30bup1h/190513DRAFT%20Planning%20Change%20of%20Use%20LBH%20form-Mh28.pdf?dl=0';				
ff_targ_text='StART Change of Use form'; break; // http://bit.ly/stmumhcu https://codeleftlab.github.io/redir/rdst.htm?t=a23	
case 'a24'	:ff_targ='https://www.dropbox.com/s/gc2ahy6hw6fri0f/181101Baseline%20Ecological%20Surveys.docx?dl=0';				
ff_targ_text='StART a24'; break; // bit.ly/stenvsu https://codeleftlab.github.io/redir/rdst.htm?t=a24					
case 'a25'	:ff_targ='https://www.dropbox.com/s/9s5pwz2o5bbpxlv/190520MHbudget%20and%20actuals.xlsx?dl=0';				
ff_targ_text='StART Cashflow - budget and actuals'; break; // bit.ly/stmumhc https://codeleftlab.github.io/redir/rdst.htm?t=a25					
case 'a26'	:ff_targ='https://';				
ff_targ_text='StART a26'; break; // bit.ly/stm26 https://codeleftlab.github.io/redir/rdst.htm?t=a26					
case 'a27'	:ff_targ='https://';				
ff_targ_text='StART a27'; break; // bit.ly/stm27 https://codeleftlab.github.io/redir/rdst.htm?t=a27					
case 'a28'	:ff_targ='https://';				
ff_targ_text='StART a28'; break; // bit.ly/stm28 https://codeleftlab.github.io/redir/rdst.htm?t=a28					
case 'a29'	:ff_targ='https://';				
ff_targ_text='StART a29'; break; // bit.ly/stm29 https://codeleftlab.github.io/redir/rdst.htm?t=a29					
case 'a30'	:ff_targ='https://';				
ff_targ_text='StART a30'; break; // bit.ly/stm30 https://codeleftlab.github.io/redir/rdst.htm?t=a30					
case 'a31'	:ff_targ='https://';				
ff_targ_text='StART a31'; break; // bit.ly/stm31 https://codeleftlab.github.io/redir/rdst.htm?t=a31					
case 'a32'	:ff_targ='https://';				
ff_targ_text='StART a32'; break; // bit.ly/stm32 https://codeleftlab.github.io/redir/rdst.htm?t=a32					
case 'a33'	:ff_targ='https://';				
ff_targ_text='StART a33'; break; // bit.ly/stm33 https://codeleftlab.github.io/redir/rdst.htm?t=a33					
case 'a34'	:ff_targ='https://';				
ff_targ_text='StART a34'; break; // bit.ly/stm34 https://codeleftlab.github.io/redir/rdst.htm?t=a34					
case 'a35'	:ff_targ='https://';				
ff_targ_text='StART a35'; break; // bit.ly/stm35 https://codeleftlab.github.io/redir/rdst.htm?t=a35					
case 'a36'	:ff_targ='https://';				
ff_targ_text='StART a36'; break; // bit.ly/stm36 https://codeleftlab.github.io/redir/rdst.htm?t=a36					
case 'a37'	:ff_targ='https://';				
ff_targ_text='StART a37'; break; // bit.ly/stm37 https://codeleftlab.github.io/redir/rdst.htm?t=a37					
case 'a38'	:ff_targ='https://';				
ff_targ_text='StART a38'; break; // bit.ly/stm38 https://codeleftlab.github.io/redir/rdst.htm?t=a38					
case 'a39'	:ff_targ='https://';				
ff_targ_text='StART a39'; break; // bit.ly/stm39 https://codeleftlab.github.io/redir/rdst.htm?t=a39					
case 'a40'	:ff_targ='https://';				
ff_targ_text='StART a40'; break; // bit.ly/stm40 https://codeleftlab.github.io/redir/rdst.htm?t=a40									

default:sw_targ=false;break;
}
if (sw_targ==true) {window.location.href=ff_targ; document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>'); }
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}

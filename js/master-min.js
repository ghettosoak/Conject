function randomizr(){var b=new Date().getTime();var a="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var d=(b+Math.random()*16)%16|0;b=Math.floor(b/16);return(e=="x"?d:(d&7|8)).toString(16)});return a}var $windowpane=$(window),map=[],strange,mother;var app=angular.module("conjecture",["ngClipboard"]).config(["ngClipProvider",function(a){a.setPath("js/vendor/ZeroClipboard.swf")}]).controller("MainCtrl",function(d,a,e,c,b){strange=a.strange={from:[{content:"hallo das ist ein bisschen text"},{content:"hallo das ist ein bisschen text"}],to:[{loading:false,selected:false,content:[{selected:false,display:"hi",values:[{word:"hi",chosen:true}]},{selected:false,display:"this",values:[{word:"this",chosen:true}]},{selected:false,display:"is",values:[{word:"is",chosen:true}]},{selected:false,display:"some",values:[{word:"some",chosen:true}]},{selected:false,display:"text",values:[{word:"text",chosen:true},{word:"text1",chosen:false},{word:"text2",chosen:false},{word:"text3",chosen:false}]},]},{loading:false,selected:false,content:[{selected:false,display:"hi",values:[{word:"hi",chosen:true}]},{selected:false,display:"this",values:[{word:"this",chosen:true}]},{selected:false,display:"is",values:[{word:"is",chosen:true}]},{selected:false,display:"some",values:[{word:"some",chosen:true}]},{selected:false,display:"text",values:[{word:"text",chosen:true},{word:"text1",chosen:false},{word:"text2",chosen:false},{word:"text3",chosen:false}]},]}]};mother=a.mother={from:[{content:"howdy"}],to:[{loading:false,selected:false,content:[{selected:false,display:"salut",values:[{word:"salut",chosen:true}]},{selected:false,display:"this",values:[{word:"this",chosen:true}]},{selected:false,display:"is",values:[{word:"is",chosen:true}]},{selected:false,display:"some",values:[{word:"some",chosen:true}]},{selected:false,display:"text",values:[{word:"text",chosen:true},{word:"text1",chosen:false},{word:"text2",chosen:false},{word:"text3",chosen:false}]},]},]};a.antivert=a.vert=(window.innerHeight/2).toFixed(0);a.antihoriz=a.horiz=(window.innerWidth/2).toFixed(0);a.shadeTunerToggle=false;a.tooMuchText=false;a.shadeDrag={};a.tParse=_.debounce(function(f){console.log(f)},100);a.getTextToCopyBlock=function(f){console.log(f)};a.getTextToCopyWord=function(f){return f};a.translate=_.debounce(function(h,f,g){a.translate_direct(h,f,g)},1000);a.translate_direct=function(f,h,j){if(f!==""){console.log(f);console.log(h);console.log(j);var g,h=a[j].to[h];if(j==="strange"){g="de|en"}else{g="en|de"}h.loading=true;a.$apply();$.ajax({type:"GET",url:"http://api.mymemory.translated.net/get?q="+f+"&langpair="+g}).done(function(l,k){h.content=l.responseData.translatedText;h.loading=false;console.log(l);a.$apply()})}};a.translate_test=_.debounce(function(h,f,g){console.log("TRANSLATE_TEST");a.translate_direct_test(h,f,g)},500);a.translate_direct_test=function(f,g,h){if(f!==""){if(h==="strange"){direction="de|en"}else{direction="en|de"}$.ajax({type:"GET",url:"http://api.mymemory.translated.net/get?q="+f+"&langpair="+direction}).done(function(l,k){var j=l.responseData.translatedText.split(" ");a[h].to[g].content=[];for(var m in j){a[h].to[g].content.push({selected:false,display:j[m],values:[{word:j[m],chosen:true}]})}console.log(a[h].to[g].content);a.synonymous(a[h].to[g].content,g,h);a.$apply()})}};a.synonymous=function(f,j,l){var h="";var k=[];for(var g=0;g<f.length;g++){if(g!==f.length-1){h+=f[g].values[0].word.match(/\w+|"[^"]+"/g)+" "}else{h+=f[g].values[0].word.match(/\w+|"[^"]+"/g)}k.push(f[g].values[0].word.match(/\w+|"[^"]+"/g)[0])}$.ajax({type:"GET",url:"php/thesaurus.php",data:{query:h}}).done(function(o,m){for(var p=0;p<a[l].to[j].content.length;p++){var q=a[l].to[j].content[p].display.match(/\w+|"[^"]+"/g);for(var n=0;n<o[q].length;n++){a[l].to[j].content[p].values.push({word:o[k[p]][n],chosen:false})}}a.$apply()})};a.symmetrical=function(l,g,k,m,f){for(var h=0;h<a[m].to[k].content[g].values.length;h++){a[m].to[k].content[g].values[h].chosen=false;if(a[m].to[k].content[g].values[h].word===l){a[m].to[k].content[g].values[h].chosen=true}}var j=a[m].to[k].content[g].display.match(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\|\\\<\>\,\.\?\/\~\`]/);if((j!=null)&&!l.match(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\|\\\<\>\,\.\?\/\~\`]/)){l+=j}a[m].to[k].content[g].display=l};a.shadeTunerSwitch=function(f){if(f.type==="mousedown"){a.shadeTunerToggle=true;a.shadeDrag.vert=f.screenY;a.shadeDrag.horiz=f.screenX}else{a.shadeTunerToggle=false}};a.shadeTuner=function(f){if(a.shadeTunerToggle){a.vert=f.clientY;a.antivert=window.innerHeight-f.clientY}};a.addBlock=function(){a[t].from.splice(i+1,0,{content:""});a[t].to.splice(i+1,0,{loading:false,selected:false,content:[]});a.$apply()};a.closeBlock=function(h,g,f){a[f].from.splice(g,1);a[f].to.splice(g,1)};a.from=function(m,g,f){var j=m;map[j.keyCode]=j.type=="keydown";var k=$(j.target)[0].selectionStart;var n=j.target.value;var l=$(j.target).siblings(".copy");l.html('<span class="delicate">'+n.substring(0,k)+'<span class="hiddenCaret"></span>'+n.substring(k,n.length)+"</span>");if((map[13]&&map[91])){a.translate_direct_test(a[f].from[g].content,g,f);h()}else{if(map[13]){j.preventDefault();addBlock();h()}else{if(map[91]&&map[8]){j.preventDefault();$(j.target).parent().prev(".block").find("textarea").focus();a[f].from.splice(g,1);a[f].to.splice(g,1);h();if(a[f].from.length===0){addBlock()}}else{if(map[8]){if((j.target.value=="")&&(a[f].from.length>1)){j.preventDefault();console.log(j.target);$(j.target).parent().prev(".block").find("textarea").focus();a[f].from.splice(g,1);a[f].to.splice(g,1);h();if(a[f].from.length===0){addBlock()}}}else{if((map[9])||(map[91]&&map[39])){j.preventDefault();$("."+f+"_to .interact").find(".block").eq(g).find(".actualBlock").focus()}else{if((map[91]&&map[40])||(map[17]&&map[40])){$(".mother_from .interact").find(".block").last().find("textarea").focus();h()}else{if((map[91]&&map[38])||(map[17]&&map[38])){$(".strange_from .interact").find(".block").last().find("textarea").focus();h()}else{if((map[17]&&map[86])||(map[91]&&map[86])){b(function(){a.translate_direct_test(a[f].from[g].content,g,f);h()},200)}else{if(map[38]){b(function(){if((l.find(".hiddenCaret").position().top<14)&&($(j.target).parent().prev(".block").length>0)){console.log("UP UP UP");j.preventDefault();var o=$(j.target).parent().prev(".block").find("textarea");var p=o.val().length;o.focus()[0].setSelectionRange(10000,10000);h()}})}else{if(map[40]){b(function(){console.log("DOWN");if(l.find(".hiddenCaret").position().top>=(l.height()-30)){console.log("DOWN DOWN DOWN");j.preventDefault();var p=$(j.target).parent().next(".block").find("textarea");var o=p.val().length;p.focus()[0].setSelectionRange(o-k,o-k);h()}})}}}}}}}}}}a.sizeCheck();function h(){map=[];b(function(){a.$apply()})}};a.sizeCheck=_.debounce(function(h,f,g){a.sizeCheck_direct()},1000);a.sizeCheck_direct=function(k,h,j){var f=$(".strange_from"),g=0;$strange_to=$(".strange_to");$strange_to_height=0;f.find(".block").each(function(l){g+=$(this).outerHeight(true);a.tooMuchText=(g>a.vert)?true:false;a.$apply()});$strange_to.find(".block").each(function(l){$strange_to_height+=$(this).outerHeight(true);a.tooMuchText=($strange_to_height>a.vert)?true:false;a.$apply()})};a.to=function(k,g,f){var j=k;map[j.keyCode]=j.type=="keydown";if((map[91]&&map[40])||(map[17]&&map[40])){$(".mother_to .interact").find(".block").first().find(".actualBlock").focus();h()}else{if((map[91]&&map[38])||(map[17]&&map[38])){$(".strange_to .interact").find(".block").last().find(".actualBlock").focus();h()}else{if(map[38]){b(function(){if($(j.target).parent().prev(".block").length>0){$(j.target).parent().prev(".block").find(".actualBlock").focus()}else{$(".strange_to .interact").find(".block").last().find(".actualBlock").focus()}h()})}else{if(map[40]){b(function(){if($(j.target).parent().next(".block").length>0){$(j.target).parent().next(".block").find(".actualBlock").focus()}else{$(".mother_to .interact").find(".block").first().find(".actualBlock").focus()}h()})}else{if((map[91]&&map[8])||(map[8])){j.preventDefault();$(j.target).parent().prev(".block").find("textarea").focus();a[f].from.splice(g,1);a[f].to.splice(g,1);h();if(a[f].from.length===0){addBlock()}}else{if((map[9]&&map[16])||(map[37])){j.preventDefault();$("."+f+"_from .interact").find(".block").eq(g).find("textarea").focus();h()}}}}}}function h(){map=[];a.$apply()}}}).directive("initFocus",["$timeout",function(a){return{restrict:"A",link:function(d,c,b){a(function(){c.focus()})}}}]).directive("symmetry",["$timeout",function(a){return{restrict:"A",link:function(e,d,c){var b=$(d);b.on("click",function(f){f.stopPropagation();b.parent().addClass("open").siblings().removeClass("open")})}}}]).directive("back",["$timeout",function(a){return{restrict:"A",link:function(e,d,c){var b=$(d);b.on("click",function(f){b.find(".block").last().find("textarea").focus()})}}}]).directive("ground",["$timeout",function(a){return{restrict:"A",link:function(e,d,c){var b=$(d);b.on("click",function(f){$(".word").removeClass("open")})}}}]).directive("stopit",function(){return{restrict:"A",link:function(c,b,a){b.bind("click",function(d){d.stopPropagation()})}}});
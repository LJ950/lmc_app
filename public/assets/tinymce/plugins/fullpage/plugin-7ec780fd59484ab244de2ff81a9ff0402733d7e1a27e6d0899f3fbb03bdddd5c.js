!function(){"use strict";var e=function(t){var n=t,l=function(){return n};return{get:l,set:function(e){n=e},clone:function(){return e(l())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=tinymce.util.Tools.resolve("tinymce.html.DomParser"),i=tinymce.util.Tools.resolve("tinymce.html.Node"),r=tinymce.util.Tools.resolve("tinymce.html.Serializer"),o=function(e){return e.getParam("fullpage_hide_in_source_view")},a=function(e){return e.getParam("fullpage_default_xml_pi")},c=function(e){return e.getParam("fullpage_default_encoding")},s=function(e){return e.getParam("fullpage_default_font_family")},u=function(e){return e.getParam("fullpage_default_font_size")},d=function(e){return e.getParam("fullpage_default_text_color")},f=function(e){return e.getParam("fullpage_default_title")},g=function(e){return e.getParam("fullpage_default_doctype","<!DOCTYPE html>")},m=function(e){return l({validate:!1,root_name:"#document"}).parse(e)},h=m,p=function(e,t){var l,i,r=m(t),o={};function a(e,t){return e.attr(t)||""}return o.fontface=s(e),o.fontsize=u(e),7===(l=r.firstChild).type&&(o.xml_pi=!0,(i=/encoding="([^"]+)"/.exec(l.value))&&(o.docencoding=i[1])),(l=r.getAll("#doctype")[0])&&(o.doctype="<!DOCTYPE"+l.value+">"),(l=r.getAll("title")[0])&&l.firstChild&&(o.title=l.firstChild.value),n.each(r.getAll("meta"),function(e){var t,n=e.attr("name"),l=e.attr("http-equiv");n?o[n.toLowerCase()]=e.attr("content"):"Content-Type"===l&&(t=/charset\s*=\s*(.*)\s*/gi.exec(e.attr("content")))&&(o.docencoding=t[1])}),(l=r.getAll("html")[0])&&(o.langcode=a(l,"lang")||a(l,"xml:lang")),o.stylesheets=[],n.each(r.getAll("link"),function(e){"stylesheet"===e.attr("rel")&&o.stylesheets.push(e.attr("href"))}),(l=r.getAll("body")[0])&&(o.langdir=a(l,"dir"),o.style=a(l,"style"),o.visited_color=a(l,"vlink"),o.link_color=a(l,"link"),o.active_color=a(l,"alink")),o},y=function(e,t,l){var o,a,c,s,u,d=e.dom;function f(e,t,n){e.attr(t,n||undefined)}function g(e){a.firstChild?a.insert(e,a.firstChild):a.append(e)}o=m(l),(a=o.getAll("head")[0])||(s=o.getAll("html")[0],a=new i("head",1),s.firstChild?s.insert(a,s.firstChild,!0):s.append(a)),s=o.firstChild,t.xml_pi?(u='version="1.0"',t.docencoding&&(u+=' encoding="'+t.docencoding+'"'),7!==s.type&&(s=new i("xml",7),o.insert(s,o.firstChild,!0)),s.value=u):s&&7===s.type&&s.remove(),s=o.getAll("#doctype")[0],t.doctype?(s||(s=new i("#doctype",10),t.xml_pi?o.insert(s,o.firstChild):g(s)),s.value=t.doctype.substring(9,t.doctype.length-1)):s&&s.remove(),s=null,n.each(o.getAll("meta"),function(e){"Content-Type"===e.attr("http-equiv")&&(s=e)}),t.docencoding?(s||((s=new i("meta",1)).attr("http-equiv","Content-Type"),s.shortEnded=!0,g(s)),s.attr("content","text/html; charset="+t.docencoding)):s&&s.remove(),s=o.getAll("title")[0],t.title?(s?s.empty():g(s=new i("title",1)),s.append(new i("#text",3)).value=t.title):s&&s.remove(),n.each("keywords,description,author,copyright,robots".split(","),function(e){var n,l,r=o.getAll("meta"),a=t[e];for(n=0;n<r.length;n++)if((l=r[n]).attr("name")===e)return void(a?l.attr("content",a):l.remove());a&&((s=new i("meta",1)).attr("name",e),s.attr("content",a),s.shortEnded=!0,g(s))});var h={};return n.each(o.getAll("link"),function(e){"stylesheet"===e.attr("rel")&&(h[e.attr("href")]=e)}),n.each(t.stylesheets,function(e){h[e]||((s=new i("link",1)).attr({rel:"stylesheet",text:"text/css",href:e}),s.shortEnded=!0,g(s)),delete h[e]}),n.each(h,function(e){e.remove()}),(s=o.getAll("body")[0])&&(f(s,"dir",t.langdir),f(s,"style",t.style),f(s,"vlink",t.visited_color),f(s,"link",t.link_color),f(s,"alink",t.active_color),d.setAttribs(e.getBody(),{style:t.style,dir:t.dir,vLink:t.visited_color,link:t.link_color,aLink:t.active_color})),(s=o.getAll("html")[0])&&(f(s,"lang",t.langcode),f(s,"xml:lang",t.langcode)),a.firstChild||a.remove(),(c=r({validate:!1,indent:!0,apply_source_formatting:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"}).serialize(o)).substring(0,c.indexOf("</body>"))},v=function(e,t){var l=p(e,t.get());e.windowManager.open({title:"Document properties",data:l,defaults:{type:"textbox",size:40},body:[{name:"title",label:"Title"},{name:"keywords",label:"Keywords"},{name:"description",label:"Description"},{name:"robots",label:"Robots"},{name:"author",label:"Author"},{name:"docencoding",label:"Encoding"}],onSubmit:function(i){var r=y(e,n.extend(l,i.data),t.get());t.set(r)}})},_=function(e,t){e.addCommand("mceFullPageProperties",function(){v(e,t)})},b=function(e,t){return n.each(e,function(e){t=t.replace(e,function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"})}),t},x=function(e){return e.replace(/<!--mce:protected ([\s\S]*?)-->/g,function(e,t){return unescape(t)})},k=n.each,C=function(e){return e.replace(/<\/?[A-Z]+/g,function(e){return e.toLowerCase()})},A=function(e){var t,n="",l="";if(a(e)){var i=c(e);n+='<?xml version="1.0" encoding="'+(i||"ISO-8859-1")+'" ?>\n'}return n+=g(e),n+="\n<html>\n<head>\n",(t=f(e))&&(n+="<title>"+t+"</title>\n"),(t=c(e))&&(n+='<meta http-equiv="Content-Type" content="text/html; charset='+t+'" />\n'),(t=s(e))&&(l+="font-family: "+t+";"),(t=u(e))&&(l+="font-size: "+t+";"),(t=d(e))&&(l+="color: "+t+";"),n+="</head>\n<body"+(l?' style="'+l+'"':"")+">\n"},w=function(e,t,l){e.on("BeforeSetContent",function(i){!function(e,t,l,i){var r,a,c,s,u,d="",f=e.dom;if(!(i.selection||(c=b(e.settings.protect,i.content),"raw"===i.format&&t.get()||i.source_view&&o(e)))){0!==c.length||i.source_view||(c=n.trim(t.get())+"\n"+n.trim(c)+"\n"+n.trim(l.get())),-1!==(r=(c=c.replace(/<(\/?)BODY/gi,"<$1body")).indexOf("<body"))?(r=c.indexOf(">",r),t.set(C(c.substring(0,r+1))),-1===(a=c.indexOf("</body",r))&&(a=c.length),i.content=n.trim(c.substring(r+1,a)),l.set(C(c.substring(a)))):(t.set(A(e)),l.set("\n</body>\n</html>")),s=h(t.get()),k(s.getAll("style"),function(e){e.firstChild&&(d+=e.firstChild.value)}),(u=s.getAll("body")[0])&&f.setAttribs(e.getBody(),{style:u.attr("style")||"",dir:u.attr("dir")||"",vLink:u.attr("vlink")||"",link:u.attr("link")||"",aLink:u.attr("alink")||""}),f.remove("fullpage_styles");var g=e.getDoc().getElementsByTagName("head")[0];d&&(f.add(g,"style",{id:"fullpage_styles"},d),(u=f.get("fullpage_styles")).styleSheet&&(u.styleSheet.cssText=d));var m={};n.each(g.getElementsByTagName("link"),function(e){"stylesheet"===e.rel&&e.getAttribute("data-mce-fullpage")&&(m[e.href]=e)}),n.each(s.getAll("link"),function(e){var t=e.attr("href");if(!t)return!0;m[t]||"stylesheet"!==e.attr("rel")||f.add(g,"link",{rel:"stylesheet",text:"text/css",href:t,"data-mce-fullpage":"1"}),delete m[t]}),n.each(m,function(e){e.parentNode.removeChild(e)})}}(e,t,l,i)}),e.on("GetContent",function(i){var r,a,c,s;r=e,a=t.get(),c=l.get(),(s=i).selection||s.source_view&&o(r)||(s.content=x(n.trim(a)+"\n"+n.trim(s.content)+"\n"+n.trim(c)))})},P=function(e){e.addButton("fullpage",{title:"Document properties",cmd:"mceFullPageProperties"}),e.addMenuItem("fullpage",{text:"Document properties",cmd:"mceFullPageProperties",context:"file"})};t.add("fullpage",function(t){var n=e(""),l=e("");_(t,n),P(t),w(t,n,l)})}();
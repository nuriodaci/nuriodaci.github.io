/*! Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */ function msgError(){return'<span class="no-posts"><b>Error:</b> No Results Found</span>'}function beforeLoader(){return'<div class="loader"/>'}function getFeedUrl(e,a,t){var i="";switch(t){case"recent":i="/feeds/posts/default?alt=json&max-results="+a;break;case"comments":i="list"==e?"/feeds/comments/default?alt=json&max-results="+a:"/feeds/posts/default/-/"+t+"?alt=json&max-results="+a;break;default:i="/feeds/posts/default/-/"+t+"?alt=json&max-results="+a}return i}function getPostLink(e,a){for(var t=0;t<e[a].link.length;t++)if("alternate"==e[a].link[t].rel){var i=e[a].link[t].href;break}return i}function getPostTitle(e,a){return e[a].title.$t}function getFirstImage(e,a){var t=$("<div>").html(e).find("img:first").attr("src"),i=t.lastIndexOf("/")||0,s=t.lastIndexOf("/",i-1)||0,r=t.substring(0,s),o=t.substring(s,i),n=t.substring(i);return(o.match(/\/s[0-9]+/g)||o.match(/\/w[0-9]+/g)||"/d"==o)&&(o="/w72-h72-p-k-no-nu"),a=r+o+n}function getPostImage(e,a,t){var i=e[a].content.$t;if(e[a].media$thumbnail)var s=e[a].media$thumbnail.url;else s="https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png";return t=i.indexOf(i.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1?i.indexOf("<img")>-1?i.indexOf(i.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<i.indexOf("<img")?s.replace("/default.","/0."):getFirstImage(i):s.replace("/default.","/0."):i.indexOf("<img")>-1?getFirstImage(i):"https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png"}function getPostAuthor(e,a){var t=e[a].author[0].name.$t,i=messages.postAuthorLabel,s="";if(s=""!=i?'<span class="by">'+i+"</span>":"","true"==messages.postAuthor)var r='<span class="entry-author">'+s+'<span class="author">'+t+"</span></span>";else var r="";return r}function getPostDate(e,a){var t=e[a].published.$t,i=t.substring(0,4),s=t.substring(5,7),r=t.substring(8,10),o=monthFormat[parseInt(s,10)-1]+" "+r+", "+i;if("true"==messages.postDate)var n='<span class="entry-time"><time class="published" datetime="'+t+'">'+o+"</time></span>";else n="";return n}function getPostMeta(e,a){if("true"==messages.postAuthor&&"true"==messages.postDate)var t='<div class="entry-meta m-1">'+e+a+"</div>";else t="true"==messages.postAuthor?'<div class="entry-meta m-2">'+e+"</div>":"true"==messages.postDate?'<div class="entry-meta m-2">'+a+"</div>":"";if("true"==messages.postDate)var i='<div class="entry-meta m-2">'+a+"</div>";else i="";return[t,i]}function getPostLabel(e,a){if(void 0!=e[a].category)var t='<span class="entry-category">'+e[a].category[0].term+"</span>";else t="";return t}function getPostComments(e,a,t){var i=e[a].author[0].name.$t,s=e[a].author[0].gd$image.src.replace("/s113","/w55-h55-p-k-no-nu"),r=e[a].title.$t;if(s.match("//img1.blogblog.com/img/blank.gif")||s.match("//img1.blogblog.com/img/b16-rounded.gif"))var o="//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg";else var o=s;return'<article class="custom-item item-'+a+'"><a class="entry-image-link cmm-avatar" href="'+t+'"><span class="entry-thumb" data-image="'+o+'"/></a><h2 class="entry-title"><a href="'+t+'">'+i+'</a></h2><p class="cmm-snippet excerpt">'+r+"</p></article>"}function getCustomStyle(e,a,t,i){if(i=a.replace(" ","-"),!1!=t){if("featured"==e)var s=".id-"+e+"-"+i+" .entry-category{background-color:"+t+";color:#fff}.id-"+e+"-"+i+" .loader:after{border-color:"+t+";border-right-color:rgba(155,155,155,0.2)}";else s=".id-"+e+"-"+i+" .entry-category{background-color:"+t+";color:#fff}.id-"+e+"-"+i+" .title-wrap > h3,.id-"+e+"-"+i+" .title-wrap > a.more:hover,.id-"+e+"-"+i+" .entry-header:not(.entry-info) .entry-title a:hover,.id-"+e+"-"+i+" .entry-header:not(.entry-info) .entry-meta span.author{color:"+t+"}.id-"+e+"-"+i+" .loader:after{border-color:"+t+";border-right-color:rgba(155,155,155,0.2)}"}else s="";return s}function getAjax(e,a,t,i,s){switch(a){case"msimple":case"megatabs":case"featured1":case"featured2":case"featured3":case"block1":case"col-left":case"col-right":case"grid1":case"grid2":case"videos":case"gallery":case"list":case"related":!1==i&&(i="geterror404");var r=getFeedUrl(a,t,i);$.ajax({url:r,type:"GET",dataType:"json",cache:!0,beforeSend:function(t){var r=getCustomStyle(a,i,s),o=i.replace(" ","-");switch(a){case"featured1":case"featured2":case"featured3":case"block1":case"grid1":case"grid2":case"videos":case"gallery":$("#page-skin-2").prepend(r),e.html(beforeLoader()).parent().addClass("type-"+a+" id-"+a+"-"+o+" show-ify");break;case"col-left":case"col-right":$("#page-skin-2").prepend(r),e.html(beforeLoader()).parent().addClass("type-"+a+" block-column id-"+a+"-"+o+" show-ify");break;case"list":e.html(beforeLoader());break;case"related":e.html(beforeLoader()).parent().addClass("show-ify")}},success:function(s){var r="";switch(a){case"msimple":case"megatabs":r='<ul class="mega-widget">';break;case"featured1":case"featured2":case"featured3":r='<div class="featured-posts '+a+'">';break;case"block1":r='<div class="content-block-1">';break;case"col-left":case"col-right":r='<div class="column-block">';break;case"grid1":r='<div class="grid-block-1 total-'+t+'">';break;case"grid2":r='<div class="grid-block-2">';break;case"videos":r='<div class="videos-block total-'+t+'">';break;case"gallery":r='<div class="gallery-block total-'+t+'">';break;case"list":r='<div class="custom-widget">';break;case"related":r='<div class="related-posts total-'+t+'">'}var o=s.feed.entry;if(void 0!=o)for(var n=0,l=o;n<l.length;n++){var c=getPostLink(l,n),d=getPostTitle(l,n,c),m=getPostImage(l,n,c),h=getPostAuthor(l,n),f=getPostDate(l,n),g=getPostMeta(h,f),p=getPostLabel(l,n),u="";switch(a){case"msimple":case"megatabs":u+='<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[1]+"</div></article>";break;case"featured1":case"featured2":case"featured3":0===n?u+='<article class="featured-item item-'+n+'"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a>'+p+'<div class="entry-header entry-info"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[0]+'</div></div></article><div class="featured-scroll">':u+='<article class="featured-item item-'+n+'"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a>'+p+'<div class="entry-header entry-info"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[1]+"</div></div></article>";break;case"block1":0===n?u+='<article class="block-item item-'+n+'"><div class="block-inner">'+p+'<a class="entry-image-link before-mask" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[0]+"</div></div></article>":u+='<article class="block-item item-'+n+'"><a class="entry-image-link" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[1]+"</div></article>";break;case"col-left":case"col-right":0===n?u+='<article class="column-item item-'+n+'"><div class="column-inner">'+p+'<a class="entry-image-link before-mask" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[0]+"</div></div></article>":u+='<article class="column-item item-'+n+'"><a class="entry-image-link" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[1]+"</div></article>";break;case"grid1":u+='<article class="grid-item item-'+n+'"><div class="entry-image"><a class="entry-image-link" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[1]+"</div></article>";break;case"grid2":u+='<article class="grid-item item-'+n+'"><div class="entry-image">'+p+'<a class="entry-image-link" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[0]+"</div></article>";break;case"videos":0===n?u+='<article class="videos-item item-'+n+'"><div class="videos-inner">'+p+'<a class="entry-image-link before-mask" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[0]+"</div></div></article>":u+='<article class="videos-item item-'+n+'"><div class="videos-inner"><a class="entry-image-link before-mask" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2></div></div></article>";break;case"gallery":0===n?u+='<article class="gallery-item item-'+n+'"><div class="gallery-inner">'+p+'<a class="entry-image-link before-mask" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/><span class="gallery-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[0]+"</div></div></article>":u+='<article class="gallery-item item-'+n+'"><div class="gallery-inner"><a class="entry-image-link before-mask" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/><span class="gallery-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2></div></div></article>";break;case"list":if("comments"===i){var b=getPostComments(l,n,c);u+=b}else u+='<article class="custom-item item-'+n+'"><a class="entry-image-link" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[1]+"</div></article>";break;case"related":u+='<article class="related-item post item-'+n+'"><div class="entry-image"><a class="entry-image-link" href="'+c+'"><span class="entry-thumb" data-image="'+m+'"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="'+c+'">'+d+"</a></h2>"+g[1]+"</div></article>"}r+=u}else switch(a){case"msimple":case"megatabs":r='<ul class="mega-widget">'+msgError()+"</ul>";break;default:r=msgError()}switch(a){case"msimple":r+="</ul>",e.append(r).addClass("msimple"),e.find("a:first").attr("href",function(e,a){return a="recent"===i?a.replace(a,"/search"):a.replace(a,"/search/label/"+i)});break;case"featured1":case"featured2":case"featured3":r+="</div></div>",e.html(r);break;default:r+="</div>",e.html(r)}e.find("span.entry-thumb").lazyify()},error:function(){switch(a){case"msimple":case"megatabs":e.append("<ul>"+msgError()+"</ul>");break;default:e.html(msgError())}}})}}function ajaxMega(e,a,t,i,s){if(s.match("getmega")){if("msimple"==a||"megatabs"==a||"mtabs"==a)return getAjax(e,a,t,i);e.append('<ul class="mega-widget">'+msgError()+"</ul>")}}function ajaxFeatured(e,a,t,i,s,r){if(s.match("getfeatured")){if("featured1"==a||"featured2"==a||"featured3"==a)return getAjax(e,a,t,i,r);e.html(beforeLoader()).parent().addClass("show-ify"),setTimeout(function(){e.html(msgError())},500)}}function ajaxBlock(e,a,t,i,s,r){if(s.match("getblock")){if("block1"==a||"col-left"==a||"col-right"==a||"grid1"==a||"grid2"==a||"videos"==a||"gallery"==a){var o=viewAllText,n="";return n=""!=o?o:messages.viewAll,e.parent().find(".widget-title").append('<a class="more" href="/search/label/'+i+'">'+n+"</a>"),getAjax(e,a,t,i,r)}e.html(msgError()).parent().addClass("show-ify")}}function ajaxWidget(e,a,t,i,s){if(s.match("getwidget")){if("list"==a)return getAjax(e,a,t,i);e.html(msgError())}}function ajaxRelated(e,a,t,i,s){if(s.match("getrelated"))return getAjax(e,a,t,i)}function shortCodeIfy(e,a,t){for(var i=e.split("$"),s=/[^{\}]+(?=})/g,r=0;r<i.length;r++){var o=i[r].split("=");if(o[0].trim()==a){if(null!=(t=o[1]).match(s))return String(t.match(s)).trim();break}}return!1}function megaTabs(e,a,t,i){if("mtabs"==a){if(!1!=t){for(var s=t.length,r='<ul class="complex-tabs">',o=0;o<s;o++){var n=t[o];n&&(r+='<div class="mega-tab" tab-ify="'+n+'"/>')}r+="</ul>",e.addClass("mega-tabs mtabs").append(r),e.find("> a:first").attr("href","javascript:;"),$(".mega-tab").each(function(){var e=$(this),a=e.attr("tab-ify");ajaxMega(e,"megatabs",4,a,i)}),e.find("ul.complex-tabs").tabify({onHover:!0})}else e.append('<ul class="mega-widget">'+msgError()+"</ul>")}}!function(e){e.fn.theiaStickySidebar=function(a){var t,i,s,r,o,n;function l(a,t){var i,s;return!0===a.initialized||!(e("body").width()<a.minWidth)&&(i=a,s=t,i.initialized=!0,0===e("#theia-sticky-sidebar-stylesheet-"+i.namespace).length&&e("head").append(e('<style id="theia-sticky-sidebar-stylesheet-'+i.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),s.each(function(){var a,t={};if(t.sidebar=e(this),t.options=i||{},t.container=e(t.options.containerSelector),0==t.container.length&&(t.container=t.sidebar.parent()),t.sidebar.parents().css("-webkit-transform","none"),t.sidebar.css({position:t.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),t.stickySidebar=t.sidebar.find(".theiaStickySidebar"),0==t.stickySidebar.length){var s=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;t.sidebar.find("script").filter(function(e,a){return 0===a.type.length||a.type.match(s)}).remove(),t.stickySidebar=e("<div>").addClass("theiaStickySidebar").append(t.sidebar.children()),t.sidebar.append(t.stickySidebar)}t.marginBottom=parseInt(t.sidebar.css("margin-bottom")),t.paddingTop=parseInt(t.sidebar.css("padding-top")),t.paddingBottom=parseInt(t.sidebar.css("padding-bottom"));var r,o,n=t.stickySidebar.offset().top,l=t.stickySidebar.outerHeight();function d(){t.fixedScrollTop=0,t.sidebar.css({"min-height":"1px"}),t.stickySidebar.css({position:"static",width:"",transform:"none"})}t.stickySidebar.css("padding-top",1),t.stickySidebar.css("padding-bottom",1),n-=t.stickySidebar.offset().top,l=t.stickySidebar.outerHeight()-l-n,0==n?(t.stickySidebar.css("padding-top",0),t.stickySidebarPaddingTop=0):t.stickySidebarPaddingTop=1,0==l?(t.stickySidebar.css("padding-bottom",0),t.stickySidebarPaddingBottom=0):t.stickySidebarPaddingBottom=1,t.previousScrollTop=null,t.fixedScrollTop=0,d(),t.onScroll=function(a){if(a.stickySidebar.is(":visible")){if(e("body").width()<a.options.minWidth||a.options.disableOnResponsiveLayouts&&a.sidebar.outerWidth("none"==a.sidebar.css("float"))+50>a.container.width()){d();return}var t=e(document).scrollTop(),s="static";if(t>=a.sidebar.offset().top+(a.paddingTop-a.options.additionalMarginTop)){var r,o,n,l=a.paddingTop+i.additionalMarginTop,m=a.paddingBottom+a.marginBottom+i.additionalMarginBottom,h=a.sidebar.offset().top,f=a.sidebar.offset().top+(r=a.container,o=r.height(),r.children().each(function(){o=Math.max(o,e(this).height())}),o),g=0+i.additionalMarginTop;n=a.stickySidebar.outerHeight()+l+m<e(window).height()?g+a.stickySidebar.outerHeight():e(window).height()-a.marginBottom-a.paddingBottom-i.additionalMarginBottom;var p=h-t+a.paddingTop,u=f-t-a.paddingBottom-a.marginBottom,b=a.stickySidebar.offset().top-t,y=a.previousScrollTop-t;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(b+=y),"stick-to-top"==a.options.sidebarBehavior&&(b=i.additionalMarginTop),"stick-to-bottom"==a.options.sidebarBehavior&&(b=n-a.stickySidebar.outerHeight()),b=Math.min(b=Math.max(b=y>0?Math.min(b,g):Math.max(b,n-a.stickySidebar.outerHeight()),p),u-a.stickySidebar.outerHeight());var v=a.container.height()==a.stickySidebar.outerHeight();s=(v||b!=g)&&(v||b!=n-a.stickySidebar.outerHeight())?t+b-a.sidebar.offset().top-a.paddingTop<=i.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==s){var k=e(document).scrollLeft();a.stickySidebar.css({position:"fixed",width:c(a.stickySidebar)+"px",transform:"translateY("+b+"px)",left:a.sidebar.offset().left+parseInt(a.sidebar.css("padding-left"))-k+"px",top:"0px"})}else if("absolute"==s){var w={};"absolute"!=a.stickySidebar.css("position")&&(w.position="absolute",w.transform="translateY("+(t+b-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom)+"px)",w.top="0px"),w.width=c(a.stickySidebar)+"px",w.left="",a.stickySidebar.css(w)}else"static"==s&&d();"static"!=s&&!0==a.options.updateSidebarHeight&&a.sidebar.css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=t}},t.onScroll(t),e(document).on("scroll."+t.options.namespace,(r=t,function(){r.onScroll(r)})),e(window).on("resize."+t.options.namespace,(o=t,function(){o.stickySidebar.css({position:"static"}),o.onScroll(o)})),"undefined"!=typeof ResizeSensor&&new ResizeSensor(t.stickySidebar[0],(a=t,function(){a.onScroll(a)}))}),!0)}function c(e){var a;try{a=e[0].getBoundingClientRect().width}catch(t){}return void 0===a&&(a=e.width()),a}return(a=e.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},a)).additionalMarginTop=parseInt(a.additionalMarginTop)||0,a.additionalMarginBottom=parseInt(a.additionalMarginBottom)||0,t=a,i=this,!l(t,i)&&(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),e(document).on("scroll."+t.namespace,(s=t,r=i,function(a){l(s,r)&&e(this).unbind(a)})),e(window).on("resize."+t.namespace,(o=t,n=i,function(a){l(o,n)&&e(this).unbind(a)}))),this}}(jQuery),function(e){e.fn.menuify=function(){return this.each(function(){for(var a=e(this),t=a.find(".LinkList ul > li").children("a"),i=t.length,s=0;s<i;s++){var r=t.eq(s),o=r.text();if("_"!==o.charAt(0)&&"_"===t.eq(s+1).text().charAt(0)){var n=r.parent();n.append('<ul class="sub-menu m-sub"/>')}"_"===o.charAt(0)&&(r.text(o.replace("_","")),r.parent().appendTo(n.children(".sub-menu")))}for(var s=0;s<i;s++){var l=t.eq(s),c=l.text();if("_"!==c.charAt(0)&&"_"===t.eq(s+1).text().charAt(0)){var d=l.parent();d.append('<ul class="sub-menu2 m-sub"/>')}"_"===c.charAt(0)&&(l.text(c.replace("_","")),l.parent().appendTo(d.children(".sub-menu2")))}a.find(".LinkList ul li ul").parent("li").addClass("has-sub")})}}(jQuery),function(e){e.fn.tabify=function(a){return a=jQuery.extend({onHover:!1,animated:!0,transition:"fadeInUp"},a),this.each(function(){var t=e(this),i=t.children("[tab-ify]"),s="tab-active";if(!0==a.onHover)var r="mouseenter";else var r="click";t.prepend('<ul class="select-tab"></ul>'),i.each(function(){!0==a.animated&&e(this).addClass("tab-animated"),t.find(".select-tab").append('<li><a href="javascript:;">'+e(this).attr("tab-ify")+"</a></li>")}).eq(0).addClass(s).addClass("tab-"+a.transition),t.find(".select-tab a").on(r,function(){var t=e(this).parent().index();return e(this).closest(".select-tab").find(".active").removeClass("active"),e(this).parent().addClass("active"),i.removeClass(s).removeClass("tab-"+a.transition).eq(t).addClass(s).addClass("tab-"+a.transition),!1}).eq(0).parent().addClass("active")})}}(jQuery),function(e){e.fn.lazyify=function(){return this.each(function(){var a,t=e(this),i=t.attr("data-image"),s="w"+Math.round(t.width())+"-h"+Math.round(t.height())+"-p-k-no-nu",r="";function o(){var a,i=e(window).height();if(e(window).scrollTop()+i>t.offset().top){var s=new Image;s.onload=function(){t.attr("style","background-image:url("+this.src+")").addClass("lazy-ify")},s.src=r}}r=i.match("/s72-c")?i.replace("/s72-c","/"+s):i.match("/w72-h")?i.replace("/w72-h72-p-k-no-nu","/"+s):i.match("=w72-h")?i.replace("=w72-h72-p-k-no-nu","="+s):i,e(window).on("load resize scroll",o),o()})}}(jQuery),/*! jQuery replaceText by "Cowboy" Ben Alman | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */ function(e){e.fn.replaceText=function(a,t,i){return this.each(function(){var s,r,o=this.firstChild,n=[];if(o)do 3===o.nodeType&&(r=(s=o.nodeValue).replace(a,t))!==s&&(!i&&/</.test(r)?(e(o).before(r),n.push(o)):o.nodeValue=r);while(o=o.nextSibling);n.length&&e(n).remove()})}}(jQuery),$("#gmag-pro-main-menu").menuify(),$("#gmag-pro-main-menu .widget").addClass("show-menu"),$(".search-toggle").on("click",function(){$("body").toggleClass("search-active")}),$(".blog-posts-title a.more,.related-title a.more").each(function(){var e=$(this),a=viewAllText;""!=a&&e.text(a)}),$(".follow-by-email-text").each(function(){var e=$(this),a=followByEmailText;""!=a&&e.text(a)}),$("#sidebar-tabs").tabify(),$(".post-body strike").each(function(){var e=$(this),a=e.text().trim();"$ads={1}"==a&&e.replaceWith('<div id="gmag-pro-new-before-ad"/>'),"$ads={2}"==a&&e.replaceWith('<div id="gmag-pro-new-after-ad"/>')}),$("#gmag-pro-new-before-ad").each(function(){var e=$(this);e.length&&$("#before-ad").appendTo(e)}),$("#gmag-pro-new-after-ad").each(function(){var e=$(this);e.length&&$("#after-ad").appendTo(e)}),$("#gmag-pro-main-before-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#before-ad"))}),$("#gmag-pro-main-after-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#after-ad"))}),$(".avatar-image-container img").attr("src",function(e,a){return a=(a=a.replace("//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")).replace("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")}),$(".post-body a").each(function(){var e=$(this),a=e.text().trim(),t=a.split("/"),i=t[0],s=t[1],r=t.pop();a.match("button")&&(e.addClass("button").text(i),"button"!=s&&e.addClass(s),"button"!=r&&e.addClass("colored-button").css({"background-color":r}))}),$(".post-body strike").each(function(){var e=$(this),a=e.text().trim(),t=e.html();a.match("contact-form")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),a.match("alert-success")&&e.replaceWith('<div class="alert-message alert-success short-b">'+t+"</div>"),a.match("alert-info")&&e.replaceWith('<div class="alert-message alert-info short-b">'+t+"</div>"),a.match("alert-warning")&&e.replaceWith('<div class="alert-message alert-warning short-b">'+t+"</div>"),a.match("alert-error")&&e.replaceWith('<div class="alert-message alert-error short-b">'+t+"</div>"),a.match("left-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>"),a.match("right-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>"),a.match("full-width")&&e.replaceWith("<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>"),a.match("code-box")&&e.replaceWith('<pre class="code-box short-b">'+t+"</pre>"),$(".post-body .short-b").find("b").each(function(){var e=$(this),a=e.text().trim();(a.match("alert-success")||a.match("alert-info")||a.match("alert-warning")||a.match("alert-error")||a.match("code-box"))&&e.replaceWith("")})}),$(".gmag-pro-share-links .window-ify,.entry-share .window-ify").on("click",function(){var e=$(this),a=e.data("url"),t=e.data("width"),i=e.data("height"),s=window.screen.width,r=window.screen.height;window.open(a,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+t+",height="+i+",left="+Math.round(s/2-t/2)+",top="+Math.round(r/2-i/2)).focus()}),$(".gmag-pro-share-links").each(function(){var e=$(this);e.find(".show-hid a").on("click",function(){e.toggleClass("show-hidden")})}),$(".about-author .author-description span a").each(function(){var e=$(this),a=e.text().trim(),t=e.attr("href");e.replaceWith('<li class="'+a+'"><a href="'+t+'" title="'+a+'" target="_blank"/></li>'),$(".description-links").append($(".author-description span li")),$(".description-links").addClass("show")}),$("#gmag-pro-main-menu li").each(function(e,a){var t=$(this),i=t,s=t.find("a").attr("href").trim(),r=s.toLowerCase();e=shortCodeIfy(s,"type"),a=shortCodeIfy(s,"label"),r.match("getmega")&&i.addClass("has-sub mega-menu"),ajaxMega(i,e,5,a,r),"mtabs"==e&&(!1!=a&&(a=a.split("/")),megaTabs(i,e,a,r))}),$("#featured .HTML .widget-content").each(function(e,a,t,i){var s=$(this),r=s.text().trim(),o=r.toLowerCase();switch(e=shortCodeIfy(r,"type"),t=shortCodeIfy(r,"label"),i=shortCodeIfy(r,"color"),e){case"featured2":a=4;break;case"featured3":a=5;break;default:a=3}ajaxFeatured(s,e,a,t,o,i)}),$(".gmag-pro-content-blocks .HTML .widget-content").each(function(e,a,t,i){var s=$(this),r=s.text().trim(),o=r.toLowerCase();e=shortCodeIfy(r,"type"),a=shortCodeIfy(r,"results"),ajaxBlock(s,e,a,t=shortCodeIfy(r,"label"),o,i=shortCodeIfy(r,"color"))}),$(".gmag-pro-widget-ready .HTML .widget-content").each(function(e,a,t){var i=$(this),s=i.text().trim(),r=s.toLowerCase();e=shortCodeIfy(s,"type"),ajaxWidget(i,e,a=shortCodeIfy(s,"results"),t=shortCodeIfy(s,"label"),r)}),$(".gmag-pro-related-content").each(function(){var e=$(this),a=e.find(".related-tag").attr("data-label");ajaxRelated(e,"related",relatedPostsNum,a,"getrelated")}),$(".gmag-pro-blog-post-comments").each(function(){var e=$(this),a=commentsSystem,t='<div class="fb-comments" data-width="100%" data-href="'+disqus_blogger_current_url+'" order_by="time" data-colorscheme="'+fbCommentsTheme+'" data-numposts="5"></div>',i="comments-system-"+a;switch(a){case"blogger":e.addClass(i).show(),$(".entry-meta .entry-comments-link").addClass("show");break;case"disqus":e.addClass(i).show();break;case"facebook":e.addClass(i).find("#comments").html(t),e.show();break;case"hide":e.hide();break;default:e.addClass("comments-system-blogger").show(),$(".entry-meta .entry-comments-link").addClass("show")}var s=e.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply"),r=e.find(".comments .toplevel-thread > #top-continue");s.on("click",function(){r.show()}),r.on("click",function(){r.hide()})}),$(function(){$(".index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar").lazyify(),$(".mobile-logo").each(function(){var e=$(this),a=$("#main-logo .header-widget a").clone();a.find("#h1-tag").remove(),a.appendTo(e)}),$("#gmag-pro-mobile-menu").each(function(){var e=$(this),a=$("#gmag-pro-main-menu-nav").clone();a.attr("id","main-mobile-nav"),a.find(".mega-widget, .mega-tab").remove(),a.find("li.mega-tabs .complex-tabs").each(function(){var e=$(this);e.replaceWith(e.find("> ul.select-tab").attr("class","sub-menu m-sub"))}),a.find(".mega-menu:not(.mega-tabs) > a").each(function(e,a){var t=$(this),i=t.attr("href").trim();i.toLowerCase().match("getmega")&&(a="recent"==(e=shortCodeIfy(i,"label"))?"/search":"/search/label/"+e,t.attr("href",a))}),a.find(".mega-tabs ul li > a").each(function(){var e=$(this),a=e.text().trim();e.attr("href","/search/label/"+a)}),a.appendTo(e),$(".show-gmag-pro-mobile-menu, .hide-gmag-pro-mobile-menu, .overlay").on("click",function(){$("body").toggleClass("nav-active")}),$(".gmag-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".gmag-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove(),$(".gmag-pro-mobile-menu .mega-tabs").append('<div class="submenu-toggle"/>'),$(".gmag-pro-mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))})}),$(".social-mobile").each(function(){var e=$(this);$("#main-navbar-social ul.social").clone().appendTo(e)}),$("#gmag-pro-header-wrapper .headerify").each(function(){var e=$(this);if(!0==fixedMenu&&e.length>0){var a=$(document).scrollTop(),t=e.offset().top,i=e.height(),s=t+i;$(window).scroll(function(){var t=$(document).scrollTop(),r=$("#footer-wrapper").offset().top;t<r-i&&(t>s?e.addClass("is-fixed"):t<=0&&e.removeClass("is-fixed"),t>a?e.removeClass("show"):e.addClass("show"),a=$(document).scrollTop())})}}),$("#main-wrapper,#sidebar-wrapper").each(function(){if(!0==fixedSidebar){if(!0==fixedMenu)var e=75;else e=25;$(this).theiaStickySidebar({additionalMarginTop:e,additionalMarginBottom:25})}}),$("#post-body iframe").each(function(){var e=$(this);e.attr("src").match("www.youtube.com")&&e.wrap('<div class="responsive-video-wrap"/>')}),$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')}),$("#gmag-pro-load-more-link").each(function(){var e=$(this).data("load");e&&$("#gmag-pro-load-more-link").show(),$("#gmag-pro-load-more-link").on("click",function(a){$("#gmag-pro-load-more-link").hide(),$.ajax({url:e,success:function(a){var t=$(a).find(".blog-posts");t.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(t.html()),(e=$(a).find("#gmag-pro-load-more-link").data("load"))?$("#gmag-pro-load-more-link").show():($("#gmag-pro-load-more-link").hide(),$("#blog-pager .no-more").addClass("show")),$(".index-post .entry-image-link .entry-thumb").lazyify()},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide()}}),a.preventDefault()})}),$(".back-top").each(function(){var e=$(this);$(window).on("scroll",function(){$(this).scrollTop()>=100?e.fadeIn(250):e.fadeOut(250),e.offset().top>=$("#footer-wrapper").offset().top-32?e.addClass("on-footer"):e.removeClass("on-footer")}),e.click(function(){$("html, body").animate({scrollTop:0},500)})})});
/* Light YouTube Embeds by @labnol */
/* Web: https://www.labnol.org/ */

function labnolIframe(div) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&rel=0"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    );
    div.parentNode.replaceChild(iframe, div);
  }
  
  function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < playerElements.length; n++) {
      var videoId = playerElements[n].dataset.id;
      var div = document.createElement("div");
      div.setAttribute("data-id", videoId);
      var thumbNode = document.createElement("img");
      thumbNode.src = "https://i.ytimg.com/vi/ID/hqdefault.jpg".replace(
        "ID",
        videoId
      );
      div.appendChild(thumbNode);
      var playButton = document.createElement("div");
      playButton.setAttribute("class", "play");
      div.appendChild(playButton);
      div.onclick = function () {
        labnolIframe(this);
      };
      playerElements[n].appendChild(div);
    }
  }
  
  document.addEventListener("DOMContentLoaded", initYouTubeVideos);
  
/*! Custom - Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts){var a=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(a+50>e.container.width())return void d()}var n,s,r=i(document).scrollTop(),c="static";if(r>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var p,b=e.paddingTop+t.additionalMarginTop,l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,f=e.sidebar.offset().top,h=e.sidebar.offset().top+(n=e.container,s=n.height(),n.children().each(function(){s=Math.max(s,i(this).height())}),s),g=0+t.additionalMarginTop,S=e.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var u=f-r+e.paddingTop,m=h-r-e.paddingBottom-e.marginBottom,y=e.stickySidebar.offset().top-r,k=e.previousScrollTop-r;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(y+=k),"stick-to-top"==e.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(y=p-e.stickySidebar.outerHeight()),y=k>0?Math.min(y,g):Math.max(y,p-e.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,m-e.stickySidebar.outerHeight());var v=e.container.height()==e.stickySidebar.outerHeight();c=(v||y!=g)&&(v||y!=p-e.stickySidebar.outerHeight())?r+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+y+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var T={};"absolute"!=e.stickySidebar.css("position")&&(T.position="absolute",T.transform="translateY("+(r+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",T.top="0px"),T.width=o(e.stickySidebar)+"px",T.left="",e.stickySidebar.css(T)}else"static"==c&&d();"static"!=c&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=r}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))})}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){e(t,o)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);

/*! MenuIfy by Templateify | v1.0.0 - https://www.templateify.com */
!function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

/*! LazyIfy on Scroll by Templateify | v1.6.0 - https://www.templateify.com */
!function(n){n.fn.lazyify=function(){return this.each(function(){var o,t=n(this),a=n(window),e=t.attr("data-image"),h="w"+Math.round(t.width()+t.width()/10)+"-h"+Math.round(t.height()+t.height()/10)+"-p-k-no-nu";noThumbnail="undefined"!=typeof noThumbnail?noThumbnail:"//4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png",e.match("resources.blogblog.com")&&(e=noThumbnail),o=e.match("/s72-c")?e.replace("/s72-c","/"+h):e.match("/w72-h")?e.replace("/w72-h72-p-k-no-nu","/"+h):e.match("=w72-h")?e.replace("=w72-h72-p-k-no-nu","="+h):e,t.is(":hidden")||a.on("load resize scroll",function n(){if(a.scrollTop()+a.height()>=t.offset().top){a.off("load resize scroll",n);var e=new Image;e.onload=function(){t.attr("style","background-image:url("+this.src+")").addClass("lazy-ify")},e.src=o}}).trigger("scroll")})}}(jQuery);

/*! jQuery replaceText | v1.1.0 - https://benalman.com/projects/jquery-replacetext-plugin/ */
!function(e){e.fn.replaceText=function(n,t,i){return this.each(function(){var o,r,l=this.firstChild,u=[];if(l)do{3===l.nodeType&&(r=(o=l.nodeValue).replace(n,t))!==o&&(!i&&/</.test(r)?(e(l).before(r),u.push(l)):l.nodeValue=r)}while(l=l.nextSibling);u.length&&e(u).remove()})}}(jQuery);


function shortCodeIfy(_0xe36dx3, _0xe36dx4, _0xe36dx5) {
    for (var _0xe36dx6 = _0xe36dx3.split('$'), _0xe36dx7 = /[^{\}]+(?=})/g, _0xe36dx8 = 0; _0xe36dx8 < _0xe36dx6.length; _0xe36dx8++) {
        var _0xe36dx9 = _0xe36dx6[_0xe36dx8].split('=');
        if (_0xe36dx9[0].trim() == _0xe36dx4) {
            return null != (_0xe36dx5 = _0xe36dx9[1]).match(_0xe36dx7) && String(_0xe36dx5.match(_0xe36dx7)).trim()
        }
    };
    return false
}

function msgError() {
    return '<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'
}

function beforeLoader() {
    return '<div class="loader"></div>'
}

function getFeedUrl(_0xe36dx3, _0xe36dx4, _0xe36dx5, _0xe36dx6) {
    switch (_0xe36dx5) {
        case 'recent':
            _0xe36dx6 = '/feeds/posts/default?alt=json&max-results=' + _0xe36dx4;
            break;
        default:
            _0xe36dx6 = 'comments' == _0xe36dx3 ? '/feeds/comments/default?alt=json&max-results=' + _0xe36dx4 : '/feeds/posts/default/-/' + _0xe36dx5 + '?alt=json&max-results=' + _0xe36dx4
    };
    return _0xe36dx6
}

function getPostLink(_0xe36dx3, _0xe36dx4) {
    for (var _0xe36dx5 = 0; _0xe36dx5 < _0xe36dx3[_0xe36dx4].link.length; _0xe36dx5++) {
        if ('alternate' == _0xe36dx3[_0xe36dx4].link[_0xe36dx5].rel) {
            var _0xe36dx6 = _0xe36dx3[_0xe36dx4].link[_0xe36dx5].href;
            break
        }
    };
    return _0xe36dx6
}

function getPostTitle(_0xe36dx3, _0xe36dx4, _0xe36dx5) {
    return _0xe36dx3[_0xe36dx4].title.$t ? _0xe36dx3[_0xe36dx4].title.$t : exportify.noTitle
}

function getPostTag(_0xe36dx3, _0xe36dx4, _0xe36dx5) {
    return _0xe36dx3[_0xe36dx4].category ? '<span class="entry-category">' + _0xe36dx3[_0xe36dx4].category[0].term + '</span>' : ''
}

function getPostAuthor(_0xe36dx3, _0xe36dx4, _0xe36dx5, _0xe36dx6) {
    return _0xe36dx6 = '' != exportify.postAuthorLabel ? '<span class="sp">' + exportify.postAuthorLabel + '</span>' : '', exportify.postAuthor ? '<span class="entry-author mi">' + _0xe36dx6 + '<span class="author-name">' + _0xe36dx3[_0xe36dx4].author[0].name.$t + '</span></span>' : ''
}

function getPostDate(_0xe36dx3, _0xe36dx4, _0xe36dx5, _0xe36dx6, _0xe36dx7, _0xe36dx8) {
    monthNames = 'undefined' != typeof monthNames ? monthNames : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], dateFormat = 'undefined' != typeof dateFormat ? dateFormat : '{m} {d}, {y}';
    var _0xe36dx9 = _0xe36dx3[_0xe36dx4].published.$t,
        _0xe36dx12 = _0xe36dx9.substring(0, 4),
        _0xe36dx13 = _0xe36dx9.substring(5, 7),
        _0xe36dx14 = _0xe36dx9.substring(8, 10),
        _0xe36dx15 = dateFormat.replace('{m}', monthNames[parseInt(_0xe36dx13, 10) - 1]).replace('{d}', _0xe36dx14).replace('{y}', _0xe36dx12);
    return _0xe36dx8 = exportify.postAuthor && '' != exportify.postDateLabel ? '<span class="sp">' + exportify.postDateLabel + '</span>' : '', [1 == exportify.postDate ? '<span class="entry-time mi">' + _0xe36dx8 + '<time class="published" datetime="' + _0xe36dx9 + '">' + _0xe36dx15 + '</time></span>' : '', 1 == exportify.postDate ? '<span class="entry-time mi"><time class="published" datetime="' + _0xe36dx9 + '">' + _0xe36dx15 + '</time></span>' : '']
}

function getPostMeta(_0xe36dx3, _0xe36dx4, _0xe36dx5, _0xe36dx6, _0xe36dx7) {
    return [1 == exportify.postAuthor || 1 == exportify.postDate ? '<div class="entry-meta">' + _0xe36dx3 + _0xe36dx4[0] + '</div>' : '', 1 == exportify.postDate ? '<div class="entry-meta">' + _0xe36dx4[1] + '</div>' : '']
}

function getFirstImage(_0xe36dx3, _0xe36dx4) {
    var _0xe36dx5 = $('<div>').html(_0xe36dx3).find('img:first').attr('src'),
        _0xe36dx6 = _0xe36dx5.lastIndexOf('/') || 0,
        _0xe36dx7 = _0xe36dx5.lastIndexOf('/', _0xe36dx6 - 1) || 0,
        _0xe36dx8 = _0xe36dx5.substring(0, _0xe36dx7),
        _0xe36dx9 = _0xe36dx5.substring(_0xe36dx7, _0xe36dx6),
        _0xe36dx12 = _0xe36dx5.substring(_0xe36dx6);
    return (_0xe36dx9.match(/\/s[0-9]+/g) || _0xe36dx9.match(/\/w[0-9]+/g) || '/d' == _0xe36dx9) && (_0xe36dx9 = '/w72-h72-p-k-no-nu'), _0xe36dx8 + _0xe36dx9 + _0xe36dx12
}

function getPostImage(_0xe36dx3, _0xe36dx4, _0xe36dx5, _0xe36dx6) {
    var _0xe36dx7 = _0xe36dx3[_0xe36dx4].content.$t;
    return _0xe36dx5 = _0xe36dx3[_0xe36dx4].media$thumbnail ? _0xe36dx3[_0xe36dx4].media$thumbnail.url : 'https://resources.blogblog.com/img/blank.gif', _0xe36dx7.indexOf(_0xe36dx7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? _0xe36dx7.indexOf('<img') > -1 ? _0xe36dx7.indexOf(_0xe36dx7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < _0xe36dx7.indexOf('<img') ? _0xe36dx5.replace('img.youtube.com', 'i.ytimg.com').replace('/default.', '/maxresdefault.') : getFirstImage(_0xe36dx7) : _0xe36dx5.replace('img.youtube.com', 'i.ytimg.com').replace('/default.', '/maxresdefault.') : _0xe36dx7.indexOf('<img') > -1 ? getFirstImage(_0xe36dx7) : 'https://resources.blogblog.com/img/blank.gif'
}

function getPostImageType(_0xe36dx3, _0xe36dx4) {
    return _0xe36dx3.match('i.ytimg.com') ? 'is-video' : 'is-image'
}

function getAjax(_0xe36dx3, _0xe36dx4, _0xe36dx5, _0xe36dx6) {
    switch (_0xe36dx4) {
        case 'related':
            0 == _0xe36dx6 && (_0xe36dx6 = 'geterror404');
            var _0xe36dx7 = getFeedUrl(_0xe36dx4, _0xe36dx5, _0xe36dx6);
            $.ajax({
                url: _0xe36dx7,
                type: 'GET',
                dataType: 'json',
                cache: true,
                beforeSend: function(_0xe36dx5) {
                    switch (_0xe36dx4) {
                        case 'related':
                            _0xe36dx3.html(beforeLoader()).parent().addClass('type-' + _0xe36dx4)
                    }
                },
                success: function(_0xe36dx5) {
                    var _0xe36dx6 = '';
                    switch (_0xe36dx4) {
                        case 'related':
                            _0xe36dx6 = '<div class="related-posts">'
                    };
                    var _0xe36dx7 = _0xe36dx5.feed.entry;
                    if (null != _0xe36dx7) {
                        for (var _0xe36dx8 = 0, _0xe36dx9 = _0xe36dx7; _0xe36dx8 < _0xe36dx9.length; _0xe36dx8++) {
                            _0xe36dx9.length;
                            var _0xe36dx12 = getPostLink(_0xe36dx9, _0xe36dx8),
                                _0xe36dx13 = getPostTitle(_0xe36dx9, _0xe36dx8),
                                _0xe36dx14 = getPostTag(_0xe36dx9, _0xe36dx8),
                                _0xe36dx15 = getPostAuthor(_0xe36dx9, _0xe36dx8),
                                _0xe36dx1b = getPostDate(_0xe36dx9, _0xe36dx8, _0xe36dx14),
                                _0xe36dx1c = getPostImage(_0xe36dx9, _0xe36dx8),
                                _0xe36dx1d = getPostImageType(_0xe36dx1c, _0xe36dx8),
                                _0xe36dx1e = getPostMeta(_0xe36dx15, _0xe36dx1b),
                                _0xe36dx1f = '';
                            switch (_0xe36dx4) {
                                case 'related':
                                    _0xe36dx1f += '<div class="related-item item-' + _0xe36dx8 + '"><a title="' + _0xe36dx13 + '" class="entry-image-wrap ' + _0xe36dx1d + '" href="' + _0xe36dx12 + '"><span class="entry-thumb" data-image="' + _0xe36dx1c + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0xe36dx12 + '" title="' + _0xe36dx13 + '">' + _0xe36dx13 + '</a></h2>' + _0xe36dx1e[1] + '</div></div>'
                            };
                            _0xe36dx6 += _0xe36dx1f
                        }
                    } else {
                        switch (_0xe36dx4) {
                            case 'msimple':
                                _0xe36dx6 = '<div class="ul mega-items no-items">' + msgError() + '</div>';
                                break;
                            default:
                                _0xe36dx6 = msgError()
                        }
                    };
                    _0xe36dx6 += '</div>', _0xe36dx3.html(_0xe36dx6), _0xe36dx3.find('span.entry-thumb').lazyify()
                },
                error: function() {
                    _0xe36dx3.html(msgError())
                }
            })
    }
}

function ajaxRelated(_0xe36dx3, _0xe36dx4, _0xe36dx5, _0xe36dx6) {
    return getAjax(_0xe36dx3, _0xe36dx4, _0xe36dx5, _0xe36dx6)
}

function beautiAvatar(_0xe36dx3) {
    $(_0xe36dx3).attr('src', function(_0xe36dx3, _0xe36dx4) {
        return _0xe36dx4 = (_0xe36dx4 = (_0xe36dx4 = _0xe36dx4.replace('//resources.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg')).replace('//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg')).replace('/s35', '/s39')
    })
}

function fixedSidebarIfy(_0xe36dx3) {
    $(_0xe36dx3).each(function(_0xe36dx3) {
        fixedSidebar = 'undefined' == typeof fixedSidebar || fixedSidebar, 1 == fixedSidebar && (_0xe36dx3 = 1 == fixedMenu ? 77 : 25, $(this).theiaStickySidebar({
            containerSelector: '#content-wrapper > .container',
            additionalMarginTop: _0xe36dx3,
            additionalMarginBottom: 25
        }))
    })
}
fixedMenu = 'undefined' == typeof fixedMenu || fixedMenu, viewAllText = 'undefined' != typeof viewAllText ? viewAllText : exportify.viewAll, $('#gnews-free-main-nav').menuify(), $('#gnews-free-main-nav .widget').addClass('show-menu'), $('.show-search').on('click', function() {
    $('body').addClass('search-active'), $('#main-search-wrap').fadeIn(170).find('input').focus()
}), $('.hide-search').on('click', function() {
    $('body').removeClass('search-active'), $('#main-search-wrap').fadeOut(170).find('input').val('').blur()
}), $('.bp-title a.wt-l').each(function() {
    '' != viewAllText.trim() && $(this).text(viewAllText)
}), $('.sidebar .social-icons li a').each(function(_0xe36dx3) {
    var _0xe36dx4 = $(this),
        _0xe36dx5 = _0xe36dx4.attr('href').split('#');
    null != _0xe36dx5[1] && '' != (_0xe36dx3 = _0xe36dx5[1].trim()) && _0xe36dx4.append('<span class="text">' + _0xe36dx3 + '</span>'), _0xe36dx4.attr('href', _0xe36dx5[0].trim())
}), $('.FollowByEmail .widget-content').each(function(_0xe36dx3, _0xe36dx4) {
    var _0xe36dx5 = $(this),
        _0xe36dx6 = _0xe36dx5.data('shortcode');
    null != _0xe36dx6 && (_0xe36dx3 = shortCodeIfy(_0xe36dx6, 'title'), _0xe36dx4 = shortCodeIfy(_0xe36dx6, 'text'), 0 != _0xe36dx3 && _0xe36dx5.find('.follow-by-email-title').text(_0xe36dx3), 0 != _0xe36dx4 && _0xe36dx5.find('.follow-by-email-text').text(_0xe36dx4))
}), $('.post-body a').each(function() {
    var _0xe36dx3 = $(this),
        _0xe36dx4 = _0xe36dx3.html(),
        _0xe36dx5 = _0xe36dx4.toLowerCase(),
        _0xe36dx6 = shortCodeIfy(_0xe36dx4, 'text'),
        _0xe36dx7 = shortCodeIfy(_0xe36dx4, 'icon'),
        _0xe36dx8 = shortCodeIfy(_0xe36dx4, 'color');
    _0xe36dx5.match('getbutton') && 0 != _0xe36dx6 && (_0xe36dx3.addClass('button btn').text(_0xe36dx6), 0 != _0xe36dx7 && _0xe36dx3.addClass(_0xe36dx7), 0 != _0xe36dx8 && _0xe36dx3.addClass('colored-button').attr('style', 'background-color:' + _0xe36dx8 + ';'))
}), $('.post-body b').each(function() {
    var _0xe36dx3 = $(this),
        _0xe36dx4 = _0xe36dx3.text().toLowerCase().trim();
    _0xe36dx4.match('{contactform}') && (_0xe36dx3.replaceWith('<div class="contact-form"/>'), $('.contact-form').append($('#ContactForm1'))), _0xe36dx4.match('{leftsidebar}') && ($('body').addClass('is-left'), _0xe36dx3.remove()), _0xe36dx4.match('{rightsidebar}') && ($('body').addClass('is-right'), _0xe36dx3.remove()), _0xe36dx4.match('{fullwidth}') && ($('body').addClass('no-sidebar'), _0xe36dx3.remove())
}), $('.post-body blockquote').each(function() {
    var _0xe36dx3 = $(this),
        _0xe36dx4 = _0xe36dx3.text().toLowerCase().trim(),
        _0xe36dx5 = _0xe36dx3.html();
    if (_0xe36dx4.match('{alertsuccess}')) {
        const _0xe36dx4 = _0xe36dx5.replace('{alertSuccess}', '');
        _0xe36dx3.replaceWith('<div class="alert-message alert-success">' + _0xe36dx4 + '</div>')
    };
    if (_0xe36dx4.match('{alertinfo}')) {
        const _0xe36dx4 = _0xe36dx5.replace('{alertInfo}', '');
        _0xe36dx3.replaceWith('<div class="alert-message alert-info">' + _0xe36dx4 + '</div>')
    };
    if (_0xe36dx4.match('{alertwarning}')) {
        const _0xe36dx4 = _0xe36dx5.replace('{alertWarning}', '');
        _0xe36dx3.replaceWith('<div class="alert-message alert-warning">' + _0xe36dx4 + '</div>')
    };
    if (_0xe36dx4.match('{alerterror}')) {
        const _0xe36dx4 = _0xe36dx5.replace('{alertError}', '');
        _0xe36dx3.replaceWith('<div class="alert-message alert-error">' + _0xe36dx4 + '</div>')
    };
    if (_0xe36dx4.match('{codebox}')) {
        const _0xe36dx4 = _0xe36dx5.replace('{codeBox}', '');
        _0xe36dx3.replaceWith('<pre class="code-box">' + _0xe36dx4 + '</pre>')
    }
}), $('.entry-share-links .window-ify,.gnews-free-share-links .window-ify').on('click', function() {
    var _0xe36dx3 = $(this),
        _0xe36dx4 = _0xe36dx3.data('url'),
        _0xe36dx5 = _0xe36dx3.data('width'),
        _0xe36dx6 = _0xe36dx3.data('height'),
        _0xe36dx7 = window.screen.width,
        _0xe36dx8 = window.screen.height,
        _0xe36dx9 = Math.round(_0xe36dx7 / 2 - _0xe36dx5 / 2),
        _0xe36dx12 = Math.round(_0xe36dx8 / 2 - _0xe36dx6 / 2);
    window.open(_0xe36dx4, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + _0xe36dx5 + ',height=' + _0xe36dx6 + ',left=' + _0xe36dx9 + ',top=' + _0xe36dx12).focus()
}), $('.gnews-free-share-links').each(function() {
    var _0xe36dx3 = $(this);
    _0xe36dx3.find('.show-hid a').on('click', function() {
        _0xe36dx3.toggleClass('show-hidden')
    })
}), $('.about-author .author-text').each(function() {
    var _0xe36dx3 = $(this),
        _0xe36dx4 = _0xe36dx3.find('a');
    _0xe36dx4.each(function() {
        var _0xe36dx3 = $(this),
            _0xe36dx4 = _0xe36dx3.text().trim(),
            _0xe36dx5 = _0xe36dx3.attr('href');
        _0xe36dx3.replaceWith('<li class="' + _0xe36dx4 + '"><a href="' + _0xe36dx5 + '" title="' + _0xe36dx4 + '" rel="noopener noreferrer" target="_blank"/></li>')
    }), _0xe36dx4.length && _0xe36dx3.parent().append('<ul class="author-links social social-color"></ul>'), _0xe36dx3.find('li').appendTo('.author-links')
}), $('#gnews-free-related-posts .HTML').each(function(_0xe36dx3, _0xe36dx4) {
    var _0xe36dx5 = $(this).data('shortcode');
    if (null != _0xe36dx5) {
        function _0xe36dx6() {
            return _0xe36dx3 = shortCodeIfy(_0xe36dx5, 'title'), _0xe36dx4 = shortCodeIfy(_0xe36dx5, 'results'), [_0xe36dx3, _0xe36dx4]
        }
        $('#related-wrap').each(function(_0xe36dx3, _0xe36dx4) {
            var _0xe36dx5 = $(this),
                _0xe36dx7 = $(window),
                _0xe36dx8 = _0xe36dx5.find('.gnews-free-related-content'),
                _0xe36dx9 = _0xe36dx6();
            _0xe36dx3 = 0 != _0xe36dx9[1] ? _0xe36dx9[1] : 3, 0 != _0xe36dx9[0] && _0xe36dx5.find('.related-title .title').text(_0xe36dx9[0]), _0xe36dx4 = _0xe36dx5.find('.related-tag').data('label'), _0xe36dx7.on('resize scroll', function _0xe36dx5() {
                _0xe36dx7.scrollTop() + _0xe36dx7.height() >= _0xe36dx8.offset().top && (_0xe36dx7.off('resize scroll', _0xe36dx5), ajaxRelated(_0xe36dx8, 'related', _0xe36dx3, _0xe36dx4))
            }).trigger('scroll')
        })
    }
}), $('.gnews-free-blog-post-comments').each(function() {
    var _0xe36dx3 = $(this),
        _0xe36dx4 = shortCodeIfy(_0xe36dx3.data('shortcode'), 'type'),
        _0xe36dx5 = _0xe36dx3.find('#top-continue .comment-reply');
    switch (_0xe36dx4) {
        case 'disqus':
            ;
        case 'facebook':
            _0xe36dx3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), _0xe36dx5.addClass('btn'), beautiAvatar('.avatar-image-container img');
            break;
        case 'hide':
            _0xe36dx3.hide();
            break;
        default:
            _0xe36dx3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), _0xe36dx5.addClass('btn'), beautiAvatar('.avatar-image-container img')
    };
    var _0xe36dx6 = _0xe36dx3.find('.comments .comment-reply'),
        _0xe36dx7 = _0xe36dx3.find('.comments #top-continue'),
        _0xe36dx8 = _0xe36dx3.find('#top-ce.comment-replybox-thread');
    _0xe36dx6.on('click', function() {
        _0xe36dx7.show(), _0xe36dx8.hide()
    }), _0xe36dx7.on('click', function() {
        _0xe36dx7.hide(), _0xe36dx8.show()
    })
}), $(function() {
    $('a#templateify').each(function() {
        var _0xe36dx3 = $(this),
            _0xe36dx4 = 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--footerbar-color)!important;margin:0!important;';
        _0xe36dx3.attr('href', 'https://www.templateify.com/').text('Blogger Templates').attr('style', 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--main-color)!important;margin:0!important;'), _0xe36dx3.parent().attr('style', _0xe36dx4).parent().attr('style', _0xe36dx4)
    }), setInterval(function() {
        $('a#templateify').length || (window.location.href = 'https://www.templateify.com/'), $('a#templateify:visible').length || (window.location.href = 'https://www.templateify.com/')
    }, 1e3), $('.entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar').lazyify(), $('#gnews-free-mobile-menu').each(function() {
        var _0xe36dx3 = $(this),
            _0xe36dx4 = $('#gnews-free-main-nav-menu').clone();
        _0xe36dx4.attr('id', 'main-mobile-nav'), _0xe36dx4.find('.mega-items').remove(), _0xe36dx4.find('.mega-menu > a').each(function(_0xe36dx3, _0xe36dx4) {
            var _0xe36dx5 = $(this),
                _0xe36dx6 = _0xe36dx5.data('shortcode');
            null != _0xe36dx6 && (_0xe36dx4 = 'recent' == (_0xe36dx3 = shortCodeIfy(_0xe36dx6.trim(), 'label')) ? '/search' : '/search/label/' + _0xe36dx3, _0xe36dx5.attr('href', _0xe36dx4))
        }), _0xe36dx4.appendTo(_0xe36dx3), $('.mobile-menu-toggle, .hide-gnews-free-mobile-menu, .overlay').on('click', function() {
            $('body').toggleClass('nav-active')
        }), $('.gnews-free-mobile-menu .has-sub').append('<div class="submenu-toggle"/>'), $('.gnews-free-mobile-menu .mega-menu').find('.submenu-toggle').remove(), $('.gnews-free-mobile-menu ul li .submenu-toggle').on('click', function(_0xe36dx3) {
            $(this).parent().hasClass('has-sub') && (_0xe36dx3.preventDefault(), $(this).parent().hasClass('show') ? $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170) : $(this).parent().addClass('show').children('.m-sub').slideToggle(170))
        })
    }), $('.mm-footer .mm-social').each(function() {
        var _0xe36dx3 = $(this);
        $('#topbar-social ul.social').clone().appendTo(_0xe36dx3)
    }), $('.mm-footer .mm-menu').each(function() {
        var _0xe36dx3 = $(this);
        $('#topbar-menu ul.link-list').clone().appendTo(_0xe36dx3)
    }), $('.header-inner').each(function() {
        var _0xe36dx3 = $(this);
        if (1 == fixedMenu && _0xe36dx3.length > 0) {
            var _0xe36dx4 = $(document).scrollTop(),
                _0xe36dx5 = _0xe36dx3.offset().top,
                _0xe36dx6 = _0xe36dx3.height(),
                _0xe36dx7 = _0xe36dx5 + _0xe36dx6 + _0xe36dx6;
            $(window).scroll(function() {
                var _0xe36dx6 = $(document).scrollTop();
                _0xe36dx6 > _0xe36dx7 ? _0xe36dx3.addClass('is-fixed') : (_0xe36dx6 < _0xe36dx5 || _0xe36dx6 <= 1) && _0xe36dx3.removeClass('is-fixed'), _0xe36dx6 > _0xe36dx4 ? _0xe36dx3.removeClass('show') : _0xe36dx3.addClass('show'), _0xe36dx4 = _0xe36dx6
            })
        }
    }), fixedSidebarIfy('#main-wrapper, #sidebar-wrapper'), $('#post-body iframe').each(function() {
        var _0xe36dx3 = $(this);
        _0xe36dx3.attr('src').match('www.youtube.com') && _0xe36dx3.wrap('<div class="responsive-video-wrap"/>')
    }), $('p.comment-content').each(function() {
        var _0xe36dx3 = $(this);
        _0xe36dx3.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), _0xe36dx3.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $('#gnews-free-load-more-link').each(function() {
        var _0xe36dx3 = $(this).data('load');
        _0xe36dx3 && $('#gnews-free-load-more-link').show(), $('#gnews-free-load-more-link').on('click', function(_0xe36dx4) {
            $('#gnews-free-load-more-link').hide(), $.ajax({
                url: _0xe36dx3,
                success: function(_0xe36dx4) {
                    var _0xe36dx5 = $(_0xe36dx4).find('.blog-posts');
                    _0xe36dx5.find('.index-post').addClass('post-animated post-fadeInUp'), $('.blog-posts').append(_0xe36dx5.html()), (_0xe36dx3 = $(_0xe36dx4).find('#gnews-free-load-more-link').data('load')) ? $('#gnews-free-load-more-link').show() : ($('#gnews-free-load-more-link').hide(), $('#blog-pager .no-more').addClass('show'))
                },
                beforeSend: function() {
                    $('#blog-pager .loading').show()
                },
                complete: function() {
                    $('#blog-pager .loading').hide(), $('.index-post .entry-image-wrap .entry-thumb').lazyify(), fixedSidebarIfy('#main-wrapper')
                }
            }), _0xe36dx4.preventDefault()
        })
    }), $('#back-top').each(function() {
        var _0xe36dx3 = $(this);
        $(window).on('scroll', function() {
            $(this).scrollTop() >= 100 ? _0xe36dx3.fadeIn(170) : _0xe36dx3.fadeOut(170), _0xe36dx3.offset().top >= $('#footer-wrapper').offset().top - 34 ? _0xe36dx3.addClass('on-footer') : _0xe36dx3.removeClass('on-footer')
        }), _0xe36dx3.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
}).toString();
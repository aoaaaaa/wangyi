(function(window){var svgSprite='<svg><symbol id="icon-tubiao-youhuiquan" viewBox="0 0 1024 1024"><path d="M819.2 932.730435H89.043478c-48.973913 0-89.043478-40.069565-89.043478-89.043478v-178.086957h22.26087c37.843478 0 66.782609-28.93913 66.782608-66.782609s-28.93913-66.782609-66.782608-66.782608H0v-178.086957c0-48.973913 40.069565-89.043478 89.043478-89.043478h741.286957L823.652174 291.617391c0 2.226087 0 4.452174 0 6.678261 0 15.582609 11.130435 28.93913 26.713043 33.391305l17.808696 4.452173v82.365218L850.365217 422.956522c-15.582609 2.226087-26.713043 17.808696-26.713043 33.391304s11.130435 28.93913 26.713043 33.391304l17.808696 4.452174v82.365218L850.365217 578.782609c-15.582609 2.226087-26.713043 17.808696-26.713043 33.391304s11.130435 28.93913 26.713043 33.391304l17.808696 4.452174v82.365218L850.365217 734.608696c-15.582609 2.226087-26.713043 17.808696-26.713043 33.391304s11.130435 28.93913 26.713043 33.391304l17.808696 4.452174v82.365218L850.365217 890.434783c-13.356522 2.226087-22.26087 13.356522-26.713043 26.713043L819.2 932.730435zM44.521739 707.895652v135.791305c0 24.486957 20.034783 44.521739 44.521739 44.521739h696.765218c6.678261-15.582609 20.034783-28.93913 37.843478-37.843479v-15.582608c-26.713043-13.356522-44.521739-40.069565-44.521739-71.234783s17.808696-57.878261 44.521739-71.234783v-15.582608c-26.713043-13.356522-44.521739-40.069565-44.521739-71.234783 0-31.165217 17.808696-57.878261 44.521739-71.234782v-15.582609c-26.713043-13.356522-44.521739-40.069565-44.521739-71.234783 0-31.165217 17.808696-57.878261 44.521739-71.234782v-15.582609c-22.26087-11.130435-40.069565-33.391304-44.521739-60.104348H89.043478c-24.486957 0-44.521739 20.034783-44.521739 44.521739V489.73913c51.2 11.130435 89.043478 55.652174 89.043478 109.078261S95.721739 698.991304 44.521739 707.895652z" fill="" ></path><path d="M296.069565 554.295652h311.652174v44.521739h-311.652174V554.295652z" fill="" ></path><path d="M296.069565 665.6h311.652174v44.521739h-311.652174V665.6z" fill="" ></path><path d="M429.634783 576.556522h44.521739v200.347826h-44.521739V576.556522z" fill="" ></path><path d="M342.817391 476.382609l37.843479-22.26087 66.782608 111.304348-37.843478 22.26087L342.817391 476.382609z" fill="" ></path><path d="M543.165217 454.121739l37.843479 22.26087-66.782609 111.304348-37.843478-22.26087L543.165217 454.121739z" fill="" ></path><path d="M934.956522 86.817391H222.608696c-48.973913 0-89.043478 40.069565-89.043479 89.043479v111.304347h44.52174v-111.304347c0-24.486957 20.034783-44.521739 44.521739-44.52174h712.347826c24.486957 0 44.521739 20.034783 44.521739 44.52174v489.73913c0 24.486957-20.034783 44.521739-44.521739 44.521739h-122.434783v44.521739H934.956522c48.973913 0 89.043478-40.069565 89.043478-89.043478v-489.73913C1024 126.886957 983.930435 86.817391 934.956522 86.817391z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
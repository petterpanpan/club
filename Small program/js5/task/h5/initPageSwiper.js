"use strict";function _asyncToGenerator(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function r(o,i){try{var a=n[o](i),u=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})}}drill.init(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(n,t){var r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("./h5Util");case 2:r=e.sent,(o=$(".p_main")).on("mousewheel",function(e){e.preventDefault();var n=e.originalEvent,t=n.wheelDeltaY;n.wheelDeltaX;t<-100?r.toNextPage():t>100&&r.toPrevPage()}),o.on("DOMMouseScroll",function(e){e.preventDefault();var n=e.originalEvent.detail;n>6?r.toNextPage():n<-6&&r.toPrevPage()}),void 0,i=void 0,o.on("touchstart",function(e){e.preventDefault();var n=e.originalEvent.changedTouches[0];n.clientX,i=n.clientY}),o.on("touchmove",function(e){return e.preventDefault()}),o.on("touchend",function(e){var n=e.originalEvent.changedTouches[0],t=(n.clientX,n.clientY),o=t-i;o<-60?r.toNextPage():o>60&&r.toPrevPage()});case 10:case"end":return e.stop()}},e,void 0)}));return function(n,t){return e.apply(this,arguments)}}());
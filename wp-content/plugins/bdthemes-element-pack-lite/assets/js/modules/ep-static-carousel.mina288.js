!function(n,t){"use strict";var e=function(n,t){var e=n.find(".bdt-static-carousel");if(!e.length)return;var o=e.find(".swiper-container"),r=e.data("settings");const i=elementorFrontend.utils.swiper;!async function(){await new i(o,r);r.pauseOnHover&&t(o).hover((function(){this.swiper.autoplay.stop()}),(function(){this.swiper.autoplay.start()}))}()};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/bdt-static-carousel.default",e)}))}(jQuery,window.elementorFrontend);
(function(e){function r(e){var r=t.scrollTop();t.css("overflow",e);e==="hidden"?n.css("overflow-y","scroll"):n.css("overflow-y","auto");t.scrollTop(r)}function i(t){e("a",e(t)).click(function(t){function o(){s.fadeOut(700,function(){e(this).empty();r("auto")})}t.preventDefault();var i=e(this).attr("href");n.prepend('<div id="Zoomer"></div>');var s=e("#Zoomer");r("hidden");s.html('<img src="'+i+'" />').fadeIn(700);s.live("click",function(){o()});e(document).keydown(function(){o()})})}var t=e("html"),n=e("body");e(window).load(function(){i(e("#Screenshots"))})})(jQuery);
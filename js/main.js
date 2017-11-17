(function(){$(".logo").click(function(){$("h1").toggleClass("contrast")}),$(document).ready(function(){var o;o=$(".click")[0],$(".logo").mousedown(function(){o.play()}),$(".logo").mouseup(function(){o.play()})})}).call(this);


'use strict';

var getTargetHTML = function getTargetHTML(elem) {

	var id = elem.getAttribute('data-show-id');
	var target = document.querySelector('[data-id="' + id + '"]');

	return target.outerHTML;
};

Array.prototype.forEach.call(document.querySelectorAll('[data-show-id]'), function (elem) {

	var html = getTargetHTML(elem);

	elem.onclick = basicLightbox.create(html).show;
});

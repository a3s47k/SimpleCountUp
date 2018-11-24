'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
$(window).scroll(function () {
	countNumber();
});

$(window).resize(function () {
	countNumber();
});

$(document).ready(function () {
	countNumber();
});
/** - First thing get height form top to data-count element is dataHeight, get height when scroll is scrool Height, get the window Height, WHEN THE SCROLL HEIGHT + WINDOWS HEIGHT BIGGER THAN dataHEIGHT BEGIN TO COUNT
 * - Second get the variable of number need to count by attribure data-count by IF condition is right countTo is datacount attribute of each item so it will be different , The line $this = $(this) is create same object avoid create 2 object (WARNING : stack over flow  say that im not sure ). countTo something like count function, durationTo = how long it will take to count to end.other part is mostly form the same concept
  */

function countNumber() {
	$('.item').each(function () {
		var dataHeight = $(this).offset().top;
		var scrollHeight = $(window).scrollTop();
		var windowHeight = $(window).height();
		var num = $(this).attr('data-count');
		var f = $(this).attr('data-form');
		var run = false;
		if (dataHeight < windowHeight + scrollHeight && !run) {
			var $this = $(this),
			    countTo = num,
			    durationTo = 4000;
			$({ countNum: $this.text() }).animate({
				countNum: countTo
			}, {
				duration: durationTo,
				easing: 'linear',
				step: function step() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function complete() {
					$this.text(this.countNum);
					run = true;
				}
			});
		} else {
			$(this).text(f);
		}
	});
}
//# sourceMappingURL=main.js.map

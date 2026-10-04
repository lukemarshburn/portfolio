window.onload = function() {
	document.body.classList.remove('is-preload');
};

window.ontouchmove = function() {
	return false;
};

window.onorientationchange = function() {
	document.body.scrollTop = 0;
};

const backgroundToggle = document.getElementById('background-toggle');
const background = document.getElementById('bg');

backgroundToggle.addEventListener('click', function() {
	const isAlternate = background.classList.toggle('is-alternate');
	backgroundToggle.setAttribute('aria-pressed', isAlternate);
});

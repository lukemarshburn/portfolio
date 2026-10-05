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

const imagePreview = document.getElementById('image-preview');
const imagePreviewContent = document.getElementById('image-preview-content');
const imagePreviewClose = imagePreview.querySelector('.image-preview-close');

document.querySelectorAll('.project-artwork a').forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();

		const image = link.querySelector('img');
		imagePreviewContent.src = link.href;
		imagePreviewContent.alt = image.alt;
		imagePreview.showModal();
	});
});

imagePreviewClose.addEventListener('click', function() {
	imagePreview.close();
});

imagePreview.addEventListener('click', function(event) {
	if (event.target === imagePreview) {
		imagePreview.close();
	}
});

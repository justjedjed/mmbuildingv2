<script>
	import { lightboxSrc } from '$lib/stores.js';

	let { images = [] } = $props();

	let index = $state(0);

	$effect(() => {
		if ($lightboxSrc) {
			index = images.indexOf($lightboxSrc);
			if (index === -1) index = 0;
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		function onKey(event) {
			if (event.key === 'Escape') lightboxSrc.set(null);
			if (event.key === 'ArrowLeft') prev();
			if (event.key === 'ArrowRight') next();
		}
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	});

	function prev() {
		index = (index - 1 + images.length) % images.length;
		lightboxSrc.set(images[index]);
	}

	function next() {
		index = (index + 1) % images.length;
		lightboxSrc.set(images[index]);
	}
</script>

{#if $lightboxSrc}
	<div
		class="lightbox open"
		role="dialog"
		aria-modal="true"
		aria-label="Image preview"
		tabindex="-1"
		onclick={(event) => {
			if (event.target === event.currentTarget) lightboxSrc.set(null);
		}}
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				lightboxSrc.set(null);
			}
		}}
	>
		<button class="close-lightbox" onclick={() => lightboxSrc.set(null)} aria-label="Close">&times;</button>

		{#if images.length > 1}
			<button class="lightbox-nav lightbox-prev" onclick={prev} aria-label="Previous image">&#10094;</button>
		{/if}

		<img src={$lightboxSrc} alt="Gallery preview" />

		{#if images.length > 1}
			<button class="lightbox-nav lightbox-next" onclick={next} aria-label="Next image">&#10095;</button>
		{/if}
	</div>
{/if}
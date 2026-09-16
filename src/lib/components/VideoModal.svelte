<script>
	import { videoOpen } from '$lib/stores.js';

	let videoEl = $state(null);

	$effect(() => {
		if ($videoOpen) {
			videoEl?.play();
		}
		return () => videoEl?.pause();
	});
</script>

{#if $videoOpen}
	<div
		class="video-modal show"
		role="dialog"
		aria-modal="true"
		aria-label="Video tour"
		tabindex="-1"
		onclick={(event) => {
			if (event.target === event.currentTarget) videoOpen.set(false);
		}}
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				videoOpen.set(false);
			}
		}}
	>
		<div class="video-modal-content">
			<button class="video-close" onclick={() => videoOpen.set(false)} aria-label="Close video">
				&times;
			</button>
			<video bind:this={videoEl} width="100%" controls>
				<source src="/vids/ads MMCB.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
{/if}
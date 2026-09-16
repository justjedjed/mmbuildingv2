<script>
	import { menuOpen } from '$lib/stores.js';

	let { items = [] } = $props();

	let active = $state(0);

	$effect(() => {
		if ($menuOpen) {
			active = 0;
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		function onKey(event) {
			if (event.key === 'Escape') menuOpen.set(false);
			if (event.key === 'ArrowLeft') active = (active - 1 + items.length) % items.length;
			if (event.key === 'ArrowRight') active = (active + 1) % items.length;
		}
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	});

	function prev() {
		active = (active - 1 + items.length) % items.length;
	}

	function next() {
		active = (active + 1) % items.length;
	}
</script>

{#if $menuOpen}
	<div
		class="menu-modal show"
		role="dialog"
		aria-modal="true"
		aria-label="Restobar menu"
		tabindex="-1"
		onclick={(event) => {
			if (event.target === event.currentTarget) menuOpen.set(false);
		}}
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				menuOpen.set(false);
			}
		}}
	>
		<div class="modal-content">
			<button
				type="button"
				class="modal-close"
				onclick={() => menuOpen.set(false)}
				aria-label="Close"
			>
				&times;
			</button>

			<span class="modal-tag">Michaela's Arabic Restobar</span>
			<h2>Our Menu</h2>
			<p>From freshly brewed coffee to flavorful Arabic-inspired dishes and signature drinks.</p>

			<div class="menu-slider">
				{#each items as item, i}
					<div class="menu-slide {active === i ? 'active-slide' : ''}">
						<img src={item.img} alt={item.name} />
					</div>
				{/each}

				{#if items.length > 1}
					<button class="menu-nav menu-prev-btn" onclick={prev} aria-label="Previous menu item">
						&#10094;
					</button>
					<button class="menu-nav menu-next-btn" onclick={next} aria-label="Next menu item">
						&#10095;
					</button>
				{/if}
			</div>

			<div class="menu-thumbs">
				{#each items as item, i}
					<button
						class="thumb-btn {active === i ? 'active' : ''}"
						aria-label="Show {item.name}"
						onclick={() => (active = i)}
					>
						<img src={item.img} alt={item.name} />
					</button>
				{/each}
			</div>

			<div class="modal-footer">
				<p>
					Visit <a href="https://michaelarestobar.com" target="_blank" rel="noopener noreferrer">michaelarestobar.com</a>
					for the full menu and online ordering.
				</p>
			</div>
		</div>
	</div>
{/if}
<script>
	import { poolOpen } from '$lib/stores.js';

	const facebook = 'https://www.facebook.com/profile.php?id=61573910346368';

	const rates = [
		{ label: 'KIDS', price: '₱300', note: 'per person' },
		{ label: 'ADULT', price: '₱350', note: 'per person' }
	];

	const amenities = ['Towel', 'Soap', 'Shampoo'];

	const features = [
		{ icon: '🏊', title: 'Swimming Pool', text: 'Enjoy a relaxing swim in our rooftop swimming pool.' },
		{ icon: '🌄', title: 'Mount Magdiwata View', text: 'Take in the beautiful scenery and refreshing surroundings.' },
		{ icon: '🌅', title: 'Sunset Experience', text: 'Perfect for enjoying peaceful mornings and beautiful sunsets.' },
		{ icon: '✨', title: 'Relaxing Atmosphere', text: 'A comfortable space designed for relaxation and memorable moments.' }
	];

	$effect(() => {
		if ($poolOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		function onKey(event) {
			if (event.key === 'Escape') poolOpen.set(false);
		}
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	});
</script>

{#if $poolOpen}
	<div
		class="function-modal show"
		role="dialog"
		aria-modal="true"
		aria-label="Rooftop pool rates"
		tabindex="-1"
		onclick={(event) => {
			if (event.target === event.currentTarget) poolOpen.set(false);
		}}
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				poolOpen.set(false);
			}
		}}
	>
		<div class="modal-content">
			<button
				type="button"
				class="modal-close"
				onclick={() => poolOpen.set(false)}
				aria-label="Close"
			>
				&times;
			</button>

			<span class="modal-tag">MMCB</span>
			<h2>Rooftop Swimming Pool</h2>
			<p>Relax, unwind, and enjoy the breathtaking view of Mount Magdiwata.</p>

			<div class="modal-pricing">
				{#each rates as rate}
					<div class="price-card">
						<span class="label">{rate.label}</span>
						<strong>{rate.price}</strong>
						<small>{rate.note}</small>
					</div>
				{/each}
			</div>

			<h3 class="modal-tag">Amenities</h3>
			<ul class="modal-list">
				{#each amenities as amenity}
					<li>{amenity}</li>
				{/each}
			</ul>

			<div class="pool-feature-grid">
				{#each features as feature}
					<div class="pool-feature-card">
						<div class="pool-icon">{feature.icon}</div>
						<h3>{feature.title}</h3>
						<p>{feature.text}</p>
					</div>
				{/each}
			</div>

			<div class="modal-footer">
				<p>For swimming pool inquiries and reservations, contact us today.</p>
				<a href={facebook} class="pool-inquire-btn" target="_blank" rel="noopener noreferrer">
					Inquire Now
				</a>
			</div>
		</div>
	</div>
{/if}
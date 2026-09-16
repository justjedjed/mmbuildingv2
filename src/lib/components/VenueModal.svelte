<script>
	import { venueOpen } from '$lib/stores.js';

	const facebook = 'https://www.facebook.com/profile.php?id=61573910346368';

	const functionInclusions = ['Tables', 'Chairs', 'Air-conditioned venue', 'Basic sound system', 'Projector'];

	const rates = [
		{ label: 'Venue Rental', price: '₱8,900', note: 'per 4 hours' },
		{ label: 'Extension', price: '₱999', note: 'per hour' }
	];

	const foodPackages = [
		{
			name: 'Package 1',
			price: '₱420',
			per: 'per person',
			items: ['3 Main Dishes', '1 Side Dish', 'Dessert', 'Fruits', 'Rice', 'Drinks']
		},
		{
			name: 'Package 2',
			price: '₱350',
			per: 'per person',
			items: ['4 Main Dishes', '2 Side Dishes', 'Dessert', 'Fruits', 'Rice', 'Drinks']
		},
		{
			name: 'AM / PM Snacks',
			price: '₱150',
			per: 'per person',
			items: ['Choice of Snack', 'Juice']
		}
	];

	$effect(() => {
		if ($venueOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		function onKey(event) {
			if (event.key === 'Escape') venueOpen.set(false);
		}
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	});
</script>

{#if $venueOpen}
	<div
		class="function-modal show"
		role="dialog"
		aria-modal="true"
		aria-label="Venue services and rates"
		tabindex="-1"
		onclick={(event) => {
			if (event.target === event.currentTarget) venueOpen.set(false);
		}}
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				venueOpen.set(false);
			}
		}}
	>
		<div class="modal-content">
			<button
				type="button"
				class="modal-close"
				onclick={() => venueOpen.set(false)}
				aria-label="Close"
			>
				&times;
			</button>

			<span class="modal-tag">MMCB FUNCTION HALL</span>
			<h2>Venue Rental</h2>
			<p>Make your special occasion memorable with our complete function hall and catering services.</p>

			<div class="modal-pricing">
				{#each rates as rate}
					<div class="price-card">
						<span class="label">{rate.label}</span>
						<strong>{rate.price}</strong>
						<small>{rate.note}</small>
					</div>
				{/each}
			</div>

			<h3 class="modal-tag">Rental Includes</h3>
			<ul class="modal-list">
				{#each functionInclusions as item}
					<li>{item}</li>
				{/each}
			</ul>

			<h3 class="modal-tag">🍽️ Food Package</h3>
			{#each foodPackages as pkg}
				<div class="price-card" style="margin-bottom: 1rem;">
					<span class="label">{pkg.name} — {pkg.per}</span>
					<strong>{pkg.price}</strong>
					<small>{pkg.items.join(' • ')}</small>
				</div>
			{/each}

			<p class="modal-note">Good for up to 70 pax</p>

			<h3 class="modal-tag">👤 Additional Guest Fee</h3>
			<div class="modal-pricing" style="margin-top: 0.5rem;">
				<div class="price-card">
					<span class="label">Additional Guest</span>
					<strong>₱129</strong>
					<small>per additional person</small>
				</div>
			</div>

			<p class="modal-note">
				Rates and inclusions are subject to the applicable package and number of guests.
			</p>

			<div class="modal-footer">
				<p>For bookings and inquiries, contact us today.</p>
				<a href={facebook} class="venue-inquire-btn" target="_blank" rel="noopener noreferrer">
					Inquire Now
				</a>
			</div>
		</div>
	</div>
{/if}
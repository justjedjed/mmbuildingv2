<script>
	import Lightbox from '$lib/components/Lightbox.svelte';
	import { lightboxSrc } from '$lib/stores.js';

	const categories = [
		{ key: 'overview', label: 'Overview' },
		{ key: 'function', label: 'Function Hall' },
		{ key: 'pool', label: 'Swimming Pool' },
		{ key: 'restobar', label: 'Michaela Arabic Restobar' }
	];

	const overview = [
		'y', 'w', 'u', 'u (2)', 't', 'r', 'q', 'e', '9', '1', '2', '3', '37', '38', '4',
		'40', '41', '42', '43', '44', '58', '7', '72', '8', '84', '85'
	];
	const functionHall = [
		'10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '22', '23',
		'24', '25', '26', '3', '65', '66', '68', '74', '76', '77', '80', '81', '83'
	];
	const pool = [
		'z', 'x', 'v', 'u5', 't', 's', 'r', 'o', 'n', 'mm', 'm', 'i', 'd', 'c', 'b', 'a',
		'21', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '57', '59',
		'60', '62', '63', '64', '67', '70', '73', '75', '78', '82'
	];
	const restobar = [
		'1', '2', '3', '4', '45', '46', '47', '48', '49', '50', '51', '52', '53',
		'54', '55', '56', '61', '69', '71', '79'
	];

	const images = [
		...overview.map((n) => `/gallery/overview/${n}.webp`),
		...functionHall.map((n) => `/gallery/functionhall/${n}.webp`),
		...pool.map((n) => `/gallery/swimmingpool/${n}.webp`),
		...restobar.map((n) => `/gallery/Michaela/${n}.webp`)
	];

	let active = $state('overview');

	const filtered = $derived(
		images.filter((src) => {
			if (active === 'overview') return src.includes('/overview/');
			if (active === 'function') return src.includes('/functionhall/');
			if (active === 'pool') return src.includes('/swimmingpool/');
			if (active === 'restobar') return src.includes('/Michaela/');
			return false;
		})
	);

	$effect(() => {
		document.body.classList.add('page-light-nav');
		return () => document.body.classList.remove('page-light-nav');
	});
</script>

<svelte:head>
	<title>Gallery — M'M Commercial Building | Function Hall & Rooftop Pool Photos in Agusan del Sur</title>
	<meta
		name="description"
		content="Browse photos of M'M Commercial Building in San Francisco, Agusan del Sur — function hall setups for weddings and corporate events, rooftop swimming pool, and Michaela's Arabic Restobar."
	/>
</svelte:head>

<main class="gallery-page">
	<h2>Full Gallery</h2>

	<div class="gallery-tabs">
		{#each categories as cat}
			<button
				class="gallery-tab {active === cat.key ? 'active' : ''}"
				onclick={() => (active = cat.key)}
			>
				{cat.label}
			</button>
		{/each}
	</div>

	<div class="gallery-grid-lg">
		{#each filtered as src (src)}
			<button
				type="button"
				aria-label="Open image in lightbox"
				onclick={() => lightboxSrc.set(src)}
			>
				<img src={src} alt={categories.find((c) => c.key === active).label} loading="lazy" />
			</button>
		{/each}
	</div>

	<a href="/" class="back-btn">Back to Home</a>
</main>

<Lightbox {images} />
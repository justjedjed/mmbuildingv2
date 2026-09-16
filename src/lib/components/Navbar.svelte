<script>
	import { theme } from '$lib/stores.js';

	const links = [
		{ href: '/#home', label: 'HOME' },
		{ href: '/#amenities', label: 'FEATURES' },
		{ href: '/#functionhall', label: 'FUNCTION HALL' },
		{ href: '/#rooftop-pool', label: 'SWIMMING POOL' },
		{ href: '/#dining', label: 'RESTOBAR' },
		{ href: '/#about', label: 'ABOUT' },
		{ href: '/#gallery', label: 'GALLERY' },
		{ href: '/#contact', label: 'CONTACT' }
	];

	let menuOpen = $state(false);
	let scrolled = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 20;
	}

	$effect(() => {
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});

	function toggleTheme() {
		theme.update((t) => (t === 'light' ? 'dark' : 'light'));
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class="navbar {scrolled ? 'scrolled' : ''}" id="navbar">
	<div class="logo">
		<a href="/" aria-label="M'M Commercial Building Home">
			<img src="/img/mm commercial png.webp" alt="M'M Commercial Building logo" />
		</a>
	</div>

	<ul class="nav_items {menuOpen ? 'open' : ''}" id="nav_links">
		<div class="item">
			{#each links as link}
				<li><a href={link.href} onclick={closeMenu}>{link.label}</a></li>
			{/each}
		</div>
	</ul>

	<div class="nav_right">
		<button
			class="theme-toggle"
			onclick={toggleTheme}
			aria-label="Toggle dark mode"
			title="Toggle dark mode"
		>
			{#if $theme === 'dark'}
				<i class="ri-sun-line"></i>
			{:else}
				<i class="ri-moon-line"></i>
			{/if}
		</button>

		<div
			class="nav_menu"
			id="menu_btn"
			onclick={() => (menuOpen = !menuOpen)}
			onkeydown={(event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					menuOpen = !menuOpen;
				}
			}}
			role="button"
			tabindex="0"
			aria-label="Toggle navigation menu"
		>
			{#if menuOpen}
				<i class="ri-close-line"></i>
			{:else}
				<i class="ri-menu-line"></i>
			{/if}
		</div>
	</div>
</nav>
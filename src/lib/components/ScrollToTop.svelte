<script>
	let show = $state(false);

	function onScroll() {
		show = window.scrollY > 100 || document.documentElement.scrollTop > 100;
	}

	$effect(() => {
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<span
	class="top {show ? 'show' : ''}"
	id="to-top"
	onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	role="button"
	tabindex="0"
	onkeydown={(event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}}
	aria-label="Scroll to top"
>
	<i class="ri-arrow-up-line"></i>
</span>
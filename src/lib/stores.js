import { writable } from 'svelte/store';

export const venueOpen = writable(false);
export const poolOpen = writable(false);
export const videoOpen = writable(false);
export const lightboxSrc = writable(null);
export const menuOpen = writable(false);

export const theme = writable(
	typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
);

theme.subscribe((value) => {
	if (typeof document !== 'undefined') {
		document.documentElement.setAttribute('data-theme', value);
		localStorage.setItem('theme', value);
	}
});
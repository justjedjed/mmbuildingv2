<script>
	import { venueOpen, poolOpen, videoOpen, lightboxSrc, menuOpen } from '$lib/stores.js';
	import VideoModal from '$lib/components/VideoModal.svelte';
	import VenueModal from '$lib/components/VenueModal.svelte';
	import PoolModal from '$lib/components/PoolModal.svelte';
	import MenuModal from '$lib/components/MenuModal.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';

	const facebook = 'https://www.facebook.com/profile.php?id=61573910346368';
	const mailLink =
		'https://mail.google.com/mail/?view=cm&fs=1&to=mmcommercialbuilding@gmail.com&su=Event%20Venue%20Inquiry&body=Hello%2C%0D%0AI%20would%20like%20to%20inquire%20about%20booking%20an%20event%20or%20venue%20at%20MM%20Commercial%20Building.%0D%0A%0D%0AThank%20you.';
	const mapLink =
		'https://www.google.com/maps/@8.491836,125.9765407,3a,75y,301.77h,85.32t/data=!3m8!1e1!3m6!1sX1T-BCGAnvQWr3u3ZHr5fw!2e0!5s20250601T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D4.676896085208298%26panoid%3DX1T-BCGAnvQWr3u3ZHr5fw%26yaw%3D301.7662273790395!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D';

	const openingAmenities = [
		{
			img: '/icon/conference.webp',
			title: 'Function Hall',
			text: 'A versatile, fully equipped space for weddings, corporate events, seminars, and private celebrations.'
		},
		{
			img: '/icon/lounge.webp',
			title: 'Rooftop Lounge & Pool',
			text: 'An open-air retreat with scenic pool views for social gatherings, parties, and relaxation.',
			opensPool: true
		},
		{
			img: '/icon/building.webp',
			title: 'Modern Amenities',
			text: 'Air-conditioning, advanced AV and sound systems, and flexible seating for any event.',
			opensVenue: true
		},
		{
			img: '/icon/decoration-flower.webp',
			title: 'Customizable Options',
			text: 'From lighting and décor to audiovisual setups, we help bring your vision to life.'
		},
		{
			img: '/icon/lift.webp',
			title: 'Guest Convenience',
			text: 'A reliable elevator ensures easy access between floors for smooth flow and comfort.'
		}
	];

	const functionEvents = [
		'Weddings & Receptions',
		'Corporate Events & Seminars',
		'Birthdays & Private Celebrations',
		'Conferences & Workshops'
	];

	const poolFeatures = [
		{
			img: '/gallery/swimmingpool/321.webp',
			title: 'Rooftop Swimming Pool',
			text: 'Enjoy a relaxing swim in our rooftop pool with beautiful scenery and refreshing surroundings.'
		},
		{
			img: '/gallery/swimmingpool/z.webp',
			title: 'Kiddie Pool',
			text: 'A safe and fun space for children to splash and play while the grown-ups unwind.'
		},
		{
			img: '/gallery/swimmingpool/v.webp',
			title: 'Mount Magdiwata View',
			text: 'Experience breathtaking sunsets and tranquil mornings with the majestic mountain as your backdrop.'
		}
	];

	const galleryImages = [
		'/gallery/overview/2.webp',
		'/gallery/functionhall/12.webp',
		'/gallery/swimmingpool/29.webp',
		'/gallery/overview/1.webp',
		'/gallery/Michaela/51.webp',
		'/gallery/swimmingpool/32.webp',
		'/gallery/overview/42.webp',
		'/gallery/Michaela/79.webp',
		'/gallery/functionhall/14.webp',
		'/gallery/functionhall/11.webp',
		'/gallery/functionhall/13.webp',
		'/gallery/overview/u (2).webp'
	];

	const restaurantCards = [
		{ img: '/gallery/Michaela/Coffee.webp', title: 'Coffee Shop', text: 'Freshly brewed coffee, frappes, and signature beverages for relaxing moments.' },
		{ img: '/gallery/Michaela/restau.webp', title: 'Arabic Restaurant', text: 'Flavorful Arabic-inspired dishes served with quality ingredients and rich flavor.' },
		{ img: '/gallery/Michaela/bar.webp', title: 'Bar', text: 'Refreshing drinks and a lively atmosphere perfect for dining and celebrations.' },
		{ img: '/gallery/Michaela/shisha.webp', title: 'Shisha Lounge', text: 'A premium shisha experience in a stylish and comfortable lounge.' }
	];

	const menuItems = [
		'/gallery/Michaela/Coffee.webp',
		'/gallery/Michaela/restau.webp',
		'/gallery/Michaela/bar.webp',
		'/gallery/Michaela/shisha.webp'
	];

	function openMessenger() {
		window.open(facebook, '_blank');
	}
</script>

<svelte:head>
	<title>M'M Commercial Building | Function Hall & Rooftop Pool in San Francisco, Agusan del Sur</title>
	<meta
		name="description"
		content="M'M Commercial Building in San Francisco, Agusan del Sur — modern function hall for weddings, birthdays, and corporate events, rooftop swimming pool with Mount Magdiwata views, and Michaela's Arabic Restobar serving Arabic food, coffee, frappes, and shisha in Agusan."
	/>
	<meta
		name="keywords"
		content="M'M Commercial Building, MMCB, function hall San Francisco Agusan del Sur, function hall Agusan del Sur, event venue San Francisco Agusan, wedding venue Agusan del Sur, birthday venue, corporate event venue, rooftop swimming pool Agusan del Sur, rooftop pool San Francisco Agusan, Michaela's Arabic Restobar, Arabic food Agusan del Sur, Arabic restaurant San Francisco, shisha lounge Agusan, coffee shop San Francisco Agusan, pool party venue Agusan"
	/>
	<meta name="author" content="M'M Commercial Building" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="en" />
	<meta name="theme-color" content="#1a1a1a" />

	<!-- Open Graph -->
	<meta property="og:type" content="business.business" />
	<meta property="og:site_name" content="M'M Commercial Building" />
	<meta
		property="og:title"
		content="M'M Commercial Building | Function Hall, Rooftop Pool & Arabic Restobar — San Francisco, Agusan del Sur"
	/>
	<meta
		property="og:description"
		content="Host weddings, birthdays, and corporate events in our modern function hall. Relax at the rooftop pool and savor Arabic cuisine at Michaela's Arabic Restobar in San Francisco, Agusan del Sur."
	/>
	<meta property="og:url" content="https://mmcommercialbuilding.com/" />
	<meta property="og:image" content="/gallery/overview/1.webp" />
	<meta property="og:image:alt" content="M'M Commercial Building exterior" />
	<meta property="og:locale" content="en_PH" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="M'M Commercial Building | Function Hall & Rooftop Pool — San Francisco, Agusan del Sur"
	/>
	<meta
		name="twitter:description"
		content="Modern function hall, rooftop swimming pool, and Michaela's Arabic Restobar in San Francisco, Agusan del Sur."
	/>
	<meta name="twitter:image" content="/gallery/overview/1.webp" />

	<!-- Geo -->
	<meta name="geo.region" content="PH-ADS" />
	<meta name="geo.placename" content="San Francisco, Agusan del Sur" />
	<meta name="geo.position" content="8.491836;125.9765407" />
	<meta name="ICBM" content="8.491836, 125.9765407" />

	<!-- Structured data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "EventVenue",
			"name": "M'M Commercial Building",
			"alternateName": "MMCB",
			"description": "Commercial building in San Francisco, Agusan del Sur offering a modern function hall, rooftop swimming pool with Mount Magdiwata views, and Michaela's Arabic Restobar serving Arabic cuisine.",
			"url": "https://mmcommercialbuilding.com/",
			"telephone": "+63-924-184-6483",
			"email": "mmcommercialbuilding@gmail.com",
			"image": "/gallery/overview/1.webp",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "P3A-Brgy. Karaos",
				"addressLocality": "San Francisco",
				"addressRegion": "Agusan del Sur",
				"postalCode": "8501",
				"addressCountry": "PH"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 8.491836,
				"longitude": 125.9765407
			},
			"sameAs": ["https://www.facebook.com/profile.php?id=61573910346368"],
			"amenityFeature": [
				{
					"@type": "LocationFeatureSpecification",
					"name": "Function Hall",
					"value": true
				},
				{
					"@type": "LocationFeatureSpecification",
					"name": "Rooftop Swimming Pool",
					"value": true
				},
				{
					"@type": "LocationFeatureSpecification",
					"name": "Arabic Restaurant",
					"value": true
				},
				{
					"@type": "LocationFeatureSpecification",
					"name": "Air Conditioning",
					"value": true
				},
				{
					"@type": "LocationFeatureSpecification",
					"name": "Sound System",
					"value": true
				},
				{
					"@type": "LocationFeatureSpecification",
					"name": "Elevator",
					"value": true
				}
			]
		}
	</script>
</svelte:head>

<!-- HERO -->
<header class="hero" id="home">
	<div class="hero-content">
		<span class="section-tag">M'M Commercial Building — San Francisco, Agusan Del Sur</span>
		<h1>Elegance, Comfort & Celebration</h1>
		<p>
			Host unforgettable events, enjoy a relaxing rooftop escape, and unwind in
			comfort — all within the refined spaces of M'McB.
		</p>
		<div class="hero-btns">
			<button class="btn1" onclick={openMessenger}>Book Now</button>
			<button class="btn2" onclick={() => videoOpen.set(true)}>
				<i class="ri-play-circle-line"></i> Watch Tour
			</button>
		</div>
	</div>
	<div class="scroll-cue">
		<span>Scroll</span>
		<i class="ri-arrow-down-line"></i>
	</div>
</header>

<!-- AMENITIES -->
<section class="sec amenities" id="amenities">
	<div class="head">
		<h3 class="heading_1">Amenities & Facilities</h3>
		<h1 class="heading">Everything You Need, In One Place</h1>
	</div>

	<div class="boxes container">
		{#each openingAmenities as amenity}
			<button
				class="box"
				onclick={() => {
					if (amenity.opensVenue) {
						venueOpen.set(true);
					} else if (amenity.opensPool) {
						poolOpen.set(true);
					}
				}}
			>
				<img src={amenity.img} alt={amenity.title} />
				<h4>{amenity.title}</h4>
				<p>{amenity.text}</p>
			</button>
		{/each}
	</div>
</section>

<!-- FUNCTION HALL -->
<section id="functionhall" class="function-section">
	<div class="function-wrapper container">
		<div class="function-content">
			<span class="section-tag">THE VENUE</span>
			<h2 class="function-title">A Function Hall Crafted for Every Milestone</h2>
			<p>
				From weddings and birthdays to corporate seminars, our elegant and fully equipped
				function hall adapts seamlessly to your vision — with state-of-the-art lighting, sound,
				and flexible seating.
			</p>

			<ul class="event-list">
				{#each functionEvents as event}
					<li>{event}</li>
				{/each}
			</ul>

			<button type="button" class="venue-services-btn" onclick={() => venueOpen.set(true)}>
				Venue Services <span>&rarr;</span>
			</button>
		</div>

		<div class="function-image">
			<img src="/img/fh.webp" alt="M'M Function Hall" />
			<span class="img-caption">“Where moments become memories.”</span>
		</div>
	</div>
</section>

<!-- ROOFTOP POOL -->
<section id="rooftop-pool" class="rooms-section">
	<div class="head">
		<h3 class="heading_1">Rooftop Lounge & Pool</h3>
		<h1 class="heading">A Pool With a View</h1>
		<p style="color: var(--ink-mute); max-width: 560px; margin: 0 auto;">Soak in the sun, cool off in style, and take in the breathtaking view of Mount Magdiwata from high above the city.</p>
	</div>

	<div class="room-cards container">
		{#each poolFeatures as feature}
			<article class="room-card">
				<div class="room-image">
					<img src={feature.img} alt={feature.title} />
				</div>
				<div class="room-body">
					<h3>{feature.title}</h3>
					<p>{feature.text}</p>
				</div>
			</article>
		{/each}
	</div>

	<div class="pool-cta container">
		<button class="room-btn" onclick={() => poolOpen.set(true)}>View Pool Rates</button>
	</div>
</section>

<!-- RESTOBAR -->
<section class="restaurant-single" id="dining">
	<div class="single-layout container">
		<div class="restaurant-text">
			<span class="tagline">MICHAELA'S ARABIC RESTOBAR</span>
			<h2>A Taste of Arabia, Made for Every Occasion</h2>
			<p class="description">
				Discover a unique dining experience at Michaela's Arabic Restobar — flavorful
				dishes, handcrafted beverages, and a relaxing shisha lounge, all in one vibrant
				destination.
			</p>

			<ul class="features">
				<li>Authentic Arabic-Inspired Cuisine</li>
				<li>Coffee, Frappes & Signature Beverages</li>
				<li>Refreshing Drinks & Bar Favorites</li>
				<li>Premium Shisha Lounge Experience</li>
			</ul>

			<a
				class="btn-primary"
				href="https://michaelasarabicrestobar.mmgroupcompanies.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Visit Our Website<span style="margin-left: 0.5rem;">&rarr;</span>
			</a>
		</div>

		<div class="restaurant-image">
			{#each restaurantCards as card}
				<button class="restaurant-card" onclick={() => menuOpen.set(true)}>
					<img src={card.img} alt={card.title} />
					<h3>{card.title}</h3>
					<p>{card.text}</p>
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- ABOUT -->
<section class="sec about" id="about">
	<div class="about_container">
		<div class="about_heading">
			<span class="section-tag">ABOUT MMCB</span>
			<h1 class="heading">Host. Relax. Celebrate. <span>All in One Place</span></h1>
			<p class="para">
				M'M Commercial Building is your ultimate destination for unforgettable events,
				leisure, and relaxation. We seamlessly combine a modern Function Hall and the
				vibrant Rooftop Lounge & Pool — offering two premium venues in one building. Our
				versatile spaces and premium amenities ensure every occasion is reliable,
				high-value, and truly memorable.
			</p>
		</div>

		<div class="about_box">
			{#each [
				{ img: '/img/functionhall/6.webp', text: 'Modern Function Hall for private and corporate events.' },
				{ img: '/gallery/overview/2.webp', text: 'Vibrant Rooftop Lounge & Pool for leisure and relaxation.' },
				{ img: '/gallery/functionhall/3.webp', text: 'Flexible venues catering to small and large gatherings.' },
				{ img: '/gallery/overview/1.webp', text: 'A perfect place to host, relax, and celebrate.' }
			] as item}
				<button class="box1" onclick={() => lightboxSrc.set(item.img)}>
					<img src={item.img} alt={item.text} />
					<div class="box1_text">
						<p class="para1">{item.text}</p>
					</div>
				</button>
			{/each}
		</div>

		<div class="divider_line"></div>

		<div class="choose_section">
			<h3 class="heading_1">Why Choose Us?</h3>
			<h1 class="heading">Two Premium Venues, One Seamless Experience</h1>
			<p class="para center">
				We provide the unique advantage of <strong>two premium venues under one roof</strong>,
				allowing you to guide your guests from the sophisticated
				Function Hall to the stylish Rooftop Lounge & Pool with effortless ease.
			</p>

			<div class="choose_items">
				{#each [
					{ title: 'Elegant Function Hall', text: 'Host weddings, conferences, or social events in a spacious and versatile hall with state-of-the-art facilities.' },
					{ title: 'Prestigious Rooftop Lounge & Pool', text: 'Relax and entertain with panoramic city views, creating a vibrant atmosphere for memorable gatherings.' },
					{ title: 'Breathtaking View', text: 'Swim and unwind against the scenic backdrop of Mount Magdiwata for a truly refreshing escape.' },
					{ title: 'Memorable Events', text: 'Premium amenities, sophisticated ambiance, and attentive service ensure every occasion is unforgettable.' }
				] as item}
					<div class="choose_item">
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- GALLERY -->
<section class="gallery" id="gallery">
	<div class="head">
		<h3 class="heading_1">Our Gallery</h3>
		<h1 class="heading">Moments at MMCB</h1>
	</div>

	<div class="gallery-grid">
		{#each galleryImages as src}
			<button class="gallery-item" aria-label="Open image in lightbox" onclick={() => lightboxSrc.set(src)}>
				<img src={src} alt="" />
			</button>
		{/each}
	</div>

	<div class="see-more-container">
		<a href="/gallery/" class="see-more-btn">See More Photos</a>
	</div>
</section>

<!-- CONTACT -->
<section class="sec contact" id="contact">
	<div class="contact_box">
		<div class="left_box">
			<h2 class="heading_1">Contact Us</h2>
			<h1 class="heading">Plan Your Next Event with Us</h1>
			<p class="para1">
				Have questions or ready to host your next celebration? Our team is here to help you
				book the perfect venue or stay at M'M Commercial Building.
			</p>

			<div class="contact_details">
				<p><strong>📍 Location:</strong> P3A-Brgy. Karaos, San Francisco, Agusan Del Sur 8501</p>
				<p><strong>📧 Email:</strong> <a href={mailLink} target="_blank">mmcommercialbuilding@gmail.com</a></p>
				<p><strong>📘 Facebook:</strong> <a href={facebook} target="_blank">M'M Commercial Building</a></p>
				<p><strong>📞 Contact No.:</strong> 0924-184-6483</p>
			</div>

			<button class="btn1" onclick={openMessenger}>Contact Now</button>
		</div>

		<div class="right_box">
			<a href={mapLink} target="_blank">
				<div class="img_wrapper">
					<img src="/gallery/overview/85.webp" alt="M'M Commercial Building location" />
					<div class="hover_text">View Location</div>
				</div>
			</a>
		</div>
	</div>
</section>

<VideoModal />
<VenueModal />
<PoolModal />
<MenuModal items={menuItems} />
<Lightbox />
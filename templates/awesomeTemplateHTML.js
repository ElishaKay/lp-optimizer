exports.awesomeTemplateHTML = () => {
	// console.log('allFolders in HTML', allFolders);

	// const loadOptions = () => {
	// 	return allFolders.map((folder, i) => `
    //         <a href="/${folder}">${folder}</a>
    //     `).join('');
	// }

	// const loadImages = () => {
	// 	return images.map((image, i) => `
    //         <li>
	// 	        <figure>
	// 	          <img src="${image.downloadedVersion}" alt="a nice little image">
	// 	        </figure>
	// 	        <p>
	// 		          <b>url</b>: ${image.url}
	// 		        <br>
	// 		          <b>height</b>: ${image.height}
	// 		        <br>
	// 		          <b>width</b>: ${image.width}
	// 		        <br>
	// 		          <b>format</b>: ${image.type}
	// 	        </p>
	// 	        <a href="#">To The Top</a>
	//       </li>
    //     `).join('');
	// }

	return `
	<script>
		const sendClickData = () => {
			console.log('sendClickData function ran');

			fetch('http://localhost:3000/buy-now-clicked', {
				method: 'post',
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({message: 'secret message'})
				}).then(res=>res.json())
				.then(res => console.log(res));
		}
	</script>

	<html>
	<body>
	<div>
	<div class="container">
		<h1>Home & Kitchen</h1>
		<div class="grid">
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://m.media-amazon.com/images/I/51-cLt4P15L.jpg">
					<div class="title">Lysol Disinfecting Wipes, Lemon &amp; Lime Blossom, 80ct</div>
					<div class="prices">
						<span class="price">$4.99</span>
					</div>
					<div class="buttons-container">
						<button onclick="sendClickData()">Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://m.media-amazon.com/images/I/51DZeZw7K0L.jpg">
					<div class="title">Greenlights</div>
					<div class="prices">
						<span class="price">$24.5</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://m.media-amazon.com/images/I/51teAzhRNiL.jpg">
					<div class="title">Flex-a-Size Paper Towels, Huge Roll, 12 Count = 30 Regular Rolls</div>
					<div class="prices">
						<span class="price">$27.49</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://m.media-amazon.com/images/I/41kygBpa3iL.jpg">
					<div class="title">Wecolor 100 Pcs Disposable 3 Ply Earloop Face Masks, Suitable for Home, School, Office and Outdoors (Black)</div>
					<div class="prices">
						<span class="price">$16.99</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://m.media-amazon.com/images/I/51l621VX-kL.jpg">
					<div class="title">Clorox Disinfecting Bleach Free Cleaning Wipes, 75 Wipes, Pack Of 3 (Packaging May Vary)</div>
					<div class="prices">
						<span class="price">$11.99</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://m.media-amazon.com/images/I/51rFET4Ie7L.jpg">
					<div class="title">DAYBETTER Led Strip Lights 32.8ft 5050 RGB LEDs Color Changing Lights Strip for Bedroom, Desk, Home Decoration, with Remote and 12V Power Supply</div>
					<div class="prices">
						<span class="price">$24.99</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://m.media-amazon.com/images/I/51-GoapRM6L.jpg">
					<div class="title">Bounty Quick-Size Paper Towels, White, 16 Family Rolls = 40 Regular Rolls (Packaging May Vary)</div>
					<div class="prices">
						<span class="price">$54.90</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://m.media-amazon.com/images/I/51qmj9ryPiL.jpg">
					<div class="title">Dixie Everyday Paper Plates,10 1/16" Dinner Size Printed Disposable Plate, Amazon Exclusive Design, 220 Count (5 Packs of 44 Plates)</div>
					<div class="prices">
						<span class="price">$19.99</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://i.ebayimg.com/thumbs/images/g/DYAAAOSwk8pf15mA/s-l225.jpg">
					<div class="title">Spice Rack Organizer 4 Tier  Country Rustic Chicken Herb Holder, Wall Mounted</div>
					<div class="prices">
						<span class="price">$38.99</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://i.ebayimg.com/thumbs/images/g/lxMAAOSwjahfcb1j/s-l225.jpg">
					<div class="title">Stainless Steel Meat Cleaver Knife w/ Wood Handle, for Home  Restaurant Use, 8"</div>
					<div class="prices">
						<span class="price">$24.99</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://i.ebayimg.com/thumbs/images/g/03YAAOSw27xfoGrO/s-l225.jpg">
					<div class="title">New TUPPERWARE Smidgets w/ Sheer Seals in Green! Set of 5 FREE US SHIPPING</div>
					<div class="prices">
						<span class="price">$9.99</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
			<div class="product">
				<div class="product-content">
					<img alt="" class="image" src="https://i.ebayimg.com/thumbs/images/g/MZUAAOSw7SZeVivq/s-l225.jpg">
					<div class="title">RSVP Endurance Stainless Steel Crank Style Flour Sifter 3 cup</div>
					<div class="prices">
						<span class="price">$14.95</span>
					</div>
					<div class="buttons-container">
						<button>Buy</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	</body>
	</html>
	`
}
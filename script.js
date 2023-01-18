 let kitchenProducts = [
 	{
 		type: 'grater',
 		price: 5
 	},
 	{
 		type: 'pastry-bag',
 		price: 12
 	},
 	{
 		type: 'scale',
 		price: 30
 	},
 	{
 		type: 'whisk',
 		price: 20
 	}
 ];

 let cosmeticsProducts = [
 	{
 		type: 'blush',
 		price: 10
 	},
 	{
 		type: 'perfume',
 		price: 40
 	}
 ];

 let devicesProducts = [
 	{
 		type: 'desktop',
 		price: 100
 	},
 	{
 		type: 'laptop',
 		price: 200
 	},
 	{
 		type: 'smartphone',
 		price: 100
 	},
 	{
 		type: 'tablet',
 		price: 100
 	},
 ];

 Array.prototype.renderProducts = function(folder) {
 	const Trs = this
 		.map(function(product) {
 			return `
 				<tr>
 					<td><img src="images/${folder}/${product.type}.svg" alt="${product.type}" width="70"></td>
 					<td>${product.type}</td>
 					<td>${product.price}</td>
 				</tr>
 			`
 		})
 		.join("");

 	document.write(`
 		<table>
 			<thead>
 				<tr>
 					<th>Image</th>
 					<th>Name</th>
 					<th>Price</th>
 				</tr>
 			</thead>
 			<tbody>${Trs}</tbody>
 		</table>
 	`)
 }

 kitchenProducts.renderProducts("kitchen");
 cosmeticsProducts.renderProducts("cosmetics");
 devicesProducts.renderProducts("devices");

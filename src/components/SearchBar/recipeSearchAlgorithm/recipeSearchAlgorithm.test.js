import {
	recipeSearchAlgorithm,
	searchTermChecks,
} from "./recipeSearchAlgorithm";

describe("recipeSearchAlgorithm", () => {
	const mockRecipes = [
		{
			id: 46,
			createdAt: "2023-06-11T13:58:47.311669+00:00",
			name: "hello world",
			description: "wadwa",
			steps: [],
			keywords: [],
			ingredients: [],
			cookTime: 0,
			prepTime: 0,
			images: [],
			difficultyRating: 1,
			servingNumber: 4,
			source: "",
			country: "Argentina",
			category: "Sauce",
			region: "American",
			vegStatus: "N/A",
			notes: [
				"Make midweek easier with our family-friendly chicken parmagiana. Ideal for freezing for busy week nights, the recipe is also easily doubled",
				"Try with brown rice",
			],
			canBeFrozen: null,
			isFavorite: true,
		},
		{
			id: 10,
			createdAt: "2023-05-29T10:31:34.719363+00:00",
			name: "Beef bourguignon",
			description:
				"There’s something infinitely comforting about meltingly tender beef, velvety, sweet shallots and smoky bacon cooked in a rich, gravy-like red wine sauce. The French have got it right with this one – make this classic boeuf bourguignon recipe and serve with buttery mash and greens.",
			steps: [
				"Heat the oven to 170°C/150°C fan/gas 3½.",
				"Toss the beef in the flour.",
				"Pour a glug of oil into a large, lidded, flameproof casserole over a medium heat. ",
				"Brown the beef well, then transfer each batch to a large bowl",
				"Heat another splash of oil in the casserole. Add the bacon, fry until crisp, then add it to the beef. ",
				"Fry the mushrooms until golden, then set aside in a separate bowl.",
				"Add the butter to the pan, then add the button onions/shallots and fry gently until brown (8-10 minutes). Remove and add to the mushrooms.",
				"Add the chopped onion and garlic to the casserole and fry gently until soft – about 10 minutes. Remove and add to the meat.",
				"Pour the brandy into the casserole and heat it, scraping up the browned bits from the bottom of the pan.",
				"Add the wine and bring to the boil",
				"Return the beef, bacon, chopped onion and garlic to the casserole, add the herbs and bring back to the boil.",
				"Cover, transfer to the oven and cook for 2½-3 hours until the beef is tender.",
				"Remove the casserole from the oven, give the stew a stir, then taste and season. Stir in the mushrooms and the onions/shallots, then return to the oven with the lid off for 30 minutes more or until the beef is tender and the sauce is glossy.",
				"Scoop out the herbs (discard), then serve with mash and green beans.",
			],
			keywords: ["decadent", "ultimate"],
			ingredients: [
				'{"name":"Olive oil","quantity":2,"measurement":"teaspoon"}',
				'{"name":"Braising beef, cut into 3cm pieces (shin or cheek are best)","quantity":1,"measurement":"kg"}',
				'{"name":"Plain flour","quantity":2,"measurement":"tablespoon"}',
				'{"name":"Bacon Lardons","quantity":250,"measurement":"g"}',
				'{"name":"Button mushrooms","quantity":150,"measurement":"g"}',
				'{"name":"Butter","quantity":2,"measurement":"tablespoon"}',
				'{"name":"Button onions or shallots, peeled but left whole","quantity":250,"measurement":"g"}',
				'{"name":"Onion, chopped","quantity":1,"measurement":""}',
				'{"name":"Garlic cloves, finely chopped","quantity":4,"measurement":""}',
				'{"name":"Brandy","quantity":4,"measurement":"tablespoon"}',
				'{"name":"Red wine (Burgundy is best)","quantity":750,"measurement":"ml"}',
				'{"name":"Bay leaf, fresh parsley and thyme sprig, tied together with string","quantity":1,"measurement":""}',
			],
			cookTime: 210,
			prepTime: 50,
			images: [
				"https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/11/Classic-boeuf-bourguignon-768x960.jpg",
			],
			difficultyRating: 6,
			servingNumber: 6,
			source:
				"https://www.deliciousmagazine.co.uk/recipes/ultimate-beef-bourguignon/",
			country: "France",
			category: "Entrée",
			region: "Northern European",
			vegStatus: "N/A",
			notes: null,
			canBeFrozen: null,
			isFavorite: true,
		},
		{
			id: 4,
			createdAt: "2023-05-28T14:39:30.311767+00:00",
			name: "Negroni",
			description:
				"A Negroni is an Italian cocktail, made of one part gin, one part vermouth rosso and one part Campari, garnished with orange peel. It is considered an apéritif. A traditionally made Negroni is stirred, not shaken; it is built over ice in an old-fashioned or rocks glass and garnished with a slice of orange. ",
			steps: [
				"Pour the gin, vermouth and Campari into a mixing glass or jug with ice. Stir well until the outside of the glass feels cold.",
				"Strain into a tumbler and add 1 large ice sphere or some fresh ice, and garnish with an orange slice, using a blood orange when in season.",
			],
			keywords: ["italian", "cocktail"],
			ingredients: [
				'{"name":"Dry gin","quantity":25,"measurement":"ml"}',
				'{"name":"Rosso Vermouth","quantity":25,"measurement":"ml"}',
				'{"name":"Campari","quantity":25,"measurement":"ml"}',
				'{"name":"Large ice cubes","quantity":2,"measurement":""}',
				'{"name":"Slice of orange","quantity":1,"measurement":""}',
			],
			cookTime: 1,
			prepTime: 5,
			images: [
				"https://www.giallozafferano.com/images/228-22809/negroni-cocktail_1200x800.jpg",
			],
			difficultyRating: 2,
			servingNumber: 1,
			source: "https://www.bbcgoodfood.com/recipes/classic-negroni",
			country: "Italy",
			category: "Drink",
			region: "Mediterranean",
			vegStatus: "N/A",
			notes: [],
			canBeFrozen: null,
			isFavorite: true,
		},
		{
			id: 6,
			createdAt: "2023-05-29T09:33:59.512386+00:00",
			name: "Chicken madras",
			description:
				"Ditch the takeaway menu and cook our healthy chicken madras curry instead. This simple family dinner is full of fragrant spices and tender pieces of chicken",
			steps: [
				"Blitz 1 quartered onion, 2 garlic cloves, a thumb-sized chunk of ginger and ½ red chilli together in a food processor until it becomes a coarse paste.",
				"Heat 1 tbsp vegetable oil in a large saucepan and add the paste, fry for 5 mins, until softened. If it starts to stick to the pan at all, add a splash of water.",
				"Tip in ½ tsp turmeric, 1 tsp ground cumin, 1 tsp ground coriander and 1-2 tsp hot chilli powder and stir well, cook for a couple of mins to toast them a bit, then add 4 chicken breasts, cut into chunks. Stir and make sure everything is covered in the spice mix.",
				"Cook until the chicken begins to turn pale, adding a small splash of water if it sticks to the base of the pan at all.",
				"Pour in 400g can chopped tomatoes, along with a big pinch of salt, cover and cook on a low heat for 30 mins, until the chicken is tender.",
				"Stir through small pack of coriander and serve with rice, naan and a big dollop of mango chutney.",
			],
			keywords: ["spicy", "gluten free", "healthy"],
			ingredients: [
				'{"name":"Onion, peeled and quatered","quantity":1,"measurement":""}',
				'{"name":"Garlic gloves","quantity":2,"measurement":""}',
				'{"name":"Grated fresh ginger","quantity":25,"measurement":"g"}',
				'{"name":"Red chilli","quantity":0.5,"measurement":""}',
				'{"name":"Sesame oil","quantity":1,"measurement":"tablespoon"}',
				'{"name":"Turmeric","quantity":0.5,"measurement":"teaspoon"}',
				'{"name":"Ground cumin","quantity":1,"measurement":"teaspoon"}',
				'{"name":"Ground coriander","quantity":1,"measurement":"teaspoon"}',
				'{"name":"Hot chilli powder","quantity":2,"measurement":"teaspoon"}',
				'{"name":"Chicken breasts, cut into chunks","quantity":4,"measurement":""}',
				'{"name":"Chopped tomatoes","quantity":400,"measurement":"g"}',
				'{"name":"Chopped coriander","quantity":1,"measurement":"handful"}',
			],
			cookTime: 35,
			prepTime: 25,
			images: [
				"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-madras-f69ab47.jpg",
			],
			difficultyRating: 3,
			servingNumber: 4,
			source: "https://www.bbcgoodfood.com/recipes/chicken-madras",
			country: "India",
			category: "Entrée",
			region: "Asian",
			vegStatus: "N/A",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 7,
			createdAt: "2023-05-29T09:49:53.824385+00:00",
			name: "French onion soup",
			description:
				"Our French onion soup is deliciously rich and easy to make at home. This savoury soup is perfect for using up a garden glut and great for dinner parties",
			steps: [
				"Melt the butter with the olive oil in a large heavy-based pan. Add the onions and fry with the lid on for 10 mins until soft.",
				"Sprinkle in the sugar and cook for 20 mins more, stirring frequently, until caramelised. The onions should be really golden, full of flavour and soft when pinched between your fingers. Take care towards the end to ensure that they don’t burn.",
				"Add the garlic cloves for the final few minutes of the onions’ cooking time, then sprinkle in the plain flour and stir well.",
				"Increase the heat and keep stirring as you gradually add the wine, followed by the beef stock. Cover and simmer for 15-20 mins.",
				"To serve, turn on the grill, and toast the bread. Ladle the soup into heatproof bowls.",
				"Put a slice or two of toast on top of the bowls of soup, and pile on the gruyère. Grill until melted. Alternatively, you can cook the toasts under the grill, then add them to the soup to serve.",
			],
			keywords: ["freezable"],
			ingredients: [
				'{"name":"Butter","quantity":50,"measurement":"g"}',
				'{"name":"Olive oil","quantity":1,"measurement":"tablespoon"}',
				'{"name":"Onions, halved and thinly sliced","quantity":1,"measurement":"kg"}',
				'{"name":"Sugar","quantity":1,"measurement":"teaspoon"}',
				'{"name":"Thinly sliced garlic cloves","quantity":4,"measurement":""}',
				'{"name":"Plain flour","quantity":2,"measurement":"tablespoon"}',
				'{"name":"White wine","quantity":250,"measurement":"ml"}',
				'{"name":"Beef stock","quantity":1.3,"measurement":"l"}',
				'{"name":"Baguette slices","quantity":4,"measurement":""}',
				'{"name":"Gruyère, finely grated","quantity":140,"measurement":"g"}',
			],
			cookTime: 55,
			prepTime: 20,
			images: [
				"https://kristineskitchenblog.com/wp-content/uploads/2021/05/french-onion-soup-1200-square-122.jpg",
			],
			difficultyRating: 4,
			servingNumber: 4,
			source: "https://www.bbcgoodfood.com/recipes/french-onion-soup",
			country: "France",
			category: "Soup",
			region: "Northern European",
			vegStatus: "N/A",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 8,
			createdAt: "2023-05-29T10:01:59.356143+00:00",
			name: "Lemon meringue pie",
			description:
				"You can't go wrong with a classic lemon meringue pie, and this easy recipe is particularly good",
			steps: [
				"For the pastry, put the plain flour, butter, icing sugar, egg yolk (save the white for the meringue) and 1 tbsp cold water into a food processor. Pulse until the mix starts to bind – make sure the mix is not overworked.",
				"Tip the pastry onto a lightly floured surface, gather together until smooth, then roll out and line a 23 x 2.5cm loose-bottom fluted flan tin. Trim and neaten the edges.",
				"Press pastry into the flutes. The pastry is quite rich, so don’t worry if it cracks, just press it back together. Prick the base with a fork, line with foil, shiny side down, and chill for 30 mins-1 hr (or overnight).",
				"Put a baking sheet in the oven and heat the oven to 200C/180C fan/gas 6. Bake the pastry case ‘blind’ (filled with dry beans) for 15 mins, then remove the foil and bake a further 5-8 mins until the pastry is pale golden and cooked. Set aside. Can be done a day ahead. Lower the oven to 180C/160C fan/gas 4.",
				"While the pastry bakes, prepare the filling. Mix the cornflour, golden caster sugar and lemon zest in a medium saucepan. ",
				"Strain and stir in the lemon juice gradually. Make the orange juice up to 200ml with water and strain into the pan. ",
				"Cook over a medium heat, stirring constantly, until thickened and smooth.",
				"Once the mixture bubbles, remove from the heat and beat in the butter until melted.",
				"Beat the egg yolks (save white for meringue) and the whole egg together, stir into the pan and return to a medium heat.",
				"Keep stirring vigorously for a few minutes, until the mixture thickens and plops from the spoon. (It will bubble, but doesn’t curdle.) Take off the heat and set aside while you make the meringue.",
				"Put the egg whites in a large bowl. Whisk to soft peaks, then add 100g of the golden caster sugar a spoonful at a time, whisking between each addition without overbeating. Whisk in the cornflour, then add the remaining 100g of sugar as before until smooth and thick.",
				"Quickly reheat the filling and pour it into the pastry case. Immediately put spoonfuls of meringue around the edge of the filling (if you start in the middle, the meringue may sink), then spread so it just touches the pastry (this will anchor it and help stop it sliding). Pile the rest into the centre, spreading so it touches the surface of the hot filling (and starts to cook), then give it all a swirl.",
				"Return to the oven for 18-20 mins until the meringue is crisp and slightly coloured.",
				"Let the pie sit in the tin for 30 mins, then remove and leave for at least another 30 mins-1 hr before slicing. Eat the same day.",
			],
			keywords: [],
			ingredients: [
				'{"name":"Plain flour","quantity":175,"measurement":"g"}',
				'{"name":"Cold butter, cut into small pieces","quantity":100,"measurement":"g"}',
				'{"name":"Icing sugar","quantity":1,"measurement":"tablespoon"}',
				'{"name":"Egg yolk","quantity":1,"measurement":""}',
				'{"name":"Cornflour","quantity":2,"measurement":"tablespoon"}',
				'{"name":"Goldgen caster sugar","quantity":100,"measurement":"g"}',
				'{"name":"Large lemons, zested","quantity":2,"measurement":""}',
				'{"name":"Fresh lemon juice","quantity":125,"measurement":"ml"}',
				'{"name":"Small orange juiced","quantity":1,"measurement":""}',
				'{"name":"Butter, cut into pieces","quantity":85,"measurement":"g"}',
				'{"name":"Egg yolks","quantity":3,"measurement":""}',
				'{"name":"Whole egg","quantity":1,"measurement":""}',
				'{"name":"Egg whites, room temperature","quantity":4,"measurement":""}',
				'{"name":"Golden caster sugar","quantity":200,"measurement":"g"}',
				'{"name":"Cornflour","quantity":2,"measurement":"teaspoon"}',
			],
			cookTime: 105,
			prepTime: 90,
			images: [
				"https://images.immediate.co.uk/production/volatile/sites/2/2021/04/lemon-meringue-pie-8964b05-e1648552163658.jpg",
			],
			difficultyRating: 5,
			servingNumber: 8,
			source: "https://www.bbcgoodfood.com/recipes/ultimate-lemon-meringue-pie",
			country: "United Kingdom",
			category: "Dessert",
			region: "Northern European",
			vegStatus: "Vegetarian",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 9,
			createdAt: "2023-05-29T10:20:36.245548+00:00",
			name: "Spiced rice with beef",
			description:
				"Enjoy this spiced rice with beef as part of a family feast. Seasoned with ginger, allspice, cloves and more, it has a lovely warming flavour without being too hot",
			steps: [
				"Blitz the ginger and garlic to a paste in a small food processor.",
				"Put the beef in a large bowl and add the ginger-garlic paste, the allspice, cloves, 2 tsp black pepper and 2 tsp salt. Mix to coat the beef, then cover and leave to marinate for 30 mins. Will keep chilled for up to a day.",
				"Heat the oil in a large ovenproof pan over a medium heat and cook the onion for 8 mins until soft and translucent.",
				"Tip the beef and any leftover marinade into the pan and sizzle for 10 mins until the beef starts to caramelise in places.",
				"Add the cardamom pods, cinnamon sticks, thyme, all- purpose seasoning and stock. Bring to a simmer, then cover and reduce the heat to low.",
				"Cook for 1 hr, then remove the lid and cook for another 30 mins. The beef should be tender but still holding together.",
				"Heat the oven to 180C/160C fan/gas 4. Leave to cool completely, then seal in an airtight container and freeze for up to two months.",
				"Tip the rice into the beef mixture with just enough water to cover it by about 1cm. Stir, then dot the butter over the top",
				"Cover and bake in the oven for 30 mins. Fluff the rice up with a fork and serve with Ghanaian gravy",
			],
			keywords: ["warming", "meal prep"],
			ingredients: [
				'{"name":"Ginger, peeled and chopped","quantity":25,"measurement":"g"}',
				'{"name":"Large garlic cloves, roughly chopped","quantity":4,"measurement":""}',
				'{"name":"Stewing beef, cut into chunks (shin, chuck or brisket work well)","quantity":800,"measurement":"g"}',
				'{"name":"Ground allspice","quantity":1,"measurement":"tablespoon"}',
				'{"name":"Ground cloves","quantity":1,"measurement":"teaspoon"}',
				'{"name":"Vegetable oil","quantity":2,"measurement":"tablespoon"}',
				'{"name":"Onions, finely chopped","quantity":2,"measurement":""}',
				'{"name":"Cardamom pods","quantity":8,"measurement":""}',
				'{"name":"Cinnamon sticks","quantity":2,"measurement":""}',
				'{"name":"Thyme sprigs, leaves picked","quantity":8,"measurement":""}',
				'{"name":"All-purpose seasoning","quantity":2,"measurement":"tablespoon"}',
				'{"name":"Beef stock","quantity":500,"measurement":"ml"}',
				'{"name":"Basmati rice","quantity":400,"measurement":"g"}',
				'{"name":"Butter","quantity":25,"measurement":"g"}',
			],
			cookTime: 150,
			prepTime: 30,
			images: [
				"https://images.immediate.co.uk/production/volatile/sites/30/2021/10/Spiced-rice-with-beef-c710b26.jpg",
			],
			difficultyRating: 4,
			servingNumber: 6,
			source: "https://www.bbcgoodfood.com/recipes/spiced-rice-with-beef",
			country: "China",
			category: "Entrée",
			region: "Asian",
			vegStatus: "N/A",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 11,
			createdAt: "2023-05-29T11:24:27.474276+00:00",
			name: "Iced latte",
			description:
				"Cool off with a refreshing iced latte. This simple drink only needs a handful of ingredients and is perfect for a hot weather caffeine kick",
			steps: [
				"Make the two espresso shots using an espresso machine",
				"Mix the hot espresso with the sugar until it dissolves. (if you plan to add it)",
				"Fill a glass with ice and stir in the sweetened (or unsweetened) coffee.",
				"Pour over the milk and stir until combined.",
			],
			keywords: ["gluten free"],
			ingredients: [
				'{"name":"Espresso shots","quantity":2,"measurement":""}',
				'{"name":"Sugar, honey or maple syrup (to taste)","quantity":2,"measurement":"teaspoon"}',
				'{"name":"Large Ice cubes","quantity":4,"measurement":""}',
				'{"name":"Milk","quantity":100,"measurement":"ml"}',
			],
			cookTime: 1,
			prepTime: 5,
			images: [
				"https://onesweetappetite.com/wp-content/uploads/2019/07/Square-Coffee.jpg",
			],
			difficultyRating: 2,
			servingNumber: 1,
			source: "https://www.bbcgoodfood.com/recipes/iced-latte",
			country: "United States",
			category: "Drink",
			region: "American",
			vegStatus: "Vegetarian",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 12,
			createdAt: "2023-05-29T11:56:19.833248+00:00",
			name: "Tamarind prawn curry",
			description:
				"Our tamarind prawn curry will quickly become a family favourite. It's quick, healthy and low in fat and calories\nCan be done with Chicken as well.",
			steps: [
				"Heat the oil in a frying pan over a medium heat and cook the onion for 5-8 mins until light golden.",
				"Stir in the chilli, garlic and ginger, and fry for another minute before adding the spices.",
				"Tip in the cherry tomatoes, swirl the can out with a splash of water and stir that into the pan as well.",
				"Simmer for 5 mins until the tomatoes burst and the sauce thickens.",
				"Stir in the tamarind and prawns, and simmer for 2-3 mins until the prawns are cooked. ",
				"Serve the curry on top of the rice, with the coriander scattered over.",
			],
			keywords: ["simple", "quick"],
			ingredients: [
				'{"name":"Chery tomatoes","quantity":400,"measurement":"g"}',
				'{"name":"Sesame oil","quantity":1,"measurement":"tablespoon"}',
				'{"name":"Onion, chopped","quantity":1,"measurement":""}',
				'{"name":"Red chilli, finely chopped","quantity":1,"measurement":""}',
				'{"name":"Crushed garlic cloves","quantity":2,"measurement":""}',
				'{"name":"Grated ginger","quantity":1,"measurement":"tablespoon"}',
				'{"name":"Whiskey","quantity":1,"measurement":"teaspoon"}',
				'{"name":"Cumin seeds","quantity":1,"measurement":"teaspoon"}',
				'{"name":"Ground coriander","quantity":1,"measurement":"teaspoon"}',
				'{"name":"Canned cherry tomatoes","quantity":400,"measurement":"g"}',
				'{"name":"Tamarind paste","quantity":1.5,"measurement":"tablespoon"}',
				'{"name":"Raw king prawns","quantity":250,"measurement":"g"}',
				'{"name":"Basmati rice","quantity":200,"measurement":"g"}',
				'{"name":"Coriander leaves","quantity":1,"measurement":"handful"}',
			],
			cookTime: 15,
			prepTime: 10,
			images: [
				"https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Tamarind-prawn-curry-475a666.jpg",
			],
			difficultyRating: 3,
			servingNumber: 2,
			source: "https://www.bbcgoodfood.com/recipes/tamarind-prawn-curry",
			country: "India",
			category: "Entrée",
			region: "Asian",
			vegStatus: "N/A",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 13,
			createdAt: "2023-05-31T10:13:40.069876+00:00",
			name: "Simple Naan Bread",
			description:
				"Simple naan breads, flavoured with garlic and fresh coriander, are quick and easy to make.",
			steps: [
				"For the dough, sift the flour, sugar, salt and baking powder into a bowl.",
				"In another bowl, mix together the milk and oil.",
				"Make a well in the centre of the flour mixture and pour in the liquid mixture. Slowly mix together the dough by working from the centre and incorporating the flour from the edges of the 'well', to make a smooth, soft dough. Knead well for 8–10 minutes, adding a little flour if the dough is too sticky.",
				"Place the dough into an oiled bowl, cover with a damp tea-towel and leave in a warm place for 10–15 minutes.",
				"Form the dough into five balls.",
				"Preheat the grill to medium and place a heavy baking sheet on the upper shelf of the grill to heat.",
				"Roll the dough balls out quite thinly, ideally in a teardrop shape, but really this is just aesthetic.",
				"Sprinkle over your chosen topping and press into the surface of the dough.",
				"Place the naans onto the hot baking sheet and grill for 1–2 minutes, or until lightly browned.",
				"Brush with butter and serve hot.",
			],
			keywords: [],
			ingredients: [
				'{"name":"Plain flour","quantity":250,"measurement":"g"}',
				'{"name":"Sugar","quantity":2,"measurement":"teaspoon"}',
				'{"name":"Salt","quantity":0.5,"measurement":"teaspoon"}',
				'{"name":"Baking powder","quantity":0.5,"measurement":"teaspoon"}',
				'{"name":"Milk","quantity":120,"measurement":"ml"}',
				'{"name":"Vegetable Oil","quantity":2,"measurement":"tablespoon"}',
				'{"name":"nigella seeds, poppy seeds or sesame seeds, or chopped garlic and fresh coriander","quantity":1,"measurement":"handful"}',
				'{"name":"Melted butter","quantity":1,"measurement":"tablespoon"}',
			],
			cookTime: 10,
			prepTime: 30,
			images: [
				"https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/naan_86626_16x9.jpg",
			],
			difficultyRating: 4,
			servingNumber: 5,
			source: "https://www.bbc.co.uk/food/recipes/naan_86626",
			country: "India",
			category: "Bread",
			region: "Asian",
			vegStatus: "Vegetarian",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 14,
			createdAt: "2023-06-02T20:07:27.846123+00:00",
			name: "Sanpellegrino Garibaldi",
			description:
				"Sanpellegrino Garibaldi is a light and elegant cocktail that brings out the aroma and citrusy flavour of Sanpellegrino Aranciata. Ideal for an aperitif before dinner, it regales the palate with a pleasantly bitter aftertaste and is perfect for accompanying simple and mildly flavoured appetisers.",
			steps: [
				"Mix the Campari and Sanpellegrino along with an ice cube in a separate mixing glass ",
				"Pour into a large tumbler to serve. ",
				"Add the orange slice",
			],
			keywords: [],
			ingredients: [
				'{"name":"Sanpellegrino Aranciata","quantity":330,"measurement":"ml"}',
				'{"name":"Campari","quantity":50,"measurement":"ml"}',
				'{"name":"Orange slice","quantity":1,"measurement":""}',
			],
			cookTime: 0,
			prepTime: 5,
			images: [
				"https://www.sanpellegrino.com/uk/sites/g/files/xknfdk2256/files/styles/recipe_desktop/public/smash-cocktail-page-sanpellegrino-aranciata.jpg.webp?itok=jq0_2oQe",
			],
			difficultyRating: 1,
			servingNumber: 1,
			source:
				"https://www.sanpellegrino.com/uk/sparkling-drinks/mixart/garibaldi",
			country: "Italy",
			category: "Drink",
			region: "Mediterranean",
			vegStatus: "Vegetarian",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 2,
			createdAt: "2023-05-28T14:16:37.787315+00:00",
			name: "Classic beef ragù -dev",
			description:
				"This slow-cooked beef ragù is perfect for batch-cooking and because it's cooked in the oven it's low effort. Serve three tablespoons of ragù to every 100g/3½oz serving of fresh pasta.",
			steps: [
				"Preheat the oven to 180C/160C Fan/Gas 4.",
				"In a large, heavy-based, ovenproof saucepan or casserole, heat the olive oil over a medium heat.",
				"Season the beef, add to the pan and brown on all sides. Remove the beef and set aside. ",
				"Add the onion, garlic, celery and rosemary to the pan and cook until soft.",
				"Return the meat to the pan, add the red wine and bring to the boil.",
				"Stir in the tomato passata and cover the surface of the ragù with a circle of baking paper. ",
				"Bake for 2½ hours or until the meat is very tender. ",
				"Remove the baking paper and break up the meat using a fork. Season with salt and pepper and set aside.",
				"To serve, cook the pappardelle in salted boiling water according to the packet instructions, or until al dente. ",
				"In a sauté pan, mix 3 tablespoons of the ragù per portion of pasta with a tablespoon of the pasta water. Cook on a low heat and toss together until the sauce clings to the pasta.",
				"Serve with grated Parmesan cheese and freshly ground black pepper.",
			],
			keywords: ["italian", "slow cooked", "classic"],
			ingredients: [
				'{"name":"Olive oil","quantity":1.5,"measurement":"tablespoon"}',
				'{"name":"Diced beef or chunk steak in 2cm pieces","quantity":400,"measurement":"g"}',
				'{"name":"Small brown onion","quantity":1,"measurement":""}',
				'{"name":"Celery sticks, finly chopped","quantity":3,"measurement":""}',
				'{"name":"Crushed Garlic Clove","quantity":1,"measurement":""}',
				'{"name":"Finley chopped fresh rosemary","quantity":1,"measurement":"teaspoon"}',
				'{"name":"Red wine (preferably Chianti)","quantity":350,"measurement":"ml"}',
				'{"name":"Passata","quantity":400,"measurement":"g"}',
				'{"name":"Pappardelle pasta","quantity":300,"measurement":"g"}',
				'{"name":"Freshly grated parmesan","quantity":1,"measurement":"handful"}',
			],
			cookTime: 150,
			prepTime: 30,
			images: [
				"https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/ragu_49191_16x9.jpg",
			],
			difficultyRating: 4,
			servingNumber: 4,
			source: "https://www.bbc.co.uk/food/recipes/ragu_49191",
			country: "Italy",
			category: "Entrée",
			region: "Mediterranean",
			vegStatus: "N/A",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 5,
			createdAt: "2023-05-29T09:08:43.386261+00:00",
			name: "Sticky sriracha chicken rice with charred veg",
			description:
				"Sriracha is great for more than just drizzling! Use it in a sticky glaze for this lip-smacking chicken thigh recipe. ",
			steps: [
				"Melt the butter in a pan over a medium heat, then fry the onion with a pinch of salt for 8-10 minutes until starting to caramelise.",
				"Stir in the basmati rice, then pour in the chicken stock. Bring to the boil, cover, then turn the heat to low and cook for 10-15 minutes until the stock is absorbed and the rice is tender.",
				"Remove from the heat, cover and rest for 5 minutes.",
				"Meanwhile, skin, debone and slice the chicken thighs into strips.",
				"Heat a splash of olive oil in a large non-stick frying pan over a medium heat, add the strips of chicken and cook for 6 minutes until golden.",
				"Turn and cook for a further 6 minutes until cooked through.",
				"Heat a separate frying or griddle pan until smoking hot. Brush the broccoli florets with olive oil, then cook, turning, until tender and charred. ",
				"Remove from the pan and repeat with the spring onions.",
				"Mix the sriracha chilli sauce, runny honey, 3 tbsp water, garlic and ginger. ",
				"Season, then stir into the chicken. Turn the heat to high and stir-fry the chicken for another 3 minutes or until the sauce is thick.",
				"Top the rice with the charred veg, chicken and sauce, then sprinkle with the toasted sesame seeds.",
			],
			keywords: [],
			ingredients: [
				'{"name":"Butter","quantity":30,"measurement":"g"}',
				'{"name":"Finely sliced onion","quantity":1,"measurement":""}',
				'{"name":"Basmati rice","quantity":200,"measurement":"g"}',
				'{"name":"Chicken stock","quantity":400,"measurement":"ml"}',
				'{"name":"Chicken thighs","quantity":4,"measurement":""}',
				'{"name":"Olive oil","quantity":2,"measurement":"teaspoon"}',
				'{"name":"Broccoli florets or asparagus ","quantity":16,"measurement":""}',
				'{"name":"Spring onions trimmed and halved","quantity":1,"measurement":"handful"}',
				'{"name":"Sriracha sauce","quantity":4,"measurement":"tablespoon"}',
				'{"name":"Runny honey","quantity":3,"measurement":"tablespoon"}',
				'{"name":"Crsuhed garlic clove","quantity":1,"measurement":""}',
				'{"name":"Grated fresh ginger","quantity":20,"measurement":"g"}',
				'{"name":"Toasted sesame seeds","quantity":1,"measurement":"tablespoon"}',
			],
			cookTime: 30,
			prepTime: 20,
			images: [
				"https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/02/sriracha-chicken-768x1040.jpg",
			],
			difficultyRating: 6,
			servingNumber: 4,
			source:
				"https://www.deliciousmagazine.co.uk/recipes/sriracha-chicken-rice/",
			country: "Vietnam",
			category: "Entrée",
			region: "Asian",
			vegStatus: "N/A",
			notes: null,
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 48,
			createdAt: "2023-06-15T19:25:05.637655+00:00",
			name: "Spuds",
			description: "TRWEFE",
			steps: [],
			keywords: [],
			ingredients: [],
			cookTime: 0,
			prepTime: 0,
			images: [],
			difficultyRating: 1,
			servingNumber: 4,
			source: "",
			country: "Australia",
			category: "Sauce",
			region: "Northern European",
			vegStatus: "N/A",
			notes: [],
			canBeFrozen: true,
			isFavorite: false,
		},
		{
			id: 50,
			createdAt: "2023-06-15T19:33:22.235035+00:00",
			name: "fef",
			description: "afwaf",
			steps: [],
			keywords: [],
			ingredients: [],
			cookTime: 2,
			prepTime: 2,
			images: [],
			difficultyRating: 1,
			servingNumber: 4,
			source: "",
			country: "Aruba",
			category: "Sauce",
			region: "South American",
			vegStatus: "",
			notes: [],
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 51,
			createdAt: "2023-06-16T17:56:37.047359+00:00",
			name: "Spuds",
			description: "dwa",
			steps: [],
			keywords: [],
			ingredients: [
				'{"name":"Spuds","quantity":"10","measurement":""}',
				'{"name":"test","quantity":"1","measurement":"","optional":true}',
				'{"name":"Spuds","quantity":"10","measurement":"","optional":false}',
			],
			cookTime: 0,
			prepTime: 0,
			images: [],
			difficultyRating: 2,
			servingNumber: 4,
			source: "",
			country: "Australia",
			category: "Sauce",
			region: "American",
			vegStatus: "Vegetarian",
			notes: [],
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 52,
			createdAt: "2023-07-22T18:35:53.461217+00:00",
			name: "Fajita Seasoning",
			description:
				"A perfect spice mix for fajita. Ideal for storing as a ready to go spice mix or for adding to other meals or as a meat rub.",
			steps: ["Combine the ingredients in a bowl", "Store in a sealed jar"],
			keywords: ["Spicy ", "spice mix", "seasoning", "gluten free"],
			ingredients: [
				'{"name":"hot chilli powder","quantity":"0.5","measurement":"tablespoon","optional":false}',
				'{"name":"smoked paprika ","quantity":"2","measurement":"tablespoon","optional":false}',
				'{"name":"ground cumin","quantity":"1","measurement":"tablespoon","optional":false}',
				'{"name":"garlic powder","quantity":"1","measurement":"tablespoon","optional":false}',
				'{"name":"ground coriander","quantity":"0.5","measurement":"tablespoon","optional":false}',
				'{"name":"dried oregano","quantity":"1.25","measurement":"tablespoon","optional":false}',
			],
			cookTime: 0,
			prepTime: 5,
			images: [
				"https://www.thedinnerbite.com/wp-content/uploads/2021/11/chicken-fajita-seasoning-recipe-img-3.jpg",
			],
			difficultyRating: 1,
			servingNumber: 4,
			source: "",
			country: "Mexico",
			category: "Marinade",
			region: "American",
			vegStatus: "Vegan",
			notes: [
				"Add to meals a tablespoon at a time",
				"Add salt and pepper to taste",
			],
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 53,
			createdAt: "2023-08-03T09:02:21.105777+00:00",
			name: "Bourbon Steak Sauce",
			description:
				"This homemade Bourbon steak sauce includes bourbon, spicy brown mustard, minced shallots and rosemary for a tangy and flavourful addition to any of your steaks!",
			steps: [
				"Melt butter in saute pan over medium heat. Add minced shallots and minced rosemary, cooking about 3-5 minutes. Next, add bourbon or whiskey.",
				"Remove from heat and let set for 10 minutes.",
				"Strain solids from mixture and return sauce to pan.",
				"Add Worcestershire sauce, spicy brown mustard, brown sugar and lemon juice. ",
				"Cook over low to medium heat for another 5 minutes. Serve warm over grilled steak.",
			],
			keywords: ["steak sauce"],
			ingredients: [
				'{"name":"butter","quantity":"5","measurement":"tablespoon","optional":false}',
				'{"name":"minced rosemary","quantity":"2","measurement":"tablespoon","optional":false}',
				'{"name":"minced shallots","quantity":"1","measurement":"","optional":false}',
				'{"name":"bourbon","quantity":"60","measurement":"ml","optional":false}',
				'{"name":"Worcestershire sauce","quantity":"1","measurement":"tablespoon","optional":false}',
				'{"name":"spicy brown mustard","quantity":"1","measurement":"teaspoon","optional":false}',
				'{"name":"brown sugar","quantity":"0.5","measurement":"teaspoon","optional":false}',
				'{"name":"fresh lemon juice","quantity":"1","measurement":"teaspoon","optional":false}',
			],
			cookTime: 25,
			prepTime: 5,
			images: [
				"https://i0.wp.com/cookingsessions.com/wp-content/uploads/2022/01/Bourbon-Steak-Sauce.jpg",
			],
			difficultyRating: 3,
			servingNumber: 4,
			source: "https://cookingsessions.com/bourbon-steak-sauce/",
			country: "United States",
			category: "Sauce",
			region: "American",
			vegStatus: "Vegetarian",
			notes: [],
			canBeFrozen: null,
			isFavorite: false,
		},
		{
			id: 54,
			createdAt: "2023-08-12T18:32:09.36938+00:00",
			name: "test",
			description: "test",
			steps: [],
			keywords: [],
			ingredients: [
				'{"name":"oil","quantity":"1","measurement":"","optional":false}',
				'{"name":"oil","quantity":"1","measurement":"","optional":false}',
			],
			cookTime: 20,
			prepTime: 20,
			images: [],
			difficultyRating: 2,
			servingNumber: 4,
			source: "",
			country: "Albania",
			category: "Marinade",
			region: "Mediterranean",
			vegStatus: "N/A",
			notes: [],
			canBeFrozen: null,
			isFavorite: false,
		},
	];
	it("should return no matching results when something is searched with no matches", () => {
		const searchTerm = "ABCDEFGHIJK ";

		const results = recipeSearchAlgorithm(searchTerm, mockRecipes);
		expect(results).toStrictEqual([]);
		expect(results.length).toBe(0);
	});

	it("should return one match when passed Negroni for a recipe name match", () => {
		const searchTerm = "Negroni";

		const results = recipeSearchAlgorithm(searchTerm, mockRecipes);
		expect(results[0].name).toBe(searchTerm);
		expect(results.length).toBe(1);
	});

	it("should return one match when passed wadwa for a recipe description match", () => {
		const searchTerm = "wadwa";

		const results = recipeSearchAlgorithm(searchTerm, mockRecipes);
		expect(results[0].description).toBe(searchTerm);
		expect(results.length).toBe(1);
	});

	it("should return six matches when passed vegetarian for a vegStatus match", () => {
		const searchTerm = "vegetarian";

		const results = recipeSearchAlgorithm(searchTerm, mockRecipes);
		expect(results.length).toBe(6);
	});

	it("should return one match when passed Turmeric for an ingredient name match", () => {
		const searchTerm = "Turmeric";

		const results = recipeSearchAlgorithm(searchTerm, mockRecipes);
		expect(results[0]).toBe(mockRecipes[3]);
		expect(results.length).toBe(1);
	});
});

describe("searchTermChecks", () => {
	it("should cut off the ending space at the end of the search term", () => {
		const searchTerm = "hello ";

		const updatedSearchTerm = searchTermChecks(searchTerm);
		expect(updatedSearchTerm).toBe("hello");
	});

	it("should leave the search term as it is as it does not end in a space", () => {
		const searchTerm = "hello";

		const updatedSearchTerm = searchTermChecks(searchTerm);
		expect(updatedSearchTerm).toBe("hello");
	});

	it("should not remove a starting space from the search term", () => {
		const searchTerm = " hello";

		const updatedSearchTerm = searchTermChecks(searchTerm);
		expect(updatedSearchTerm).toBe(searchTerm);
	});

	it("should still remove the space from a multi-word search term", () => {
		const searchTerm = "hello world how are you today ";

		const updatedSearchTerm = searchTermChecks(searchTerm);
		expect(updatedSearchTerm).toBe("hello world how are you today");
	});
});

// Directives - HTML annotations that trigger javascript behaviors
// Modules - where application components live
// Controllers - Where we add application behavior
// Expressions - How values get displayed within the page


// Basic directives, ng-app = attach the application module to the page
// Ng-controller = attach a controller function to the page
// Ng-show / ng-hide = display a section based on an expression
// ng-repeat = Repeat a section for each item in an array 

// To use a filter in the template, use {{ data | filter:options }}
//  The uppercase filter: {{'octagon gem' | uppercase }}
// The date filter is: {{'1388123412323' | date:'MM/dd/yyyy @ h:mma'}}

// -- Sorting filters --
// {{'My Description' | limitTo:8 }}
// <li ng-repeat="product in store.products | limitTo:3> "
// <li ng-repeat="product in store.products | orderBy:'-price'"

// Our gemStore application has a Controller named StoreController
 
(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
  // 	In app.js, we've added a gem object to represent one of the products in our gemStore.
   // Assign it to the product property of StoreController so we can use them in the page.
  	this.products = gems; 

  }); 
  	// You can do this singular if you make it this.product = gem or plural if this.products = gems

  app.controller('GalleryController', function(){
  	this.current = 0;
  	this.setCurrent = function(newGallery){
  		this.current = newGallery || 0;
  	}
  }); 

  app.controller('PanelController', function(){
  	this.tab = 1;
  	this.selectTab = function(setTab) {
  		this.tab = setTab; 
  	};
  	this.isSelected = function(checkTab){
  		// Select the class # from the tab #
  		return this.tab === checkTab; 
  	}
  }); 

// Keys and values in our gems data

var gems = [{
	name: 'Emerald',
	price: 2.95,
	description: 'Beautiful green gem',
	canPurchase: true,
	soldOut: true,
	images: [
		'images/emerald-cut.jpg',
		'images/emerald-uncut.jpg'
	],
	reviews: [
	{
		stars: 5,
		body: "I love this product",
		author: "joe@thomas.com"

	},
	{
		stars: 2,
		body: "This gem sucks",
		author: "minniemouse@gmail.com"
	}
	]
},
{
	name: 'Opal',
	price: 5.95,
	description: 'A gem with many different colors.',
	canPurchase: true,
	soldOut: false,
	images: [
		'images/opal-cut.JPG',
		'images/opal-uncut.jpg'
	],
	reviews: [
	{
		stars: 5,
		body: "I've gotten so many compliments on this opal!!!",
		author: "joe@thomas.com"

	},
	{
		stars: 1,
		body: "Didn't look like the photo, was much smaller and not very sparkly.",
		author: "minniemouse@gmail.com"
	}
	]
},
{
	name: 'Amethyst',
	price: 3.95,
	description: 'A great gem for your sweetheart',
	canPurchase: true,
	soldOut: false,
	images: [
		'images/amethyst-cut.JPG',
		'images/amethyst-uncut.jpeg'
	],
	reviews: [
	{
		stars: 4,
		body: "Gem was great but horrible customer service",
		author: "jessiejames@gmail.com"
	}]
}
];

})();

// Can also display as:

// {
// 	name: 'Amethyst',
// 	price: 3.95,
// 	description: 'A great gem for your sweetheart',
// 	canPurchase: true,
// 	soldOut: false,
// 	images: [{
// 		cut: 'images/amethyst-cut.JPG',
// 		uncut: 'images/amethyst-uncut.jpeg'
// 	}]

// With the following: <img ng-src ="{{product.images[0].cut}}" class="gem-thumb"/>
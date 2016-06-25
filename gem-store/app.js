(function () {
  var app = angular.module('store', []);

  app.controller('StoreController', function () {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'A really nice gem!',
      canPurchase: true,
      images: [
        {
          full: "images/gem-01.gif",
          thumb: "images/gem-01.gif"
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Another really nice gem!',
      canPurchase: false,
      images: [
        {
          full: "images/gem-02.gif",
          thumb: "images/gem-02.gif"
        }
      ]
    }]
})();
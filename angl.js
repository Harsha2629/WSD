var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{trendname: "Pastel Bucket Hats",designer:"LEONARDO DA VINCI", price: 25000},
        {trendname: "Square-Toed Heels",designer:"EDVARD MUNCH", price: 12000},
        {trendname: "THE BURNOUT",designer:"JAN VERMEER", price: 9000},
        {trendname: "Matching Printed Tops and Stockings",designer:"MICHELANGELO", price: 20500},
        {trendname: "Chunky Boots with Feminine Dresses",designer:"VINCENT VAN GOGH", price: 32600},
        {trendname: "Faux Leather Jumpsuits and Boilersuits",designer:"RENE MAGRITTE", price: 6800}];

    this.limit = 9;
    this.sortProperty = 'trendname';
    this.reverseSort = false;
}

simpleController.prototype.addEntry = function () {
    this.collection.push(this.newData);
    this.newData = '';
};

simpleController.prototype.sort = function (prop) {
    this.sortProperty = prop;
    this.reverseSort = !this.reverseSort;
}


app.controller("simpleController", simpleController);
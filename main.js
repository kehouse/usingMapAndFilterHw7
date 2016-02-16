//question 1

var sum = 0;
var averagePrice;
  items.forEach(function(element){
    sum += element.price;
  });
  averagePrice = (sum/items.length);
  console.log(averagePrice);

document.getElementById("answer1").innerHTML = "The average price for the all items is " + "$" + averagePrice;

//question 2

var filteredPrices = items.filter(function(element){
  return element.price >= 14 && element.price <= 18;
});

var titleNames = filteredPrices.map(function(element){
  return {
    title: element.title,
    price: element.price
  };
});

var newTitleNames = "";
titleNames.forEach(function(element, index, array){
  newTitleNames += "<p>" + element.title + " : $" + element.price + "</p>";
});

document.getElementById("answer2").innerHTML = newTitleNames;

//question 3

var currencyCode = items.filter(function(element){
  return element.currency_code == "GBP";
});

var gbpCode = currencyCode.map(function(element){
  return {
    title: element.title,
    price: element.price
  };
});

var newCurrencyCode = "";
gbpCode.forEach(function(element, index, array){
  newCurrencyCode += "<p>" + element.title + " : $" + element.price + "</p>";
});

document.getElementById("answer3").innerHTML = newCurrencyCode;

//question 4

var materialsArr = items.filter(function(element){
  return element.materials.indexOf("wood") !== -1;
});

var woodMaterials = materialsArr.map(function(element){
  return {
    title: element.title,
    price: element.price
  };
});

var newWoodMaterials = "";
woodMaterials.forEach(function(element, index, array){
  newWoodMaterials += "<p>" + element.title + " : $" + element.price + "</p>";
});

document.getElementById("answer4").innerHTML = newWoodMaterials;

//question 5

var numberMaterialsArr = items.filter(function(element){
  return element.materials.length > 7;
});

var numberMaterials = numberMaterialsArr.map(function(element){
  return {
    title: element.title,
    length: element.materials.length,
    material: element.materials
  };
});

var newMaterials = "";
numberMaterials.forEach(function(element, index, array){
  newMaterials += "<p>" + element.title + " Number of Elements:" + element.length + " Elements:" + element.material + "</p>";
});

document.getElementById("answer5").innerHTML = newMaterials;

//question 6

var whoMadeArr = items.filter(function(element){
  return element.who_made == "i_did";
});

var iMadeThis = whoMadeArr.map(function(element){
  return {
    title: element.title,
  };
});

var newMaterials = "";
iMadeThis.forEach(function(element, index, array){
  newMaterials += "<p>" + element.title + "</p>";
});

document.getElementById("answer6").innerHTML = newMaterials;

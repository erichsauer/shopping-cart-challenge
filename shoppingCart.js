// fruits
const pear = "pear";
const apple = "apple";
const kiwi = "kiwi";

// meats
const beef = "beef";
const chicken = "chicken";
const lamb = "lamb";

// vegetables
const zucchini = "zucchini";
const asparagus = "asparagus";
const onion = "onion";

// cheeses
const gruyere = "gruyere";
const cheddar = "cheddar";
const feta = "feta";

// costs
const itemPrices = {
  pear: 1.99,
  apple: 1.39,
  kiwi: 3.59,
  beef: 5.79,
  chicken: 4.99,
  lamb: 7.99,
  zucchini: 2.49,
  asparagus: 4.49,
  onion: 1.99,
  gruyere: 10.89,
  cheddar: 6.49,
  feta: 2.69,
};

// shopping trip
const bags = {
  bag1: [apple, gruyere, zucchini, zucchini, beef, kiwi],
  bag2: [],
  bag3: [feta, cheddar, feta, apple, pear, lamb, asparagus, asparagus, onion],
  bag4: [kiwi, kiwi, kiwi],
  bag5: [lamb, chicken, beef, cheddar, lamb, feta, pear, apple],
  bag6: [zucchini, onion, onion, onion, asparagus, beef],
};

// helper function to flatten the bags data
function getAllGroceries() {
  // found a helpful array method to do this work!
  return Object.values(bags).flat();
}

// helper function to determine category
function getCategory(item) {
  switch (item) {
    case pear:
    case apple:
    case kiwi:
      return "fruits";
    case beef:
    case chicken:
    case lamb:
      return "meats";
    case zucchini:
    case asparagus:
    case onion:
      return "vegetables";
    case gruyere:
    case cheddar:
    case feta:
      return "cheeses";
    default:
      throw new Error(`Category not found for ${item}.`);
  }
}

// count the cheeses
function countTheCategory(category) {
  // get all items
  const groceries = getAllGroceries();
  // initialize some state
  let count = 0;

  for (let item of groceries) {
    // if the item is in the specified category it's counted
    getCategory(item) === category && count++;
  }

  return count;
}

console.log("total cheeses: ", countTheCategory("cheeses"));
// made it more generic for reusability
console.log("total meats: ", countTheCategory("meats"));
console.log("total vegetables: ", countTheCategory("vegetables"));
console.log("total fruits: ", countTheCategory("fruits"));

// calculate total cart cost
function addItAllUp() {
  const groceries = getAllGroceries();
  let total = 0;

  for (let item of groceries) {
    // reference individual price for each item and add to total cost
    total += itemPrices[item];
  }

  return total.toFixed(2);
}

console.log("total cost: ", addItAllUp());

// calculate category %
function calculateCategoryTotals() {
  const groceries = getAllGroceries();
  // create state object for easy access to each key
  let categories = {
    fruits: 0,
    meats: 0,
    vegetables: 0,
    cheeses: 0,
  };
  let total = 0;

  for (let item of groceries) {
    // find price for each item
    const itemPrice = itemPrices[item];
    // add item price to total price
    total += itemPrice;
    // add item price to individual category using helper function
    categories[getCategory(item)] += itemPrice;
  }
  // define helper function to calculate percentage
  function calculatePercent(categoryTotal) {
    return ((categoryTotal / total) * 100).toFixed(0) + "%";
  }
  // destructure categories for cleaner access
  const { fruits, meats, vegetables, cheeses } = categories;

  return {
    fruits: calculatePercent(fruits),
    meats: calculatePercent(meats),
    vegetables: calculatePercent(vegetables),
    cheeses: calculatePercent(cheeses),
  };
}

console.log("category totals: ", calculateCategoryTotals());

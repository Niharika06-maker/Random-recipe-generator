const recipes = [
  {
    name: "Spaghetti Aglio e Olio",
    desc: "Simple Italian pasta with garlic, olive oil, and red chili flakes."
  },
  {
    name: "Veggie Stir Fry",
    desc: "A quick stir fry with your favorite veggies and soy sauce."
  },
  {
    name: "Grilled Cheese Sandwich",
    desc: "Cheesy, crispy, and perfect with tomato soup."
  },
  {
    name: "Chickpea Salad",
    desc: "Healthy salad with chickpeas, tomatoes, cucumber, and lemon dressing."
  },
  {
    name: "Pancakes",
    desc: "Fluffy pancakes perfect for breakfast with syrup or berries."
  }
];

document.getElementById('generate-btn').addEventListener('click', () => {
  const random = recipes[Math.floor(Math.random() * recipes.length)];
  document.getElementById('recipe-name').textContent = random.name;
  document.getElementById('recipe-desc').textContent = random.desc;
});

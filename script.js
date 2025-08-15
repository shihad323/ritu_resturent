// Menu data
const menuItems = {

    pizza: [
  { name: "Margherita", desc: "Classic cheese and tomato", price: 8.99, img: "pizza/pizza_1.jpg" },
  { name: "Pepperoni", desc: "Cheesy with spicy pepperoni slices", price: 9.99, img: "pizza/pizza_2.jpg" },
  { name: "BBQ Chicken", desc: "Grilled chicken with tangy BBQ sauce", price: 10.49, img: "pizza/pizza_3.jpg" },
  { name: "Veggie Delight", desc: "Fresh vegetables with mozzarella", price: 8.49, img: "pizza/pizza_4.jpg" },
  { name: "Hawaiian", desc: "Ham and pineapple for a sweet twist", price: 9.49, img: "pizza/pizza_5.jpg" },
  { name: "Four Cheese", desc: "Mozzarella, cheddar, parmesan, and gouda", price: 10.99, img: "pizza/pizza_6.jpg" },
  { name: "Meat Lovers", desc: "Pepperoni, sausage, ham, and bacon", price: 11.49, img: "pizza/pizza_7.jpg" },
  { name: "Buffalo Chicken", desc: "Spicy buffalo chicken with ranch drizzle", price: 10.99, img: "pizza/pizza_8.jpg" },
  { name: "Spinach Alfredo", desc: "Creamy alfredo sauce with spinach", price: 9.99, img: "pizza/pizza_9.jpg" },
  { name: "Supreme", desc: "Loaded with meats and veggies", price: 11.99, img: "pizza/pizza_10.jpg" },
  { name: "Mushroom Lovers", desc: "Garlic mushrooms with mozzarella", price: 9.49, img: "pizza/pizza_11.jpg" },
  { name: "Pesto Chicken", desc: "Pesto sauce, chicken, and mozzarella", price: 10.99, img: "pizza/pizza_12.jpg" },
  { name: "Seafood Special", desc: "Shrimp, crab, and garlic butter sauce", price: 12.49, img: "pizza/pizza_13.jpg" },
  { name: "Tandoori Chicken", desc: "Spicy tandoori chicken with onions", price: 11.49, img: "pizza/pizza_14.jpg" },
  { name: "Cheeseburger Pizza", desc: "Beef, cheddar, and pickles on pizza", price: 10.49, img: "pizza/pizza_15.jpg" },
  { name: "Truffle Mushroom", desc: "Truffle oil with wild mushrooms", price: 13.49, img: "pizza/pizza_16.jpg" }
],


  salad: [
  { name: "Greek Salad", desc: "Feta cheese, kalamata olives, cucumber, and tomatoes", price: 6.99, img: "salad/salad_1.jpg" },
  { name: "Caesar Salad", desc: "Crisp romaine, garlic croutons, parmesan, and Caesar dressing", price: 7.49, img: "salad/salad_2.jpg" },
  { name: "Caprese Salad", desc: "Fresh mozzarella, tomatoes, basil, and balsamic glaze", price: 6.49, img: "salad/salad_3.jpg" },
  { name: "Garden Salad", desc: "Mixed greens, cucumber, tomato, and carrots with vinaigrette", price: 5.99, img: "salad/salad_4.jpg" },
  { name: "Cobb Salad", desc: "Chicken, bacon, egg, avocado, and blue cheese", price: 8.99, img: "salad/salad_5.jpg" },
  { name: "Asian Chicken Salad", desc: "Grilled chicken, sesame dressing, cabbage, and almonds", price: 8.49, img: "salad/salad_6.jpg" },
  { name: "Quinoa Salad", desc: "Quinoa, roasted vegetables, feta, and lemon dressing", price: 7.99, img: "salad/salad_7.jpg" },
  { name: "Spinach Strawberry Salad", desc: "Baby spinach, strawberries, walnuts, and poppy seed dressing", price: 7.49, img: "salad/salad_8.jpg" },
  { name: "Tuna Nicoise", desc: "Tuna, potatoes, green beans, egg, and olives", price: 9.49, img: "salad/salad_9.jpg" },
  { name: "Kale Avocado Salad", desc: "Kale, avocado, pumpkin seeds, and lemon tahini dressing", price: 7.99, img: "salad/salad_10.jpg" },
  { name: "Mediterranean Chickpea Salad", desc: "Chickpeas, cucumber, tomato, red onion, and herbs", price: 6.99, img: "salad/salad_11.jpg" }
]
,
  soup: [
  { name: "Tomato Soup", desc: "Rich, tangy tomato base with herbs", price: 4.99, img: "soup/soup_1.jpg" },
  { name: "Chicken Soup", desc: "Hearty chicken broth with vegetables", price: 5.99, img: "soup/soup_2.jpg" },
  { name: "Mushroom Soup", desc: "Creamy soup with fresh mushrooms", price: 5.49, img: "soup/soup_3.jpg" },
  { name: "Minestrone Soup", desc: "Italian vegetable soup with pasta", price: 5.79, img: "soup/soup_4.jpg" },
  { name: "Lentil Soup", desc: "Healthy lentils with spices", price: 5.29, img: "soup/soup_5.jpg" },
  { name: "Seafood Chowder", desc: "Creamy chowder with mixed seafood", price: 7.99, img: "soup/soup_6.jpg" },
  { name: "French Onion Soup", desc: "Onion soup topped with cheese toast", price: 6.49, img: "soup/soup_7.jpg" },
  { name: "Pumpkin Soup", desc: "Sweet and savory pumpkin puree", price: 5.69, img: "soup/soup_8.jpg" },
  { name: "Beef Barley Soup", desc: "Beef chunks with barley in broth", price: 6.79, img: "soup/soup_9.jpg" },
  { name: "Thai Tom Yum Soup", desc: "Spicy-sour Thai soup with shrimp", price: 7.49, img: "soup/soup_10.jpg" },
  { name: "Clam Chowder", desc: "Classic New England creamy clam soup", price: 7.29, img: "soup/soup_11.jpg" },
  { name: "Spinach Soup", desc: "Healthy creamy spinach blend", price: 5.19, img: "soup/soup_12.jpg" },
  { name: "Hot and Sour Soup", desc: "Chinese-style spicy and tangy soup", price: 6.29, img: "soup/soup_13.jpg" }
],
  dessert: [
  { name: "Chocolate Cake", desc: "Rich and moist chocolate sponge", price: 5.99, img: "dessert/dessert_1.jpg" },
  { name: "Vanilla Ice Cream", desc: "Creamy vanilla scoop", price: 3.99, img: "dessert/dessert_2.jpg" },
  { name: "Cheesecake", desc: "Classic New York style cheesecake", price: 6.49, img: "dessert/dessert_3.jpg" },
  { name: "Apple Pie", desc: "Warm apple filling with cinnamon", price: 4.99, img: "dessert/dessert_4.jpg" },
  { name: "Brownie", desc: "Fudgy chocolate brownie", price: 3.49, img: "dessert/dessert_5.jpg" },
  { name: "Tiramisu", desc: "Italian coffee-flavored dessert", price: 5.79, img: "dessert/dessert_6.jpg" },
  { name: "Panna Cotta", desc: "Creamy vanilla panna cotta", price: 5.29, img: "dessert/dessert_7.jpg" },
  { name: "Fruit Salad", desc: "Fresh seasonal fruits", price: 4.29, img: "dessert/dessert_8.jpg" },
  { name: "Mousse", desc: "Light and airy chocolate mousse", price: 4.99, img: "dessert/dessert_9.jpg" },
  { name: "Cupcake", desc: "Frosted mini cake", price: 2.99, img: "dessert/dessert_10.jpg" },
  { name: "Pudding", desc: "Creamy vanilla pudding", price: 3.49, img: "dessert/dessert_11.jpg" },
  { name: "Donut", desc: "Glazed sweet donut", price: 1.99, img: "dessert/dessert_12.jpg" },
  { name: "Baklava", desc: "Sweet layered pastry with nuts", price: 4.79, img: "dessert/dessert_13.jpg" },
  { name: "Macaron", desc: "French almond meringue cookie", price: 3.99, img: "dessert/dessert_14.jpg" }
],
};

// Rendering menu
function renderMenu(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = menuItems[category].map(item => `
    <div class="card">
      <img src="${item.img}" alt="${item.name}">
      <div class="card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="price-row">
          <span class="price">$${item.price.toFixed(2)}</span>
          <button class="order-btn" onclick="orderItem('${category}', '${item.name}')">Order</button>
        </div>
      </div>
    </div>
  `).join("");
}

// History
let history = [];
function orderItem(category, name) {
  const item = menuItems[category].find(i => i.name === name);
  history.push({ ...item, time: new Date().toLocaleString() });
  updateHistory();
}

function updateHistory() {
  const historyList = document.getElementById("historyList");
  const totalAmount = document.getElementById("totalAmount");

  historyList.innerHTML = history.map(h => `
    <div class="history-item">
      <img class="history-thumb" src="${h.img}" alt="${h.name}">
      <div class="history-info">
        <div class="history-title">${h.name}</div>
        <div class="history-desc">${h.desc}</div>
        <div class="timestamp">${h.time}</div>
      </div>
      <div class="history-price">$${h.price.toFixed(2)}</div>
    </div>
  `).join("");

  totalAmount.textContent = history.reduce((sum, i) => sum + i.price, 0).toFixed(2);
}

// Toggle sections
document.getElementById("btn-menu").addEventListener("click", () => {
  document.getElementById("section-menu").classList.remove("hidden");
  document.getElementById("section-history").classList.add("hidden");
  document.getElementById("btn-menu").classList.add("primary");
  document.getElementById("btn-history").classList.remove("primary");
});

document.getElementById("btn-history").addEventListener("click", () => {
  document.getElementById("section-menu").classList.add("hidden");
  document.getElementById("section-history").classList.remove("hidden");
  document.getElementById("btn-menu").classList.remove("primary");
  document.getElementById("btn-history").classList.add("primary");
});

// Initial load
renderMenu("pizza", "pizzaGrid");
renderMenu("salad", "saladGrid");
renderMenu("soup", "soupGrid");
renderMenu("dessert", "dessertGrid");

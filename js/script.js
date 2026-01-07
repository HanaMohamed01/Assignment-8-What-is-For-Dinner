function Recipe() {
  let recipes = [
    {
      name: "Beef Tacos",
      description: "Flavorful Mexican tacos with seasoned ground beef",
      image: "images/Beef Tacos.jpg",
      rating: 4.6,
      reviews: 278,
      prepTime: "15 min",
      cookTime: "20 min",
      servings: "4 people",
      ingredients: [
        "500g ground beef",
        "8 taco shells",
        "1 onion, diced",
        "2 tablespoons taco seasoning",
        "Shredded lettuce",
        "Diced tomatoes",
        "Shredded cheddar cheese",
        "Sour cream",
        "Salsa",
      ],
      instructions: [
        "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
        "Add diced onion and cook until softened, about 5 minutes.",
        "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
        "Warm taco shells according to package directions.",
        "Fill each shell with seasoned beef.",
        "Top with lettuce, tomatoes, cheese, sour cream, and salsa.",
      ],
      nutrition: {
        calories: "420 kcal",
        protein: "26g",
        carbs: "32g",
        fat: "20g",
        fiber: "4g",
        sodium: "780mg",
      },
      tips: [
        "Drain excess fat from beef for healthier tacos",
        "Warm shells in oven for better texture",
        "Prepare all toppings before cooking beef",
        "Use ground turkey for a lighter option",
      ],
    },
    {
      name: "Classic Margherita Pizza",
      description: "Authentic Italian pizza with fresh basil and mozzarella",
      image: "images/Classic Margherita Pizzas.jpg",
      rating: 4.8,
      reviews: 342,
      prepTime: "20 min",
      cookTime: "15 min",
      servings: "2 people",
      ingredients: [
        "1 pizza dough ball",
        "1/2 cup tomato sauce",
        "200g fresh mozzarella cheese",
        "Fresh basil leaves",
        "2 tbsp olive oil",
        "Salt and pepper",
      ],
      instructions: [
        "Preheat oven to 450°F (230°C).",
        "Roll out the pizza dough on a floured surface.",
        "Spread tomato sauce evenly over the dough.",
        "Top with slices of fresh mozzarella cheese.",
        "Bake for 10-15 minutes until crust is golden and cheese is bubbly.",
        "Garnish with fresh basil leaves and a drizzle of olive oil before serving.",
      ],
      nutrition: {
        calories: "300 kcal",
        protein: "12g",
        carbs: "35g",
        fat: "10g",
        fiber: "2g",
        sodium: "500mg",
      },
      tips: [
        "Use a pizza stone for a crispier crust",
        "Don't overload with sauce to avoid sogginess",
        "Add basil after baking to keep it fresh",
        "Use high-quality olive oil for finishing",
      ],
    },
    {
      name: "Grilled Lemon Herb Chicken",
      description: "Juicy chicken breasts marinated in lemon and herbs",
      image: "images/Grilled Lemon Herb Chicken.jpg",
      rating: 4.7,
      reviews: 189,
      prepTime: "10 min",
      cookTime: "20 min",
      servings: "4 people",
      ingredients: [
        "4 chicken breasts",
        "2 lemons, juiced and zested",
        "3 tbsp olive oil",
        "2 cloves garlic, minced",
        "1 tbsp dried oregano",
        "Salt and pepper",
        "Fresh parsley",
      ],
      instructions: [
        "In a bowl, whisk together lemon juice, zest, olive oil, garlic, oregano, salt, and pepper.",
        "Marinate chicken breasts in the mixture for at least 30 minutes.",
        "Preheat grill to medium-high heat.",
        "Grill chicken for 6-8 minutes per side, or until cooked through.",
        "Garnish with fresh parsley and lemon slices.",
      ],
      nutrition: {
        calories: "250 kcal",
        protein: "30g",
        carbs: "2g",
        fat: "12g",
        fiber: "0g",
        sodium: "300mg",
      },
      tips: [
        "Marinate longer for deeper flavor",
        "Let chicken rest for 5 minutes after grilling",
        "Use a meat thermometer to ensure doneness",
        "Serve with grilled vegetables",
      ],
    },
    {
      name: "Vegetarian Stir-Fry",
      description: "Healthy and colorful vegetable stir-fry with tofu",
      image: "images/Vegetarian Stir-Fry.jpg",
      rating: 4.5,
      reviews: 156,
      prepTime: "15 min",
      cookTime: "10 min",
      servings: "3 people",
      ingredients: [
        "1 block firm tofu, cubed",
        "2 cups broccoli florets",
        "1 red bell pepper, sliced",
        "1 carrot, sliced",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1 tsp ginger, minced",
        "2 cloves garlic, minced",
        "Cooked rice for serving",
      ],
      instructions: [
        "Press tofu to remove excess water, then cube.",
        "Heat sesame oil in a wok or large pan over high heat.",
        "Add tofu and stir-fry until golden. Remove from pan.",
        "Add garlic and ginger, cook for 30 seconds.",
        "Add vegetables and stir-fry for 5-7 minutes until tender-crisp.",
        "Return tofu to pan, add soy sauce, and toss to combine. Serve over rice.",
      ],
      nutrition: {
        calories: "350 kcal",
        protein: "15g",
        carbs: "45g",
        fat: "14g",
        fiber: "6g",
        sodium: "900mg",
      },
      tips: [
        "Cut veggies to uniform size for even cooking",
        "Don't overcrowd the pan",
        "Use high heat for a smoky flavor",
        "Add cashews for extra crunch",
      ],
    },
    {
      name: "Chocolate Chip Cookies",
      description: "Classic homemade cookies with gooey chocolate chips",
      image: "images/Chocolate Chip Cookies.jpg",
      rating: 4.9,
      reviews: 512,
      prepTime: "15 min",
      cookTime: "12 min",
      servings: "24 cookies",
      ingredients: [
        "2 1/4 cups all-purpose flour",
        "1 tsp baking soda",
        "1 cup butter, softened",
        "3/4 cup sugar",
        "3/4 cup brown sugar",
        "1 tsp vanilla extract",
        "2 large eggs",
        "2 cups chocolate chips",
      ],
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "Combine flour and baking soda in a small bowl.",
        "Beat butter, sugar, brown sugar, and vanilla in large mixer bowl until creamy.",
        "Add eggs, one at a time, beating well after each addition.",
        "Gradually beat in flour mixture. Stir in chocolate chips.",
        "Drop by rounded tablespoon onto ungreased baking sheets.",
        "Bake for 9 to 11 minutes or until golden brown. Cool on wire racks.",
      ],
      nutrition: {
        calories: "180 kcal",
        protein: "2g",
        carbs: "22g",
        fat: "9g",
        fiber: "1g",
        sodium: "110mg",
      },
      tips: [
        "Use room temperature ingredients",
        "Chill dough for 1 hour for thicker cookies",
        "Don't overbake; they continue cooking on the sheet",
        "Use sea salt on top for flavor contrast",
      ],
    },
  ];
  return recipes;
}

function randomRecipe() {
  const recipes = Recipe();
  const randomIndex = Math.floor(Math.random() * recipes.length);
  const currentRecipe = recipes[randomIndex];
  console.log(currentRecipe);
  displayRandomRecipe(currentRecipe);
}

function displayRandomRecipe(recipe) {
  var cartona = ` 
    <section class="container my-5">
      <div class="card border-0 shadow-lg overflow-hidden rounded-4">
       <div class="row g-0">
          <div class="col-lg-5 position-relative">
            <img
              src="${recipe.image}"
              class="img-fluid h-100 w-100 object-fit-cover min-h-400"
              alt="${recipe.name}"
            />

            <div
              class="position-absolute top-0 start-0 m-4 bg-white px-3 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2"
            >
              <i class="fa-solid fa-star text-warning"></i>
              <span class="fw-bold">${recipe.rating}</span>
              <span class="text-muted small">(${recipe.reviews} reviews)</span>
            </div>

            <div
              class="position-absolute bottom-0 start-50 translate-middle-x mb-4 w-75"
            >
              <div
                class="bg-white p-3 rounded-4 shadow-sm d-flex justify-content-between text-center px-4"
              >
                <div class="d-flex flex-column align-items-center">
                  <i class="fa-regular fa-clock text-warning mb-1 fs-5"></i>
                  <div class="text-muted text-xs">Prep Time</div>
                  <div class="fw-bold small">${recipe.prepTime}</div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-fire-burner text-danger mb-1 fs-5"></i>
                  <div class="text-muted text-xs">Cook Time</div>
                  <div class="fw-bold small">${recipe.cookTime}</div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-users text-primary mb-1 fs-5"></i>
                  <div class="text-muted text-xs">Servings</div>
                  <div class="fw-bold small">${recipe.servings}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 p-4 p-lg-5">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span
                  class="badge bg-success-subtle text-success rounded-pill px-3 py-2 me-2"
                  >Easy</span
                >
                <span
                  class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2"
                  >American</span
                >
              </div>
              <div class="d-flex gap-2">
                <button
                  class="btn btn-light rounded-2 text-warning bg-orange-subtle hover-orange"
                >
                  <i class="fa-solid fa-bookmark text-orange"></i>
                </button>
                <button
                  class="btn btn-light rounded-2 text-warning bg-orange-subtle hover-orange"
                >
                  <i class="fa-solid fa-share-nodes text-orange"></i>
                </button>
              </div>
            </div>

            <h2 class="fw-bold mb-2 display-6">${recipe.name}</h2>
            <p class="text-muted mb-4">
              ${recipe.description}
            </p>

            <ul
              class="nav nav-tabs border-0 mb-4 gap-4"
              id="recipeTabs"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active px-0 pb-2"
                  id="ingredients-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ingredients"
                  type="button"
                  role="tab"
                  aria-controls="ingredients"
                  aria-selected="true"
                >
                  Ingredients
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link px-0 pb-2"
                  id="instructions-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#instructions"
                  type="button"
                  role="tab"
                  aria-controls="instructions"
                  aria-selected="false"
                >
                  Instructions
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link px-0 pb-2"
                  id="nutrition-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nutrition"
                  type="button"
                  role="tab"
                  aria-controls="nutrition"
                  aria-selected="false"
                >
                  Nutrition
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link px-0 pb-2"
                  id="tips-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tips"
                  type="button"
                  role="tab"
                  aria-controls="tips"
                  aria-selected="false"
                >
                  Chef's Tips
                </button>
              </li>
            </ul>

            <div class="tab-content" id="recipeTabsContent">
              <div
                class="tab-pane fade show active"
                id="ingredients"
                role="tabpanel"
                aria-labelledby="ingredients-tab"
                tabindex="0"
              >
                <div class="p-4 rounded-4 mb-4 bg-beige scrollable-content">
                  ${recipe.ingredients
                    .map(
                      (ingredient, index) => `
                  <div class="d-flex align-items-center mb-3">
                    <div
                      class="text-white rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0 fw-bold bg-orange step-circle-sm"
                    >
                    ${index + 1}
                    </div>
                    <span class="text-dark">${ingredient}</span>
                  </div>`
                    )
                    .join("")}
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="instructions"
                role="tabpanel"
                aria-labelledby="instructions-tab"
                tabindex="0"
              >
                <div class="pe-2 mb-4 scrollable-content">
                  ${recipe.instructions
                    .map(
                      (instruction, index) => `
                  <div class="d-flex mb-4">
                    <div
                      class="flex-shrink-0 d-flex justify-content-center align-items-center text-white fw-bold rounded-4 bg-orange step-circle-lg"
                    >
                      ${index + 1}
                    </div>
                    <div class="ms-3">
                      <p class="mb-0 text-muted">
                        ${instruction}
                      </p>
                    </div>
                  </div>`
                    )
                    .join("")}
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nutrition"
                role="tabpanel"
                aria-labelledby="nutrition-tab"
                tabindex="0"
              >
                <div class="row g-3 mb-4">
                  <div class="col-6">
                    <div
                      class="p-3 rounded-4 d-flex align-items-center justify-content-between bg-light"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <div
                          class="rounded-circle d-flex align-items-center justify-content-center nutrient-icon nutrient-calories"
                        >
                          <i class="fa-solid fa-fire"></i>
                        </div>
                        <span class="text-muted small">Calories</span>
                      </div>
                      <span class="fw-bold">${recipe.nutrition.calories}</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div
                      class="p-3 rounded-4 d-flex align-items-center justify-content-between bg-light"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <div
                          class="rounded-circle d-flex align-items-center justify-content-center nutrient-icon nutrient-protein"
                        >
                          <i class="fa-solid fa-dumbbell"></i>
                        </div>
                        <span class="text-muted small">Protein</span>
                      </div>
                      <span class="fw-bold">${recipe.nutrition.protein}</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div
                      class="p-3 rounded-4 d-flex align-items-center justify-content-between bg-light"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <div
                          class="rounded-circle d-flex align-items-center justify-content-center nutrient-icon nutrient-carbs"
                        >
                          <i class="fa-solid fa-wheat-awn"></i>
                        </div>
                        <span class="text-muted small">Carbohydrates</span>
                      </div>
                      <span class="fw-bold">${recipe.nutrition.carbs}</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div
                      class="p-3 rounded-4 d-flex align-items-center justify-content-between bg-light"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <div
                          class="rounded-circle d-flex align-items-center justify-content-center nutrient-icon nutrient-fat"
                        >
                          <i class="fa-solid fa-droplet"></i>
                        </div>
                        <span class="text-muted small">Fat</span>
                      </div>
                      <span class="fw-bold">${recipe.nutrition.fat}</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div
                      class="p-3 rounded-4 d-flex align-items-center justify-content-between bg-light"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <div
                          class="rounded-circle d-flex align-items-center justify-content-center nutrient-icon nutrient-fiber"
                        >
                          <i class="fa-solid fa-seedling"></i>
                        </div>
                        <span class="text-muted small">Fiber</span>
                      </div>
                      <span class="fw-bold">${recipe.nutrition.fiber}</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div
                      class="p-3 rounded-4 d-flex align-items-center justify-content-between bg-light"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <div
                          class="rounded-circle d-flex align-items-center justify-content-center nutrient-icon nutrient-sodium"
                        >
                          <i class="fa-solid fa-cube"></i>
                        </div>
                        <span class="text-muted small">Sodium</span>
                      </div>
                      <span class="fw-bold">${recipe.nutrition.sodium}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="tips"
                role="tabpanel"
                aria-labelledby="tips-tab"
                tabindex="0"
              >
                <div class="d-flex flex-column gap-3 mb-4">
                  ${recipe.tips
                    .map(
                      (tip) => `
                  <div
                    class="p-3 rounded-3 d-flex align-items-center gap-3 tip-card"
                  >
                    <div
                      class="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center flex-shrink-0 step-circle-sm"
                    >
                      <i class="fa-solid fa-check" style="font-size: 12px"></i>
                    </div>
                    <span class="text-dark"
                      >${tip}</span
                    >
                  </div>`
                    )
                    .join("")}
                </div>
            </div>
            </div>
            <button
              class="btn btn-primary-orange w-auto px-4 py-2 fw-bold rounded-3 border-0"
              onclick="randomRecipe()"
            >
              <i class="fa-solid fa-rotate-right me-2"></i> Try Another Recipe
            </button>
          </div>
        </div>
         
      </section>
        `;
  document.getElementById("recipe-container").innerHTML = cartona;
}

randomRecipe();

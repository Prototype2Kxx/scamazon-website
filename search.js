let products = [];
let additionalSearchOptions = [];

async function loadSearchData() {
  try {
    const productsResponse = await fetch("products.json");
    products = await productsResponse.json();

    const categoriesResponse = await fetch("categories.json");
    additionalSearchOptions = await categoriesResponse.json();
  } catch (error) {
    console.error("Error loading search data:", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  console.log("Search script loaded!");
  await loadSearchData();

  const searchInput = document.getElementById("search-input");
  const searchSuggestions = document.getElementById("search-suggestions");

  function updateSuggestions() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      searchSuggestions.style.display = "none";
      return;
    }

    const productMatches = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    const additionalMatches = additionalSearchOptions
      .filter((option) =>
        option.keywords.some((keyword) => query.includes(keyword))
      )
      .map((match) => ({ name: match.keywords[0], page: match.page }));

    const matches = [...productMatches, ...additionalMatches];

    if (matches.length === 0) {
      searchSuggestions.style.display = "none";
      return;
    }

    searchSuggestions.innerHTML = matches
      .map((match) => `<a href="${match.page}">${match.name}</a>`)
      .join("");

    searchSuggestions.style.display = "block";
  }

  searchInput.addEventListener("input", updateSuggestions);

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-bar")) {
      searchSuggestions.style.display = "none";
    }
  });

  searchSuggestions.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});


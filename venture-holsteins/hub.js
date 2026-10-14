(() => {
  const config = window.VENTURE_HOLSTEINS_CONFIG;
  const card = document.querySelector(".choice.sale");
  if (!config || !card || config.tagSale.active) return;

  card.classList.add("coming-soon");
  card.removeAttribute("href");
  card.setAttribute("aria-disabled", "true");
  card.querySelector(".availability").textContent = config.tagSale.closedLabel;
  card.querySelector("p").textContent = config.tagSale.closedMessage;
  card.querySelector("b").textContent = "Catalog coming soon";
})();

(() => {
  const API = "https://ventureherdmanager-api-gkgscwf2e6dte8dg.centralus-01.azurewebsites.net/api/SaleCatalog";
  const card = document.querySelector(".choice.sale");
  if (!card) return;
  const close = message => { card.classList.add("coming-soon"); card.querySelector(".availability").textContent = "Coming soon"; card.querySelector("p").textContent = message || "The next Venture Holsteins tag sale is being prepared."; card.querySelector("b").textContent = "Sale details coming soon"; };
  fetch(API, { cache: "no-store" }).then(response => response.ok ? response.json() : Promise.reject()).then(catalog => catalog.isLive ? card.classList.remove("coming-soon") : close(catalog.comingSoonMessage)).catch(() => close());
})();

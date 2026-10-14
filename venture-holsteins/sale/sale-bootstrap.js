(() => {
  const API = "https://ventureherdmanager-api-gkgscwf2e6dte8dg.centralus-01.azurewebsites.net/api/SaleCatalog";
  const close = settings => {
    document.body.innerHTML = `<header class="site-head"><a href="../" class="vh-logo" aria-label="Venture Holsteins home"><img src="../../assets/img/venture-holsteins/venture-holsteins-logo-transparent.png" alt="Venture Holsteins"></a></header><main class="sale-closed"><div><span>Venture Holsteins</span><h1>Coming soon</h1><p>${settings?.comingSoonMessage || "The next Venture Holsteins tag sale is being prepared."}</p><a href="../">Back to Venture Holsteins</a></div></main>`;
  };
  fetch(API, { cache: "no-store" })
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(catalog => {
      if (!catalog.isLive) return close(catalog);
      window.VENTURE_SALE_DATA = { sale: { name: catalog.saleName, status: "Open", dates: catalog.dates || "", location: catalog.location || "", notice: catalog.notice || "", terms: catalog.terms || "", contactUrl: catalog.contactUrl || "" }, lots: catalog.lots || [] };
      const app = document.createElement("script"); app.src = "sale.js?v=20261014-3"; document.body.appendChild(app);
    })
    .catch(() => close({ comingSoonMessage: "The sale catalog is temporarily unavailable. Please check back shortly." }));
})();

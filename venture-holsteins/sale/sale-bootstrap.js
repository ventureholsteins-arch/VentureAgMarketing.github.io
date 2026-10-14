(() => {
  const settings = window.VENTURE_HOLSTEINS_CONFIG?.tagSale;
  if (!settings?.active) {
    document.body.innerHTML = `
      <header class="site-head">
        <a href="../" class="vh-logo" aria-label="Venture Holsteins home"><img src="../../assets/img/venture-holsteins/venture-holsteins-logo-transparent.png" alt="Venture Holsteins"></a>
      </header>
      <main class="sale-closed"><div>
        <span>Venture Holsteins</span>
        <h1>${settings?.closedLabel || "Coming soon"}</h1>
        <p>${settings?.closedMessage || "The next tag sale is being prepared."}</p>
        <a href="../">Back to Venture Holsteins</a>
      </div></main>`;
    return;
  }

  const data = document.createElement("script");
  data.src = "sale-data.js";
  data.onload = () => {
    const app = document.createElement("script");
    app.src = "sale.js";
    document.body.appendChild(app);
  };
  document.body.appendChild(data);
})();

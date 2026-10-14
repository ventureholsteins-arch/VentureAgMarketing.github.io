(() => {
  const data = window.VENTURE_SALE_DATA, $ = s => document.querySelector(s);
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const label = t => ({animal:"Live Animal", embryo:"Embryos", ivf:"IVF Session"}[t] || t);
  let filter = "all";

  $("#title").textContent = data.brand.saleTitle; $("#eyebrow").textContent = data.brand.eyebrow;
  $("#intro").textContent = data.brand.intro; $("#farm").textContent = data.brand.farmName; $("#location").textContent = data.brand.location;
  document.querySelectorAll("[data-contact]").forEach(a => a.href = data.brand.contactUrl);

  function render() {
    const items = data.listings.filter(x => filter === "all" || x.type === filter);
    $("#listings").innerHTML = items.map(x => `<article class="card ${x.featured ? "featured" : ""}">
      <button class="photo" data-open="${esc(x.id)}"><img src="${esc(x.image)}" alt="${esc(x.name)}" loading="lazy"><span>${esc(x.lot)}</span>${x.status === "preview" ? "<b>Page preview</b>" : ""}</button>
      <div class="card__copy"><p class="kind">${esc(label(x.type))}</p><h3>${esc(x.name)}</h3><p>${esc(x.headline)}</p><div class="card__foot"><strong>${esc(x.price)}</strong><button data-open="${esc(x.id)}">View details →</button></div></div>
    </article>`).join("");
    $("#empty").hidden = items.length > 0;
  }

  function open(id) {
    const x = data.listings.find(y => y.id === id); if (!x) return;
    const details = x.details.map(d => `<div><dt>${esc(d[0])}</dt><dd>${esc(d[1])}</dd></div>`).join("");
    const thumbs = x.gallery.map((im,i) => `<button class="thumb ${i ? "" : "active"}" data-img="${esc(im)}"><img src="${esc(im)}" alt="${esc(x.name)} photo"></button>`).join("");
    $("#dialogBody").innerHTML = `<div class="dialog-grid"><div class="gallery"><img class="main-img" id="mainImg" src="${esc(x.image)}" alt="${esc(x.name)}"><div class="thumbs">${thumbs}</div></div>
      <div class="dialog-copy"><p class="kind">${esc(label(x.type))} · ${esc(x.lot)}</p><h2>${esc(x.name)}</h2>${x.status === "preview" ? '<p class="preview">Design preview — not currently offered for sale.</p>' : ""}<p class="lead">${esc(x.description)}</p>
      <dl>${details}</dl><p class="block-label">Pedigree</p><div class="pedigree"><div><span>Sire</span><strong>${esc(x.pedigree.sire)}</strong></div><div><span>Dam</span><strong>${esc(x.pedigree.dam)}</strong><small>${esc(x.pedigree.mgs)} × ${esc(x.pedigree.mgd)}</small></div></div>
      <p class="block-label">Highlights</p><ul>${x.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul><div class="dialog-actions"><a class="button gold" href="${esc(data.brand.contactUrl)}" target="_blank" rel="noopener">Ask about this offering</a>${x.videoUrl ? `<a class="button outline" href="${esc(x.videoUrl)}" target="_blank">Watch video</a>` : ""}</div></div></div>`;
    $("#listingDialog").showModal();
  }

  document.addEventListener("click", e => {
    const f = e.target.closest("[data-filter]"); if (f) { filter = f.dataset.filter; document.querySelectorAll("[data-filter]").forEach(b => b.classList.toggle("active", b === f)); render(); }
    const o = e.target.closest("[data-open]"); if (o) open(o.dataset.open);
    const t = e.target.closest("[data-img]"); if (t) { $("#mainImg").src = t.dataset.img; document.querySelectorAll("[data-img]").forEach(b => b.classList.toggle("active", b === t)); }
  });
  $("#dialogClose").onclick = () => $("#listingDialog").close();
  $("#listingDialog").onclick = e => { if (e.target.id === "listingDialog") e.target.close(); };
  render();
})();

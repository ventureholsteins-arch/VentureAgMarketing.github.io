(() => {
  const API = "https://ventureherdmanager-api-gkgscwf2e6dte8dg.centralus-01.azurewebsites.net/api/SaleCatalog";
  const sale = document.querySelector(".choice.sale");
  const close = message => { if(!sale)return; sale.classList.add("coming-soon"); sale.querySelector(".availability").textContent = "Coming soon"; sale.querySelector("p").textContent = message || "The next Venture Holsteins tag sale is being prepared."; sale.querySelector("b").textContent = "Sale details coming soon"; };
  fetch(API,{cache:"no-store"}).then(r=>r.ok?r.json():Promise.reject()).then(c=>{
    const h=c.homePage;
    if(h){const copy=document.querySelector('.farm-copy'),gen=document.querySelector('.choice.genetics');copy.querySelector('span').textContent=h.eyebrow||'';copy.querySelector('h1').textContent=h.title||'';copy.querySelector('p').textContent=h.intro||'';if(h.image)document.querySelector('.farm-photo').style.backgroundImage=`url("${h.image.replace(/"/g,'')}")`;gen.querySelector('h3').textContent=h.geneticsTitle||'Embryos & IVF';gen.querySelector('p').textContent=h.geneticsText||''}
    c.isLive?sale?.classList.remove("coming-soon"):close(c.comingSoonMessage)
  }).catch(()=>close());
})();

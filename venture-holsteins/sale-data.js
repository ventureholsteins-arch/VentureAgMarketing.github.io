window.VENTURE_SALE_DATA = {
  brand: {
    farmName: "Venture Holsteins",
    saleTitle: "The Venture Collection",
    eyebrow: "Private Treaty · IVF Opportunities · Tag Sales",
    intro: "Elite genetics, honest cow families, and the next generation selected with purpose.",
    location: "South Dakota",
    contactUrl: "https://www.facebook.com/ventureagmarketing"
  },
  // Preview content only. Change status to "available" when a listing is truly for sale.
  listings: [
    {
      id: "animal-preview", type: "animal", status: "preview", featured: true,
      name: "Your Next Feature Animal", lot: "Tag Sale", price: "Contact for price",
      headline: "A full feature built for the animal buyers need to remember.",
      description: "Showcase a heifer, cow, or choice lot with her story, pedigree, photos, video, genomic highlights, health details, and terms in one clean place.",
      image: "../assets/img/sale-showcase/show-heifer.jpg",
      gallery: ["../assets/img/sale-showcase/show-heifer.jpg", "../assets/img/sale-showcase/show-cow.jpg"],
      videoUrl: "",
      details: [["Offering", "Live animal"], ["Format", "Private treaty / tag sale"], ["Location", "South Dakota"], ["Availability", "Preview only"]],
      pedigree: { sire: "Sire name", dam: "Dam name", mgs: "Maternal grandsire", mgd: "Maternal granddam" },
      highlights: ["Classification or genomic highlights", "Show results", "Freshening, due date, or reproductive status"]
    },
    {
      id: "embryo-preview", type: "embryo", status: "preview", featured: false,
      name: "Elite Embryo Package", lot: "Embryos", price: "Contact for price",
      headline: "Sell the mating—not just a line of text.",
      description: "Present the donor, sire, maternal line, grade, quantity, storage location, shipping details, and supporting media together.",
      image: "../assets/img/sale-showcase/donor-cow.jpg", gallery: ["../assets/img/sale-showcase/donor-cow.jpg"], videoUrl: "",
      details: [["Offering", "Embryos"], ["Quantity", "Configure per listing"], ["Type", "IVF or conventional"], ["Availability", "Preview only"]],
      pedigree: { sire: "Embryo sire", dam: "Donor dam", mgs: "Donor's sire", mgd: "Next dam" },
      highlights: ["Embryo grades and quantity", "Storage and shipping terms", "Donor and maternal-family media"]
    },
    {
      id: "ivf-preview", type: "ivf", status: "preview", featured: false,
      name: "IVF Session Opportunity", lot: "IVF Session", price: "Inquire",
      headline: "A donor opportunity buyers can understand quickly.",
      description: "Set the session date, guarantee, sire choices, buyer responsibilities, location, and terms while keeping the donor's story front and center.",
      image: "../assets/img/sale-showcase/show-cow.jpg",
      gallery: ["../assets/img/sale-showcase/show-cow.jpg", "../assets/img/sale-showcase/donor-cow.jpg"], videoUrl: "",
      details: [["Offering", "IVF session"], ["Session date", "Set when scheduled"], ["Guarantee", "Configure terms"], ["Availability", "Preview only"]],
      pedigree: { sire: "Donor sire", dam: "Donor dam", mgs: "Maternal grandsire", mgd: "Maternal granddam" },
      highlights: ["Available sire choices", "Guarantee and flush terms", "Donor video and records"]
    }
  ]
};

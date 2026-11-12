// Product catalogue: edit this file to add, remove or change frames and lenses.
//
// Every product has:
//   name     shown under the photo
//   group    "sunglasses", "optical", "budget" or "lenses" (decides which section it appears in)
//   price    a number in rand, or null to show "Ask in store". One price covers every colour.
//   enquiry  how the item is written in the WhatsApp enquiry message
//
// A frame with ONE colour also has:
//   images   photo paths. The first is the thumbnail; extra paths become angles in the lightbox
//   alt      description of the photo for screen readers
//
// A frame with SEVERAL colours has a "colors" list instead. Each colour has:
//   name     shown under the dots, e.g. "Burgundy"
//   swatch   the dot colour: "#7a1f2b", or two colours for a two-tone frame: ["#dddbca", "#d8452d"]
//   images   that colour's photos (first = thumbnail, extra paths = angles)
//            leave "images" out to use the product's own "images" for that colour
//
// To add a frame: save its photos in images/, copy an entry, paste it in the list and change the values.
// To add an angle: add another path to that colour's "images".
// To add a colour: copy one of the { name, swatch, images } blocks inside "colors".

const PRODUCTS = [

  // ---------- SUNGLASSES ----------
  {
    name: "Polaroid Shield",
    group: "sunglasses",
    price: 2000,
    images: ["images/polaroid-1.jpg", "images/polaroid-2.jpg", "images/polaroid-3.jpg"],
    alt: "Polaroid shield sunglasses, purple mirrored lens",
    enquiry: "Polaroid Shield sunglasses"
  },
  {
    name: "Fossil Aviator",
    group: "sunglasses",
    price: 2000,
    enquiry: "Fossil Aviator sunglasses",
    colors: [
      {
        name: "Brown gradient",
        swatch: "#6b5040",
        images: ["images/fossil-aviator-brown-1.jpg", "images/fossil-aviator-brown-2.jpg", "images/fossil-aviator-brown-3.jpg"],
        alt: "Fossil aviator sunglasses, gold frame, brown gradient lens"
      },
      {
        name: "Blue-grey gradient",
        swatch: "#5f6584",
        images: ["images/fossil-aviator-bluegrey-1.jpg", "images/fossil-aviator-bluegrey-2.jpg", "images/fossil-aviator-bluegrey-3.jpg", "images/fossil-aviator-bluegrey-4.jpg"],
        alt: "Fossil aviator sunglasses, gold frame, blue-grey gradient lens"
      }
    ]
  },
  {
    name: "Under Armour Gameday Jr",
    group: "sunglasses",
    price: 2000,
    images: ["images/under-armour-1.jpg", "images/under-armour-2.jpg"],
    alt: "Under Armour Gameday Jr youth shield sunglasses, green mirrored lens",
    enquiry: "Under Armour Gameday Jr (youth) sunglasses"
  },
  {
    name: "Carrera Aviator",
    group: "sunglasses",
    price: 2000,
    images: ["images/carrera.jpg"],
    alt: "Carrera aviator sunglasses, matte black and gold",
    enquiry: "Carrera Aviator sunglasses"
  },
  {
    name: "Carrera Rimless",
    group: "sunglasses",
    price: 2000,
    images: ["images/carrera-rimless-1.jpg", "images/carrera-rimless-2.jpg", "images/carrera-rimless-3.jpg", "images/carrera-rimless-4.jpg"],
    alt: "Carrera rimless sunglasses, gold frame with havana temples, green gradient lens",
    enquiry: "Carrera Rimless sunglasses"
  },
  {
    name: "Fossil Square",
    group: "sunglasses",
    price: 2000,
    images: ["images/fossil-square-1.jpg", "images/fossil-square-2.jpg", "images/fossil-square-3.jpg", "images/fossil-square-4.jpg"],
    alt: "Fossil square sunglasses, black frame, grey gradient lens",
    enquiry: "Fossil Square sunglasses"
  },
  {
    name: "Privé Revaux Clear",
    group: "sunglasses",
    price: 2000,
    images: ["images/reveaux-clear.jpg"],
    alt: "Privé Revaux clear cat-eye sunglasses, polarized",
    enquiry: "Privé Revaux Clear sunglasses"
  },

  // ---------- OPTICAL FRAMES ----------
  {
    name: "Dsquared2",
    group: "optical",
    price: 2000,
    images: ["images/dsquared2-1.jpg", "images/dsquared2-2.jpg", "images/dsquared2-3.jpg"],
    alt: "Dsquared2 black acetate aviator optical frame with gold detail",
    enquiry: "Dsquared2 optical frame"
  },
  {
    name: "Moschino",
    group: "optical",
    price: 2000,
    images: ["images/moschino.jpg"],
    alt: "Moschino optical frame, black square acetate",
    enquiry: "Moschino optical frame"
  },
  {
    name: "Privé Revaux Blue Light",
    group: "optical",
    price: 2000,
    enquiry: "Privé Revaux blue-light optical frame",
    colors: [
      {
        name: "Burgundy",
        swatch: "#6b1f27",
        images: ["images/reveaux-burgundy.jpg"],
        alt: "Privé Revaux blue-light optical frame, burgundy"
      },
      {
        name: "Olive",
        swatch: "#2a2c24",
        images: ["images/reveaux-olive.jpg"],
        alt: "Privé Revaux blue-light optical frame, olive"
      }
    ]
  },

  // ---------- BUDGET FRAMES ----------
  {
    name: "Teardrop Aviator",
    group: "budget",
    price: 2000,
    enquiry: "Budget Teardrop Aviator (JD 9003) frame",
    colors: [
      {
        name: "White & red",
        swatch: ["#dddbca", "#d8452d"],
        images: ["images/teardrop-white-red-1.jpg", "images/teardrop-white-red-2.jpg", "images/teardrop-white-red-3.jpg"],
        alt: "Teardrop aviator frame, white with red rim"
      },
      {
        name: "Pink & mint",
        swatch: ["#f2a6c2", "#a6dcc3"],
        images: ["images/teardrop-pink-mint-1.jpg", "images/teardrop-pink-mint-2.jpg"],
        alt: "Teardrop aviator frame, pink with mint rim"
      }
    ]
  },
  {
    name: "Lightning Cat-Eye",
    group: "budget",
    price: 2000,
    images: ["images/lightning-cat-eye-1.jpg", "images/lightning-cat-eye-2.jpg", "images/lightning-cat-eye-3.jpg"],
    alt: "Red metal cat-eye frame with lightning-bolt arms",
    enquiry: "Budget Lightning Cat-Eye frame"
  },
  {
    name: "Geometric Aviator",
    group: "budget",
    price: 2000,
    images: ["images/blue-geometric-1.jpg", "images/blue-geometric-2.jpg"],
    alt: "Blue geometric aviator frame with green tips",
    enquiry: "Budget Geometric Aviator frame"
  },

  // ---------- CONTACT LENSES ----------
  // All six colours share the box photo until each colour has its own photo.
  // To add one: put its photo in images/ and add  images: ["images/your-photo.jpg"]  to that colour.
  {
    name: "NewHue Colour Lenses",
    group: "lenses",
    price: 2000,
    images: ["images/newhue.jpg"],
    enquiry: "NewHue Colour Contact Lenses",
    colors: [
      { name: "Blue",  swatch: "#3d7bd1" },
      { name: "Grey",  swatch: "#8d949b" },
      { name: "Green", swatch: "#4f9a62" },
      { name: "Brown", swatch: "#7b5238" },
      { name: "Aqua",  swatch: "#4fc3c8" },
      { name: "Hazel", swatch: "#9a7b3f" }
    ]
  }
];

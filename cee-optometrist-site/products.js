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
    name: "Fossil Aviator Brown",
    group: "sunglasses",
    price: 2000,
    images: ["images/fossil-aviator-brown-1.jpg", "images/fossil-aviator-brown-2.jpg", "images/fossil-aviator-brown-3.jpg"],
    alt: "Fossil aviator sunglasses, gold frame, brown gradient lens",
    enquiry: "Fossil Aviator sunglasses (brown gradient lens)"
  },
  {
    name: "Fossil Aviator Blue-Grey",
    group: "sunglasses",
    price: 2000,
    images: ["images/fossil-aviator-bluegrey-1.jpg", "images/fossil-aviator-bluegrey-2.jpg", "images/fossil-aviator-bluegrey-3.jpg", "images/fossil-aviator-bluegrey-4.jpg"],
    alt: "Fossil aviator sunglasses, gold frame, blue-grey gradient lens",
    enquiry: "Fossil Aviator sunglasses (blue-grey gradient lens)"
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
    name: "Carrera Aviator Matte",
    group: "sunglasses",
    price: 2000,
    images: ["images/carrera.jpg"],
    alt: "Carrera aviator sunglasses, matte black and gold",
    enquiry: "Carrera Aviator sunglasses (matte black and gold)"
  },
  {
    name: "Carrera Aviator Gloss",
    group: "sunglasses",
    price: 2000,
    images: ["images/carrera-black-1.jpg", "images/carrera-black-2.jpg", "images/carrera-black-3.jpg"],
    alt: "Carrera aviator sunglasses, gloss black with grey gradient polarized lenses",
    enquiry: "Carrera Aviator sunglasses (gloss black)"
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
    name: "Privé Revaux Cat-Eye Clear",
    group: "sunglasses",
    price: 2000,
    images: ["images/reveaux-cat-clear-1.jpg", "images/reveaux-cat-clear-2.jpg", "images/reveaux-cat-clear-3.jpg"],
    alt: "Privé Revaux clear cat-eye sunglasses with blue polarized lenses",
    enquiry: "Privé Revaux clear cat-eye sunglasses"
  },
  {
    name: "Privé Revaux Cat-Eye Black",
    group: "sunglasses",
    price: 2000,
    images: ["images/reveaux-cat-black-1.jpg", "images/reveaux-cat-black-2.jpg"],
    alt: "Privé Revaux black cat-eye sunglasses with dark lenses",
    enquiry: "Privé Revaux black cat-eye sunglasses"
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
    name: "Moschino Black",
    group: "optical",
    price: 2000,
    images: ["images/moschino.jpg"],
    alt: "Moschino optical frame, black square acetate",
    enquiry: "Moschino optical frame (black)"
  },
  {
    name: "Moschino Green",
    group: "optical",
    price: 2000,
    images: ["images/moschino-green-1.jpg", "images/moschino-green-2.jpg"],
    alt: "Moschino optical frame, green front with grey temples",
    enquiry: "Moschino optical frame (green and grey)"
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
        swatch: "#5f7d68",
        images: ["images/reveaux-olive-1.jpg", "images/reveaux-olive-2.jpg", "images/reveaux-olive-3.jpg", "images/reveaux-olive-4.jpg"],
        alt: "Privé Revaux blue-light optical frame, olive"
      }
    ]
  },
  {
    name: "FUBU Grey",
    group: "optical",
    price: 2000,
    images: ["images/fubu-1.jpg", "images/fubu-2.jpg", "images/fubu-3.jpg"],
    alt: "FUBU optical frame, grey crystal acetate with gold wing detail",
    enquiry: "FUBU optical frame (grey crystal)"
  },
  {
    name: "Karl Lagerfeld",
    group: "optical",
    price: 2000,
    images: ["images/karl-lagerfeld-1.jpg", "images/karl-lagerfeld-2.jpg", "images/karl-lagerfeld-3.jpg"],
    alt: "Karl Lagerfeld optical frame, blue crystal acetate",
    enquiry: "Karl Lagerfeld optical frame"
  },
  {
    name: "Tom Ford Black",
    group: "optical",
    price: 2000,
    images: ["images/tom-ford-1.jpg", "images/tom-ford-2.jpg", "images/tom-ford-3.jpg"],
    alt: "Tom Ford optical frame, black acetate with gold T detail",
    enquiry: "Tom Ford optical frame (black)"
  },
  {
    name: "Tom Ford Red",
    group: "optical",
    price: 2000,
    images: ["images/tom-ford-red-1.jpg", "images/tom-ford-red-2.jpg", "images/tom-ford-red-3.jpg"],
    alt: "Tom Ford optical frame, red front with tortoiseshell temples",
    enquiry: "Tom Ford optical frame (red and tortoiseshell)"
  },
  {
    name: "Prada",
    group: "optical",
    price: 2000,
    images: ["images/prada-1.jpg", "images/prada-2.jpg", "images/prada-3.jpg"],
    alt: "Prada optical frame, black acetate cat-eye with triangle logo on the temples",
    enquiry: "Prada optical frame"
  },


  {
    name: "FUBU Clear Round",
    group: "optical",
    price: 2000,
    images: ["images/fubu-clear-1.jpg", "images/fubu-clear-2.jpg", "images/fubu-clear-3.jpg"],
    alt: "Round optical frame, clear acetate with gold hinge detail",
    enquiry: "FUBU clear round optical frame"
  },
  {
    name: "Leo Grey Tortoise",
    group: "optical",
    price: 2000,
    images: ["images/leo-grey-tortoise-1.jpg", "images/leo-grey-tortoise-2.jpg", "images/leo-grey-tortoise-3.jpg"],
    alt: "Leo cat-eye frame, grey tortoiseshell with pale grey brow",
    enquiry: "Leo grey tortoise optical frame"
  },
  {
    name: "Leo Navy Square",
    group: "optical",
    price: 2000,
    images: ["images/leo-navy-1.jpg", "images/leo-navy-2.jpg", "images/leo-navy-3.jpg"],
    alt: "Leo square frame, navy blue acetate",
    enquiry: "Leo navy square optical frame"
  },
  {
    name: "Leo Blue Metal",
    group: "optical",
    price: 2000,
    images: ["images/leo-blue-metal-1.jpg", "images/leo-blue-metal-2.jpg", "images/leo-blue-metal-3.jpg"],
    alt: "Leo round metal frame, blue and silver",
    enquiry: "Leo blue metal optical frame"
  },
  {
    name: "Leo Red & Gold",
    group: "optical",
    price: 2000,
    images: ["images/leo-red-gold-1.jpg", "images/leo-red-gold-2.jpg", "images/leo-red-gold-3.jpg"],
    alt: "Leo browline frame, gold metal with black and red brow",
    enquiry: "Leo red and gold optical frame"
  },
  {
    name: "Leo Teal & Gold",
    group: "optical",
    price: 2000,
    images: ["images/leo-teal-gold-1.jpg", "images/leo-teal-gold-2.jpg", "images/leo-teal-gold-3.jpg"],
    alt: "Leo browline frame, gold metal with teal and orange brow",
    enquiry: "Leo teal and gold optical frame"
  },
  {
    name: "Leo Purple Tortoise",
    group: "optical",
    price: 2000,
    images: ["images/leo-purple-tortoise-1.jpg", "images/leo-purple-tortoise-2.jpg", "images/leo-purple-tortoise-3.jpg"],
    alt: "Leo cat-eye frame, purple and blue tortoiseshell with a purple brow",
    enquiry: "Leo purple tortoise optical frame"
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
  {
    name: "Black & Gold Round",
    group: "budget",
    price: 2000,
    images: ["images/black-gold-round-1.jpg", "images/black-gold-round-2.jpg", "images/black-gold-round-3.jpg"],
    alt: "Round optical frame, black front with gold metal bridge and temples",
    enquiry: "Budget black and gold round frame"
  },
  {
    name: "Tortoise Round",
    group: "budget",
    price: 2000,
    images: ["images/tortoise-round-1.jpg", "images/tortoise-round-2.jpg", "images/tortoise-round-3.jpg"],
    alt: "Round acetate optical frame, tortoiseshell with an orange rim",
    enquiry: "Tortoise round budget frame"
  },
  {
    name: "Lilac Square",
    group: "budget",
    price: 2000,
    images: ["images/lilac-square-1.jpg", "images/lilac-square-2.jpg", "images/lilac-square-3.jpg"],
    alt: "Square acetate optical frame, clear with a lilac rim and lilac temples",
    enquiry: "Lilac square budget frame"
  },
  {
    name: "Royal Blue Square",
    group: "budget",
    price: 2000,
    images: ["images/royal-blue-1.jpg", "images/royal-blue-2.jpg", "images/royal-blue-3.jpg", "images/royal-blue-4.jpg"],
    alt: "Square acetate optical frame, grey with a royal blue rim and temples",
    enquiry: "Royal blue square budget frame"
  },
  {
    name: "Neon Pink Cat-Eye",
    group: "budget",
    price: 2000,
    images: ["images/neon-pink-1.jpg", "images/neon-pink-2.jpg", "images/neon-pink-3.jpg"],
    alt: "Cat-eye acetate optical frame, clear with a neon pink rim",
    enquiry: "Neon pink cat-eye budget frame"
  },
  {
    name: "Amber Aviator",
    group: "budget",
    price: 2000,
    images: ["images/amber-aviator-1.jpg", "images/amber-aviator-2.jpg", "images/amber-aviator-3.jpg"],
    alt: "Double-bridge acetate optical frame, amber and dark brown",
    enquiry: "Amber aviator budget frame"
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
const backendUrl = `http://wordpress.local`;

const baseUrl = `${backendUrl}/wp-json/rae/v1`;

const products = [
  { id: 1, name: "Eve maxi Dress", price: 80, image: "./images/Eve.jpg" },
  {
    id: 2,
    name: "Aduke black dress with aso-oke Rose",
    price: 80,
    image: "./images/Aduke.jpg",
  },
  {
    id: 3,
    name: "FUNMILAYO reflective maxi dress",
    price: 120,
    image: "./images/Funmilayo.jpg",
  },
  {
    id: 4,
    name: "Olufayo Black Maxi reflective flare dress",
    price: 89,
    image: "./images/Olufayo.jpeg",
  },
  {
    id: 5,
    name: "DamDam luxe blazer",
    price: 150,
    image: "./images/DamDam.jpeg",
  },
  {
    id: 6,
    name: "Temilade Gradient Laser Texture maxi dress",
    price: 120,
    image: "./images/Temilade.jpeg",
  },
  {
    id: 7,
    name: "Grandeur short black dress with white flower like design",
    price: 80,
    image: "./images/Grandeur.jpg",
  },
  {
    id: 8,
    name: "Ifelodun maxi dress with asooke pocket and bush tassel",
    price: 100,
    image: "./images/Ifelodun.jpg",
  },
  {
    id: 9,
    name: "IREPODUN maxi dress",
    price: 200,
    image: "./images/Irepodun.jpg",
  },
  {
    id: 10,
    name: "MORENIKE maxi dress with bush tassel",
    price: 100,
    image: "./images/Morenike.jpg",
  },
  { id: 11, name: "RERE maxi dress", price: 100, image: "./images/Rere.jpg" },
];

const wc_consumer_key = "ck_3cdd536f1cf80a0c990144523d7306c6c9425604";
const wc_consumer_secret = "cs_c1c3093d0ae38c0c1082990404408e59d98ad0f8";

//array of image objects with src, alt  and text
const images = [
  {
    src: "./images/Aduke.jpg",
    alt: "Aduke",
    text: "Aduke black dress with aso-oke Rose",
  },
  {
    src: "./images/Ifelodun.jpg",
    alt: "Ifelodun",
    text: "Ifelodun Maxi Dress with asooke pocket and bush tassel",
  },
  {
    src: "./images/Eve.jpg",
    alt: "Eve",
    text: "Eve Maxi Dress",
  },
  {
    src: "./images/Rere.jpg",
    alt: "Rere",
    text: "Rere Maxi",
  },
  {
    src: "./images/Funmilayo.jpg",
    alt: "Funmilayo",
    text: "FUNMILAYO reflective maxi dress",
  },
];

export {
  baseUrl,
  backendUrl,
  images,
  products,
  wc_consumer_key,
  wc_consumer_secret,
};

const products = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    description: "Premium flagship with A17 Bionic chip.",
    price: 1199,
    details: "The iPhone 15 Pro features a titanium frame, A17 Bionic chip, 6.1-inch Super Retina XDR display, and advanced camera system with ProRAW support.",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg"
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Ultra",
    description: "Flagship with 200MP camera.",
    price: 1299,
    details: "The Galaxy S23 Ultra comes with Snapdragon 8 Gen 2, 6.8-inch QHD+ display, 5000mAh battery, and a 200MP primary camera with S-Pen support.",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg"
  },
  {
    id: "3",
    name: "Google Pixel 8 Pro",
    description: "AI-powered photography phone.",
    price: 999,
    details: "Google Pixel 8 Pro offers Tensor G3 chip, 6.7-inch OLED display, improved Night Sight, AI editing tools, and stock Android with 7 years of updates.",
    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-pro-1.jpg"
  },
  {
    id: "4",
    name: "OnePlus 11",
    description: "Fast performance with Hasselblad camera.",
    price: 799,
    details: "OnePlus 11 features Snapdragon 8 Gen 2, 120Hz AMOLED display, 100W fast charging, and Hasselblad-tuned triple camera system.",
    image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-2.jpg"
  },
  {
    id: "5",
    name: "Xiaomi 13 Pro",
    description: "Leica-powered camera flagship.",
    price: 899,
    details: "Xiaomi 13 Pro includes Snapdragon 8 Gen 2, 6.73-inch AMOLED, 120W fast charging, and Leica partnership for stunning photography.",
    image: "https://i.postimg.cc/dt4w6h6T/xiaomi13pro.jpg"
  },
  {
    id: "6",
    name: "Oppo Find X6 Pro",
    description: "Premium curved display smartphone.",
    price: 1099,
    details: "The Oppo Find X6 Pro has a 6.82-inch AMOLED, Snapdragon 8 Gen 2, triple 50MP cameras, and 100W fast charging support.",
    image: "https://i.postimg.cc/4N6KZQFf/oppofindx6pro.jpg"
  },
  {
    id: "7",
    name: "Vivo X90 Pro",
    description: "Zeiss optics and flagship camera.",
    price: 949,
    details: "Vivo X90 Pro offers a 1-inch Sony sensor, Dimensity 9200 chip, Zeiss optics, 120Hz AMOLED display, and 120W fast charging.",
    image: "https://i.postimg.cc/5tTjkggr/vivox90pro.jpg"
  },
  {
    id: "8",
    name: "Asus ROG Phone 7",
    description: "Gaming beast with Snapdragon 8 Gen 2.",
    price: 1099,
    details: "ROG Phone 7 is designed for gamers with a 165Hz AMOLED display, AirTriggers, 6000mAh battery, and gaming accessories support.",
    image: "https://i.postimg.cc/4yCt5XMX/rogphone7.jpg"
  },
  {
    id: "9",
    name: "Sony Xperia 1 V",
    description: "Cinematic display and pro camera.",
    price: 1199,
    details: "Sony Xperia 1 V offers a 4K OLED display, professional camera features with manual controls, and Snapdragon 8 Gen 2 performance.",
    image: "https://i.postimg.cc/3NL9mn0W/xperia1v.jpg"
  },
  {
    id: "10",
    name: "Realme GT Neo 5",
    description: "Fastest charging phone ever.",
    price: 699,
    details: "Realme GT Neo 5 features 240W fast charging, Snapdragon 8+ Gen 1, RGB lighting on the back, and AMOLED display.",
    image: "https://i.postimg.cc/nVtz9GrS/realmegtneo5.jpg"
  },
  {
    id: "11",
    name: "iQOO 11",
    description: "Flagship killer with Snapdragon 8 Gen 2.",
    price: 749,
    details: "iQOO 11 comes with a 2K AMOLED display, 144Hz refresh rate, Snapdragon 8 Gen 2, and 120W fast charging.",
    image: "https://i.postimg.cc/ZKzD12jh/iqoo11.jpg"
  },
  {
    id: "12",
    name: "Honor Magic 5 Pro",
    description: "Flagship with curved display.",
    price: 899,
    details: "Honor Magic 5 Pro includes Snapdragon 8 Gen 2, curved AMOLED, 100x zoom camera, and 5100mAh battery.",
    image: "https://i.postimg.cc/65JrCBcT/honormagic5pro.jpg"
  },
  {
    id: "13",
    name: "Motorola Edge 40 Pro",
    description: "Stock Android flagship.",
    price: 849,
    details: "Motorola Edge 40 Pro features Snapdragon 8 Gen 2, 165Hz OLED display, 68W charging, and clean Android experience.",
    image: "https://i.postimg.cc/mkcJZj5V/motoedge40pro.jpg"
  },
  {
    id: "14",
    name: "Nothing Phone (2)",
    description: "Unique Glyph interface design.",
    price: 699,
    details: "Nothing Phone (2) features Glyph lights, Snapdragon 8+ Gen 1, OLED display, and clean NothingOS software.",
    image: "https://i.postimg.cc/3rT8R6Fx/nothingphone2.jpg"
  },
  {
    id: "15",
    name: "Huawei P60 Pro",
    description: "Leica camera powerhouse.",
    price: 999,
    details: "Huawei P60 Pro features a curved OLED display, RYYB sensor camera, and powerful zoom capabilities.",
    image: "https://i.postimg.cc/Ls8Hb8Zf/huaweip60pro.jpg"
  },
  {
    id: "16",
    name: "Redmi Note 12 Pro+",
    description: "Affordable flagship with 200MP camera.",
    price: 499,
    details: "Redmi Note 12 Pro+ offers Dimensity 1080, 120Hz AMOLED, 200MP main camera, and 120W charging.",
    image: "https://i.postimg.cc/4d1QyV1N/redminote12proplus.jpg"
  },
  {
    id: "17",
    name: "Poco F5 Pro",
    description: "Budget flagship performance.",
    price: 549,
    details: "Poco F5 Pro features Snapdragon 8+ Gen 1, AMOLED display, 67W charging, and gaming performance at a budget price.",
    image: "https://i.postimg.cc/L8Xp9bzt/pocof5pro.jpg"
  },
  {
    id: "18",
    name: "ZTE Nubia Z50 Ultra",
    description: "Bezel-less flagship phone.",
    price: 899,
    details: "ZTE Nubia Z50 Ultra has an under-display camera, Snapdragon 8 Gen 2, AMOLED panel, and large 5000mAh battery.",
    image: "https://i.postimg.cc/vm7cRnZj/nubiaz50ultra.jpg"
  },
  {
    id: "19",
    name: "Infinix Zero Ultra",
    description: "Affordable phone with 180W charging.",
    price: 499,
    details: "Infinix Zero Ultra includes 180W charging, Dimensity 920, curved AMOLED display, and 200MP main camera.",
    image: "https://i.postimg.cc/Bb3bqjCS/infinixzeroultra.jpg"
  },
  {
    id: "20",
    name: "Tecno Phantom X2 Pro",
    description: "Pop-out portrait camera phone.",
    price: 599,
    details: "Tecno Phantom X2 Pro comes with Dimensity 9000, retractable portrait lens, AMOLED display, and sleek design.",
    image: "https://i.postimg.cc/L5rC5FjM/tecnophantomx2pro.jpg"
  }
];

export default products;

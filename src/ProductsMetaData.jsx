function generateRandomArray(n, max) {
  // Create an array with numbers from 0 to max (inclusive)
  const allNumbers = Array.from({ length: max + 1 }, (_, index) => index);

  // Fisher-Yates shuffle to randomize the array
  for (let i = allNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
  }

  // Return the first n elements of the shuffled array
  return allNumbers.slice(0, n);
}

const products = [
  {
    id: 0,
    name: "Acer Laptop",
    title:
      "Acer Predator Helios 16 Gaming Laptop | 13th Gen Intel Core i7-13700HX | NVIDIA GeForce RTX 4060 | 16 2560 x 1600 165Hz G-SYNC Display | 16GB DDR5 | 1TB Gen 4 SSD | Killer Wi-Fi 6E | PH16-71-74UU",
    rating: "★★★★✰",
    price: "1,80,990.00",
    mrp: "2,07,999.00",
    discount: "11%",
    isEMI: true,
    EMI: "6,885",
    delivery_day: "Friday, 24 November",
    specs: [
      { title: "Brand", desc: "Acer" },
      { title: "Model Name", desc: "Predator Helios 16" },
      { title: "Screen Size", desc: "16 Inches" },
      { title: "Colour", desc: "grey" },
      { title: "CPU Model", desc: "Core i7" },
      { title: "RAM Memory Installed Size", desc: "16 GB" },
      { title: "Operating System", desc: "Windows 11 Home" },
      { title: "Graphics Card Desciption", desc: "Thin" },
      { title: "Graphics Coprocessor", desc: "Dedicated" },
    ],
    about: [
      "Next Gen Performance: Intel Core i7-13700HX processor Mobile Intel HM770 PCH Chipset",
      "Internal Specifications: Dual-channel DDR5 SDRAM support 16 (2*8) GB of DDR5 system memory, Upgradable up to 32 GB of DDR5 system memory.Storage: 1 TB, PCIe Gen4, 16 Gb/s, NVMe",
      "Display:16.0 display with IPS (In-Plane Switching) technology, WQXGA 2560 x 1600, high-brightness (500 nits) Acer ComfyView LED-backlit TFT LCD,supporting 165 Hz, Grey to Grey 3 ms by Overdrive, Nvidia Advanced Optimus capable",
      "Graphics: NVIDIA GeForce RTX 4060 with 8 GB of dedicated GDDR6 VRAM",
      "Other Features: NVIDIA Advance Optimus, 5th Gen Aeroblade 3D Fan, Full Function Thunderbolt-4",
    ],
  },
  {
    id: 1,
    name: "Apple Phone",
    title: "Apple iPhone 14 Pro Max (1 TB) - Deep Purple",
    rating: "★★★★✰",
    price: "1,89,900",
    mrp: "2,19,900.00",
    discount: "17%",
    isEMI: true,
    EMI: "9,208",
    delivery_day: "Monday, 27 November",
    specs: [
      { title: "Brand", desc: "Apple" },
      { title: "Model Name", desc: "iPhone" },
      { title: "Network Servce Provider", desc: "Unlocked for All Carriers" },
      { title: "Colour", desc: "deep purple" },
      { title: "Operating System", desc: "IOS" },
      { title: "Cellular Technology", desc: "5G" },
    ],
    about: [
      "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion",
      "Dynamic Island, a magical new way to interact with iPhone",
      "48MP Main camera for up to 4x greater resolution",
      "Action mode for smooth, steady, handheld videos",
      "All-day battery life and up to 29 hours of video playback",
      "Vital safety technology — Crash Detection can detect a severe car crash and call for help",
    ],
  },
  {
    id: 2,
    name: "Dell Laptop",
    title:
      "Dell Inspiron 15 Pro Laptop | 12th Gen Intel Core i5-12600H | NVIDIA GeForce GTX 3050 | 15.6-inch FHD Display | 8GB DDR4 | 512GB SSD | Windows 10",
    rating: "★★★★★",
    price: "95,999.00",
    mrp: "1,12,499.00",
    discount: "15%",
    isEMI: true,
    EMI: "3,650",
    delivery_day: "Wednesday, 22 November",
    specs: [
      { title: "Brand", desc: "Dell" },
      { title: "Model Name", desc: "Inspiron 15 Pro" },
      { title: "Screen Size", desc: "15.6 Inches" },
      { title: "Colour", desc: "silver" },
      { title: "CPU Model", desc: "Core i5" },
      { title: "RAM Memory Installed Size", desc: "8 GB" },
      { title: "Operating System", desc: "Windows 10" },
      { title: "Graphics Card Desciption", desc: "Discrete" },
      { title: "Graphics Coprocessor", desc: "NVIDIA GTX 3050" },
    ],
    about: [
      "Powerful Performance: Intel Core i5-12600H processor with high-speed processing capabilities.",
      "Memory and Storage: 8GB DDR4 RAM for seamless multitasking, 512GB SSD for fast data access.",
      "Vibrant Display: 15.6-inch FHD display for clear visuals and an immersive viewing experience.",
      "Graphics: NVIDIA GeForce GTX 3050 with 4GB GDDR5 VRAM for smooth gaming and graphics-intensive tasks.",
      "Operating System: Pre-installed Windows 10 for a user-friendly experience.",
    ],
  },
  {
    id: 3,
    name: "HP Laptop",
    title:
      "HP Spectre x360 Convertible Laptop | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 13.3-inch 4K OLED Display | 16GB DDR4 | 1TB SSD | Windows 11",
    rating: "★★★★★",
    price: "1,49,999.00",
    mrp: "1,69,999.00",
    discount: "12%",
    isEMI: true,
    EMI: "5,750",
    delivery_day: "Monday, 20 November",
    specs: [
      { title: "Brand", desc: "HP" },
      { title: "Model Name", desc: "Spectre x360" },
      { title: "Screen Size", desc: "13.3 Inches" },
      { title: "Colour", desc: "black" },
      { title: "CPU Model", desc: "Core i7" },
      { title: "RAM Memory Installed Size", desc: "16 GB" },
      { title: "Operating System", desc: "Windows 11" },
      { title: "Graphics Card Desciption", desc: "Integrated" },
      { title: "Graphics Coprocessor", desc: "Intel Iris Xe Graphics" },
    ],
    about: [
      "Versatile Design: Convertible laptop with a 360-degree hinge for multiple usage modes.",
      "High-Resolution Display: 13.3-inch 4K OLED display for stunning visuals and vibrant colors.",
      "Powerful Performance: Intel Core i7-1165G7 processor for fast and efficient computing.",
      "Ample Storage: 1TB SSD for ample storage space and fast data access.",
      "Premium Build: Sleek and durable design with a premium aluminum finish.",
    ],
  },
  {
    id: 4,
    name: "Samsung Refrigerator",
    title:
      "Samsung Refrigerator | 23 cu. ft. | Stainless Steel | Digital Inverter Compressor | LED Lighting | Energy Star Certified",
    rating: "★★★★★",
    price: "65,499.00",
    mrp: "74,999.00",
    discount: "13%",
    isEMI: true,
    EMI: "2,500",
    delivery_day: "Thursday, 23 November",
    specs: [
      { title: "Brand", desc: "Samsung" },
      { title: "Capacity", desc: "23 cu. ft." },
      { title: "Color", desc: "Stainless Steel" },
      { title: "Compressor Type", desc: "Digital Inverter" },
      { title: "Lighting", desc: "LED" },
      { title: "Certification", desc: "Energy Star Certified" },
    ],
    about: [
      "Ample Storage: 23 cubic feet capacity to store a large quantity of food and beverages.",
      "Energy Efficiency: Digital Inverter Compressor for energy-efficient and quiet operation.",
      "Bright Interior: LED lighting for better visibility and energy savings.",
      "Modern Design: Stainless steel finish for a sleek and commercial look.",
      "Environmentally Friendly: Energy Star Certified for reduced energy consumption.",
    ],
  },
  {
    id: 5,
    name: "WP Washing Machine",
    title:
      "Whirlpool Washing Machine | 15kg Capacity | Front Load | In-Built Heater | 12 Wash Programs | Digital Display",
    rating: "★★★★✰",
    price: "48,999.00",
    mrp: "54,999.00",
    discount: "10%",
    isEMI: true,
    EMI: "2,000",
    delivery_day: "Tuesday, 21 November",
    specs: [
      { title: "Brand", desc: "Whirlpool" },
      { title: "Capacity", desc: "15kg" },
      { title: "Loading Type", desc: "Front Load" },
      { title: "Heater", desc: "In-Built" },
      { title: "Wash Programs", desc: "12" },
      { title: "Display", desc: "Digital" },
    ],
    about: [
      "Large Capacity: 15kg capacity suitable for commercial laundry needs.",
      "Efficient Washing: Front load design for better cleaning and water efficiency.",
      "Temperature Control: In-built heater for hot water wash and better stain removal.",
      "Versatile Programs: 12 wash programs to accommodate various fabric types.",
      "User-Friendly: Digital display for easy program selection and monitoring.",
    ],
  },
  {
    id: 6,
    name: "Panasonic Oven",
    title:
      "Panasonic Microwave Oven | 1.6 cu. ft. | 1200W | Touch Control Panel | Stainless Steel Interior | Multi-Stage Cooking",
    rating: "★★★★★",
    price: "12,999.00",
    mrp: "14,999.00",
    discount: "13%",
    isEMI: true,
    EMI: "550",
    delivery_day: "Monday, 20 November",
    specs: [
      { title: "Brand", desc: "Panasonic" },
      { title: "Capacity", desc: "1.6 cu. ft." },
      { title: "Power", desc: "1200W" },
      { title: "Control Panel", desc: "Touch" },
      { title: "Interior", desc: "Stainless Steel" },
      { title: "Cooking Modes", desc: "Multi-Stage" },
    ],
    about: [
      "Spacious Interior: 1.6 cubic feet capacity for cooking large dishes.",
      "High Power: 1200W for quick and efficient cooking.",
      "Easy Operation: Touch control panel for intuitive operation.",
      "Durable Interior: Stainless steel interior for easy cleaning and longevity.",
      "Versatile Cooking: Multi-stage cooking for precise control over cooking stages.",
    ],
  },
  {
    id: 7,
    name: "Sony Headset",
    title: "Sony Noise-Canceling Wireless Headset WH-1000XM4",
    rating: "★★★★★",
    price: "₹24,999.00",
    mrp: "29,999.00",
    discount: "17%",
    isEMI: true,
    EMI: "950",
    delivery_day: "Wednesday, 22 November",
    specs: [
      { title: "Brand", desc: "Sony" },
      { title: "Model", desc: "WH-1000XM4" },
      { title: "Type", desc: "Over-Ear Wireless" },
      { title: "Noise-Canceling", desc: "Yes" },
      { title: "Battery Life", desc: "Up to 30 hours" },
      { title: "Connectivity", desc: "Bluetooth 5.0" },
      { title: "Color", desc: "Black" },
    ],
    about: [
      "Industry-Leading Noise Cancellation: Advanced noise-canceling technology for a distraction-free listening experience.",
      "Exceptional Sound Quality: High-resolution audio with powerful and clear sound reproduction.",
      "Long Battery Life: Up to 30 hours of playtime on a single charge for all-day use.",
      "Comfortable Design: Plush ear cushions and a lightweight build for extended wearing comfort.",
      "Smart Touch Controls: Intuitive touch controls for easy music playback and call management.",
      "Bluetooth Connectivity: Seamless pairing with Bluetooth-enabled devices for wireless convenience.",
    ],
  },
  {
    id: 8,
    name: "Fossil Smartwatch",
    title: "Fossil Gen 6 Smartwatch",
    rating: "★★★★★",
    price: "21,499.00",
    mrp: "24,999.00",
    discount: "14%",
    isEMI: true,
    EMI: "825",
    delivery_day: "Thursday, 23 November",
    specs: [
      { title: "Brand", desc: "Fossil" },
      { title: "Model", desc: "Gen 6" },
      { title: "Type", desc: "Smartwatch" },
      { title: "Display", desc: "1.28-inch AMOLED" },
      { title: "Compatibility", desc: "iOS, Android" },
      { title: "Connectivity", desc: "Bluetooth, Wi-Fi" },
      { title: "Water Resistance", desc: "5 ATM" },
      { title: "Color", desc: "Silver" },
    ],
    about: [
      "Advanced Smart Features: Fossil Gen 6 with cutting-edge smartwatch capabilities.",
      "Vibrant Display: 1.28-inch AMOLED display for clear visuals and vibrant colors.",
      "Cross-Platform Compatibility: Works seamlessly with both iOS and Android devices.",
      "Connectivity Options: Bluetooth and Wi-Fi connectivity for versatile usage.",
      "Water-Resistant Design: 5 ATM water resistance for protection against splashes and rain.",
      "Customizable Straps: Interchangeable straps to match your style and outfit.",
      "Fitness Tracking: Built-in fitness features for tracking your workouts and health.",
    ],
  },
  {
    id: 9,
    name: "Samsonite Laptop Bag",
    title: "Samsonite Pro-DLX 5 Laptop Backpack",
    rating: "★★★★★",
    price: "5,999.00",
    mrp: "6,999.00",
    discount: "14%",
    isEMI: true,
    EMI: "230",
    delivery_day: "Friday, 24 November",
    specs: [
      { title: "Brand", desc: "Samsonite" },
      { title: "Model", desc: "Pro-DLX 5" },
      { title: "Type", desc: "Laptop Backpack" },
      { title: "Material", desc: "Durable Nylon" },
      { title: "Laptop Compartment", desc: "Up to 15.6 inches" },
      { title: "Color", desc: "Black" },
      { title: "Number of Compartments", desc: "Multiple" },
      { title: "Special Features", desc: "USB Charging Port, TSA Lock" },
    ],
    about: [
      "Premium Quality: Samsonite Pro-DLX 5 made with high-quality and durable nylon material.",
      "Spacious Design: Multiple compartments for organized storage of laptop, documents, and accessories.",
      "Laptop Protection: Dedicated compartment for laptops up to 15.6 inches for secure and padded storage.",
      "Convenient Charging: Built-in USB charging port for on-the-go device charging.",
      "Secure Travel: TSA-approved lock for added security during travel.",
      "Comfortable Wear: Padded shoulder straps and back panel for a comfortable carrying experience.",
      "Professional Look: Stylish black design suitable for both casual and professional settings.",
    ],
  },
];

export { products, generateRandomArray };
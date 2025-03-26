import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CaretDown, 
  CurrencyEur, 
  CurrencyDollar, 
  CurrencyGbp,
  SortAscending,
  MagnifyingGlass,
  MagnifyingGlass as SearchIcon,
  SlidersHorizontal,
  ArrowRight
} from "@phosphor-icons/react";

const products = [
  {
    name: "Air Force 1 Low",
    price: 18,
    category: "Shoes - Air Force 1",
    image: "/images/products/af1low.png",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7256045657&ref=200339526"
  },
  {
    name: "Air Jordan 4 Retro Military Black",
    price: 43,
    category: "Shoes - Jordan",
    image: "/images/products/j4militaryblack.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7242724094&ref=200339526"
  },
  {
    name: "Nike Dunk Low (Panda, Medium Olive, Navy Blue, UNC, White Navy, Rose Whisper, Medium Curry)",
    price: 40,
    category: "Shoes - Dunks",
    image: "/images/products/pandadunk.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425609465&ref=200339526"
  },
  {
    name: "Jordan 1 Low Olive Travis Scott (1:1 Batch)",
    price: 81,
    category: "Shoes - Jordan",
    image: "/images/products/j1lowolive.png",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7233507898&ref=200339526"
  },
  {
    name: "Jordan 1 Low Reverse Mocha Travis Scott (1:1 Batch)",
    price: 81,
    category: "Shoes - Jordan",
    image: "/images/products/j1lowreversemocha.png",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7233507898&ref=200339526"
  },
  {
    name: "Yeezy Slide (LW/PK Batch)",
    price: 17,
    category: "Shoes - Yeezy/Adidas",
    image: "/images/products/yeezyslide.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427518780&ref=200339526"
  },
  {
    name: "Air Jordan 1 Low (Travis Scott, Fragment x Travis Scott, Phantom)",
    price: 81.51,
    category: "Shoes - Jordan",
    image: "/images/products/j1low.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7233507898&ref=200339526"
  },
  {
    name: "Air Jordan 1 Retro High OG (Chicago 2015, Chicago 2022, Pine Green, Black Obsidian, Reverse Mocha, Off-White UNC, Off-White Chicago)",
    price: 45.04,
    category: "Shoes - Jordan",
    image: "/images/products/j1high.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425693931&ref=200339526"
  },
  {
    name: "Air Jordan 1 Retro High OG (Travis Scott, Travis Scott Fragment)",
    price: 68.51,
    category: "Shoes - Jordan",
    image: "/images/products/j1high.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7233507898&ref=200339526"
  },
  {
    name: "Air Jordan 3 (20+ colorways)",
    price: 32.86,
    category: "Shoes - Jordan",
    image: "/images/products/j3.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7316295611&ref=200339526&redirected=true"
  },
  {
    name: "Air Jordan 4 (Black Cat, Thunder, Lightning, Taupe Haze, White Cement, Infrared, Blank Canvas, Military Black, PSG, White Oreo, Photon Dust SE, Red Thunder, Motorsport, UNC, SB Pine Green, Fire Red, Metallic Red, Midnight Navy, Cool Grey, Michigan, Black Canvas, Guava)",
    price: 58.39,
    category: "Shoes - Jordan",
    image: "/images/products/j4.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425709761&ref=200339526"
  },
  // Dunks
  {
    name: "Nike SB Dunk Low (Strange Love, White Lobster, Purple Lobster, Orange Lobster, Panda Pigeon, Sean Cliver, Mummy Halloween, Jarritos, Travis Scott, Chunky Dunky)",
    price: 39.20,
    category: "Shoes - Dunks",
    image: "/images/products/sbdunk.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425609465&ref=200339526"
  },
  {
    name: "Nike Dunk Low Off-White (Michigan, Gray/Red, White/Green, #1, #2, #8, #10, #19, #38, #50)",
    price: 40.60,
    category: "Shoes - Dunks",
    image: "/images/products/dunk_ow.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425609465&ref=200339526"
  },

  // Air Force 1
  {
    name: "Nike Air Force 1 Low (Nocta)",
    price: 37.80,
    category: "Shoes - Air Force 1",
    image: "/images/products/af1_ts.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427571862&ref=200339526"
  },
  {
    name: "Nike Air Force 1 Low x Supreme (Black, White, Flax)",
    price: 41.23,
    category: "Shoes - Air Force 1",
    image: "/images/products/af1_supreme.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427571862&ref=200339526"
  },
  {
    name: "Nike Air Force 1 Low x Tiffany & Co. (Regular & Reverse)",
    price: 47.95,
    category: "Shoes - Air Force 1",
    image: "/images/products/af1_tiffany.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427571862&ref=200339526"
  },
  {
    name: "Nike Air Force 1 'Skeleton'",
    price: 49.48,
    category: "Shoes - Air Force 1",
    image: "/images/products/af1_skeleton.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427374386&ref=200339526"
  },

  // Yeezy/Adidas
  {
    name: "Yeezy Boost 350 (8+ colorways)",
    price: 34.00,
    category: "Shoes - Yeezy/Adidas",
    image: "/images/products/y350.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427471590&ref=200339526"
  },
  {
    name: "Yeezy 500 (7+ colorways)",
    price: 35.52,
    category: "Shoes - Yeezy/Adidas",
    image: "/images/products/y500.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425713699&ref=200339526"
  },
  {
    name: "Yeezy 700 V2 (6+ colorways)",
    price: 48.21,
    category: "Shoes - Yeezy/Adidas",
    image: "/images/products/y700.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427561958&ref=200339526"
  },
  {
    name: "Yeezy Foam Runner (Moon Gray, Sand, Red Vermillon, MX Sand Grey, Stone Sage, Onyx, Desert Sand, MX Cinder)",
    price: 20.04,
    category: "Shoes - Yeezy/Adidas",
    image: "/images/products/yfoam.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425955523&ref=200339526"
  },
  {
    name: "Adidas Samba",
    price: 35.52,
    category: "Shoes - Yeezy/Adidas",
    image: "/images/products/samba_prem.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425707749&ref=200339526"
  },
  {
    name: "Adidas Campus (All colorways)",
    price: 24.74,
    category: "Shoes - Yeezy/Adidas",
    image: "/images/products/campus.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427524434&ref=200339526&update=true"
  },

  // Designer
  {
    name: "Louis Vuitton Trainers (Monogram, Denim, Maxi - 10+ colorways)",
    price: 73.58,
    category: "Shoes - Designer",
    image: "/images/products/lv_trainer.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427581756&ref=200339526"
  },
  {
    name: "Dior B30 Sneaker (10+ colorways)",
    price: 35.52,
    category: "Shoes - Designer",
    image: "/images/products/dior_b30.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425615289&ref=200339526"
  },
  {
    name: "Balenciaga Track (14+ colorways)",
    price: 58.99,
    category: "Shoes - Designer",
    image: "/images/products/balenciaga_track.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425468533&ref=200339526"
  },
  {
    name: "Lanvin Sneakers (8+ colorways)",
    price: 58.99,
    category: "Shoes - Designer",
    image: "/images/products/lanvin.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425629055&ref=200339526"
  },

  // New Balance
  {
    name: "New Balance 530",
    price: 34.89,
    category: "Shoes - New Balance",
    image: "/images/products/nb530.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425701861&ref=200339526"
  },
  {
    name: "New Balance 2002r (16+ colorways)",
    price: 36.54,
    category: "Shoes - New Balance",
    image: "/images/products/nb2002r.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425607553&ref=200339526"
  },
  {
    name: "Stussy T-Shirt (20+ colorways)",
    price: 12.56,
    category: "Tops - Tees",
    image: "/images/products/stussy_basic.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427512896&ref=200339526"
  },
  {
    name: "Nike x Stussy T-Shirt (Black/White)",
    price: 12.05,
    category: "Tops - Tees",
    image: "/images/products/nike_stussy_bw.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427499064&ref=200339526"
  },
  {
    name: "Nike x Stussy T-Shirt (White/Black)",
    price: 12.05,
    category: "Tops - Tees",
    image: "/images/products/nike_stussy_wb.png",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427499064&ref=200339526"
  },
  {
    name: "Nike x Stussy T-Shirt (Green/White)",
    price: 12.05,
    category: "Tops - Tees",
    image: "/images/products/nike_stussy_gw.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427499064&ref=200339526"
  },

  // VLONE
  {
    name: "VLONE Tee",
    price: 10.02,
    category: "Tops - Tees",
    image: "/images/products/vlone.png",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427581760&ref=200339526"
  },

  // Corteiz
  {
    name: "Corteiz T-Shirt",
    price: 15.86,
    category: "Tops - Tees",
    image: "/images/products/corteiz.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425619297&ref=200339526"
  },

  // Bape
  {
    name: "Bape Tee (Basic)",
    price: 11.29,
    category: "Tops - Tees",
    image: "/images/products/bape_basic.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425662551&ref=200339526"
  },
  {
    name: "Bape Tee (Premium)",
    price: 21.31,
    category: "Tops - Tees",
    image: "/images/products/bape_premium.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7252320746&ref=200339526&redirected=true"
  },

  // Revenge
  {
    name: "Revenge T-Shirt",
    price: 13.95,
    category: "Tops - Tees",
    image: "/images/products/revenge.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7426042009&ref=200339526"
  },

  // Off-White
  {
    name: "Off-White T-Shirt",
    price: 11.16,
    category: "Tops - Tees",
    image: "/images/products/offwhite.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=taobao&id=641228312932&ref=200339526&redirected=true"
  },

  // Represent
  {
    name: "Represent T-Shirt",
    price: 13.57,
    category: "Tops - Tees",
    image: "/images/products/represent.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7322279020&ref=200339526&redirected=true"
  },

  // Broken Planet
  {
    name: "Broken Planet Tee",
    price: 13.70,
    category: "Tops - Tees",
    image: "/images/products/brokenplanet.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7317507293&ref=200339526&redirected=true"
  },

  // Ralph Lauren
  {
    name: "Ralph Lauren Tee",
    price: 10.78,
    category: "Tops - Tees",
    image: "/images/products/ralph.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427563858&ref=200339526"
  },

  // Hellstar
  {
    name: "Hellstar Tee",
    price: 12.05,
    category: "Tops - Tees",
    image: "/images/products/hellstar.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425660531&ref=200339526"
  },

  // Moncler
  {
    name: "Moncler Tee",
    price: 14.84,
    category: "Tops - Tees",
    image: "/images/products/moncler.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425569517&ref=200339526"
  },

  // Essentials
  {
    name: "Essentials T-Shirt",
    price: 12.56,
    category: "Tops - Tees",
    image: "/images/products/essentials.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427561960&ref=200339526"
  },

  // Denim Tears
  {
    name: "Denim Tears T-Shirt",
    price: 12.05,
    category: "Tops - Tees",
    image: "/images/products/denimtears.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425688031&ref=200339526"
  },

  {
    name: "Jordan Shorts",
    price: 8.88,
    category: "Bottoms - Shorts",
    image: "/images/products/jordan_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427528584&ref=200339526"
  },

  // Stussy Shorts
  {
    name: "Stussy Shorts",
    price: 12.56,
    category: "Bottoms - Shorts",
    image: "/images/products/stussy_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7237155682&ref=200339526&redirected=true"
  },

  // Supreme Jorts
  {
    name: "Supreme Jorts",
    price: 17.76,
    category: "Bottoms - Shorts",
    image: "/images/products/supreme_jorts.png",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427514522&ref=200339526"
  },

  // Palm Angels Shorts
  {
    name: "Palm Angels Shorts",
    price: 12.05,
    category: "Bottoms - Shorts",
    image: "/images/products/palmangels_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425676287&ref=200339526"
  },

  // Ralph Lauren Shorts
  {
    name: "Ralph Lauren Shorts",
    price: 13.83,
    category: "Bottoms - Shorts",
    image: "/images/products/ralph_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427571864&ref=200339526"
  },

  // Corteiz Shorts
  {
    name: "Corteiz Shorts",
    price: 9.13,
    category: "Bottoms - Shorts",
    image: "/images/products/corteiz_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=ali_1688&id=777131556234&ref=200339526&redirected=true"
  },

  // Essentials Shorts
  {
    name: "Essentials Shorts",
    price: 12.05,
    category: "Bottoms - Shorts",
    image: "/images/products/essentials_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425705783&ref=200339526"
  },

  // Hellstar Shorts
  {
    name: "Hellstar Shorts",
    price: 15.86,
    category: "Bottoms - Shorts",
    image: "/images/products/hellstar_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427471594&ref=200339526"
  },

  // Denim Tears Shorts
  {
    name: "Denim Tears Shorts",
    price: 15.86,
    category: "Bottoms - Shorts",
    image: "/images/products/denimtears_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425688031&ref=200339526"
  },

  // EE Shorts
  {
    name: "EE Shorts",
    price: 15.10,
    category: "Bottoms - Shorts",
    image: "/images/products/ee_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=taobao&id=800235190860&ref=200339526&redirected=true"
  },

  // Nike Shorts
  {
    name: "Nike Shorts",
    price: 6.22,
    category: "Bottoms - Shorts",
    image: "/images/products/nike_shorts.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=ali_1688&id=768062750001&ref=200339526&redirected=true"
  },
  {
    name: "Evisu Jeans",
    price: 23.22,
    category: "Bottoms - Jeans",
    image: "/images/products/evisu_jeans.jpeg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427514522&ref=200339526"
  },
  {
    name: "ACNE STUDIOS JEANS",
    price: 41.61,
    category: "Bottoms - Jeans",
    image: "/images/products/acne_jeans.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7411311483&ref=200339526&redirected=true"
  },
  {
    name: "Carhartt Cargo Pants",
    price: 27.28,
    category: "Bottoms - Cargos",
    image: "/images/products/carhartt_cargo.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425601589&ref=200339526"
  },
  {
    name: "Yeezy Pants",
    price: 17.25,
    category: "Bottoms - Sweatpants",
    image: "/images/products/yeezy_pants.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425609469&ref=200339526"
  },
  {
    name: "Corteiz Cargo Pants",
    price: 51.51,
    category: "Bottoms - Sweatpants",
    image: "/images/products/corteiz_cargo.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425642893&ref=200339526"
  },
  {
    name: "Corteiz Pants",
    price: 33.62,
    category: "Bottoms - Sweatpants",
    image: "/images/products/corteiz_pants.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427435488&ref=200339526"
  },
  {
    name: "Denim Tears Pants",
    price: 20.17,
    category: "Bottoms - Sweatpants",
    image: "/images/products/denimtears_pants.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425660533&ref=200339526"
  },
  {
    name: "Sp5der Pants",
    price: 21.44,
    category: "Bottoms - Sweatpants",
    image: "/images/products/sp5der_pants.png",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425684157&ref=200339526"
  },
  {
    name: "Stussy Hoodie",
    price: 27.91,
    category: "Tops - Hoodies",
    image: "/images/products/stussy_hoodie.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425632977&ref=200339526"
  },
  {
    name: "DENIM TEARS HOODIE (1:1 BATCH)",
    price: 34.13,
    category: "Tops - Hoodies",
    image: "/images/products/denimtears_hoodie.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7314028589&ref=200339526&redirected=true"
  },
  {
    name: "Corteiz Hoodie",
    price: 37.42,
    category: "Tops - Hoodies",
    image: "/images/products/corteiz_hoodie.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425701865&ref=200339526"
  },
  {
    name: "Essentials Hoodie",
    price: 21.44,
    category: "Tops - Hoodies",
    image: "/images/products/essentials_hoodie.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427548300&ref=200339526"
  },
  {
    name: "Supreme Hoodie",
    price: 29.69,
    category: "Tops - Hoodies",
    image: "/images/products/supreme_hoodie.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425629053&ref=200339526"
  },
  {
    name: "YEEZY DOVE HOODIE",
    price: 32.73,
    category: "Tops - Hoodies",
    image: "/images/products/yeezy_hoodie.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7341627049&ref=200339526&redirected=true"
  },
  {
    name: "Bape Shark Hoodie",
    price: 20.30,
    category: "Tops - Hoodies",
    image: "/images/products/bape_hoodie.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7298275759&ref=200339526&redirected=true"
  },

  // Jackets
  {
    name: "Polo Ralph Lauren Jacket",
    price: 50.11,
    category: "Tops - Jackets and Fleeces",
    image: "/images/products/ralph_jacket.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425601581&ref=200339526"
  },
  {
    name: "TNF Windbreaker",
    price: 41.74,
    category: "Tops - Jackets and Fleeces",
    image: "/images/products/tnf_windbreaker.jpg",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427506956&ref=200339526"
  },
  {
    name: "TNF Puffer Jacket",
    price: 62.92,
    category: "Tops - Jackets and Fleeces",
    image: "/images/products/tnf_puffer.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427571858&ref=200339526"
  },
  {
    name: "Trapstar Jacket",
    price: 75.86,
    category: "Tops - Jackets and Fleeces",
    image: "/images/products/trapstar_jacket.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7427439516&ref=200339526"
  },
  {
    name: "ARC'TERYX Jacket",
    price: 53.28,
    category: "Tops - Jackets and Fleeces",
    image: "/images/products/arcteryx_jacket.webp",
    externalUrl: "https://mulebuy.com/product/?shop_type=weidian&id=7425623291&ref=200339526"
  }
];

const currencyIcons = {
  USD: CurrencyDollar,
  EUR: CurrencyEur,
  GBP: CurrencyGbp
};

const currencySymbols = {
  USD: "$",
  EUR: "€",
  GBP: "£"
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const productVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  show: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const buttonVariants = {
  rest: { opacity: 0, y: 20 },
  hover: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const selectVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  hover: {
    y: -2,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10
    }
  }
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 }
};

// Add new animation variants for price counting
const priceVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

function ProductList({ activeFilter, searchQuery }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [sortOrder, setSortOrder] = useState("featured");
  const [exchangeRates, setExchangeRates] = useState({
    USD: 1,
    EUR: 0.85,
    GBP: 0.73
  });

  // Fetch exchange rates
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        setExchangeRates({
          USD: 1,
          EUR: data.rates.EUR,
          GBP: data.rates.GBP
        });
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        // Fallback to default rates if API fails
        setExchangeRates({
          USD: 1,
          EUR: 0.85,
          GBP: 0.73
        });
      }
    };

    fetchExchangeRates();
    // Update rates every hour
    const interval = setInterval(fetchExchangeRates, 3600000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price) => {
    const convertedPrice = price * exchangeRates[currency];
    return `${currencySymbols[currency]}${convertedPrice.toFixed(2)}`;
  };

  // Add handler for currency change
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (activeFilter && activeFilter !== "All") {
      filtered = filtered.filter(product => {
        if (activeFilter.includes(" - ")) {
          return product.category === activeFilter;
        }
        return product.category.startsWith(activeFilter);
      });
    }

    // Apply sorting
    switch (sortOrder) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    setTimeout(() => {
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
  }, [activeFilter, searchQuery, sortOrder]);

  const CurrencyIcon = currencyIcons[currency];

  return (
    <>
      <style>
        {`
          .product-card {
            text-decoration: none;
            color: inherit;
            display: block;
          }
        `}
      </style>
      <div className="controls">
        <motion.div 
          className="sort-controls"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <SortAscending size={14} className="control-icon" />
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
          <CaretDown size={12} className="select-icon" />
        </motion.div>
        
        <motion.div 
          className="currency-selector"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <select 
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <CurrencyIcon size={14} className="currency-icon" />
          <CaretDown size={12} className="select-icon" />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          className="product-list"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <SearchIcon className="no-products-icon" weight="thin" />
              <h2>no products found</h2>
              <p>we couldn't find any products matching your search. try adjusting your filters or search terms.</p>
              <div className="no-products-suggestions">
                <div className="suggestion-item">
                  <MagnifyingGlass className="suggestion-icon" weight="thin" />
                  <span>try different search terms</span>
                </div>
                <div className="suggestion-item">
                  <SlidersHorizontal className="suggestion-icon" weight="thin" />
                  <span>adjust your filters</span>
                </div>
                <div className="suggestion-item">
                  <ArrowRight className="suggestion-icon" weight="thin" />
                  <span>check other categories</span>
                </div>
              </div>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <motion.a 
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`product-card ${isLoading ? 'loading' : 'loaded'}`}
                key={product.name}
                variants={productVariants}
                whileHover="hover"
                layout
              >
                <motion.div className="product-image-container">
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    variants={imageVariants}
                  />
                  <motion.div 
                    className="product-overlay"
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.span 
                      className="checkout-button"
                      variants={buttonVariants}
                    >
                      CHECK OUT
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="product-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3>{product.name}</h3>
                  <motion.p 
                    className="price"
                    key={`${product.name}-${currency}`}
                    variants={priceVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.3 }}
                  >
                    {formatPrice(product.price)}
                  </motion.p>
                </motion.div>
              </motion.a>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default ProductList;

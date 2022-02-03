const PRODUCTS = [
  {
    id: 1,
    category: "mac",
    imgUrl: "https://i.ibb.co/kQS3YdL/macbook-air-2.png",
    name: "MacBook Air",
    display: 13.3, // дюймы
    color: ["Gold", "Silver", "Space Grey"],
    price: 999, // доллары
    chip: {
      name: "M1",
      cores: 8,
    },
    ram: 8, // Гб
    storage: 256, // Гб
    touchId: true,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: null,
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "1.61", // cm
      width: "30.41", // cm
      depth: "21.24", // cm
      weight: "1.29", // Кг
    },
    os: "macOS",
    InTheBox: [
      "MacBook Air",
      "30W USB-C Power Adapter",
      "USB-C Charge Cable (2 m)",
    ],
    orderInfo: {
      inStock: {
        value: "435",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 77, // процент положительных отзывов
      amount: 310,
    },
  },
  {
    id: 2,
    category: "mac",
    imgUrl: "https://i.ibb.co/kQS3YdL/macbook-air-2.png",
    name: "MacBook Air",
    display: 13.3, // дюймы
    color: ["Gold", "Silver", "Space Grey"],
    price: 1249, // доллары
    chip: {
      name: "M1",
      cores: 8,
    },
    ram: 16, // Гб
    storage: 512, // Гб
    touchId: true,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: null,
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "1.61", // cm
      width: "30.41", // cm
      depth: "21.24", // cm
      weight: "1.29", // Кг
    },
    os: "macOS",
    InTheBox: [
      "MacBook Air",
      "30W USB-C Power Adapter",
      "USB-C Charge Cable (2 m)",
    ],
    orderInfo: {
      inStock: {
        value: "0",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 84, // процент положительных отзывов
      amount: 118,
    },
  },
  {
    id: 3,
    category: "mac",
    imgUrl: "https://i.ibb.co/9wdPzQP/image-5.png",
    name: "MacBook Pro 13",
    display: 13.3, // дюймы
    color: ["Silver", "Space Grey"],
    price: 1299, // доллары
    chip: {
      name: "Intel Core i5",
      cores: 8,
    },
    ram: 8, // Гб
    storage: 512, // Гб
    touchId: true,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: null,
    },
    audio: {
      microphone:
        "Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "1.56", // cm
      width: "30.41", // cm
      depth: "21.24", // cm
      weight: "1.4", // Кг
    },
    os: "macOS",
    InTheBox: [
      "MacBook pro 13",
      "61W USB-C Power Adapter",
      "USB-C Charge Cable (2 m)",
    ],
    orderInfo: {
      inStock: {
        value: "25",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 85, // процент положительных отзывов
      amount: 515,
    },
  },
  {
    id: 4,
    category: "mac",
    imgUrl: "https://i.ibb.co/9wdPzQP/image-5.png",
    name: "MacBook Pro 13",
    display: 13.3, // дюймы
    color: ["Silver", "Space Grey"],
    price: 1499, // доллары
    chip: {
      name: "M1",
      cores: 8,
    },
    ram: 16, // Гб
    storage: 1024, // TB
    touchId: true,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: null,
    },
    audio: {
      microphone:
        "Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "1.56", // cm
      width: "30.41", // cm
      depth: "21.24", // cm
      weight: "1.4", // Кг
    },
    os: "macOS",
    InTheBox: [
      "MacBook pro 13",
      "61W USB-C Power Adapter",
      "USB-C Charge Cable (2 m)",
    ],
    orderInfo: {
      inStock: {
        value: "256",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 80, // процент положительных отзывов
      amount: 392,
    },
  },
  {
    id: 5,
    category: "mac",
    imgUrl: "https://i.ibb.co/xzv0mPq/macbook-pro16-2.png",
    name: "MacBook Pro 16",
    display: 16, // дюймы
    color: ["Silver", "Space Grey"],
    price: 2399, // доллары
    chip: {
      name: " Intel Core i7",
      cores: 6,
    },
    ram: 16, // Гб
    storage: 1024, // TB
    touchId: true,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: null,
    },
    audio: {
      microphone:
        "Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "1.62", // cm
      width: "35.79", // cm
      depth: "24.59", // cm
      weight: "2", // Кг
    },
    os: "macOS",
    InTheBox: [
      "MacBook pro 16",
      "96W USB-C Power Adapter",
      "USB-C Charge Cable (2 m)",
    ],
    orderInfo: {
      inStock: {
        value: "124",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 91, // процент положительных отзывов
      amount: 401,
    },
  },
  {
    id: 6,
    category: "mac",
    imgUrl: "https://i.ibb.co/xzv0mPq/macbook-pro16-2.png",
    name: "MacBook Pro 16",
    display: 16, // дюймы
    color: ["Silver", "Space Grey"],
    price: 2799, // доллары
    chip: {
      name: " Intel Core i9",
      cores: 8,
    },
    ram: 32, // Гб
    storage: 2048, // TB
    touchId: true,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: null,
    },
    audio: {
      microphone:
        "Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "1.62", // cm
      width: "35.79", // cm
      depth: "24.59", // cm
      weight: "2", // Кг
    },
    os: "macOS",
    InTheBox: [
      "MacBook pro 16",
      "96W USB-C Power Adapter",
      "USB-C Charge Cable (2 m)",
    ],
    orderInfo: {
      inStock: {
        value: "69",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 90, // процент положительных отзывов
      amount: 651,
    },
  },
  {
    id: 7,
    category: "mac",
    imgUrl: "https://i.ibb.co/8b9T4KG/imac-2.png",
    name: "IMac",
    display: 21.5, // дюймы
    color: ["Space Grey"],
    price: 1099, // доллары
    chip: {
      name: "Intel Core i5,",
      cores: "6", //dual‑core
    },
    ram: 8, // Гб
    storage: 256,
    touchId: false,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 4.2 "],
    camera: {
      front: "720p FaceTime HD camera",
      back: null,
    },
    audio: {
      microphone: "Microphone",
      speakers: "Stereo speakers",
    },
    size: {
      height: "45", // cm
      width: "52.8", // cm
      depth: "17.5", // cm
      weight: "5.44", // Кг
    },
    os: "macOS",
    InTheBox: [
      "iMac ",
      "Magic Keyboard",
      "Magic Mouse 2",
      "Power cord",
      "Lightning to USB Cable",
      "Polishing cloth",
    ],
    orderInfo: {
      inStock: {
        value: "742",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 75, // процент положительных отзывов
      amount: 119,
    },
  },
  {
    id: 8,
    category: "mac",
    imgUrl: "https://i.ibb.co/8b9T4KG/imac-2.png",
    name: "IMac",
    display: 27, // дюймы
    color: ["Space Grey"],
    price: 1799, // доллары
    chip: {
      name: "Intel Core i5,",
      cores: "6", //dual‑core
    },
    ram: 8, // Гб
    storage: 256,
    touchId: false,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0 "],
    camera: {
      front: "720p FaceTime HD camera",
      back: null,
    },
    audio: {
      microphone: "Microphone",
      speakers: "Stereo speakers",
    },
    size: {
      height: "51.6", // cm
      width: "65", // cm
      depth: "20.3", // cm
      weight: "8.92", // Кг
    },
    os: "macOS",
    InTheBox: [
      "iMac with Retina 5K display ",
      "Magic Keyboard",
      "Magic Mouse 2",
      "Power cord",
      "Lightning to USB Cable",
      "Polishing cloth",
    ],
    orderInfo: {
      inStock: {
        value: "0",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 99, // процент положительных отзывов
      amount: 431,
    },
  },
  {
    id: 9,
    category: "mac",
    imgUrl: "https://i.ibb.co/Mkn3Gps/mac-pro-2.png",
    name: "Mac Pro",
    display: null, // дюймы
    color: ["Space Grey"],
    price: 2499, // доллары
    chip: {
      name: "Intel Xeon W",
      cores: "16", //dual‑core
    },
    ram: 64, // Гб
    storage: 1024, //
    touchId: false,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0 "],
    camera: {
      front: null,
      back: null,
    },
    audio: {
      microphone: "Microphone",
      speakers: "Stereo speakers",
    },
    size: {
      height: "50", // cm
      width: "30", // cm
      depth: "60", // cm
      weight: "18", // Кг
    },
    os: "macOS",
    InTheBox: [
      "Mac Pro",
      "Magic Keyboard with Numeric Keypad",
      "Magic Mouse 2",
      "USB-C to Lightning Cable (1 m)",
      "Power cord (2 m)",
    ],
    orderInfo: {
      inStock: {
        value: "587",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 56, // процент положительных отзывов
      amount: 234,
    },
  },
  {
    id: 10,
    category: "ipad",
    imgUrl: "https://i.ibb.co/r09tcMc/compare-ipad-pro.png",
    name: "IPad Pro ",
    display: 11, // дюймы
    color: ["Silver", "Space Grey"],
    price: 750, // доллары
    chip: {
      name: "A12Z Bionic",
      cores: null,
    },
    ram: null, // Гб
    storage: 128, // TB
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Ultra Wide: 10MP",
    },
    audio: {
      microphone:
        "Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "24.7", // cm
      width: "17.8", // cm
      depth: "0.6", // cm
      weight: "0.470", // Кг
    },
    os: "macOS",
    InTheBox: [
      "iPad Pro",
      "USB-C Charge Cable (1 meter)",
      "18W USB-C Power Adapter",
    ],
    orderInfo: {
      inStock: {
        value: "32",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 99, // процент положительных отзывов
      amount: 285,
    },
  },
  {
    id: 34,
    category: "ipad",
    imgUrl: "https://i.ibb.co/NjkQvD0/ipad-air-2.png",
    name: "IPad Air",
    display: 10.9, // дюймы
    color: ["Silver", "Space Grey", "Rose Gold", "Green", "Sky Blue"],
    price: 549, // доллары
    chip: {
      name: "A14 Bionic ",
      cores: null,
    },
    ram: null, // Гб
    storage: 64, // TB
    touchId: true,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Ultra Wide: 10MP",
    },
    audio: {
      microphone:
        "Dual microphones for calls, video recording, and audio recording",
      speakers: "Stereo speakers",
    },
    size: {
      height: "24.7", // cm
      width: "17.8", // cm
      depth: "0.6", // cm
      weight: "0.458", // Кг
    },
    os: "macOS",
    InTheBox: [
      "iPad Air",
      "USB-C Charge Cable (1 meter)",
      "20W USB-C Power Adapter",
    ],
    orderInfo: {
      inStock: {
        value: "97",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 97, // процент положительных отзывов
      amount: 185,
    },
  },
  {
    id: 11,
    category: "ipad",
    imgUrl: "https://i.ibb.co/kScHcBK/ipad-2.png",
    name: "IPad",
    display: 10.2, // дюймы
    color: ["Silver", "Space Grey", "Gold"],
    price: 309, // доллары
    chip: {
      name: "A12 Bionic  ",
      cores: null,
    },
    ram: null, // Гб
    storage: 32, // TB
    touchId: true,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Ultra Wide: 10MP",
    },
    audio: {
      microphone:
        "Dual microphones for calls, video recording, and audio recording",
      speakers: "Stereo speakers",
    },
    size: {
      height: "25.7", // cm
      width: "17.4", // cm
      depth: "0.6", // cm
      weight: "0.490", // Кг
    },
    os: "macOS",
    InTheBox: ["iPad", "USB-C Power Adapter", "Lightning to USB-C Cable"],
    orderInfo: {
      inStock: {
        value: "90",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 0, // процент положительных отзывов
      amount: 843,
    },
  },
  {
    id: 12,
    category: "ipad",
    imgUrl: "https://i.ibb.co/7GknQqK/compare-ipad-mini.png",
    name: "IPad mini",
    display: 7.9, // дюймы
    color: ["Silver", "Space Grey", "Gold"],
    price: 309, // доллары
    chip: {
      name: "A12 Bionic  ",
      cores: null,
    },
    ram: null, // Гб
    storage: 64, // TB
    touchId: true,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Ultra Wide: 10MP",
    },
    audio: {
      microphone:
        "Dual microphones for calls, video recording, and audio recording",
      speakers: "Stereo speakers",
    },
    size: {
      height: "20.3", // cm
      width: "13.4", // cm
      depth: "0.6", // cm
      weight: "0.300", // Кг
    },
    os: "macOS",
    InTheBox: ["iPad mini", "USB-C Power Adapter", "Lightning to USB-C Cable"],
    orderInfo: {
      inStock: {
        value: "77",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 85, // процент положительных отзывов
      amount: 324,
    },
  },
  {
    id: 13,
    category: "Watch",
    imgUrl: "https://i.ibb.co/Z1cjFZj/apple-watch-series-6-2.png",
    name: "Apple Watch Series 6",
    display: 1.73228, // дюймы
    color: ["Silver", "Space Grey", "Gold", "Blue", "Graphite"],
    price: 399, // доллары
    chip: {
      name: "S6 SiP   ",
      cores: null,
    },
    ram: null, // Гб
    storage: 32, // TB
    touchId: false,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: null,
      back: null,
    },
    audio: {
      microphone:
        "Dual microphones for calls, video recording, and audio recording",
      speakers: "Stereo speakers",
    },
    size: {
      height: "4,4", // cm
      width: "3.8", // cm
      depth: "0.6", // cm
      weight: "1.07", // Кг
    },
    os: "macOS",
    InTheBox: ["Case", "Solo Loop", "1m Magnetic Charging Cable"],
    orderInfo: {
      inStock: {
        value: "90",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 458, // процент положительных отзывов
      amount: 179,
    },
  },
  {
    id: 14,
    category: "Watch",
    imgUrl: "https://i.ibb.co/phDgLjF/apple-watch-se.png",
    name: "Apple Watch Series SE",
    display: 1.73228, // дюймы
    color: ["Silver", "Space Grey", "Gold", "Blue", "Graphite"],
    price: 309, // доллары
    chip: {
      name: "S5 SiP   ",
      cores: null,
    },
    ram: null, // Гб
    storage: 22.1654, // TB
    touchId: false,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: null,
      back: null,
    },
    audio: {
      microphone:
        "Dual microphones for calls, video recording, and audio recording",
      speakers: "Stereo speakers",
    },
    size: {
      height: "4,4", // cm
      width: "3.8", // cm
      depth: "0.6", // cm
      weight: "1.07", // Кг
    },
    os: "macOS",
    InTheBox: [
      "Case",
      "Band (can be configured for either S/M or M/L length)",
      "1m Magnetic Charging Cable",
    ],
    orderInfo: {
      inStock: {
        value: "79",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 69, // процент положительных отзывов
      amount: 284,
    },
  },
  {
    id: 15,
    category: "Watch",
    imgUrl: "https://i.ibb.co/M8N4x7C/apple-watch3.png",
    name: "Apple Watch Series 3",
    display: 22.1654, // дюймы
    color: ["Silver", "Space Grey", "Gold", "Blue", "Graphite"],
    price: 309, // доллары
    chip: {
      name: "S5 SiP   ",
      cores: null,
    },
    ram: null, // Гб
    storage: 8, // TB
    touchId: false,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: {
      front: null,
      back: null,
    },
    audio: {
      microphone:
        "Dual microphones for calls, video recording, and audio recording",
      speakers: "Stereo speakers",
    },
    size: {
      height: "4,2", // cm
      width: "3.3", // cm
      depth: "0.6", // cm
      weight: "1.07", // Кг
    },
    os: "macOS",
    InTheBox: [
      "Case",
      "Band (can be configured for either S/M or M/L length)",
      "1m Magnetic Charging Cable",
    ],
    orderInfo: {
      inStock: {
        value: "47",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 93, // процент положительных отзывов
      amount: 165,
    },
  },
  {
    id: 16,
    category: "iphone",
    imgUrl: "https://i.ibb.co/Pc6TGp1/iphone-12-2.png",
    name: "IPhone 12",
    display: 6.1, // дюймы
    color: ["Black", "White", "Green", "Blue", "Red"],
    price: 799, // доллары
    chip: {
      name: "A14",
      cores: null,
    },
    ram: null, // Гб
    storage: 128, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Dual 12MP camera system",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "14.6", // cm
      width: "7.1", // cm
      depth: "0.7", // cm
      weight: "0.164", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "73",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 12, // процент положительных отзывов
      amount: 594,
    },
  },
  {
    id: 17,
    category: "iphone",
    imgUrl: "https://i.ibb.co/Pc6TGp1/iphone-12-2.png",
    name: "IPhone 12",
    display: 6.1, // дюймы
    color: ["Black", "White", "Green", "Blue", "Red"],
    price: 899, // доллары
    chip: {
      name: "A14",
      cores: null,
    },
    ram: null, // Гб
    storage: 256, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Dual 12MP camera system",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "14.6", // cm
      width: "7.1", // cm
      depth: "0.7", // cm
      weight: "0.164", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "0",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 73, // процент положительных отзывов
      amount: 876,
    },
  },
  {
    id: 18,
    category: "iphone",
    imgUrl: "https://i.ibb.co/Pc6TGp1/iphone-12-2.png",
    name: "IPhone 12 Mini",
    display: 5.4, // дюймы
    color: ["Black", "White", "Green", "Blue", "Red"],
    price: 669, // доллары
    chip: {
      name: "A14",
      cores: null,
    },
    ram: null, // Гб
    storage: 128, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Dual 12MP camera system",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "13.1", // cm
      width: "6.41", // cm
      depth: "0.7", // cm
      weight: "0.135", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "43",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 100, // процент положительных отзывов
      amount: 187,
    },
  },
  {
    id: 19,
    category: "iphone",
    imgUrl: "https://i.ibb.co/JqjHSC9/iphone-12-pro-2.png",
    name: "IPhone 12 Pro",
    display: 6.1, // дюймы
    color: ["Silver", "Graphite", "Gold", "Pacific Blue"],
    price: 999, // доллары
    chip: {
      name: "A14",
      cores: null,
    },
    ram: null, // Гб
    storage: 256, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Pro 12MP camera system",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "14.6", // cm
      width: "7.1", // cm
      depth: "0.7", // cm
      weight: "0.164", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "74",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 99, // процент положительных отзывов
      amount: 348,
    },
  },
  {
    id: 20,
    category: "iphone",
    imgUrl: "https://i.ibb.co/JqjHSC9/iphone-12-pro-2.png",
    name: "IPhone 12 Pro",
    display: 6.1, // дюймы
    color: ["Silver", "Graphite", "Gold", "Pacific Blue"],
    price: 1099, // доллары
    chip: {
      name: "A14",
      cores: null,
    },
    ram: null, // Гб
    storage: 512, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Pro 12MP camera system",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "14.6", // cm
      width: "7.1", // cm
      depth: "0.7", // cm
      weight: "0.164", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "2",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 99, // процент положительных отзывов
      amount: 456,
    },
  },
  {
    id: 21,
    category: "iphone",
    imgUrl: "https://i.ibb.co/JqjHSC9/iphone-12-pro-2.png",
    name: "IPhone 12 Pro Max",
    display: 6.7, // дюймы
    color: ["Silver", "Graphite", "Gold", "Pacific Blue"],
    price: 1099, // доллары
    chip: {
      name: "A14",
      cores: null,
    },
    ram: null, // Гб
    storage: 256, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Pro 12MP camera system",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "16.0", // cm
      width: "7.8", // cm
      depth: "0.7", // cm
      weight: "0.228", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "5",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 100, // процент положительных отзывов
      amount: 654,
    },
  },
  {
    id: 22,
    category: "iphone",
    imgUrl: "https://i.ibb.co/YfgWxgY/iphone-se-2.png",
    name: "IPhone SE",
    display: 4.7, // дюймы
    color: ["Black", "White", "Red"],
    price: 1099, // доллары
    chip: {
      name: "A13",
      cores: null,
    },
    ram: null, // Гб
    storage: 128, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "12MP Wide camera",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "13.8", // cm
      width: "7.7", // cm
      depth: "0.7", // cm
      weight: "0.148", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "81",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 73, // процент положительных отзывов
      amount: 335,
    },
  },
  {
    id: 23,
    category: "iphone",
    imgUrl: "https://i.ibb.co/JBvGWTX/iphone11.png",
    name: "IPhone 11",
    display: 6.1, // дюймы
    color: ["Black", "Green", "Yellow", "Purple", "White", "Red"],
    price: 899, // доллары
    chip: {
      name: "A13",
      cores: null,
    },
    ram: null, // Гб
    storage: 256, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Dual 12MP Ultra Wide and Wide cameras",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "15.0", // cm
      width: "7.5", // cm
      depth: "0.8", // cm
      weight: "0.194", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "98",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 100, // процент положительных отзывов
      amount: 623,
    },
  },
  {
    id: 24,
    category: "iphone",
    imgUrl: "https://i.ibb.co/JBvGWTX/iphone11.png",
    name: "IPhone 11",
    display: 6.1, // дюймы
    color: ["Black", "Green", "Yellow", "Purple", "White", "Red"],
    price: 999, // доллары
    chip: {
      name: "A13",
      cores: null,
    },
    ram: null, // Гб
    storage: 512, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Triple 12MP Ultra Wide and Wide cameras",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "15.0", // cm
      width: "7.5", // cm
      depth: "0.8", // cm
      weight: "0.194", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "115",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 100, // процент положительных отзывов
      amount: 157,
    },
  },
  {
    id: 25,
    category: "iphone",
    imgUrl: "https://i.ibb.co/JBvGWTX/iphone11.png",
    name: "IPhone 11",
    display: 6.1, // дюймы
    color: ["Black", "Green", "Yellow", "Purple", "White", "Red"],
    price: 899, // доллары
    chip: {
      name: "A13",
      cores: null,
    },
    ram: null, // Гб
    storage: 256, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "Triple 12MP Ultra Wide and Wide cameras",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "15.0", // cm
      width: "7.5", // cm
      depth: "0.8", // cm
      weight: "0.194", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "0",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 100, // процент положительных отзывов
      amount: 765,
    },
  },
  {
    id: 26,
    category: "iphone",
    imgUrl: "https://i.ibb.co/V33W0Sv/iphone-xr.png",
    name: "IPhone XR",
    display: 6.1, // дюймы
    color: ["Black", "Coral", "Yellow", "Blue", "White", "Red"],
    price: 699, // доллары
    chip: {
      name: "A12",
      cores: null,
    },
    ram: null, // Гб
    storage: 64, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "FDD‑LTE GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "12MP Wide camera",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "15.0", // cm
      width: "7.5", // cm
      depth: "0.8", // cm
      weight: "0.194", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 14",
      "USB-C to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "23",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 86, // процент положительных отзывов
      amount: 476,
    },
  },
  {
    id: 27,
    category: "iphone",
    imgUrl: "https://i.ibb.co/ByhWF0k/iphone-xs.png",
    name: "IPhone XS",
    display: 5.8, // дюймы
    color: ["White", "Rose Gold", "Space Grey"],
    price: 699, // доллары
    chip: {
      name: "A12",
      cores: null,
    },
    ram: null, // Гб
    storage: 128, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "FDD‑LTE GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "12MP Wide camera",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "14.3", // cm
      width: "7.0", // cm
      depth: "0.7", // cm
      weight: "0.177", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 12",
      "USB-A to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "34",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 94, // процент положительных отзывов
      amount: 908,
    },
  },
  {
    id: 28,
    category: "iphone",
    imgUrl: "https://i.ibb.co/ByhWF0k/iphone-xs.png",
    name: "IPhone XS",
    display: 5.8, // дюймы
    color: ["White", "Rose Gold", "Space Grey"],
    price: 799, // доллары
    chip: {
      name: "A12",
      cores: null,
    },
    ram: null, // Гб
    storage: 256, // Гб
    touchId: false,
    faceId: true,
    wireless: ["Wi-Fi", "Bluetooth 5.0", "FDD‑LTE GSM/EDGE"],
    camera: {
      front: "720p FaceTime HD camera",
      back: "12MP Wide camera",
    },
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "14.3", // cm
      width: "7.0", // cm
      depth: "0.7", // cm
      weight: "0.177", // Кг
    },
    os: "IOS",
    InTheBox: [
      "iPhone with iOS 12",
      "USB-A to Lightning Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "0",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 94, // процент положительных отзывов
      amount: 327,
    },
  },
  {
    id: 29,
    category: "tv",
    imgUrl: "https://i.ibb.co/kXLBTK9/apple-tv.png",
    name: "Apple TV 4K",
    display: null, // дюймы
    color: ["Black"],
    price: 179, // доллары
    chip: {
      name: "A10X",
      cores: null,
    },
    ram: null, // Гб
    storage: 32, // Гб
    touchId: false,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: null,
    audio: null,
    size: {
      height: "3.5", // cm
      width: "9.8", // cm
      depth: "3.5", // cm
      weight: "0.425", // Кг
    },
    os: "tvOS",
    InTheBox: [
      "Apple TV 4K",
      "Siri Remote",
      "Power cord",
      "Lightning to USB cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "2",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 99, // процент положительных отзывов
      amount: 563,
    },
  },
  {
    id: 30,
    category: "tv",
    imgUrl: "https://i.ibb.co/g3qZWJr/image-2.png",
    name: "Apple TV 4K",
    display: null, // дюймы
    color: ["Black"],
    price: 199, // доллары
    chip: {
      name: "A10X",
      cores: null,
    },
    ram: null, // Гб
    storage: 64, // Гб
    touchId: false,
    faceId: false,
    wireless: ["Wi-Fi", "Bluetooth 5.0"],
    camera: null,
    audio: null,
    size: {
      height: "3.5", // cm
      width: "9.8", // cm
      depth: "3.5", // cm
      weight: "0.425", // Кг
    },
    os: "tvOS",
    InTheBox: [
      "Apple TV 4K",
      "Siri Remote",
      "Power cord",
      "Lightning to USB cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "1",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 100, // процент положительных отзывов
      amount: 1456,
    },
  },
  {
    id: 31,
    category: "airpods",
    imgUrl: "https://i.ibb.co/5cgLY3G/iPods.png",
    name: "AirPods",
    display: null, // дюймы
    color: ["White"],
    price: 199, // доллары
    chip: {
      name: "H!",
      cores: null,
    },
    ram: null, // Гб
    storage: null, // Гб
    touchId: false,
    faceId: false,
    wireless: ["Bluetooth 5.0"],
    camera: null,
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "5.3", // cm
      width: "4.4", // cm
      depth: "0.2", // cm
      weight: "0.04", // Кг
    },
    os: null,
    InTheBox: [
      "AirPods",
      "Wireless Charging Case",
      "Lightning to USB-A Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "23",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 100, // процент положительных отзывов
      amount: 3213,
    },
  },
  {
    id: 32,
    category: "airpods",
    imgUrl: "https://i.ibb.co/6J82PCj/image-6.png",
    name: "AirPods Pro",
    display: null, // дюймы
    color: ["White"],
    price: 299, // доллары
    chip: {
      name: "H!",
      cores: null,
    },
    ram: null, // Гб
    storage: null, // Гб
    touchId: false,
    faceId: false,
    wireless: ["Bluetooth 5.0"],
    camera: null,
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "4.5", // cm
      width: "6.0", // cm
      depth: "0.21", // cm
      weight: "0.04", // Кг
    },
    os: null,
    InTheBox: [
      "AirPods Pro",
      "Wireless Charging Case",
      "Lightning to USB-C Cable",
      "Documentation",
      "Silicone ear tips (three sizes)",
    ],
    orderInfo: {
      inStock: {
        value: "29",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 94, // процент положительных отзывов
      amount: 765,
    },
  },
  {
    id: 33,
    category: "airpods",
    imgUrl: "https://i.ibb.co/1nCQQ1s/airpods-max.png",
    name: "AirPods Max",
    display: null, // дюймы
    color: ["White"],
    price: 599, // доллары
    chip: {
      name: "H!",
      cores: null,
    },
    ram: null, // Гб
    storage: null, // Гб
    touchId: false,
    faceId: false,
    wireless: ["Bluetooth 5.0"],
    camera: null,
    audio: {
      microphone: "Three-mic array with directional beamforming",
      speakers: "Stereo speakers",
    },
    size: {
      height: "18.7", // cm
      width: "16.8", // cm
      depth: "8.3", // cm
      weight: "0.38", // Кг
    },
    os: null,
    InTheBox: [
      "AirPods MAx",
      "Smart Case",
      "Lightning to USB-C Cable",
      "Documentation",
    ],
    orderInfo: {
      inStock: {
        value: "0",
        pict: {
          succ: "https://i.ibb.co/3pPhHwc/yes.png",
          err: "https://i.ibb.co/1vzQDKt/no.png",
        },
      },
      reviews: 5, // процент положительных отзывов
      amount: 456,
    },
  },
];

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let arrow = this.children[0];
    if (panel.style.display === "flex") {
      (panel.style.display = "none"), (arrow.style.transform = "rotate(0deg)");
    } else {
      (panel.style.display = "flex"), (arrow.style.transform = "rotate(90deg)");
    }
  });
}

const createCard = (object) => {
  const { name, orderInfo, price, imgUrl } = object;

  const card = `<div class="card" onselectstart="return false" onmousedown="return false">
    
    <input type="checkbox"  id="id" class="like">
    <div class="product__img"><img src="${imgUrl}"></div>
    <p class="product__title">${name}</p>
    <span class="stock" id="inStock"><img src="${orderInfo.inStock.pict}"><p class="space">' '</p><p class="bold">${orderInfo.inStock.value}</p><p class="space">''</p>left in stock</span>
    <span class="price">Price: <p class="bold">${price}</p> $</span>
    <a href="#" class="${orderInfo.inStock.class}">Add to cart</a>
    <div class="card-footer">
    <div class="product-opinion">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99996 17.7917L8.79163 16.6917C4.49996 12.8 1.66663 10.2333 1.66663 7.08333C1.66663 4.51667 3.68329 2.5 6.24996 2.5C7.69996 2.5 9.09163 3.175 9.99996 4.24167C10.9083 3.175 12.3 2.5 13.75 2.5C16.3166 2.5 18.3333 4.51667 18.3333 7.08333C18.3333 10.2333 15.5 12.8 11.2083 16.7L9.99996 17.7917Z" fill="#F05454"/>
    </svg>
    <span class="review"><p class="bold">${orderInfo.reviews}%</p> Positive reviews <br> Above average</span>
    <span class="orders"><p class="bold">${orderInfo.amount}</p><br> orders</span>
</div>
    
    </div>
    </div>`;
  return card;
};

const generateContent = (array) => {
  const content = document.querySelector("#prodCard");

  content.innerHTML = "";

  let data = "";

  array.forEach((element) => {
    data += createCard(element);
  });

  if (!data) data = "Error 404 Not found";
  content.innerHTML = data;
};
const filterUnAvalaib = PRODUCTS.reduce((arr, item) => {
  if (item.orderInfo.inStock.value < 1) {
    item.orderInfo.inStock.pict = item.orderInfo.inStock.pict.err;
    item.orderInfo.inStock.class = "unAvalaib";
  } else {
    item.orderInfo.inStock.pict = item.orderInfo.inStock.pict.succ;
    item.orderInfo.inStock.class = "button";
  }
  arr.push(item);
  return arr;
}, []);

generateContent(filterUnAvalaib);

let elem = document.getElementsByClassName("like");

for (let i = 0; i < elem.length; i++) {
  let newId = "id_" + i;
  let newIdsvg = "id" + i;
  elem[i].outerHTML =
    '<input type="checkbox" id="' +
    newId +
    '" class="like"> <label id="heart" for="' +
    newId +
    '" class="heartLabe"> <svg class="heartSvg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="' +
    newIdsvg +
    '" class="heartSvg" fill="none" d="M9.12834 16.3219L9.12762 16.3213C6.97172 14.3663 5.22284 12.7794 4.0069 11.2928C2.7967 9.81324 2.16675 8.49409 2.16675 7.08333C2.16675 4.79281 3.95956 3 6.25008 3C7.54869 3 8.80287 3.60697 9.61941 4.56584L10.0001 5.01287L10.3808 4.56584C11.1973 3.60697 12.4515 3 13.7501 3C16.0406 3 17.8334 4.79281 17.8334 7.08333C17.8334 8.4941 17.2035 9.81327 15.9932 11.294C14.7782 12.7804 13.0314 14.3678 10.8782 16.3245L10.8732 16.329L10.8722 16.33L10.0014 17.1167L9.12834 16.3219Z" stroke="black"/></svg></label>';
}

let cardData = document.getElementsByClassName("card");
const cardsArray = Array.from(cardData);
cardsArray.forEach((card) => {
  card.children[0].addEventListener("click", (e) => {
    if (
      card.children[1].children[0].children[0].attributes[2].nodeValue ===
      "#e06065"
    )
      card.children[1].children[0].children[0].attributes[2].nodeValue = "none";
    else
      card.children[1].children[0].children[0].attributes[2].nodeValue =
        "#e06065";
  });
});

//Modal window

let modal = document.getElementById("myModal");

cardsArray.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("button") ||
      e.target.classList.contains("like") ||
      e.target.classList.contains("heartSvg")
    ) {
      e.stopPropagation();
    } else {
      e.target = modal.style.display = "block";
    }
  });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

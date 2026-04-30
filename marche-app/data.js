const catalogoMarche = {
  fechaActualizacion: "Abril 2026",
  whatsapp: "5492615908933",
  instagram: "https://www.instagram.com/marche.congelados/?hl=es",
  categorias: [
    {
      nombre: "Pizzas",
      slug: "pizzas",
      items: [
        { nombre: "Muzza", publico: 8060, mayorista: 6200, granel: 6200 },
        { nombre: "4 Quesos", publico: 9438, mayorista: 7260, granel: 7260 },
        { nombre: "Especial", publico: 10127, mayorista: 8490, granel: 8490 },
        { nombre: "Fugazzeta", publico: 9685, mayorista: 7450, granel: 7450 },
        { nombre: "Napolitana", publico: 11440, mayorista: 8800, granel: 8800 },
        { nombre: "Doble Muzza", publico: 11635, mayorista: 8950, granel: 8950 },
        { nombre: "Provolone", publico: 11570, mayorista: 8900, granel: 8900 },
        { nombre: "Marche", publico: 11245, mayorista: 8650, granel: 8650 }
      ]
    },
    {
      nombre: "Empanadas",
      slug: "empanadas",
      items: [
        { nombre: "Carne x6", publico: 7605, mayorista: 5850, granel: 10960, granelLabel: "Carne x12", granelDetalle: "Caja de 12 empanadas de carne condimentada. Presentación exclusiva para la lista Granel." },
        { nombre: "JyQ x6", publico: 10010, mayorista: 7700, granel: 14660, granelLabel: "JyQ x12", granelDetalle: "Caja de 12 empanadas de jamón y queso, con relleno cremoso y formato exclusivo para Granel." },
        { nombre: "Pollo x6", publico: 8814, mayorista: 6780, granel: 13560, granelLabel: "Pollo x12", granelDetalle: "Caja de 12 empanadas de pollo sazonado. Venta exclusiva por docena en lista Granel." }
      ]
    },
    {
      nombre: "Canastitas",
      slug: "canastitas",
      items: [
        { nombre: "Caprese x6", publico: 7410, mayorista: 5700, granel: 11400, granelLabel: "Caprese x12", granelDetalle: "Caja de 12 canastitas caprese con tomate, queso y albahaca. Presentación exclusiva para Granel." },
        { nombre: "Humita x6", publico: 5707, mayorista: 4390, granel: 8780, granelLabel: "Humita x12", granelDetalle: "Caja de 12 canastitas de humita, cremosas y suaves. Venta exclusiva por docena en Granel." },
        { nombre: "Verdura x6", publico: 6305, mayorista: 4850, granel: 9700, granelLabel: "Verdura x12", granelDetalle: "Caja de 12 canastitas de verdura, listas para horno y pensadas para la lista Granel." }
      ]
    },
    {
      nombre: "Pastas",
      slug: "pastas",
      items: [
        { nombre: "Sorrentinos 4 Quesos", publico: 11662, mayorista: 8940, granel: 4285 },
        { nombre: "Sorrentinos JyQ", publico: 9906, mayorista: 7620, granel: 3625 },
        { nombre: "Canelones JyQ", publico: 16887, mayorista: 12990, granel: 4270 },
        { nombre: "Canelones Pollo y Verdura", publico: 11037, mayorista: 8490, granel: 2707 },
        { nombre: "Canelones Verdura y Ricota", publico: 10595, mayorista: 8150, granel: 2593 },
        { nombre: "Lasagna 1 porción", publico: 6825, mayorista: 5250, granel: 5030 },
        { nombre: "Lasagna 2 porciones", publico: 13390, mayorista: 10300, granel: 10645 },
        { nombre: "Pastel de Papas Chico", publico: 5330, mayorista: 4100, granel: 4100 },
        { nombre: "Pastel de Papas Grande", publico: 16094, mayorista: 12980 }
      ]
    },
    {
      nombre: "Tartas",
      slug: "tartas",
      items: [
        { nombre: "Brócoli Grande", publico: 9269, mayorista: 7130, granel: 7130, smallPublico: 5265 },
        { nombre: "Humita Grande", publico: 9230, mayorista: 7100, granel: 7100, smallPublico: 4615 },
        { nombre: "JyQ Grande", publico: 13553, mayorista: 10410, granel: 10410, smallPublico: 6968 },
        { nombre: "Pollo Grande", publico: 12051, mayorista: 9270, granel: 9270, smallPublico: 6227 },
        { nombre: "Verdura Grande", publico: 10080, mayorista: 7760, granel: 7760, smallPublico: 5785 },
        { nombre: "Zapallito Grande", publico: 9230, mayorista: 7100, granel: 7100, smallPublico: 4160 },
        { nombre: "Zapallo Grande", publico: 7150, mayorista: 5500, granel: 5500, smallPublico: 5330 }
      ]
    },
    {
      nombre: "Salsas",
      slug: "salsas",
      items: [
        { nombre: "Fileto 190g", publico: 1235, mayorista: 950, granel: 950 },
        { nombre: "Fileto 350g", publico: 2145, mayorista: 1650, granel: 1650 },
        { nombre: "Bolognesa 190g", publico: 2132, mayorista: 1640, granel: 1640 },
        { nombre: "Bolognesa 350g", publico: 4030, mayorista: 3100, granel: 3100 }
      ]
    }
  ]
};

const detalleProductos = {
  Pizzas: {
    "Muzza": "Pizza de mozzarella con salsa de tomate. Clásica, rendidora y fácil de combinar con cualquier pedido.",
    "4 Quesos": "Pizza con mezcla de cuatro quesos fundentes. Cremosa, intensa y pensada para quienes buscan más sabor.",
    "Especial": "Pizza con mozzarella, jamón y morrones. Una opción completa y rendidora para compartir o revender.",
    "Fugazzeta": "Pizza de cebolla con queso, de sabor suave y bien equilibrado. Ideal para sumar variedad al pedido.",
    "Napolitana": "Pizza con mozzarella, tomate fresco y ajo. Una clásica con perfil más marcado y muy buena salida.",
    "Doble Muzza": "Versión con extra mozzarella para una experiencia más cargada y con mejor rendimiento por unidad.",
    "Provolone": "Pizza con provolone fundido y sabor intenso. Ideal para una carta con opciones más gourmet.",
    "Marche": "Especialidad de la casa. Una variedad distintiva para ofrecer algo propio dentro del catálogo Marche!."
  },
  Empanadas: {
    "Carne x6": "Caja de 6 empanadas de carne condimentada. Prácticas para stock, venta rápida o una comida resuelta.",
    "JyQ x6": "Caja de 6 empanadas de jamón y queso, con relleno cremoso y muy buena salida en todo tipo de pedido.",
    "Pollo x6": "Caja de 6 empanadas de pollo sazonado. Una opción versátil para hogar, oficina o eventos."
  },
  Canastitas: {
    "Caprese x6": "Caja de 6 canastitas caprese con tomate, queso y albahaca. Una opción fresca y diferente para sumar variedad.",
    "Humita x6": "Caja de 6 canastitas de humita, cremosas y suaves. Muy buenas para picadas, eventos o freezer.",
    "Verdura x6": "Caja de 6 canastitas de verdura, listas para horno. Prácticas y rendidoras para tener siempre a mano."
  },
  Pastas: {
    "Sorrentinos 4 Quesos": "Sorrentinos x6 unidades rellenos de cuatro quesos. Una pasta sabrosa y rendidora para vender como plato principal.",
    "Sorrentinos JyQ": "Sorrentinos x6 unidades de jamón y queso, fáciles de regenerar y con excelente rendimiento por porción.",
    "Canelones JyQ": "Canelones x2 unidades de jamón y queso, listos para sumar salsa, gratinar y servir sin complicaciones.",
    "Canelones Pollo y Verdura": "Canelones x2 unidades de pollo y verdura, prácticos para porciones completas y con muy buena rotación.",
    "Canelones Verdura y Ricota": "Canelones x2 unidades de verdura y ricota, de perfil suave y casero. Una alternativa clásica y confiable.",
    "Lasagna 1 porción": "Lasaña individual lista para horno. Ideal para viandas, menú ejecutivo o consumo personal.",
    "Lasagna 2 porciones": "Lasaña para dos porciones. Práctica para compartir o vender como comida completa.",
    "Pastel de Papas Chico": "Pastel de papas de 600g. Comen 1. Resuelve almuerzos rápidos y viandas con buen margen.",
    "Pastel de Papas Grande": "Pastel de papas de 1.800g. Comen 2 y pican 3. Ideal para compartir o para propuestas gastronómicas de mayor volumen."
  },
  Tartas: {
    "Brócoli Grande": "Tarta grande de brócoli, rendidora y fácil de porcionar. Ideal para freezer, viandas o mostrador.",
    "Humita Grande": "Tarta grande de humita, cremosa y suave. Muy buena para sumar opciones vegetarianas con salida constante.",
    "JyQ Grande": "Tarta grande de jamón y queso, un clásico de alta rotación para hogar, oficina o eventos.",
    "Pollo Grande": "Tarta grande de pollo, lista para regenerar y servir en varias porciones con buen rendimiento.",
    "Verdura Grande": "Tarta grande de verdura, versátil y práctica para quienes buscan una opción clásica y rendidora.",
    "Zapallito Grande": "Tarta grande de zapallito, de sabor suave y muy útil para completar una oferta variada.",
    "Zapallo Grande": "Tarta grande de zapallo, equilibrada y rendidora. Una opción distinta para sumar al surtido."
  },
  Salsas: {
    "Fileto 190g": "Salsa fileto en pote de 190g. Ideal para porción individual, combos o venta complementaria.",
    "Fileto 350g": "Salsa fileto en presentación de 350g, pensada para varias porciones y armado de pedidos más completos.",
    "Bolognesa 190g": "Salsa bolognesa de 190g, práctica para una comida rápida y perfecta para sumar ticket promedio.",
    "Bolognesa 350g": "Salsa bolognesa de 350g, rendidora y conveniente para compartir o para producción gastronómica."
  }
};

const empanadasCardBackgrounds = [
  "../images/empanadas.webp",
  "../images/empa.webp"
];

const featuredCardBackgrounds = {
  Pizzas: {
    "Muzza": "../images/muzza.webp",
    "Napolitana": "../images/pizza.webp",
    "Especial": "../images/pizza napo.webp",
    "Doble Muzza": "../images/muzza doble.webp",
    "4 Quesos": "../images/4 quesos.webp",
    "Fugazzeta": "../images/fuga.webp",
    "Provolone": "../images/provolone.webp",
    "Marche": "../images/mar.webp"
  },
  Pastas: {
    "Sorrentinos 4 Quesos": "../images/sorren.webp",
    "Sorrentinos JyQ": "../images/sorren-j.webp",
    "Canelones JyQ": "../images/cane j.webp",
    "Canelones Pollo y Verdura": "../images/cane verdu.webp",
    "Canelones Verdura y Ricota": "../images/cane rico.webp",
    "Lasagna 1 porción": "../images/lasagna.webp",
    "Lasagna 2 porciones": "../images/lasag.jfif",
    "Pastel de Papas Chico": "../images/pastel-c.webp",
    "Pastel de Papas Grande": "../images/pastel-g.webp"
  },
  Tartas: {
    "Brócoli Grande": "../images/bro.webp",
    "Humita Grande": "../images/humi.jfif",
    "JyQ Grande": "../images/j-y-q.webp",
    "Pollo Grande": "../images/pollo.webp",
    "Verdura Grande": "../images/verdu.webp",
    "Zapallito Grande": "../images/zapalli.webp",
    "Zapallo Grande": "../images/zapaa.webp"
  },
  Salsas: {
    "Fileto 190g": "../images/file.jfif",
    "Fileto 350g": "../images/file.jfif",
    "Bolognesa 190g": "../images/bolo.jfif",
    "Bolognesa 350g": "../images/bolo.jfif"
  }
};

catalogoMarche.categorias.forEach((categoria) => {
  categoria.items.forEach((item) => {
    item.detalle = detalleProductos[categoria.nombre]?.[item.nombre] || "Producto congelado listo para conservar, regenerar y servir según necesidad.";

    if (categoria.slug === "empanadas" || categoria.slug === "canastitas") {
      item.cardBackground = empanadasCardBackgrounds[categoria.items.indexOf(item) % empanadasCardBackgrounds.length];
    }

    const featuredBackground = featuredCardBackgrounds[categoria.nombre]?.[item.nombre];
    if (featuredBackground) {
      item.cardBackground = featuredBackground;
    }

    if (!Number.isFinite(item.granel)) {
      item.granel = Math.round((item.publico + item.mayorista) / 2);
    }
  });
});
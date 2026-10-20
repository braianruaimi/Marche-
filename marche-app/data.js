const catalogoMarche = {
  fechaActualizacion: "Octubre 2026",
  whatsapp: "5492612764286",
  instagram: "https://www.instagram.com/marche.congelados/?hl=es",
  categorias: [
    {
      nombre: "Pizzas",
      slug: "pizzas",
      items: [
        { nombre: "Muzza", publico: 9796, mayorista: 7562, granel: 7562 },
        { nombre: "4 Quesos", publico: 10615, mayorista: 8194, granel: 8194 },
        { nombre: "Especial", publico: 12369, mayorista: 9597, granel: 9597 },
        { nombre: "Fugazzeta", publico: 12180, mayorista: 9402, granel: 9402 },
        { nombre: "Napolitana", publico: 14997, mayorista: 11577, granel: 11577 },
        { nombre: "Doble Muzza", publico: 14300, mayorista: 11039, granel: 11039 },
        { nombre: "Provolone", publico: 13858, mayorista: 10867, granel: 10867 },
        { nombre: "Marche", publico: 13630, mayorista: 10521, granel: 10521 }
      ]
    },
    {
      nombre: "Empanadas",
      slug: "empanadas",
      items: [
        { nombre: "Carne x6", publico: 7950, mayorista: 6114, granel: 11294, granelLabel: "Carne x12", granelDetalle: "Caja de 12 empanadas de carne condimentada. Presentación exclusiva para la lista Granel." },
        { nombre: "JyQ x6", publico: 10350, mayorista: 7959, granel: 14984, granelLabel: "JyQ x12", granelDetalle: "Caja de 12 empanadas de jamón y queso, con relleno cremoso y formato exclusivo para Granel." },
        { nombre: "Pollo x6", publico: 9150, mayorista: 7008, granel: 13082, granelLabel: "Pollo x12", granelDetalle: "Caja de 12 empanadas de pollo sazonado. Venta exclusiva por docena en lista Granel." }
      ]
    },
    {
      nombre: "Canastitas",
      slug: "canastitas",
      items: [
        { nombre: "Caprese x6", publico: 9545, mayorista: 7368, granel: 13802, granelLabel: "Caprese x12", granelDetalle: "Caja de 12 canastitas caprese con tomate, queso y albahaca. Presentación exclusiva para Granel." },
        { nombre: "Humita x6", publico: 9049, mayorista: 6985, granel: 13036, granelLabel: "Humita x12", granelDetalle: "Caja de 12 canastitas de humita, cremosas y suaves. Venta exclusiva por docena en Granel." },
        { nombre: "Verdura x6", publico: 6348, mayorista: 4900, granel: 8866, granelLabel: "Verdura x12", granelDetalle: "Caja de 12 canastitas de verdura, listas para horno y pensadas para la lista Granel." }
      ]
    },
    {
      nombre: "Pastas",
      slug: "pastas",
      items: [
        { nombre: "Sorrentinos 4 Quesos", publico: 14079, mayorista: 10868, granel: 5200 },
        { nombre: "Sorrentinos JyQ", publico: 12018, mayorista: 9277, granel: 4405 },
        { nombre: "Canelones JyQ", publico: 20977, mayorista: 16192, granel: 5241 },
        { nombre: "Canelones Pollo y Verdura", publico: 13173, mayorista: 10168, granel: 3233 },
        { nombre: "Canelones Verdura y Ricota", publico: 11399, mayorista: 8799, granel: 2777 },
        { nombre: "Lasagna 1 porción", publico: 7942, mayorista: 6131, granel: 5854 },
        { nombre: "Lasagna 2 porciones", publico: 15625, mayorista: 12061 },
        { nombre: "Pastel de Papas Chico", publico: 7906, mayorista: 6103, granel: 5826 },
        { nombre: "Pastel de Papas Grande", publico: 23965, mayorista: 18499, granel: 18032 }
        ]
      },
    {
      nombre: "Tartas",
      slug: "tartas",
      items: [
        { nombre: "Brócoli Grande", publico: 9300, mayorista: 7130, granel: 6663, smallPublico: 5250, smallMayorista: 4050, smallGranel: 3773 },
        { nombre: "Humita Grande", publico: 12579, mayorista: 9710, granel: 9243, smallPublico: 6440, smallMayorista: 4972, smallGranel: 4695 },
        { nombre: "JyQ Grande", publico: 17008, mayorista: 13169, granel: 12702, smallPublico: 8664, smallMayorista: 6721, smallGranel: 6444 },
        { nombre: "Pollo Grande", publico: 12950, mayorista: 9997, granel: 9530, smallPublico: 6626, smallMayorista: 5115, smallGranel: 4838 },
        { nombre: "Verdura Grande", publico: 10950, mayorista: 8403, granel: 7936, smallPublico: 5850, smallMayorista: 4450, smallGranel: 4173 },
        { nombre: "Zapallito Grande", publico: 12900, mayorista: 10011, granel: 9544, smallPublico: 6600, smallMayorista: 5143, smallGranel: 4866 },
        { nombre: "Zapallo Grande", publico: 17047, mayorista: 13159, granel: 12692, smallPublico: 8548, smallMayorista: 6598, smallGranel: 6321 }
      ]
    },
    {
      nombre: "Salsas",
      slug: "salsas",
      items: [
        { nombre: "Fileto 190g", publico: 1758, mayorista: 1357, granel: 1357 },
        { nombre: "Fileto 350g", publico: 3403, mayorista: 2627, granel: 2627 },
        { nombre: "Bolognesa 190g", publico: 2457, mayorista: 1897, granel: 1897 },
        { nombre: "Bolognesa 350g", publico: 4614, mayorista: 3562, granel: 3562 }
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
  });
});
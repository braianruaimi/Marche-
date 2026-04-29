const catalogoMarche = {
  fechaActualizacion: "Febrero 2026",
  whatsapp: "5492615908933",
  instagram: "https://www.instagram.com/marche.congelados/?hl=es",
  categorias: [
    {
      nombre: "Pizzas",
      slug: "pizzas",
      items: [
        { nombre: "Muzza", publico: 8085, mayorista: 6200 },
        { nombre: "4 Quesos", publico: 9438, mayorista: 7260 },
        { nombre: "Especial", publico: 9592, mayorista: 7300 },
        { nombre: "Fugazzeta", publico: 7920, mayorista: 6100 },
        { nombre: "Napolitana", publico: 11495, mayorista: 8800 },
        { nombre: "Doble Muzza", publico: 11253, mayorista: 8650 },
        { nombre: "Provolone", publico: 11528, mayorista: 8900 },
        { nombre: "Marche", publico: 11275, mayorista: 8650 }
      ]
    },
    {
      nombre: "Empanadas",
      slug: "empanadas",
      items: [
        { nombre: "Carne x6", publico: 6699, mayorista: 5148 },
        { nombre: "JyQ x6", publico: 8723, mayorista: 6710 },
        { nombre: "Pollo x6", publico: 6765, mayorista: 6150 }
      ]
    },
    {
      nombre: "Canastitas",
      slug: "canastitas",
      items: [
        { nombre: "Caprese x6", publico: 7425, mayorista: 5700 },
        { nombre: "Humita x6", publico: 5698, mayorista: 4387 },
        { nombre: "Verdura x6", publico: 5104, mayorista: 3927 }
      ]
    },
    {
      nombre: "Pastas",
      slug: "pastas",
      items: [
        { nombre: "Sorrentinos 4 Quesos", publico: 10050, mayorista: 7730 },
        { nombre: "Sorrentinos JyQ", publico: 8877, mayorista: 6830 },
        { nombre: "Canelones JyQ", publico: 14883, mayorista: 11446 },
        { nombre: "Canelones Pollo y Verdura", publico: 9163, mayorista: 7050 },
        { nombre: "Canelones Verdura y Ricota", publico: 8855, mayorista: 6809 },
        { nombre: "Lasagna 1 porción", publico: 6292, mayorista: 4840 },
        { nombre: "Lasagna 2 porciones", publico: 12155, mayorista: 9350 },
        { nombre: "Pastel de Papas Chico", publico: 4576, mayorista: 3520 },
        { nombre: "Pastel de Papas Grande", publico: 12914, mayorista: 9930 }
      ]
    },
    {
      nombre: "Tartas",
      slug: "tartas",
      items: [
        { nombre: "Brócoli Grande", publico: 9262, mayorista: 7130 },
        { nombre: "Humita Grande", publico: 9251, mayorista: 7100 },
        { nombre: "JyQ Grande", publico: 13178, mayorista: 10100 },
        { nombre: "Pollo Grande", publico: 9460, mayorista: 7200 },
        { nombre: "Verdura Grande", publico: 9317, mayorista: 7200 },
        { nombre: "Zapallito Grande", publico: 9284, mayorista: 7100 },
        { nombre: "Zapallo Grande", publico: 7172, mayorista: 5500 }
      ]
    },
    {
      nombre: "Salsas",
      slug: "salsas",
      items: [
        { nombre: "Fileto 190g", publico: 1133, mayorista: 900 },
        { nombre: "Fileto 350g", publico: 2013, mayorista: 1560 },
        { nombre: "Bolognesa 190g", publico: 2046, mayorista: 1570 },
        { nombre: "Bolognesa 350g", publico: 3729, mayorista: 2870 }
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
    "Sorrentinos 4 Quesos": "Sorrentinos rellenos de cuatro quesos. Una pasta sabrosa y rendidora para vender como plato principal.",
    "Sorrentinos JyQ": "Sorrentinos de jamón y queso, fáciles de regenerar y con excelente rendimiento por porción.",
    "Canelones JyQ": "Canelones de jamón y queso, listos para sumar salsa, gratinar y servir sin complicaciones.",
    "Canelones Pollo y Verdura": "Canelones de pollo y verdura, prácticos para porciones completas y con muy buena rotación.",
    "Canelones Verdura y Ricota": "Canelones de verdura y ricota, de perfil suave y casero. Una alternativa clásica y confiable.",
    "Lasagna 1 porción": "Lasaña individual lista para horno. Ideal para viandas, menú ejecutivo o consumo personal.",
    "Lasagna 2 porciones": "Lasaña para dos porciones. Práctica para compartir o vender como comida completa.",
    "Pastel de Papas Chico": "Pastel de papas en formato individual. Resuelve almuerzos rápidos y viandas con buen margen.",
    "Pastel de Papas Grande": "Pastel de papas grande, ideal para compartir o para propuestas gastronómicas de mayor volumen."
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

catalogoMarche.categorias.forEach((categoria) => {
  categoria.items.forEach((item) => {
    item.detalle = detalleProductos[categoria.nombre]?.[item.nombre] || "Producto congelado listo para conservar, regenerar y servir según necesidad.";

    if (!Number.isFinite(item.granel)) {
      item.granel = Math.round((item.publico + item.mayorista) / 2);
    }
  });
});
const productos = [
    {
      id: "novia1",
      nombre: "Novia Marilyn",
      descripcion: "Vestido corte marilyn: Con bordado artesanal de perlas, y falda de tul",
      stock: 3,
      precio: 150000,
      imagen: "/img/novias (1).jpeg",
      categoria: "novias"
    },
    {
      id: "novia2",
      nombre: "Faja desmontable",
      descripcion: "Faja; Bordada artesanalmente con perlas",
      stock: 2,
      precio: 20000,
      imagen: "/img/novias (2).jpeg",
      categoria: "novias"
    },
    {
      id: "novia3",
      nombre: "Novia Amerie",
      descripcion: "Vestido de satén: Corte sirena, con apliques de encaje, y bordado artesanal",
      stock: 2,
      precio: 150000,
      imagen: "/img/novias (3).jpeg",
      categoria: "novias"
    },
    {
      id: "novia4",
      nombre: "Novia Lucia",
      descripcion: "Vestido de tul: Corte princesa, falda campana plato, apliques de encaje y borado artesanal de piedras en color dorado ",
      stock: 9,
      precio: 140000,
      imagen: "/img/novias (4).jpeg",
      categoria: "novias"
    },
    {
      id: "noviaLU4",
      nombre: "Corset Lucia",
      descripcion: "Corset desmontable bordado artesanalmente con apliques de encaje en dorado",
      stock: 5,
      precio: 50000,
      imagen: "/img/15 años (3).jpeg",
      categoria: "novias"
    },
    {
      id: "novia5",
      nombre: "Vestido Prince",
      descripcion: "Vestido desmontable: Corset de satén con apliques de encaje, falda corta de tul con cintura de raso y lazo ",
      stock: 4,
      precio: 90000,
      imagen: "/img/novias (5).jpeg",
      categoria: "novias"
    },
    {
      id: "novia6",
      nombre: "Vestido Tatiana",
      descripcion:"Vestido de tul y encaje: Corset de encaje con escote transparante, falda de tul y abertura lateral",
      stock: 3,
      precio: 150000,
      imagen: "/img/novias (6).jpeg",
      categoria: "novias"
    },
    {
      id: "fiesta1",
      nombre: "Vestido Antonella",
      descripcion: "Vestido de modal: casual, corto, con escote en el busto y detalle de argollita",
      stock: 3,
      precio: 30000,
      imagen: "/img/fiesta (1).jpeg",
      categoria: "fiesta"
    },
    {
      id: "fiesta2",
      nombre: "Vestido Ladie",
      descripcion: "Vestido para egreso, fiesta: De tul bordado y falda de seda, corset transparente con aplique de encaje y bordado artesanal de piedras",
      stock: 2,
      precio: 110000,
      imagen: "/img/fiesta (2).jpeg",
      categoria: "fiesta"
    },
    {
      id: "fiesta3",
      nombre: "Vestido Ariana",
      descripcion: "Vestido para madrinas, fiesta: Opcional saquito de encaje bordado. Vestido corte princesa, corset drapeado artesanal, con aplique de broche con piedras, falda de seda",
      stock: 2,
      precio: 90000,
      imagen: "/img/fiesta (3).jpeg",
      categoria: "fiesta"
    },
    {
      id: "fiesta4",
      nombre: "Vestido Camila",
      descripcion: "Vestido para egreso, fiesta: De gasa, corset bordado artesanalmente con gemas y drapeado en la cintura, falda larga",
      stock: 1,
      precio: 90000,
      imagen: "/img/fiesta (4).jpeg",
      categoria: "fiesta"
    },
    {
      id: "fiesta5",
      nombre: "Vestido Magga",
      descripcion: "Vestido para madrina, egreso, fiesta: De gasa, coset corte marilyn, con faja bordada artesanalmente con mostacillas y gemas, falda con abertura en la pierna",
      stock: 2,
      precio: 85000,
      imagen: "/img/fiesta (5).jpeg",
      categoria: "fiesta"
    },
    {
      id: "fiesta6",
      nombre: "Faja Magga",
      descripcion: "Faja desmontable, bordada artesanalmente con mostacillas y gemas",
      stock: 2,
      precio: 40000,
      imagen: "/img/fiesta (6).jpeg",
      categoria: "fiesta"
    },
    {
      id: "fiesta7",
      nombre: "Corset Bella",
      descripcion: "Corset de seda, desmontable, drapeado artesanalmente.",
      stock: 3,
      precio: 40000,
      imagen: "/img/fiesta (7).jpeg",
      categoria: "fiesta"
    },
    {
      id: "fiesta8",
      nombre: "Corset Rosie",
      descripcion: "Corset desmontable con breteles, y apliques de encaje con lentejuelas.",
      stock: 3,
      precio: 30000,
      imagen: "/img/fiesta (8).jpeg",
      categoria: "fiesta"
    },
    {
      id: "fiesta9",
      nombre: "Corset París ",
      descripcion: "Corset desmontable con transparencia, y apliques bordados artesanalmente.",
      stock: 3,
      precio: 30000,
      imagen: "/img/fiesta (9).jpeg",
      categoria: "fiesta"
    },
    {
      id: "15 años",
      nombre: "Vestido Coral",
      descripcion: "Vestido de gasa, corset con transparencia, corte princesa, y apliques de encaje bordado artesanalmente con piedras, falda campana y capa desmontable. ",
      stock: 2,
      precio: 120000,
      imagen: "/img/15 años (1).jpeg",
      categoria: "15 años"
    },
    {
      id: "15 años2",
      nombre: "Vestido Violeta",
      descripcion: "Vestido de tul, corte princesa, falda campana, fajita bordado artesanalmente con piedras",
      stock: 1,
      precio: 120000,
      imagen: "/img/15 años (2).jpeg",
      categoria: "15 años"
    },
    
    {
      id: "15 años4",
      nombre: "Corset Azul",
      descripcion: "Corset desmontable de encaje, bordado artesanalmente con piedras plateadas y gemas azules",
      stock: 2,
      precio: 40000,
      imagen: "/img/15 años (4).jpeg",
      categoria: "15 años"
    },
    {
      id: "15 años5",
      nombre: "Vestido Rosa",
      descripcion: "Corset desmontable de seda, bordado artesanalmente con gemas plateadas, y drapeado en la cintura. Falda corte campana de gasa",
      stock: 2,
      precio: 120000,
      imagen: "/img/15 años (5).jpeg",
      categoria: "15 años"
    },
    {
      id: "niñas1",
      nombre: "Vestido Princesa Rapunzel",
      descripcion: "Vestido de seda y gasa con apliques de cintas y estrellitas. Disponible en todos los talles",
      stock:5,
      precio: 25000,
      imagen: "/img/niñas (1).jpeg",
      categoria: "niñas"
    },
    {
      id: "niñas2",
      nombre: "Vestido Princesa Unicornio",
      descripcion: "Falda de tul de colores y Remerita pintada artesanalmente. Disponible en todos los talles",
      stock: 5,
      precio: 20000,
      imagen: "/img/niñas (2).jpeg",
      categoria: "niñas"
    },
    {
      id: "niñas3",
      nombre: "Vestido Princesa Ariel",
      descripcion: "Top bordado artesanalmente y falda de gasa cristal transparente. Disponible en todos los talles",
      stock: 5,
      precio: 30000,
      imagen: "/img/niñas (3).jpeg",
      categoria: "niñas"
    },
    {
      id: "niñas4",
      nombre: "Top Princesa Ariel",
      descripcion: "Top bordado artesanalmente. Disponible en todos los talles.",
      stock: 5,
      precio: 15000,
      imagen: "/img/niñas (4).jpeg",
      categoria: "niñas"
    },
    {
      id: "niñas5",
      nombre: "Vestido Merlina",
      descripcion: "Vestido de tul y raso con cinto y aplique bordado artesanalmente. Disponible en todos los talles.",
      stock: 5,
      precio: 30000,
      imagen: "/img/niñas (5).jpeg",
      categoria: "niñas"
    },
    {
      id: "niñas6",
      nombre: "Vestido de Fiesta",
      descripcion: "Vestido para cortejo de casamiento, fiestas, de gasa bordado artesanalmente, y cintura con petalos. Disponible en todos los talles.",
      stock: 5,
      precio: 40000,
      imagen: "/img/niñas (6).jpeg",
      categoria: "niñas"
    },
    {
      id: "niñas7",
      nombre: "Vestido de Fiesta",
      descripcion: "Vestido para cortejo de casamiento, fiestas, de gasa bordado artesanalmente, y cintura con petalos. Disponible en todos los talles",
      stock: 5,
      precio: 40000,
      imagen: "/img/niñas (7).jpeg",
      categoria: "niñas"
    },
    {
      id: "niñas8",
      nombre: "Vestido: Princesa Bella Durmiente",
      descripcion: "Vestido de gasa cristal, con aplique de cintas y gemas. Disponible en todos los talles",
      stock: 5,
      precio: 30000,
      imagen: "/img/niñas (8).jpeg",
      categoria: "niñas"
    },
  ];
  
  const obtenerProductos = new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  
  
   
  
  export default obtenerProductos
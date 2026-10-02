export default {
  global: {
    Name: 'Registro y control de operaciones financieras',
    Description:
      'El registro y control de las operaciones financieras permite reconocer los principios contables aplicables a la actividad económica, clasificar cuentas y registrar transacciones de forma manual o mediante herramientas tecnológicas. Integra el tratamiento de compras, ventas, inventarios, impuestos y comprobantes, lo que facilita la organización de la información del negocio y el seguimiento de los recursos en economías populares y campesinas.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos contables de la actividad económica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Actividad económica y características de las economías populares y campesinas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Finalidad de la información contable y financiera',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principios básicos de contabilidad',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Contabilidad simplificada y control de recursos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Organización de la información económica del negocio',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cuentas y estructura básica del registro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y función de las cuentas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Activos, pasivos y patrimonio',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ingresos, costos y gastos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Naturaleza y movimiento de las cuentas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Clasificación de cuentas según las operaciones del negocio',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Registro de compras, ventas y movimientos financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Compras de contado y a crédito',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ventas de contado y a crédito',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ingresos, egresos, cuentas por cobrar y cuentas por pagar',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Registro manual de transacciones',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Registro mediante herramientas tecnológicas',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inventarios e impuestos en las operaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Inventarios y su importancia en el control financiero',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Sistema de inventario periódico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Sistema de inventario permanente',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Entradas, salidas y control de existencias',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Impuestos asociados con las operaciones comerciales',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Soportes y comprobantes de las transacciones	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Soportes de las operaciones económicas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Comprobantes contables y no contables',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Relación entre soporte, transacción y registro',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Factura electrónica y documento equivalente',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Organización y control de los comprobantes',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Actividad económica',
      significado:
        'Conjunto de acciones mediante las cuales se producen, transforman, comercializan bienes o se prestan servicios utilizando diferentes recursos.',
    },
    {
      termino: 'Activo',
      significado:
        'Recurso controlado por la unidad económica del cual se espera obtener beneficios económicos, como efectivo, inventarios, cuentas por cobrar, equipos o maquinaria.',
    },
    {
      termino: 'Compra',
      significado:
        'Operación mediante la cual el negocio adquiere bienes, mercancías, materiales, insumos o servicios, de contado o a crédito.',
    },
    {
      termino: 'Comprobante contable',
      significado:
        'Documento que organiza la información de una operación e identifica las cuentas y valores que deben incorporarse al registro contable.',
    },
    {
      termino: 'Costo',
      significado:
        'Recurso directamente relacionado con la adquisición, producción o transformación de los bienes vendidos.',
    },
    {
      termino: 'Crédito',
      significado:
        'Lado derecho de una cuenta contable utilizado para registrar determinados aumentos o disminuciones según la naturaleza de la cuenta.',
    },
    {
      termino: 'Cuenta contable',
      significado:
        'Instrumento utilizado para identificar, clasificar y acumular los movimientos económicos que afectan un mismo concepto.',
    },
    {
      termino: 'Cuenta por cobrar',
      significado:
        'Derecho que tiene la unidad económica a recibir dinero de un cliente u otro tercero por una operación realizada previamente.',
    },
    {
      termino: 'Cuenta por pagar',
      significado:
        'Obligación pendiente de pago adquirida por la unidad económica con proveedores u otros terceros.',
    },
    {
      termino: 'Débito',
      significado:
        'Lado izquierdo de una cuenta contable utilizado para registrar determinados aumentos o disminuciones según la naturaleza de la cuenta.',
    },
    {
      termino: 'Documento equivalente',
      significado:
        'Documento autorizado para soportar determinadas operaciones en los casos establecidos por la normativa de facturación.',
    },
    {
      termino: 'Factura electrónica',
      significado:
        'Documento generado y validado electrónicamente que soporta la venta de bienes o la prestación de servicios conforme con los requisitos aplicables.',
    },
    {
      termino: 'Gasto',
      significado:
        'Valor asociado con recursos consumidos para apoyar el funcionamiento y desarrollo de la actividad económica.',
    },
    {
      termino: 'Ingreso',
      significado:
        'Beneficio económico generado por actividades como la venta de bienes o la prestación de servicios.',
    },
    {
      termino: 'Inventario',
      significado:
        'Conjunto de mercancías, materias primas, insumos o productos que la unidad económica mantiene para vender, transformar o utilizar en su actividad.',
    },
    {
      termino: 'Pasivo',
      significado:
        'Obligación actual de la unidad económica que implica la entrega futura de recursos a un tercero.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Parte residual de los activos de la unidad económica después de descontar sus pasivos.',
    },
    {
      termino: 'Registro contable',
      significado:
        'Incorporación ordenada de una transacción en las cuentas correspondientes, aplicando débitos y créditos según su naturaleza.',
    },
    {
      termino: 'Soporte',
      significado:
        'Documento o registro que permite evidenciar y verificar una operación económica utilizada como base para su reconocimiento y control.',
    },
    {
      termino: 'Transacción',
      significado:
        'Operación económica que afecta los recursos, obligaciones, ingresos, costos o gastos de la unidad económica y cuyos efectos se representan en las cuentas correspondientes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República. (s. f.). Sectores económicos. Enciclopedia Banrepcultural.',
      link: 'https://enciclopedia.banrepcultural.org/Sectores_econ%C3%B3micos',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1983, 6 de julio). Ley 14 de 1983. Por la cual se fortalecen los fiscos de las entidades territoriales y se dictan otras disposiciones.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=267',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1990, 18 de diciembre). Ley 44 de 1990. Por la cual se dictan normas sobre catastro e impuestos sobre la propiedad raíz, se dictan otras disposiciones de carácter tributario, y se conceden unas facultades extraordinarias.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=283',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1995, 20 de diciembre). Ley 223 de 1995. Por la cual se expiden normas sobre racionalización tributaria y se dictan otras disposiciones.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6968',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1998, 24 de diciembre). Ley 488 de 1998. Por la cual se expiden normas en materia tributaria y se dictan otras disposiciones fiscales de las entidades territoriales.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=187',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1999, 18 de agosto). Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4276',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2005, 8 de julio). Ley 962 de 2005. Por la cual se dictan disposiciones sobre racionalización de trámites y procedimientos administrativos de los organismos y entidades del Estado y de los particulares que ejercen funciones públicas o prestan servicios públicos.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=17004',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009, 13 de julio). Ley 1314 de 2009. Por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia, se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entidades responsables de vigilar su cumplimiento.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2020, 31 de diciembre). Ley 2069 de 2020. Por medio del cual se impulsa el emprendimiento en Colombia.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=160966',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (s. f.). Medición de la economía popular. Sistema de Información de Economía Popular.',
      link: 'https://siep.dane.gov.co/medicion-de-la-economia-popular',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (2022). Clasificación Industrial Internacional Uniforme de todas las actividades económicas. Revisión 4 adaptada para Colombia (CIIU Rev. 4 A.C.): Actualización año 2022.',
      link: 'https://www.dane.gov.co/files/sen/nomenclatura/ciiu/CIIU_Rev_4_AC2022.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-a). ¿Cómo recibo una factura electrónica si no soy facturador electrónico? Sistema de Facturación Electrónica.',
      link: 'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/como-recibo-una-factura-electronica-sino-soy-facturador-electronico/',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-b). ¿Cómo verifico si una factura fue validada por la DIAN? Sistema de Facturación Electrónica.',
      link: 'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/como-verifico-si-una-factura-fue-validada-por-la-dian/',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-c). Documento equivalente electrónico. Sistema de Facturación Electrónica.',
      link: 'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/documento-equivalente-electronico/',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-d). Documento soporte con sujetos no obligados a expedir factura de venta y/o documento equivalente. Sistema de Facturación Electrónica.',
      link: 'https://www.dian.gov.co/impuestos/Paginas/Sistema-de-Factura-Electronica/Documento-Soporte-Adquisiciones-No-Obligados.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-e). RUT.',
      link: 'https://www.dian.gov.co/tramitesservicios/tramites-y-servicios/tributarios/Paginas/RUT.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2025, 23 de septiembre). Resolución 000227 de 2025. Por la cual se expide la Resolución Única en Materia Tributaria, Aduanera y Cambiaria en lo de competencia de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN).',
      link: 'https://www.dian.gov.co/normatividad/Paginas/Resolucion-000227-del-23092025.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2026, 21 de julio). Concepto 12666 Int. 1173 de 2026. Compilación Jurídica de la DIAN.',
      link: 'https://normograma.dian.gov.co/dian/compilacion/docs/oficio_dian_12666_2026.htm',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2017, 29 de diciembre). Resolución 000464 de 2017. Por la cual se adoptan los lineamientos estratégicos de política pública para la Agricultura Campesina, Familiar y Comunitaria y se dictan otras disposiciones.',
      link: 'https://www.minagricultura.gov.co/fileadmin/normatividad/resoluciones/Resolucion_No_000464_de_2017.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024, 21 de junio). Resolución 000175 de 2024. Por la cual se modifica las Resoluciones números 464 de 2017 y 000095 de 2021, y se dictan otras disposiciones.',
      link: 'https://www.minagricultura.gov.co/fileadmin/normatividad/resoluciones/Resolucion_No_000175.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971, 27 de marzo). Decreto 410 de 1971. Por el cual se expide el Código de Comercio.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1989, 30 de marzo). Decreto 624 de 1989. Por el cual se expide el Estatuto Tributario de los impuestos administrados por la Dirección General de Impuestos Nacionales.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6533',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993, 29 de diciembre). Decreto 2650 de 1993. Por el cual se modifica el Plan Único de Cuentas para los comerciantes.',
      link: 'https://gestornormativo.creg.gov.co/gestor/entorno/docs/decreto_2650_1993.htm',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 14 de diciembre). Decreto 2420 de 2015. Por medio del cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2021, 9 de diciembre). Decreto 1670 de 2021. Por el cual se modifica el Decreto 2420 de 2015, Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información, en relación con la simplificación contable y se dictan otras disposiciones.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=174053',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

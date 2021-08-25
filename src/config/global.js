export default {
  global: {
    componenteFormativo: 'Gestión de clientes',
    descripcionCurso:
      'La gestión de clientes es concebida como el pilar fundamental que sustenta el desarrollo y crecimiento de toda organización. En este componente se abordarán sus dos elementos a nivel comercial y de entidades.  Ambos tienen como fin maximizar su productividad, y para lograrlo, es necesario identificar los conceptos de gestión de TI, los cuales ejemplifican uno de los procesos de gestión de TI relacionándolo con la atención a usuarios finales de un conjunto de productos <em>software</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner.jpg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos generales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Beneficios de la gestión de TI',
            hash: '1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Cómo y cuándo empezar la gestión de TI?',
            hash: '1-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Buenas prácticas en la gestión de TI',
            hash: '1-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Acuerdos de nivel de servicio',
            hash: '1-4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mesa de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diagnóstico y preparación',
            hash: '2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Definición de la estructura de servicios',
            hash: '2-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Selección de roles y propietarios de roles',
            hash: '2-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Análisis de procesos existentes',
            hash: '2-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Definición de estructura de procesos',
            hash: '2-5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Definición de interfaces de ITIL',
            hash: '2-6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Establecimiento de controles',
            hash: '2-7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Diseño de los procesos',
            hash: '2-8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Selección e implementación de sistemas',
            hash: '2-9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo: 'Implementación de procesos y capacitación',
            hash: '2-10',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Bonillaware. (2021). Helpdesk: 7 herramientas de gestión de atención al cliente. Bonillaware.',
      link: 'https://www.bonillaware.com/7-herramientas-de-helpdesk',
    },
    {
      referencia:
        'Granizo, I. (2009). Diseño e implementación de un modelo de simulación para el Gobierno de las TI basado en ITIL v3, MOF y CMMI <em>for services</em>. Universidad Carlos III de Madrid.',
    },
    {
      referencia:
        '<em>IT Process Wiki</em>. (2021). <em>El Wiki de ITIL® | IT Process Maps</em>.',
      link: 'https://wiki.es.it-processmaps.com/index.php/Portada',
    },
  ],
  glosario: [
    {
      termino: 'Gobierno de TI',
      significado:
        'Capacidad de controlar los aspectos inherentes a la gestión de tecnologías de la información.',
    },
    {
      termino: 'Incidente',
      significado:
        'Falla o solicitud de nivel técnico sobre un sistema o servicios de infraestructura o aplicación.',
    },
    {
      termino: 'Outsorsing',
      significado:
        'Hace referencia al proceso de subcontratación o  externalización de algún proceso o parte del proceso empresarial, de tal forma que se transfieren los recursos y responsabilidades referentes al cumplimiento de ciertas tareas a una sociedad o persona externa.',
    },
    {
      termino: 'Sistemas legados',
      significado:
        'Sistemas de información poco actualizados o que emplean tecnologías que ya no están en constante actualización  y son susceptibles a ser reemplazados.',
    },
  ],
  complementario: [
    {
      texto:
        'Baud, J. (2016). ITIL® V3. Entender el enfoque y adoptar las buenas prácticas. Ediciones ENI.',
      tipo: 'Libro',
      link:
        'https://www.ediciones-eni.com/libro/itil-v3-entender-el-enfoque-y-adoptar-las-buenas-practicas-9782409001789',
    },
    {
      texto:
        'Baud, J. (2020). ITIL® 4 Entender el enfoque y adoptar las buenas prácticas. Ediciones ENI.',
      tipo: 'Libro',
      link:
        'https://www.ediciones-eni.com/libro/itil-4-entender-el-enfoque-y-adoptar-las-buenas-practicas-9782409027383',
    },
    {
      texto:
        'Setiawan, A. (2019). <em>Tutoriall instalation OSTicket on Windows10 with XAMPP </em>[video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KCz1ZKGOp28',
    },
    {
      texto:
        '<em>IT Process Wiki</em>. (2021). <em>El Wiki de ITIL® | IT Process Maps</em>',
      tipo: 'Wiki',
      link: 'https://wiki.es.it-processmaps.com/index.php/Portada',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Peter Emerson Pinchao',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial Regional Cauca',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Bogotá',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Bogotá',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

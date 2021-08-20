<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #t1.titulo-principal(data-aos='flip-up')
      .titulo-principal__numero
        span 1
      h1 Conceptos generales

    figure.mb-5.tarjeta(data-aos="fade-up")
      img(src='@/assets/curso/t1-01.jpg', alt='Texto que describa la imagen')

    p(data-aos="fade-up") La Gestión de Tecnologías de la Información (TI) es la disciplina enfocada en procesos para alinear los servicios de TI con las necesidades de las entidades y sus usuarios, centrándose en garantizar los beneficios que puede percibir el cliente final de las tecnologías gestionadas.

    p.mb-5(data-aos="fade-up") La gestión de servicios de TI se consolida en una integración de tres componentes: personas, procesos y tecnología como se muestra en el siguiente recurso:

    Botones.mb-5(data-aos="fade-up")

    p.mb-0(data-aos="fade-up") El escenario general de los servicios de TI está asociado con el outsoursing (subcontratación o tercerización de procesos), servicios compartidos, por ejemplo, cuando la empresa usa GSuit, Teams, y también sistemas de información particulares de la empresa o sistemas legados. Sea cual sea el caso, es importante mantener una base de conocimiento de la gestión de los servicios ya que se ha probado que esas prácticas son exitosas.

    Separador(data-aos="fade-up")

    #1-1.titulo-segundo(data-aos="fade-up")
      h2 1.1 Beneficios de la gestión de TI

    p(data-aos="fade-up") El concepto anterior brinda una idea general de lo que es la gestión de TI y sus componentes, la cual es importante revisar para establecer estrategias y prácticas en las corporaciones, de forma que se puedan aprovechar los siguientes beneficios:

    AcordionA(tipo='a', clase-tarjeta='tarjeta color-acento-botones__claro' data-aos="fade-up")
      .row.align-items-center(titulo='Mejora en la productividad')
        .col-3.col-md-2.col-xl-1.mb-4.mb-md-0
          figure
            img(
              src='@/assets/curso/t1-ico-01.svg',
              alt='Texto que describa la imagen'
            )
        .col
          p.mb-0 La implementación de herramientas como lo propone la gestión de TI hace que el trabajo sea más ágil, eliminando tareas repetitivas y demoradas. De esta forma, el talento humano se puede enfocar en aquellas actividades que hacen mejor o en las que son especialistas.

      .row.align-items-center(titulo='Mejora en la seguridad informática')
        .col-3.col-md-2.col-xl-1.mb-4.mb-md-0
          figure
            img(
              src='@/assets/curso/t1-ico-02.svg',
              alt='Texto que describa la imagen'
            )
        .col
          p.mb-0 la información es muy importante para las empresas de cualquier sector. La gestión eficaz de TI también se encarga de velar por la ejecución operativa de muchos de los controles de seguridad informática.

      .row.align-items-center(
        titulo='Más calidad en la relación con los clientes'
      )
        .col-3.col-md-2.col-xl-1.mb-4.mb-md-0
          figure
            img(
              src='@/assets/curso/t1-ico-03.svg',
              alt='Texto que describa la imagen'
            )
        .col
          p.mb-0 permite establecer mejores y diferentes canales de atención al cliente o usuario. La tendencia es que estos canales se integren, por ejemplo, si un cliente entró en contacto vía e-mail o por WhatsApp y, luego decide llamar a la empresa para el mismo caso se espera que no necesite repetir todas las informaciones que dio en el primer contacto. De esta forma, una gestión de TI efectiva hace que desde cualquier área de la empresa se tenga acceso a la información importante para la atención que los usuarios esperan.

      .row.align-items-center(titulo='Optimización de procesos')
        .col-3.col-md-2.col-xl-1.mb-4.mb-md-0
          figure
            img(
              src='@/assets/curso/t1-ico-04.svg',
              alt='Texto que describa la imagen'
            )
        .col
          p.mb-0 cuando la entidad no está usando el software adecuado o no ha mejorado sus procesos adaptando nuevas tecnologías, esto hace que la empresa esté atrasada frente al mercado en el sector económico al que pertenece. La gestión de TI puede ahorrar tiempo y dinero adoptando nuevas tecnologías en los procesos de la entidad, a la vez que la impulsa en su crecimiento.

      .row.align-items-center(titulo='Reducción de costos')
        .col-3.col-md-2.col-xl-1.mb-4.mb-md-0
          figure
            img(
              src='@/assets/curso/t1-ico-05.svg',
              alt='Texto que describa la imagen'
            )
        .col
          p.mb-0 hace que los procesos puedan ser innovados constantemente, adoptando nuevas o mejores herramientas de hardware y software que optimicen los procesos de negocio haciendo a la empresa más productiva, debido a la reducción de costos o maximización de ganancias.

      .row.align-items-center(titulo='Identificar nuevas oportunidades')
        .col-3.col-md-2.col-xl-1.mb-4.mb-md-0
          figure
            img(
              src='@/assets/curso/t1-ico-06.svg',
              alt='Texto que describa la imagen'
            )
        .col
          p.mb-0 posibilita saber en qué momento los clientes o usuarios cambian a un nuevo perfil para actualizar los servicios tecnológicos. Por tanto, se puede identificar el punto para ofrecer productos complementarios o nuevos servicios TI.

    Separador(data-aos="fade-up")

    #1-1.titulo-segundo(data-aos="fade-up")
      h2 1.2. ¿Cómo y cuándo empezar la gestión de TI?

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-8
        .bloque-texto-a.color-primario.px-4.py-3
          .row.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p.mb-0 Muchos especialistas están de acuerdo en responder a la pregunta
                  b “¿cuándo es el momento de implementar la gestión de TI?”
                  | , y la respuesta es
                  b “lo antes posible”
                  | , desde el principio de ser posible.
            .col-lg-4
              img(
                src='@/assets/curso/t1-02.svg',
                alt='Texto que describa la imagen'
              )

    .float-layout-container.mb-5(data-aos="fade-up")
      img.img-text.ms-3.mb-3(
        src='@/assets/curso/happy-woman-with-phone.jpg',
        alt='Texto que describa la imagen'
      )
      p Casi todo el software que existe en el mercado para hacer gestión de TI es escalable en funcionalidad y costos. Esto quiere decir que existen herramientas para la gestión de TI con costos que van desde cero pesos hasta el valor que tenga dentro de una organización, y también existen herramientas de funcionalidades básicas que pueden configurarse para soportar las más complejas. Según esto, el costo en la adquisición de herramientas para la gestión TI no es una limitante; sin embargo, el desconocimiento de cómo usarlas o adoptar estrategias para la integración de estas herramientas con la atención a los usuarios y la gestión de los servicios, sí lo puede ser.

    p.mb-5(data-aos="fade-up") Ahora, el escenario es el siguiente: existen herramientas para la gestión de TI de las que se puede disponer y también existen buenas prácticas ya definidas para la integración de estas herramientas con los procesos de atención al usuario y la gestión de TI. Por lo tanto, la conclusión es que para mejorar la estrategia de gestión de TI las actividades a realizar son:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-6.col-lg-5.mb-4.mb-md-0
        .img-hover(@mouseover='mostrarIndicador = false')
          img(
            src='@/assets/curso/t1-img-01.jpg',
            alt='Texto que describa la imagen'
          )
          .indicador--hover(v-if='mostrarIndicador')
          .img-hover__content.p-4
            p.mb-0.text-center
              b Estudiar las guías de buenas prácticas de TI:
              | Accediendo a las librerías de buenas prácticas.

      .col-md-6.col-lg-5
        .img-hover(@mouseover='mostrarIndicador = false')
          img(
            src='@/assets/curso/t1-img-02.jpg',
            alt='Texto que describa la imagen'
          )
          .img-hover__content.p-4
            p.mb-0.text-center
              b Búsqueda y selección herramientas de TI
              br
              | Seleccionar la necesidad de gestión y las herramientas que se ajusten al presupuesto (aunque el presupuesto sea cero).

    p.mb-0(data-aos="fade-up") A la agrupación de mejores prácticas establecidas, su implementación e integración en los procesos en una entidad es lo que se denomina como Gobierno de TI o Gobernanza de TI y muchas de estas prácticas están documentadas en las librerías ITIL (Information Technology Infrastructure Library), librería que se ha internacionalizado y estandarizado a nivel mundial y ahora está en la Norma ISO/IEC 20000.

    Separador(data-aos="fade-up")

    #1-3.titulo-segundo(data-aos="fade-up")
      h2 1.3. Buenas prácticas en la gestión de TI

    p.mb-5(data-aos="fade-up") La necesidad de innovación y transformación digital que cada vez más crece en las entidades crea un aumento en la importancia de la administración de servicios y procesos de tecnología. Para ello, existe una variedad de marcos de trabajo, los más empleados son:
    
    TabsC.color-primario(data-aos="fade-up")
      .py-3.py-md-4(titulo="ITIL")
        .row.justify-content-center
          .col-6.col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t1-03.svg', alt='Texto que describa la imagen')
          .col-md
            h4 ITIL
            p Es la sigla en inglés de Information Technology Infrastructure Library (ITIL), en español Biblioteca de Infraestructura de Tecnología de la Información. Es el modelo de gestión de TI más conocido y es la colección de mejores prácticas para acoplar TI a las necesidades específicas de una empresa. De esta forma proporciona una mejor optimización de los servicios prestados, con el objetivo de reducir los costos y mejorar la eficacia de los sectores involucrados.
            p La serie ITIL está compuesta por cinco libros denominados Estrategia de servicio, Diseño del servicio, Transición del servicio, Operación del servicio y Mejora continua del servicio.
        
      .py-3.py-md-4(titulo="COBIT")
        .row.justify-content-center
          .col-6.col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t1-04.svg', alt='Texto que describa la imagen')
          .col-md
            h4 COBIT
            p Es la sigla en inglés de Control Objectives for Information and Related Technology, en español Objetivos de Control para las Tecnologías de la Información y Relacionadas. Es un marco de gobierno de TI cuyo propósito es divulgar conceptos y prácticas de TI; centra su atención en que las inversiones en TI estén alineadas con las necesidades de la empresa.
        
      .py-3.py-md-4(titulo="PMBOOK")
        .row.justify-content-center
          .col-6.col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t1-05.svg', alt='Texto que describa la imagen')
          .col-md
            h4 PMBOOK
            p Es la sigla en inglés de Project Management Book of Knowledge, en español Guía de los fundamentos para la dirección de proyectos. Es una de las referencias mejor calificadas en lo referente a la gestión de proyectos y cuya aplicabilidad en proyectos TI ha sido comprobada; esta metodología es a menudo aplicada en distintos sectores de la gestión de TI.
            p PMBOK divide cada proyecto en cinco fases: estructuración, planeación, implementación, mantenimiento y gestión, cada una de ellas con actividades y contextos definidos. El propósito es apoyar la estructuración, planeación, implementación y mantenimiento de los procesos de la gestión de proyectos.

    Separador(data-aos="fade-up")

    #1-4.titulo-segundo(data-aos="fade-up")
      h2 1.4. Acuerdos de nivel de servicio

    .float-layout-container.mb-5(data-aos="fade-up")
      img.img-text.ms-3.mb-3(
        src='@/assets/curso/t1-img-03.jpg',
        alt='Texto que describa la imagen'
      )
      p Un acuerdo de nivel de servicio (ANS) o también conocido por las siglas en inglés SLA (Service Level Agreement), es un acuerdo escrito o verbal entre un proveedor de servicio TI y su cliente, con el fin de fijar el nivel acordado para la calidad en la prestación de dicho servicio. El ANS permite tener un consenso en términos del nivel de calidad del servicio para temas como tiempo de respuesta, documentación disponible, disponibilidad horaria, personal asignado al servicio, entre otros.
      p Cuando se elabora una propuesta técnica de un sistema para un cliente no basta con poner la descripción del producto, el costo, el tiempo de entrega, forma de pago, etc. También es importante agregar un ítem que describa cómo se clasifica el nivel servicio. 
      p A continuación, se presenta un ejemplo de clasificación del nivel de servicios. En la primera tabla se definen los tipos de incidencias o solicitudes de soporte y en la segunda, el nivel de atención para cada tipo de incidencia, con lo cual queda descrito un acuerdo de nivel de servicio dentro de la propuesta técnica para un sistema informático web.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 1. 
            | Tipos de incidencias o solicitudes de soporte

        table.tabla
          thead
            tr
              th(colspan="6") Tipos de incidencias o solicitudes de soporte
          tbody
            tr
              td.titulo Normal
              td(colspan="5") Hace referencia a una solicitud hecha por el director de tecnología o a quien delegue, donde no se ve comprometido o afectado de manera considerable el servicio para el cual se solicita el soporte. El nivel de criticidad no afecta de manera directa el core del servicio de agendamiento.
            tr
              td.titulo Prioritaria
              td(colspan="5") Hace referencia a una solicitud hecha por el director de tecnología o a quien delegue, donde se ve afectado de manera directa el correcto funcionamiento de las herramientas o servicios definidos en el alcance. Estas fallas pueden afectar directamente el core del servicio de agendamiento.
            tr
              td.titulo Programada
              td(colspan="5") Hace referencia a una solicitud hecha por el director de tecnología o a quien delegue, donde el acceso a los servicios o herramientas no se ve afectado, pero es necesario programar alguna actividad de ajustes, cambios, parametrizaciones o actualizaciones.

    p.mb-5(data-aos="fade-up") Toda incidencia o solicitud de soporte será evaluada y atendida de acuerdo con el medio de acceso y forma de asistencia, y al tiempo de respuesta, según la siguiente clasificación:

    .row.justify-content-center(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 2. 
            | Nivel de atención para cada tipo de incidencia
        table.tabla
          thead
            tr
              th(colspan="4") Nivel de atención para cada tipo de incidencia
            tr
              th Tipo
              th(colspan="2")  Medio de acceso y forma de asistencia
              th Tiempo de respuesta
          tbody
            tr
              td Normal
              td(colspan="2") Telefónico: 5 x 8 a través de celular 315 5008002
                br
                | Vía e-mail: al correo soporte@quanther.com
                br
                | WhatsApp: 315 5008002
                br
                | Gestión remota

              td De 2 - 8 horas
            tr
              td Prioritaria
              td(colspan="2") Telefónico: 7 x 8 celular 315 5008002
                br
                | Vía e-mail: al correo soporte@quanther.com
                br
                | WhatsApp: 315 5008002
                br
                | Presencial de acuerdo con la disponibilidad del personal técnico.

              td De 1 - 3 horas
            tr
              td Programada
              td(colspan="2") Telefónico: 7 x 8 Celular 315 5008002
                br
                | Vía e-mail: al correo peter@quanther.com
                br
                | WhatsApp: 315 5008002
                br
                | Presencial de acuerdo con la disponibilidad del personal técnico. Se requiere previa programación de la ventana de mantenimiento solicitada y la disponibilidad del personal de la IPS involucrada en el ajuste o cambio a realizar.

              td De 6 - 24 horas


</template>

<script>
import Botones from '../components/Botones.vue'
export default {
  name: 'Tema1',
  components: {
    Botones,
  },
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>

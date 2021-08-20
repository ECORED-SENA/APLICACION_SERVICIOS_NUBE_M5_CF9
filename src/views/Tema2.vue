<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t2.titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estado de costos

    figure.mb-5.tarjeta
      img(src='@/assets/curso/t2-img-01.jpg', alt='Texto que describa la imagen')

    p.mb-5 Trabajar desde una oficina o desde casa requiere el uso de infraestructura tecnológica y servicios de TI. Los sistemas, dispositivos y servidores permiten a los operarios realizar sus funciones; cuando uno de los servicios o la infraestructura falla, o impide realizar las labores (a esto se denomina incidente), es la mesa de servicio la que interviene para realizar las actividades correctivas y las operaciones preventivas, con el fin de garantizar que no vuelva a ocurrir. Las mesas de servicio ofrecen una ruta claramente definida para que los usuarios al momento de informar solicitudes, consultas y problemas se puedan identificar, clasificar, apropiar y procesar. 

    .float-layout-container.mb-5
      img.img-text(
        src='@/assets/curso/t1-img-03.jpg',
        alt='Texto que describa la imagen'
      )
      .cajon.d-inline-block.color-acento-botones.p-4
        p.mb-0 Es preciso que la mesa de servicio sea un único punto de contacto entre el usuario, el equipo de TI y los funcionarios de la empresa.

      p La mesa de servicio es una de las prácticas obligantes en la gestión de TI; hace falta estudiar y seguir un marco de trabajo para ofrecer una guía completa de una estrategia de establecimiento, por ejemplo, de un mes de servicio, la cual debe responder a los alcances de generación del valor de los servicios TI; sin embargo, en este punto se exponen solo algunos de los conceptos de las bibliotecas ITIL para la planeación, implementación, control y seguimiento de procesos, orientados a mejorar el área de mesa de servicio y restablecer la satisfacción del cliente que solicita servicios de soporte, una entidad que en principio puede ser unipersonal. Se propone la aplicación y estructuración de actividades, políticas y roles de los procesos.
      p Según ITIL para establecer una mesa de servicio, independientemente del tamaño de la empresa, así sea una empresa grande, mediana, pequeña, unipersonal o un trabajador autónomo se deben implementar los pasos que se ilustran en la siguiente figura:


    .titulo-sexto.color-acento-contenido
      p.mb-0
        b Figura 1. 
        | Pasos para establecer la mesa de ayuda

    .tarjeta.tarjeta--gris.p-5
      .row.justify-content-center
        .col-md-8
          BotonesB

    Separador

    #2-1.titulo-segundo
      h2 2.1. Diagnóstico y preparación

    p.mb-5 Antes de realizar la implementación de la mesa de servicio se debe proceder con un diagnóstico de la empresa, la cual puede ser o no unipersonal, o un trabajador autónomo. Dicho diagnóstico puede ser llevado a cabo mediante la  realización de entrevistas y aplicación de encuestas de satisfacción a los clientes, en donde se determinen las causas con sus respectivos problemas a soportar. Las causas con los problemas más comunes que estas generan se encuentran en la siguiente tabla: 

    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 3. 
            | Causas y problemas más comunes

        table.tabla
          thead
            tr
              th Causa
              th Problemas generados
          tbody
            tr
              td La recepción de los incidentes tiene varios canales de acceso, e-mail, WhatsApp, celular etc.
              td(rowspan="4") 
                ul.lista-ul.mb-0
                  li 
                    i.lista-ul__vineta
                    | El cliente se queja por la indisponibilidad del servicio.
                  li
                    i.lista-ul__vineta
                    | El soporte que se brinda no es el adecuado.
                  li
                    i.lista-ul__vineta
                    | El servicio postventa hace que el producto o servicio pierda valor.
                  li
                    i.lista-ul__vineta
                    | Atención desordenada de incidentes.
                  li
                    i.lista-ul__vineta
                    | Incidentes que no se resuelven o se resuelven inoportunamente.

            tr
              td Dificultad en la comunicación con el usuario final que reporta el problema.
            tr
              td Olvido o descuido en comunicar los incidentes reportados.
            tr
              td Desorden en el manejo del tiempo y falta de orden de prioridades de los incidentes reportados.
            tr
              td No se capacita adecuadamente al nuevo personal y a los nuevos clientes.
              td(rowspan="3")
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta
                    | Sobrecarga operativa de soporte.
                  li
                    i.lista-ul__vineta
                    | Insatisfacción del cliente a razón de soluciones temporales. 
                  li
                    i.lista-ul__vineta
                    | La imagen del proveedor TI se debilita frente al cliente.
                  li
                    i.lista-ul__vineta
                    | El cliente se acostumbra a no seguir el conducto regular definido para resolver incidencias.

            tr
              td Se improvisa constantemente en la atención del incidente.
            tr
              td Soporte de requerimientos que están fuera de la solicitud inicial o el alcance del sistema y esto dilata el tiempo asignado para dicho soporte.
            tr
              td Reuniones no programadas.
              td 
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta
                    | Pérdida de tiempo.
                  li
                    i.lista-ul__vineta
                    | Las reuniones derivan en temas no enfocados o definidos.

            tr
              td Suspender trabajos que están marchando para asumir nuevos incidentes.
              td
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta
                    | Se crea una cultura de incumplimiento e irresponsabilidad por parte del proveedor de TI en el quehacer cotidiano de sus labores.
                  li
                    i.lista-ul__vineta
                    | Se crea la costumbre de pedir disculpas por el incumplimiento.
                  li
                    i.lista-ul__vineta
                    | Cliente insatisfecho y desmotivado.

    Separador

    #2-2.titulo-segundo
      h2 2.2. Definición de la estructura de servicios
    
    p En este paso se garantiza la efectividad y eficacia en la provisión y el soporte de servicios, con el fin de generar valor para el cliente y el proveedor del servicio (Granizo, 2009).

    p.mb-5 ITIL recomienda definir inequívocamente los servicios que debe ofrecer la empresa a sus clientes como:

    .row.justify-content-center
      .col-md-10
        .bloque-texto-a.reverso.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h3.mb-0 ITIL recomienda definir inequívocamente los servicios que debe ofrecer la empresa a sus clientes como:
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta.item-amarillo
                    | SmartAppoinmet: en español, Sistema de citas y agendamiento.
                  li
                    i.lista-ul__vineta.item-amarillo
                    | SmartEHR: en español, Sistema de historias clínicas.

                  li
                    i.lista-ul__vineta.item-amarillo
                    | SmartPOS: en español, Sistema de facturación de ferreterías.

                  li
                    i.lista-ul__vineta.item-amarillo
                    | SmartHPS: en español, Sistema de facturación de droguerías.

                  li
                    i.lista-ul__vineta.item-amarillo
                    | Implementación de los productos.

                  li
                    i.lista-ul__vineta.item-amarillo
                    | Capacitaciones.

                  li
                    i.lista-ul__vineta.item-amarillo
                    | Soporte a usuarios.

    p.mb-5 Para cada uno de los servicios se debe especificar sus componentes, la relación de dependencia de uso y otros, por ejemplo, en la siguiente figura se muestra cómo para proveer ampliaciones se necesita que los sistemas tengan acceso a Internet y no cualquier servicio o tipo Internet, sino uno con unas particularidades específicas, tales como DNS, dirección IP pública, configuración de firewalls de seguridad,  proveedores de envío de correo (SMTP), etc.

    .row.justify-content-center
      .col-md-8
        figure
          img(src='@/assets/curso/t2-info-01.svg', alt='Texto que describa la imagen')

    Separador

    #2-3.titulo-segundo
      h2 2.3. Selección de roles y propietarios de roles

    .float-layout-container.mb-5
      img.img-text.ms-3.mb-3(
        src='@/assets/curso/t2-01.jpg',
        alt='Texto que describa la imagen'
      )
      p La identificación y asignación de los roles internos y externos necesarios para el correcto funcionamiento de la mesa de servicio se derivan directamente de las disciplinas ITIL.
      P Los roles internos están representados por el personal de la empresa encargada de brindar el servicio de soporte y asesoramiento a los roles externos, que son los que realizan las peticiones o solicitudes y son conocidos como clientes o usuarios.
      P En las tablas que están a continuación, se muestran los roles internos y externos para los casos de soporte que puede prestar una empresa, que puede o no ser unipersonal o un trabajador autónomo.

    .row.justify-content-center.mb-5
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 4. 
            | Roles internos

        table.tabla
          thead
            tr
              th Cargo
              th Propietario
              th Rol ITIL
          tbody
            tr
              td Gerente de soporte
              td Nombre completo
              td Monitorización y control
            tr
              td Soporte Senior
              td Nombre completo
              td 
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta
                    | Gestor de incidencias
                  li
                    i.lista-ul__vineta
                    | Peticiones, problemas Nivel 2 
                  li.mb-0
                    i.lista-ul__vineta
                    | Centro de servicio al usuario
            tr
              td Soporte Junior
              td Nombre completo
              td
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta
                    | Gestor de incidencias
                  li
                    i.lista-ul__vineta
                    | Peticiones
                  li
                    i.lista-ul__vineta
                    | Problemas Nivel 1
                  li.mb-0
                    i.lista-ul__vineta
                    | Centro de servicio al usuario
            tr
              td Área desarrollo
              td Nombre completo
              td
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Solicitudes Nivel 4

    .row.justify-content-center.mb-5
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 5. 
            | Roles externos

        table.tabla
          thead
            tr
              th Propietario
              th Rol ITIL

          tbody
            tr
              td Droguería + salud
              td 
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta
                    | Cliente
                  li.mb-0
                    i.lista-ul__vineta
                    | Usuario
            tr
              td Dr. Manuel Parra
              td 
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta
                    | Cliente
                  li.mb-0
                    i.lista-ul__vineta
                    | Usuario
            tr
              td Amazon Web Services
              td 
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta
                    | Soporte Nivel 3
                  li.mb-0
                    i.lista-ul__vineta
                    | Proveedor de infraestructura

    p.mb-0 En una organización grande estos roles pueden ser complejos. También puede incrementar esta complejidad el número de clientes externos que tenga la empresa, por ejemplo, si se desea implementar un servicio de gestión de incidentes se debe nombrar un gestor de problemas (IT Process Wiki, 2021). 

    Separador

    #2-4.titulo-segundo
      h2 2.4. Análisis de procesos existentes

    .float-layout-container.mb-5
      img.img-text(
        src='@/assets/curso/pexels-pixabay-265087.jpg',
        alt='Texto que describa la imagen'
      )
      p ITIL recomienda elaborar una evaluación enfocada en los procesos existentes, para lo cual se recomienda aplicar instrumentos de medidas como encuestas, que permitan validar aspectos de la prestación del servicio de soporte, basados en los siguientes criterios:
      .cajon.d-inline-block.color-acento-botones.p-4
        ul.list-ul.mb-0
          li
            i.lista-ul__vineta.item-verde
            | Gestión de capacidad el proceso.
          li
            i.lista-ul__vineta.item-verde
            | Control de calidad.
          li
            i.lista-ul__vineta.item-verde
            | Gestión de la información.
          li
            i.lista-ul__vineta.item-verde
            | Relación con el cliente.
          li
            i.lista-ul__vineta.item-verde
            | Nivel de satisfacción.
          li.mb-0
            i.lista-ul__vineta.item-verde
            | Oportunidad en la prestación del servicio.

      p En caso tal, que como resultado de la aplicación del instrumento anterior se encuentren hallazgos similares o iguales a estos: 

      ul.list-ul.mb-0
        li
          i.lista-ul__vineta.item-verde
          | Poca rapidez en la gestión de las incidencias, porque no cuenta con una bitácora automatizada, en la que se registre el estado de cada una. Los incidentes llegan por e-mail, WhatsApp o llamada telefónica, pero a veces se olvidan y no se resuelve el incidente.
        li
          i.lista-ul__vineta.item-verde
          | El cliente no sabe cómo están siendo gestionadas sus incidencias. En ocasiones tiene la impresión de que no se está haciendo nada para resolver su problema.
        li
          i.lista-ul__vineta.item-verde
          | No existe un nivel de prioridad para dar tratamiento al más urgente de los incidentes.
        li
          i.lista-ul__vineta.item-verde
          | No existe un control adecuado de tiempos de gestión de incidentes.
        li
          i.lista-ul__vineta.item-verde
          | No existe un proceso de control de calidad.
        li
          i.lista-ul__vineta.item-verde
          | No hay forma de documentar las incidencias que se convierten posteriormente en problemas. 
        li
          i.lista-ul__vineta.item-verde
          | No es posible visualizar la carga laboral que se tiene en determinado momento.
        li
          i.lista-ul__vineta.item-verde
          | No se puede obtener un informe de gestión con incidentes de fechas pasadas.
        li
          i.lista-ul__vineta.item-verde
          | No se conoce el nivel de satisfacción del cliente respecto a sus solicitudes.
        li
          i.lista-ul__vineta.item-verde
          | Los usuarios reclaman por el mal servicio y no se tienen registros de las quejas.

    Separador

    #2-5.titulo-segundo
      h2 2.5. Definición de estructura de procesos

    p Con el análisis de los procesos existentes y sus efectos en la empresa se puede identificar qué se debe estructurar para lograr su mejora. Por lo tanto, es necesario crear dos estructuras, una para los procesos internos de atención al usuario y otra para los acuerdos entre el proveedor del servicio – cliente, esto con el fin de  controlar el área de soporte y el manejo de incidentes, de tal manera que estas labores no interrumpan las tareas de desarrollo de nuevos productos de software.
    p.mb-5 Un ejemplo de proceso interno es: 









</template>

<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema2',
  components: {
    BotonesB,
  },
  data: () => ({
    // variables de vue
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

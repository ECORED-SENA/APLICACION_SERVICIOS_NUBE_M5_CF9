<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t2.titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Mesa de servicio

    figure.mb-5.tarjeta(data-aos="fade-up")
      img(src='@/assets/curso/t2-img-01.jpg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-up") Trabajar desde una oficina o desde casa requiere el uso de infraestructura tecnológica y servicios de TI. Los sistemas, dispositivos y servidores permiten a los operarios realizar sus funciones; cuando uno de los servicios o la infraestructura falla, o impide realizar las labores (a esto se denomina incidente), es la mesa de servicio la que interviene para realizar las actividades correctivas y las operaciones preventivas, con el fin de garantizar que no vuelva a ocurrir. Las mesas de servicio ofrecen una ruta claramente definida para que los usuarios al momento de informar solicitudes, consultas y problemas se puedan identificar, clasificar, apropiar y procesar. 

    .float-layout-container.mb-5(data-aos="fade-up")
      img.img-text(
        src='@/assets/curso/t1-img-03.jpg',
        alt='Texto que describa la imagen'
      )
      .cajon.d-inline-block.color-acento-botones.p-4
        p.mb-0 Es preciso que la mesa de servicio sea un único punto de contacto entre el usuario, el equipo de TI y los funcionarios de la empresa.

      p La mesa de servicio es una de las prácticas obligantes en la gestión de TI; hace falta estudiar y seguir un marco de trabajo para ofrecer una guía completa de una estrategia de establecimiento, por ejemplo, de un mes de servicio, la cual debe responder a los alcances de generación del valor de los servicios TI; sin embargo, en este punto se exponen solo algunos de los conceptos de las bibliotecas ITIL para la planeación, implementación, control y seguimiento de procesos, orientados a mejorar el área de mesa de servicio y restablecer la satisfacción del cliente que solicita servicios de soporte, una entidad que en principio puede ser unipersonal. Se propone la aplicación y estructuración de actividades, políticas y roles de los procesos.
      p Según ITIL para establecer una mesa de servicio, independientemente del tamaño de la empresa, así sea una empresa grande, mediana, pequeña, unipersonal o un trabajador autónomo se deben implementar los pasos que se ilustran en la siguiente figura:


    .titulo-sexto.color-acento-contenido(data-aos="fade-up")
      p.mb-0
        b Figura 1. 
        | Pasos para establecer la mesa de ayuda

    .tarjeta.tarjeta--gris.p-5(data-aos="fade-up")
      .row.justify-content-center
        .col-md-8
          img.img-text(
            src='@/assets/curso/infografia-01.svg',
            alt='Texto que describa la imagen'
          )

    Separador(data-aos="fade-up")

    #2-1.titulo-segundo(data-aos="fade-up")
      h2 2.1 Diagnóstico y preparación

    p.mb-5(data-aos="fade-up") Antes de realizar la implementación de la mesa de servicio se debe proceder con un diagnóstico de la empresa, la cual puede ser o no unipersonal, o un trabajador autónomo. Dicho diagnóstico puede ser llevado a cabo mediante la  realización de entrevistas y aplicación de encuestas de satisfacción a los clientes, en donde se determinen las causas con sus respectivos problemas a soportar. Las causas con los problemas más comunes que estas generan se encuentran en la siguiente tabla: 

    .row.justify-content-center(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 3. 
            | Causas y problemas más comunes
        .tabla.tabla--intercalada
          table
            thead
              tr
                th Causa
                th Problemas generados
            tbody
              tr
                td La recepción de los incidentes tiene varios canales de acceso, <em>e-mail</em>, WhatsApp, celular etc.
                td(rowspan="4") 
                  ul.lista-ul.mb-0
                    li 
                      i.lista-ul__vineta.item-verde
                      | El cliente se queja por la indisponibilidad del servicio.
                    li
                      i.lista-ul__vineta.item-verde
                      | El soporte que se brinda no es el adecuado.
                    li
                      i.lista-ul__vineta.item-verde
                      | El servicio postventa hace que el producto o servicio pierda valor.
                    li
                      i.lista-ul__vineta.item-verde
                      | Atención desordenada de incidentes.
                    li
                      i.lista-ul__vineta.item-verde
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
                      i.lista-ul__vineta.item-verde
                      | Sobrecarga operativa de soporte.
                    li
                      i.lista-ul__vineta.item-verde
                      | Insatisfacción del cliente a razón de soluciones temporales. 
                    li
                      i.lista-ul__vineta.item-verde
                      | La imagen del proveedor TI se debilita frente al cliente.
                    li
                      i.lista-ul__vineta.item-verde
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
                      i.lista-ul__vineta.item-verde
                      | Pérdida de tiempo.
                    li
                      i.lista-ul__vineta.item-verde
                      | Las reuniones derivan en temas no enfocados o definidos.

              tr
                td Suspender trabajos que están marchando para asumir nuevos incidentes.
                td
                  ul.lista-ul.mb-0
                    li
                      i.lista-ul__vineta.item-verde
                      | Se crea una cultura de incumplimiento e irresponsabilidad por parte del proveedor de TI en el quehacer cotidiano de sus labores.
                    li
                      i.lista-ul__vineta.item-verde
                      | Se crea la costumbre de pedir disculpas por el incumplimiento.
                    li
                      i.lista-ul__vineta.item-verde
                      | Cliente insatisfecho y desmotivado.

    Separador(data-aos="fade-up")

    #2-2.titulo-segundo(data-aos="fade-up")
      h2 2.2 Definición de la estructura de servicios
    
    p(data-aos="fade-up") En este paso se garantiza la efectividad y eficacia en la provisión y el soporte de servicios, con el fin de generar valor para el cliente y el proveedor del servicio (Granizo, 2009).

    .row.justify-content-center(data-aos="fade-up")
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

    p.mb-5(data-aos="fade-up") Para cada uno de los servicios se debe especificar sus componentes, la relación de dependencia de uso y otros, por ejemplo, en la siguiente figura se muestra cómo para proveer ampliaciones se necesita que los sistemas tengan acceso a Internet y no cualquier servicio o tipo Internet, sino uno con unas particularidades específicas, tales como DNS, dirección IP pública, configuración de <em>firewalls</em> de seguridad,  proveedores de envío de correo (SMTP), etc.

    .row.justify-content-center(data-aos="fade-up")
      .col-md-8
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Figura 2. 
            | Estructura de servicios

        figure
          img(src='@/assets/curso/t2-info-01.svg', alt='Texto que describa la imagen')

    Separador(data-aos="fade-up")

    #2-3.titulo-segundo(data-aos="fade-up")
      h2 2.3 Selección de roles y propietarios de roles

    .float-layout-container.mb-5(data-aos="fade-up")
      img.img-text.ms-3.mb-3(
        src='@/assets/curso/t2-01.jpg',
        alt='Texto que describa la imagen'
      )
      p La identificación y asignación de los roles internos y externos necesarios para el correcto funcionamiento de la mesa de servicio se derivan directamente de las disciplinas ITIL.
      P Los roles internos están representados por el personal de la empresa encargada de brindar el servicio de soporte y asesoramiento a los roles externos, que son los que realizan las peticiones o solicitudes y son conocidos como clientes o usuarios.
      P En las tablas que están a continuación, se muestran los roles internos y externos para los casos de soporte que puede prestar una empresa, que puede o no ser unipersonal o un trabajador autónomo.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 4. 
            | Roles internos

        .tabla.tabla--intercalada
          table
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

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 5. 
            | Roles externos

        .tabla.tabla--intercalada
          table
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

    p.mb-0(data-aos="fade-up") En una organización grande estos roles pueden ser complejos. También puede incrementar esta complejidad el número de clientes externos que tenga la empresa, por ejemplo, si se desea implementar un servicio de gestión de incidentes se debe nombrar un gestor de problemas (<em>IT Process Wiki, 2021</em>). 

    Separador(data-aos="fade-up")

    #2-4.titulo-segundo(data-aos="fade-up")
      h2 2.4 Análisis de procesos existentes

    .float-layout-container(data-aos="fade-up")
      img.img-text(
        src='@/assets/curso/pexels-pixabay-265087.jpg',
        alt='Texto que describa la imagen'
      )
      p ITIL recomienda elaborar una evaluación enfocada en los procesos existentes, para lo cual se recomienda aplicar instrumentos de medidas como encuestas, que permitan validar aspectos de la prestación del servicio de soporte, basados en los siguientes criterios:
      .cajon.d-inline-block.color-acento-botones.py-3.px-4
        ul.lista-ul.mb-0
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

      ul.lista-ul.mb-0
        li
          i.lista-ul__vineta.item-verde
          p.mb-0 Poca rapidez en la gestión de las incidencias, porque no cuenta con una bitácora automatizada, en la que se registre el estado de cada una. Los incidentes llegan por <em>e-mail</em>, WhatsApp o llamada telefónica, pero a veces se olvidan y no se resuelve el incidente.
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

    Separador(data-aos="fade-up")

    #2-5.titulo-segundo(data-aos="fade-up")
      h2 2.5 Definición de estructura de procesos

    p(data-aos="fade-up") Con el análisis de los procesos existentes y sus efectos en la empresa se puede identificar qué se debe estructurar para lograr su mejora. Por lo tanto, es necesario crear dos estructuras, una para los procesos internos de atención al usuario y otra para los acuerdos entre el proveedor del servicio – cliente, esto con el fin de  controlar el área de soporte y el manejo de incidentes, de tal manera que estas labores no interrumpan las tareas de desarrollo de nuevos productos de <em>software</em>.
    p.mb-5(data-aos="fade-up") Un ejemplo de proceso interno es: 


    .row.justify-content-center(data-aos="fade-up")
      .col-md-6.col-lg-5.mb-4
        .tarjeta.tarjeta-hover.color-acento-botones__claro.p-4(@mouseover='mostrarIndicador = false')
          .row.justify-content-center.mb-3
            .col-4
              img.img-text(
                src='@/assets/curso/t2-icon-01-b.svg',
                alt='Texto que describa la imagen'
              )
          p.mb-0 La gestión de incidentes inicia con la petición del usuario, quien ingresa a la plataforma de gestión y luego registra la solicitud que será evaluada por el soporte Junior o soporte Senior. 

          .tarjeta-hover__hover
            img(
              src='@/assets/curso/t2-icon-01.svg',
              alt='Texto que describa la imagen'
            )
          .indicador--hover(v-if='mostrarIndicador')

      .col-md-6.col-lg-5.mb-4
        .tarjeta.tarjeta-hover.color-acento-botones__claro.p-4(@mouseover='mostrarIndicador = false')
          .row.justify-content-center.mb-3
            .col-4
              img.img-text(
                src='@/assets/curso/t2-icon-02-b.svg',
                alt='Texto que describa la imagen'
              )
          p.mb-0 Según los acuerdos de tiempo de entrega se le asigna la prioridad al incidente, los cuales constan en los acuerdos entre el proveedor del servicio – cliente. 

          .tarjeta-hover__hover
            img(
              src='@/assets/curso/t2-icon-02.svg',
              alt='Texto que describa la imagen'
            )

      .col-md-6.col-lg-5.mb-4
        .tarjeta.tarjeta-hover.color-acento-botones__claro.p-4(@mouseover='mostrarIndicador = false')
          .row.justify-content-center.mb-3
            .col-4
              img.img-text(
                src='@/assets/curso/t2-icon-03-b.svg',
                alt='Texto que describa la imagen'
              )
          p.mb-0 Se realizan las actividades que den respuesta al incidente.

          .tarjeta-hover__hover
            img(
              src='@/assets/curso/t2-icon-03.svg',
              alt='Texto que describa la imagen'
            )

      .col-md-6.col-lg-5.mb-4
        .tarjeta.tarjeta-hover.color-acento-botones__claro.p-4(@mouseover='mostrarIndicador = false')
          .row.justify-content-center.mb-3
            .col-4
              img.img-text(
                src='@/assets/curso/t2-icon-04-b.svg',
                alt='Texto que describa la imagen'
              )
          p.mb-0 Si los incidentes son comunes o repetitivos deben reposar en una base de conocimiento para ingresarlos al proceso de control de calidad, donde se encuesta el nivel de servicio con sus respectivos informes.

          .tarjeta-hover__hover
            img(
              src='@/assets/curso/t2-icon-04.svg',
              alt='Texto que describa la imagen'
            )

    Separador(data-aos="fade-up")

    #2-6.titulo-segundo(data-aos="fade-up")
      h2 2.6 Definición de interfaces de ITIL

    p.mb-5(data-aos="fade-up") Las interfaces de procesos de incidentes son los canales de comunicación con el área de soporte, y pueden ser llevados a cabo telefónicamente, por correo electrónico, chats, plataformas web, entre otros; pero independiente de cuál sea el medio de entrada, las salidas serán comunes a todas las entradas, de modo que todo se reporte en un sitio centralizadamente.  En la tabla que está a continuación, se presentan las entradas y salidas más comunes del proceso.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 6. 
            | Entradas y salidas más comunes del proceso
        .tabla.tabla--intercalada
          table
            thead
              tr
                th(colspan="2") Entrada
                th Salidas
            tbody
              tr
                td.p-4(colspan="2") 
                  ul.lista-ul.mb-0
                    li.mb-4
                      i.lista-ul__vineta.item-verde
                      p.mb-0
                        b Formulario web de incidentes 
                        br
                        | Los incidentes se activan cuando se registran las peticiones en este formulario. 
                    li.mb-4
                      i.lista-ul__vineta.item-verde
                      p.mb-0
                        b Correo electrónico
                        br
                        | Se debe proveer un correo electrónico para que el cliente pueda informar su solicitud.
                    li.mb-4
                      i.lista-ul__vineta.item-verde
                      p.mb-0
                        b Llamada telefónica
                        br
                        | Proporcionar un número de contacto para que el cliente pueda manifestar su petición.
                    li.mb-0
                      i.lista-ul__vineta.item-verde
                      p.mb-0
                        b Chat
                        br
                        | Establecer un canal de chat como WhatsApp o Telegram para que el cliente indique su petición.
                td.p-4
                  ul.lista-ul.mb-0
                    li.mb-2
                      i.lista-ul__vineta.item-verde
                      | Informes de incidencias gestionadas.
                    li.mb-2
                      i.lista-ul__vineta.item-verde
                      | Nivel de satisfacción.
                    li.mb-2
                      i.lista-ul__vineta.item-verde
                      | Reporte de oportunidad de atención.

    p.mb-5(data-aos="fade-up") Una vez identificada la entrada es importante definir la clasificación del incidente como lo indica la escala básica enunciada en la tabla 7: 

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 7. 
            | Escala básica de incidentes
        .tabla.tabla--intercalada
          table
            thead
              tr
                th(colspan="5") Escala básica de incidencias
            tbody
              tr
                td.text-bold Normal
                td(colspan="4") Hace referencia a una solicitud hecha por el director de tecnología o a quien delegue, donde no se ve comprometido o afectado de manera considerable el servicio para el cual se solicita el soporte. El nivel de criticidad no afecta de manera directa el <em>core</em> del servicio de agendamiento.
              tr
                td.text-bold Prioritaria
                td(colspan="4") Hace referencia a una solicitud hecha por el director de tecnología o a quien delegue, donde se ve afectado de manera directa el correcto funcionamiento de las herramientas o servicios definidos en el alcance. Estas fallas pueden afectar directamente el <em>core</em> del servicio de agendamiento.
              tr
                td.text-bold Programada
                td(colspan="4") Hace referencia a una solicitud hecha por el director de tecnología o a quien delegue, donde el acceso a los servicios o herramientas no se ve afectado, pero es necesario programar alguna actividad de ajustes, cambios, parametrizaciones o actualizaciones.

    .float-layout-container(data-aos="fade-up")
      img.img-text.ms-3.mb-3.w-50(
        src='@/assets/curso/t2-02.jpg',
        alt='Texto que describa la imagen'
      )

      p(data-aos="fade-up") Los incidentes también se clasifican por tipo de solicitud:

      ul.lista-ul(data-aos="fade-up")
        li.mb-2
          i.lista-ul__vineta.item-verde
          | Falla general del sistema.
        li.mb-2
          i.lista-ul__vineta.item-verde
          | No registra datos. 
        li.mb-2
          i.lista-ul__vineta.item-verde
          | Muestra información incompleta.
        li.mb-2
          i.lista-ul__vineta.item-verde
          | Ausencia de información.
        li.mb-2
          i.lista-ul__vineta.item-verde
          | Falla de conectividad.
        li.mb-2
          i.lista-ul__vineta.item-verde
          | El sistema está lento.

      p.mb-0 La escala básica y los tipos de solicitud de incidencias permiten contar con  reportes para identificar los aspectos que más fallas registran y proceder con la mejora del servicio.

    Separador(data-aos="fade-up")

    #2-7.titulo-segundo(data-aos="fade-up")
      h2 2.7 Establecimiento de controles

    p.mb-5(data-aos="fade-up") En este paso se definen los controles y el tiempo de su aplicación en la mesa de servicio, con el fin de realizar seguimiento al cumplimiento de los procesos internos de atención al usuario y a los acuerdos entre el proveedor del servicio – cliente, que permitan mejorar el servicio. Algunos ejemplos de controles son:

    .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-up")
      ul.lista-ul.mb-0
        li.mb-2
          i.lista-ul__vineta.item-verde
          | Revisión mensual de los indicadores de gestión para identificar el tipo de servicio que presenta más fallas o no está correctamente gestionado.
        li.mb-2
          i.lista-ul__vineta.item-verde
          | Revisión quincenal de los incidentes retrasados no gestionados para intervenir en cada caso y llegar a un acuerdo de nivel con el cliente.
        li.mb-0
          i.lista-ul__vineta.item-verde
          | Revisión trimestral del tipo de falla que más reporta incidencias para establecer un plan de mejora sobre el servicio.

    p.mb-5(data-aos="fade-up") Para materializar esos controles se deben utilizar los indicadores de gestión, los cuales van a estar definidos por los incidentes resueltos y sin resolver, tal como se describe en la siguiente tabla: 

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 8. 
            | Indicadores de gestión
        .tabla.tabla--intercalada
          table
            thead
              tr
                th Indicador
                th Descripción
            tbody
              tr
                td Número de incidentes solicitados.
                td Cantidad de registros de solicitudes de incidentes.
              tr
                td Número de incidentes en ejecución.
                td Cantidad de incidentes que no se han resuelto aún.
              tr
                td Número de incidentes retrasados no cerrados.
                td
                  | Cantidad de incidentes que se han pasado del tiempo o nivel de servicio acordado con el cliente y aún no se han resuelto.
              tr
                td Tipo medio de incidencia por tipo incidencia.
                td
                  | Cantidad de tiempo promedio empleado en resolver las incidencias reportadas durante determinado rango de horas, días, meses.
              tr
                td Tipo medio de incidencia por clasificación de la falla.
                td
                  | Cantidad de tiempo promedio empleado en resolver incidencias para cada tipo de clasificación.
              tr
                td Número de incidentes cerrados fuera de tiempo por clasificación.
                td
                  | Cantidad de incidentes que se resolvieron por fuera del tiempo acordado con el cliente.

    p.mb-0(data-aos="fade-up") Los anteriores indicadores no son los únicos, es posible que con la implementación y ejecución de los servicios se evidencian otros, según la dinámica del servicio.

    Separador(data-aos="fade-up")

    #2-8.titulo-segundo(data-aos="fade-up")
      h2 2.8 Diseño de los procesos

    p.mb-5(data-aos="fade-up") Generalmente, en el diseño de procesos de gestión de incidentes deben existir al menos cuatro niveles: 

    TabsA.color-acento-contenido.mb-5(data-aos="fade-up")
      .tarjeta.color-acento-botones__claro.p-4(titulo="Nivel 1")
        .row.justify-content-center.align-items-center
          .col-6.col-md-2.mb-4.mb-md-0
            img(
              src='@/assets/curso/t2-icon-05.svg',
              alt='Texto que describa la imagen'
            )
          .col-md
            p.mb-0 Se da comienzo con una asistencia inicial, este nivel es el responsable de las incidencias básicas del cliente, es el primer contacto con el usuario; proporciona asistencia física y/o remota a reportes relacionados con el uso de los dispositivos de cómputo, impresión, conectividad, entre otros. Atiende el requerimiento y brinda solución a las fallas básicas; un ejemplo de falla básica: la falta de capacitación del usuario en el manejo de la herramienta bien sea de <em>hadware</em> o <em>software</em>.
            
      .tarjeta.color-acento-botones__claro.p-4(titulo="Nivel 2")
        .row.justify-content-center.align-items-center
          .col-6.col-md-2.mb-4.mb-md-0
            img(
              src='@/assets/curso/t2-icon-06.svg',
              alt='Texto que describa la imagen'
            )
          .col-md
            p.mb-0 Si no se logra brindar una solución en el nivel anterior se escala el incidente a este nivel para que el técnico de desarrollo del sistema atienda este requerimiento.
      .tarjeta.color-acento-botones__claro.p-4(titulo="Nivel 3")
        .row.justify-content-center.align-items-center
          .col-6.col-md-2.mb-4.mb-md-0
            img(
              src='@/assets/curso/t2-icon-07.svg',
              alt='Texto que describa la imagen'
            )
          .col-md
            p.mb-0 Cuando el incidente se escala a este nivel es porque la falla tiene su origen en el servicio o en  algún proveedor de servicios en la nube, y solo ellos pueden dar solución a esta situación. También se escala a terceros los daños que requieren de personal especializado en soporte técnico y ellos serán los responsables.
      .tarjeta.color-acento-botones__claro.p-4(titulo="Nivel 4")
        .row.justify-content-center.align-items-center
          .col-6.col-md-2.mb-4.mb-md-0
            img(
              src='@/assets/curso/t2-icon-08.svg',
              alt='Texto que describa la imagen'
            )
          .col-md
            p.mb-0 Cuando la solicitud no es una falla y atiende a un requerimiento que el sistema actual no tiene, indica que se debe intervenir con el desarrollo de nueva funcionalidad o modificación de la función actual.

    p.mb-5(data-aos="fade-up") La siguiente figura muestra un ejemplo del modelo de proceso que debe ser documentado y ampliado para los subprocesos de escalado a nivel 3 y 4.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-8
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Figura 3. 
            | Modelo del proceso de mesa de servicio
        img(
          src='@/assets/curso/t2-info-02.svg',
          alt='Texto que describa la imagen'
        )

    p.mb-0(data-aos="fade-up") A medida que se van implementando los anteriores procesos se pueden ir modificando las acciones y modelos, de tal forma que se adapten cada vez más a la satisfacción de las necesidades del cliente.

    Separador(data-aos="fade-up")

    #2-9.titulo-segundo(data-aos="fade-up")
      h2 2.9 Selección e implementación de sistemas

    p.mb-5(data-aos="fade-up") En el mercado existen muchas herramientas de pago y gratuitas, las cuales pueden ser seleccionadas según la necesidad. En la siguiente figura se muestra algunas de las herramientas de pago con sus diferentes características:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Figura 4. 
            | Servidores <em>desk software</em> de pago 
        figure
          img.borde-verde(
            src='@/assets/curso/comparativa_helpdesk.png',
            alt='Texto que describa la imagen'
          )
          figcaption Nota. Tomado de Bonillaware (2021). https://www.bonillaware.com/wp-content/uploads/comparativa_helpdesk.png

    p.mb-5(data-aos="fade-up") En la siguiente tabla se muestran las herramientas más comunes bajo la licencia <em>Open Source</em>, es decir, aplicaciones de código abierto para su modificación y, las cuales en su mayoría, no requieren de pago para su uso:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Tabla 9. 
            | Servidores <em>desk software Open Source</em> y no pago

        table.tabla.tabla--intercalada
          thead
            tr
              th Proyecto
              th Web
          tbody
            tr
              td GLPI (<em>Gestionnaire Libre de Parc Informatique</em>)
              td
                a(href="https://glpi-project.org/es/" target="_blank") https://glpi-project.org/es/
            tr
              td osTicket
              td
                a(href="https://osticket.com/" target="_blank") https://osticket.com/
            tr
              td ((OTRS)) <em>Community Edition</em>
              td
                a(href="https://otrs.com/" target="_blank") https://otrs.com/
            tr
              td NetBox
              td
                a(href="https://netbox.readthedocs.io/en/stable/" target="_blank") https://netbox.readthedocs.io/en/stable/

    p.mb-0(data-aos="fade-up") Al igual que en el listado de Servidores <em>desk</em> <em>software</em> de pago, los Servidores <em>desk</em> <em>software</em> <em>Open Source</em> no pago presentan características propias, las cuales pueden satisfacer diferentes necesidades de la empresa prestadora del servicio y a sus clientes.

    Separador(data-aos="fade-up")

    #2-10.titulo-segundo(data-aos="fade-up")
      h2 2.10 Implementación de procesos y capacitación

    .float-layout-container.mb-5(data-aos="fade-up")
      img.img-text(
        src='@/assets/curso/designers-consulting.jpg',
        alt='Texto que describa la imagen'
      )
      p Una vez elegidas las herramientas se procede a la instalación y configuración, de manera que a los clientes se les permita solicitar el soporte. Se recomienda usar la herramienta osTicket, ya que el proveedor la ofrece gratuitamente en su página web. 
      .cajon.d-inline-block.color-acento-botones.p-4
        p.mb-0 Casi todos los proveedores de hosting ofrecen alguna herramienta <em>Open Source</em> y las de chat online para brindar el respectivo soporte.

      p En la siguiente figura se ofrece un ejemplo de una de las herramientas de soporte <em>Open Source</em>, llamada osTicket  en algunos de sus componentes de interfaz gráfica:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-8
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Figura 5. 
            | Formulario para generar una incidencia
        figure
          img.borde-verde(
            src='@/assets/curso/imagen1.jpg',
            alt='Texto que describa la imagen'
          )
          figcaption Nota. Tomado de https://soporte.cloudsenactpi.net
    
    .row.justify-content-center(data-aos="fade-up")
      .col-md-10
        .bloque-texto-a.reverso.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h3.mb-0 La herramienta seleccionada cuenta con los siguientes componentes y que se muestran en la figura que aparece a continuación.
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta.item-amarillo
                    | Base de datos de conocimiento.
                  li
                    i.lista-ul__vineta.item-amarillo
                    | Control de incidencias o <em>tickets</em>
                  li.mb-0
                    i.lista-ul__vineta.item-amarillo
                    | Control de tareas y actividades.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-8
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Figura 6. 
            | Algunas funcionalidades del sistema
        figure
          img.borde-verde(
            src='@/assets/curso/imagen2.jpg',
            alt='Texto que describa la imagen'
          )
          figcaption Nota. Tomado de https://soporte.cloudsenactpi.net 

    p.mb-5(data-aos="fade-up") Como se puede observar en la siguiente figura el sistema seleccionado maneja acuerdos de nivel de servicio (SLA), configurables.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-8
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Figura 7. 
            | Gestión de acuerdos de nivel de servicio
        figure
          img.borde-verde(
            src='@/assets/curso/imagen3.jpg',
            alt='Texto que describa la imagen'
          )
          figcaption Nota. Tomado de https://soporte.cloudsenactpi.net 

    .float-layout-container(data-aos="fade-up")
      img.img-text.ms-3.mb-3(
        src='@/assets/curso/imagen4.jpg',
        alt='Texto que describa la imagen'
      )
      p Después de instalar e implementar la herramienta es necesario proceder con la capacitación de su equipo colaborador y de sus clientes para que se registren y se haga el seguimiento de las solicitudes.
      p.mb-0 Finalmente, debido a que existen muchas herramientas para todo tipo de presupuesto que permiten implementar buenas prácticas de gestión de TI de usuarios, y existe una base de recomendaciones amplia para establecer estos procesos de implementación, es posible concluir que solo por la falta de compromiso con el progreso, una entidad dejaría de establecer estrategias que faciliten la gobernanza de TI. 



</template>

<script>
export default {
  name: 'Tema2',
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

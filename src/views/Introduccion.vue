<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure.mb-5.tarjeta
      img(src='@/assets/curso/intro-img.jpg', alt='Texto que describa la imagen')

    p.mb-0 En este componente formativo se estudian algunos conceptos, beneficios, buenas prácticas y acuerdos de nivel de servicio en gestión TI, relacionados con el tratamiento, almacenamiento y protección de la información a través de los servicios tecnológicos. Finalmente, se presentan las prácticas obligantes en la gestión de TI, sus marcos de trabajo y otras definiciones necesarias para la planeación, implementación, control y seguimiento de procesos.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

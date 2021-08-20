<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-around
    .col-md-6.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/botones-fondo.svg', alt='Texto que describa la imagen')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-6.col-lg-4
      .tarjeta.color-acento-botones__claro.p-3(v-if="selected === 0")
        h3 Personas
        p.mb-0 Hace referencia al talento humano, la consolidación de equipos de trabajo con responsabilidades bien definidas, según las necesidades de la entidad y los servicios tecnológicos o tecnologías que la empresa usa. 

      .tarjeta.color-acento-botones__claro.p-3(v-else-if="selected === 1")
        h3 Tecnologías
        p.mb-0 hace referencia a las tecnologías que emplea la organización para hacerse más productiva en su gestión. 

      .tarjeta.color-acento-botones__claro.p-3(v-else-if="selected === 2")
        h3 Procesos
        p.mb-0 son el conjunto de buenas prácticas para la implementación y gestión de TI, garantizando que sean utilizadas de forma correcta, a la vez que cuida su integridad. 

</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,
    size: '35%',
    botones: [
      {
        img: require('@/assets/curso/botones-ico-01-a.svg'),
        img_h: require('@/assets/curso/botones-ico-01-b.svg'),
        pos_x: '3%',
        pos_y: '43.5%',
      },
      {
        img: require('@/assets/curso/botones-ico-02-a.svg'),
        img_h: require('@/assets/curso/botones-ico-02-b.svg'),
        pos_x: '32.7%',
        pos_y: '4%',
      },
      {
        img: require('@/assets/curso/botones-ico-03-a.svg'),
        img_h: require('@/assets/curso/botones-ico-03-b.svg'),
        pos_x: '62.5%',
        pos_y: '43.5%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: cover
  position: absolute
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.15)
  cursor: pointer
  border-radius: 50%
  transition: background-image 0.2s ease-in-out
</style>

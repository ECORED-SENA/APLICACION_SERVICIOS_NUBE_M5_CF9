<template lang="pug">
.btns
  img(src='@/assets/curso/info-fondo.svg', alt='Texto que describa la imagen')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-2(v-if="index === hover") {{boton.texto}}

</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '14%',
    botones: [
      {
        img: require('@/assets/curso/info-01.svg'),
        img_h: require('@/assets/curso/info-01-b.svg'),
        pos_x: '53.7%',
        pos_y: '8%',
        texto: '1. Diagnóstico y preparación',
      },
      {
        img: require('@/assets/curso/info-02.svg'),
        img_h: require('@/assets/curso/info-02-b.svg'),
        pos_x: '71.3%',
        pos_y: '21.4%',
        texto: '2. Definición de la estructura de servicios',
      },
      {
        img: require('@/assets/curso/info-03.svg'),
        img_h: require('@/assets/curso/info-03-b.svg'),
        pos_x: '77.9%',
        pos_y: '42.5%',
        texto: '3. Selección de roles y propietarios de roles',
      },
      {
        img: require('@/assets/curso/info-04.svg'),
        img_h: require('@/assets/curso/info-04-b.svg'),
        pos_x: '71.3%',
        pos_y: '64.05%',
        texto: '4. Análisis de procesos existentes',
      },
      {
        img: require('@/assets/curso/info-05.svg'),
        img_h: require('@/assets/curso/info-05-b.svg'),
        pos_x: '53.7%',
        pos_y: '77.2%',
        texto: '5. Definición de estructura de procesos',
      },
      {
        img: require('@/assets/curso/info-06.svg'),
        img_h: require('@/assets/curso/info-06-b.svg'),
        pos_x: '32.1%',
        pos_y: '77.2%',
        texto: '6. Definición de interfaces de ITIL',
      },
      {
        img: require('@/assets/curso/info-07.svg'),
        img_h: require('@/assets/curso/info-07-b.svg'),
        pos_x: '14.7%',
        pos_y: '64.05%',
        texto: '7. Establecimiento de controles',
      },
      {
        img: require('@/assets/curso/info-08.svg'),
        img_h: require('@/assets/curso/info-08-b.svg'),
        pos_x: '8%',
        pos_y: '42.5%',
        texto: '8. Diseño de los procesos',
      },
      {
        img: require('@/assets/curso/info-09.svg'),
        img_h: require('@/assets/curso/info-09-b.svg'),
        pos_x: '14.7%',
        pos_y: '21.4%',
        texto: '9. Selección e implantación de sistemas',
      },
      {
        img: require('@/assets/curso/info-10.svg'),
        img_h: require('@/assets/curso/info-10-b.svg'),
        pos_x: '32.3%',
        pos_y: '8%',
        texto: '10. Implementación de procesos y capacitación',
      },
      {
        img: require('@/assets/curso/info-11.svg'),
        img_h: require('@/assets/curso/info-11-b.svg'),
        pos_x: '43%',
        pos_y: '26.25%',
        texto: 'Planeación',
      },
      {
        img: require('@/assets/curso/info-12.svg'),
        img_h: require('@/assets/curso/info-12-b.svg'),
        pos_x: '58.35%',
        pos_y: '42.25%',
        texto: 'Implementación',
      },
      {
        img: require('@/assets/curso/info-13.svg'),
        img_h: require('@/assets/curso/info-13-b.svg'),
        pos_x: '43%',
        pos_y: '58.25%',
        texto: 'Control y Seguimiento',
      },
      {
        img: require('@/assets/curso/info-14.svg'),
        img_h: require('@/assets/curso/info-14-b.svg'),
        pos_x: '27.7%',
        pos_y: '42.25%',
        texto: 'Mejora',
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
      const image = this.hover === index ? boton.img_h : boton.img
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
.btns
  position: relative
  &__item
    position: absolute
    background-size: cover
    border-radius: 50%
    cursor: pointer
    transition: background-image 0.2s ease-in-out
    box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.15)
  &__text
    position: absolute
    bottom: 100%
    left: 50%
    background-color: #FFF6DB
    border: 2px solid #4DD0E1
    width: 170px
    font-weight: bold
    text-align: center
    z-index: 100
    line-height: 1.2em
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3)
    transform: translate(-50%)
</style>

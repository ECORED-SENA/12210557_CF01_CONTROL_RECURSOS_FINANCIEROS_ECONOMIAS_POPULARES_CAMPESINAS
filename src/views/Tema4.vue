<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Inventarios e impuestos en las operaciones
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Inventarios y su importancia en el control financiero

      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Sistema de inventario periódico

      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Sistema de inventario permanente

      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Entradas, salidas y control de existencias

      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Impuestos asociados con las operaciones comerciales




</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Cuentas y estructura básica del registro
        
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Concepto y función de las cuentas

      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Activos, pasivos y patrimonio

      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Ingresos, costos y gastos

      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Naturaleza y movimiento de las cuentas

      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Clasificación de cuentas según las operaciones del negocio

      Separador
      //- Inicio Tema2.6
      .row
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




</template>

<script>
export default {
  name: 'Tema2',
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

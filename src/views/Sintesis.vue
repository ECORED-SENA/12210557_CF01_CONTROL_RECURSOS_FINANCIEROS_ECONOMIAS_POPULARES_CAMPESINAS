<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Análisis de información financiera con inteligencia artificial
          p.mb-0 
            | Síntesis:
            | fundamentos de inteligencia artificial (IA) para hechos económicos
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual sintetiza los fundamentos para utilizar responsablemente la inteligencia artificial en el tratamiento inicial de información financiera. Integra los hechos económicos, la normativa, la protección de datos, las herramientas tecnológicas, la gestión de riesgos y la formulación de *prompts*. Estos componentes favorecen un uso seguro, ético y verificable de la IA, respaldado por la validación documental y el criterio profesional.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

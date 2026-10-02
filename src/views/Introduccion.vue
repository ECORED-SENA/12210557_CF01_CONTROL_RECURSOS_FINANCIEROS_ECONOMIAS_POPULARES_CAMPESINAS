<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.align-items-center.mb-4
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 La organización de la información contable permite conocer cómo se utilizan los recursos y cuáles son los resultados de una actividad económica. En las economías populares y campesinas, registrar de manera ordenada ingresos, egresos, bienes y obligaciones facilita el control del negocio y proporciona información útil para respaldar decisiones relacionadas con su funcionamiento.
          .bg-color-2.p-3            
            p Los principios básicos de contabilidad orientan la identificación, clasificación y registro de las operaciones económicas. Para aplicarlos, es necesario diferenciar activos, pasivos, patrimonio, ingresos, costos y gastos, así como comprender la naturaleza y el movimiento de las cuentas. Esta base permite registrar compras, ventas y otras transacciones realizadas de contado o a crédito.
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/intro/img1.png", data-aos="zoom-in", style="width: 600px;")
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El control financiero también requiere organizar inventarios, reconocer los impuestos asociados con las operaciones y relacionar cada transacción con sus soportes y comprobantes. Los registros pueden realizarse de forma manual o mediante herramientas tecnológicas, siempre que permitan consultar y dar seguimiento a la información. Su adecuada organización fortalece el control de los recursos y facilita el análisis de la situación financiera del negocio.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

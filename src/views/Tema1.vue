<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos contables de la actividad económica
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Toda actividad económica moviliza recursos para producir bienes, comercializar productos o prestar servicios. Estas acciones generan compras, ventas, ingresos, costos, gastos, obligaciones y movimientos de efectivo que requieren organización. Reconocer la actividad desarrollada y las operaciones que genera permite establecer procedimientos básicos para registrar la información y fortalecer el control financiero de la unidad económica.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img1.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Actividad económica y características de las economías populares y campesinas
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El control financiero también requiere organizar inventarios, reconocer los impuestos asociados con las operaciones y relacionar cada transacción con sus soportes y comprobantes. Los registros pueden realizarse de forma manual o mediante herramientas tecnológicas, siempre que permitan consultar y dar seguimiento a la información. Su adecuada organización fortalece el control de los recursos y facilita el análisis de la situación financiera del negocio.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de las actividades económicas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las actividades económicas se clasifican en sectores primario, secundario y terciario, lo que permite relacionarlas con los recursos, operaciones y movimientos financieros que generan. La siguiente tabla compara sus características, actividades representativas y operaciones más frecuentes:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span Clasificación de las actividades económicas por sectores
          .tabla-a
            table
              thead
                tr
                  th(style="width: 15%") Sector
                  th(style="width: 30%") Características
                  th(style="width: 25%") Ejemplos de actividades
                  th(style="width: 30%") Operaciones frecuentes
              tbody
                tr
                  td Primario
                  td Comprende actividades relacionadas principalmente con la obtención y aprovechamiento directo de recursos naturales.
                  td Agricultura, ganadería, pesca y actividades forestales.
                  td Compra de semillas e insumos, pago de mano de obra, mantenimiento de cultivos o animales y venta de productos.
                tr
                  td Secundario
                  td Comprende actividades mediante las cuales las materias primas se transforman en productos elaborados o semielaborados.
                  td Elaboración de alimentos, producción de panela, confecciones, artesanías y transformación de productos agrícolas.
                  td Compra de materias primas, adquisición de materiales, costos de producción, almacenamiento y venta de productos terminados.
                tr
                  td Terciario
                  td Comprende principalmente la comercialización de bienes y la prestación de servicios.
                  td Tiendas, comercio de productos agrícolas, transporte, reparaciones, restaurantes y servicios personales.
                  td Compra y venta de mercancías, cobro por servicios, pagos de gastos y manejo de cuentas por cobrar y por pagar.
      //- FinTabla
      p(data-aos="fade-left") Seguidamente, se precisan algunas implicaciones de estos sectores para el registro y control financiero:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sector primario
                p Tiene una relación cercana con muchas economías campesinas e incluye actividades como agricultura, ganadería, silvicultura y pesca. Su control financiero considera la adquisición de insumos, los costos de producción, los ciclos productivos y los ingresos obtenidos por la venta.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sector secundario
                p Incorpora procesos de transformación. Por ejemplo, una familia que cultiva fruta desarrolla una actividad primaria y, al convertirla en mermeladas o pulpas, incorpora una actividad secundaria que genera operaciones relacionadas con materiales, producción, inventarios y productos terminados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sector terciario
                p Comprende principalmente actividades comerciales y de servicios, como la comercialización directa de productos, tiendas, reparaciones o establecimientos de alimentos. Estas actividades requieren controlar ventas, ingresos, gastos, cuentas por cobrar y obligaciones con terceros.
      //- Fin Slideshow
      p(data-aos="fade-left") Una misma unidad económica puede participar en varios sectores, por lo que resulta necesario identificar y controlar las operaciones que genera cada actividad.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Economías populares
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/3lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 La economía popular comprende oficios, ocupaciones mercantiles y actividades domésticas o comunitarias desarrolladas por unidades económicas de baja escala presentes en distintos sectores económicos (DANE, 2023). Las siguientes características permiten reconocer su organización y manejo de recursos:
      //- Inicio Tarjetas
      .row.justify-content-center.g-0.mb-5(data-aos="fade-right")
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-3(style="border-radius: 25px 0 0 25px;")
            .row.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/bg/icono1.svg', alt='' style="width:100px").m-auto
            h4.text-white Formas de organización
            p.text-white Las unidades económicas pueden estar conformadas por personas, familias, micronegocios o microempresas y funcionar de manera individual o asociativa.
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-4(style="border-radius: 0 25px 25px 0;")
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/temas/bg/icono2.svg', style="width:100px").m-auto
            h4.card-title.mb-2 Administración de los recursos
            p Una misma persona puede comprar materiales, desarrollar la actividad productiva, realizar ventas, recibir pagos y administrar el dinero. Los registros sencillos contribuyen a identificar ingresos, gastos, obligaciones pendientes y recursos disponibles.
          //- Fin Tarjetas
      .row.align-items-center.mb-4
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 La organización de la información contable permite conocer cómo se utilizan los recursos y cuáles son los resultados de una actividad económica. En las economías populares y campesinas, registrar de manera ordenada ingresos, egresos, bienes y obligaciones facilita el control del negocio y proporciona información útil para respaldar decisiones relacionadas con su funcionamiento.
          .bg-color-5.p-3            
            p Los principios básicos de contabilidad orientan la identificación, clasificación y registro de las operaciones económicas. Para aplicarlos, es necesario diferenciar activos, pasivos, patrimonio, ingresos, costos y gastos, así como comprender la naturaleza y el movimiento de las cuentas. Esta base permite registrar compras, ventas y otras transacciones realizadas de contado o a crédito.
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t1/img3.png", data-aos="zoom-in", style="width: 600px;")
      p(data-aos="fade-left") Estas características relacionan el funcionamiento de las economías populares y campesinas con sus necesidades básicas de registro y control:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Diversidad de actividades económicas
                            p.text-start Requiere identificar qué operaciones corresponden a producción, transformación, comercio o prestación de servicios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Unidades económicas de baja escala
                            p.text-start Favorece el uso de procedimientos sencillos y comprensibles para registrar las operaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Participación familiar, comunitaria o asociativa
                            p.text-start Hace necesario identificar los recursos utilizados y las responsabilidades relacionadas con su administración.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Ingresos que pueden variar durante el periodo
                            p.text-start Requiere registrar las entradas de recursos para conocer su comportamiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Compra frecuente de materiales, insumos o mercancías
                            p.text-start Exige controlar los egresos y conservar los soportes de las operaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Manejo de productos e inventarios
                            p.text-start Requiere controlar las entradas, salidas y existencias.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Operaciones de contado y a crédito
                            p.text-start Hace necesario diferenciar el dinero recibido o pagado de los valores pendientes de cobro o pago.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t1/img4.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") Reconocer estas características permite identificar las operaciones de la unidad productiva y los recursos que requieren seguimiento.
            Separador
            //- Inicio Tema1.2
            .row
              #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.2 Finalidad de la información contable y financiera
            .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
              .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
                p.mb-3 La información contable y financiera permite organizar y representar los hechos económicos de una unidad productiva. Su utilidad no se limita al registro de compras, ventas o pagos, sino que proporciona información comprensible, pertinente y confiable para conocer el negocio y apoyar la toma de decisiones económicas (Ley 1314, 2009).
              .col-lg-5.d-flex
                figure.mb-0.w-100
                  img.h-100.w-100(src='@/assets/curso/temas/t1/img5.png', alt='', style="object-fit: cover;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información contable e información financiera
      //- Título nivel 3 - Imagen
      .row.align-items-center.mb-5
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t1/img6.png", data-aos="zoom-in", style="width: 600px;")
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 La información contable se obtiene mediante la identificación, clasificación y registro de las operaciones económicas, mientras que la información financiera organiza y presenta esos registros para facilitar su análisis. Si las operaciones no se registran adecuadamente, la información utilizada para evaluar el negocio puede resultar incompleta o incorrecta. El siguiente ejemplo relaciona el registro de las Requiere controlar las entradas, salidas y existencias. con su posterior análisis financiero:
          .bg-color-2.p-3
            p.fw-bold Ejemplo aplicado
            p Por ejemplo, si una unidad productiva registra diariamente sus ventas, compras, pagos y cuentas pendientes, dispone de información contable sobre las operaciones realizadas. Cuando estos datos se organizan para conocer los recursos disponibles, las obligaciones, los ingresos, los gastos o los resultados alcanzados, se convierten en información útil para analizar la situación financiera del negocio.
      p(data-aos="fade-left") La información organizada cumple diferentes finalidades dentro de una economía popular o campesina. Estas son las principales:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Registrar las operaciones
                            p.text-start Mantener información ordenada sobre compras, ventas, ingresos, pagos y demás transacciones realizadas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Controlar los recursos
                            p.text-start Conocer el efectivo, inventarios, bienes y otros recursos disponibles.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Identificar obligaciones
                            p.text-start Determinar los valores pendientes de pago a proveedores, entidades financieras u otros terceros.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Conocer los resultados
                            p.text-start Comparar los ingresos obtenidos con los costos y gastos relacionados con la actividad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Facilitar la toma de decisiones
                            p.text-start Utilizar la información para decidir sobre compras, producción, precios, inversiones o manejo del dinero.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Realizar seguimiento
                            p.text-start Comparar la información entre diferentes periodos y detectar cambios o situaciones que requieren atención.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Sustentar operaciones
                            p.text-start Relacionar los registros con facturas, recibos, comprobantes y demás documentos que respaldan las transacciones.
            //- Fin Carrusel
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información para el control del negocio
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") La información contable facilita el seguimiento de los recursos y permite relacionar cada operación con sus efectos en la unidad económica. Seguidamente, se presentan dos aspectos clave para el control del negocio:
      //- Inicio Tarjetas
      .row.justify-content-center.g-0.mb-5(data-aos="fade-right")
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-3(style="border-radius: 25px 0 0 25px;")
            .row.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/bg/icono1.svg', alt='' style="width:100px").m-auto
            h4.text-white Control de los recursos
            p.text-white Registrar una venta permite conocer el ingreso generado; una compra identifica recursos utilizados u obligaciones adquiridas; el inventario permite determinar existencias disponibles; y las cuentas por cobrar identifican valores pendientes de recibir.
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-4(style="border-radius: 0 25px 25px 0;")
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/temas/bg/icono2.svg', style="width:100px").m-auto
            h4.card-title.mb-2 Dinero disponible y resultado económico
            p Recibir efectivo no significa necesariamente obtener un resultado favorable. La unidad económica puede mantener obligaciones, costos de producción o pagos futuros; por ello, el análisis debe considerar recursos, obligaciones, ingresos, costos y gastos.
          //- Fin Tarjetas
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información financiera simplificada
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La normativa colombiana contempla marcos diferenciados de información financiera para unidades económicas de menor tamaño. Los siguientes aspectos permiten comprender su aplicación y finalidad:
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t1/img7.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Grupo 3
              p.mb-0 El Decreto 2420 de 2015 establece un marco técnico para las entidades pertenecientes al Grupo 3, cuyos criterios de clasificación fueron precisados posteriormente por el Decreto 1670 de 2021.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t1/img8.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Marco aplicable
              p.mb-0 Las entidades que cumplen las condiciones del Grupo 3 aplican la Norma de Información Financiera contenida en el Anexo 3 del Decreto 2420 de 2015 (Decreto 2420, 2015).
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t1/img9.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Finalidad
              p.mb-0 Este enfoque permite organizar la información de unidades económicas de menor tamaño mediante requerimientos acordes con sus características y producir información útil y confiable para reconocer sus operaciones y controlar sus recursos.
      //- Fin Tarjetas
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Principios básicos de contabilidad
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los principios contables orientan el reconocimiento y la organización de los hechos económicos. En Colombia, la Ley 1314 de 2009 establece el marco general de regulación y, para las unidades que cumplen las condiciones del Grupo 3, el Decreto 2420 de 2015 incorpora un marco de información financiera simplificado (Ley 1314, 2009).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios aplicados al registro de las operaciones
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") En las economías populares y campesinas, estos criterios permiten representar lo que ocurre en la actividad económica, conservar información suficiente y mantener procedimientos consistentes para el registro. La siguiente tabla relaciona principios y características con su aplicación en situaciones habituales de una unidad económica:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 2.
            span Principios básicos aplicados a la actividad económica
          .tabla-a
            table
              thead
                tr
                  th(style="width: 25%") Principio o característica
                  th(style="width: 40%") Aplicación en la unidad económica
                  th(style="width: 35%") Ejemplo
              tbody
                tr
                  td Entidad económica
                  td Los recursos y operaciones del negocio deben identificarse de manera diferenciada de los recursos personales de su propietario.
                  td El dinero recibido por la venta de productos se registra como recurso del negocio y no como ingreso personal sin identificar su origen.
                tr
                  td Negocio en marcha
                  td La información se prepara considerando que la actividad continuará funcionando, salvo que exista intención o necesidad de finalizarla.
                  td Una tienda registra sus bienes y obligaciones considerando la continuidad normal de sus operaciones.
                tr
                  td Esencia sobre forma
                  td Las operaciones deben reconocerse de acuerdo con su realidad económica y no solamente por la manera en que se denominan o documentan.
                  td Una mercancía recibida a crédito genera una compra y una obligación pendiente de pago.
                tr
                  td Prudencia
                  td Cuando existen dificultades para estimar un valor, debe actuarse con precaución para evitar sobrevalorar recursos o ingresos y subestimar obligaciones o gastos.
                  td Una cuenta por cobrar con dificultades de recuperación debe analizarse antes de considerarla totalmente disponible.
                tr
                  td Integridad
                  td La información debe incluir los datos necesarios para comprender adecuadamente las operaciones realizadas.
                  td Una venta a crédito debe registrar el valor de la venta y el valor pendiente de cobro.
                tr
                  td Comparabilidad
                  td Los registros deben conservar criterios que permitan comparar la información entre periodos.
                  td Registrar mensualmente las ventas con el mismo procedimiento facilita analizar su comportamiento.
      //- Fin Tabla
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/3lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 El marco técnico del Grupo 3 contempla principios y características orientados a generar información útil, como negocio en marcha, esencia sobre forma, prudencia e integridad (Decreto 2420 Anexo 3, 2015).
      p(data-aos="fade-left") Se invita a reproducir el siguiente pódcast para profundizar en negocio en marcha, esencia sobre forma, prudencia, integridad y comprensibilidad y relevancia de la información mediante situaciones que relacionan estos criterios con las operaciones económicas:
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Principios contables en las operaciones del negocio 
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t1/img11.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación de los principios según la actividad económica
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los principios contables se aplican según las características y operaciones propias de cada actividad económica. A continuación, se relacionan algunas situaciones con el principio correspondiente y su aplicación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 3.
                  span Aplicación de principios según la actividad económica
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Situación
                        th(style="width: 20%") Actividad
                        th(style="width: 25%") Principio relacionado
                        th(style="width: 30%") Aplicación
                    tbody
                      tr
                        td Compra de semillas a crédito.
                        td Agricultura
                        td Esencia sobre forma
                        td Se reconoce la adquisición del insumo y la obligación pendiente.
                      tr
                        td Venta de mercancía cuyo pago se recibirá posteriormente.
                        td Comercio
                        td Integridad
                        td Se registra la venta y la cuenta por cobrar.
                      tr
                        td Adquisición de una máquina para continuar la producción.
                        td Transformación
                        td Negocio en marcha
                        td Se reconoce como recurso utilizado para desarrollar la actividad.
                      tr
                        td Cliente con dificultades conocidas para pagar.
                        td Comercio o servicios
                        td Prudencia
                        td Se analiza la posibilidad real de recuperación de la cuenta.
                      tr
                        td Registro mensual de ventas y gastos.
                        td Cualquier actividad
                        td Comparabilidad
                        td Se mantiene un criterio uniforme que permita analizar distintos periodos.
            //- Fin Tabla



      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Contabilidad simplificada y control de recursos

      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Organización de la información económica del negocio



</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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
<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Cuentas y estructura básica del registro
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las operaciones de una unidad económica deben clasificarse para identificar sus recursos, obligaciones, patrimonio, ingresos, costos y gastos. Las cuentas contables agrupan movimientos de naturaleza similar y facilitan su registro, seguimiento y análisis. Comprender su estructura y naturaleza permite interpretar cómo cada transacción modifica la situación económica del negocio (Decreto 2420 Anexo 3, 2015). 
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Concepto y función de las cuentas
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las operaciones de una unidad económica deben clasificarse para identificar sus recursos, obligaciones, patrimonio, ingresos, costos y gastos. Las cuentas contables agrupan movimientos de naturaleza similar y facilitan su registro, seguimiento y análisis. Comprender su estructura y naturaleza permite interpretar cómo cada transacción modifica la situación económica del negocio (Decreto 2420 Anexo 3, 2015). 
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-12.col-lg-5.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img3.png", data-aos="zoom-in", style="width: 600px;")
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 El siguiente ejemplo permite reconocer por qué las operaciones deben registrarse en cuentas diferenciadas:
          .bg-color-5.p-3
            p.fw-bold Ejemplo aplicado
            p Cuando una unidad productiva recibe dinero por una venta, adquiere mercancías, compra una herramienta o queda debiendo a un proveedor, cada operación afecta elementos diferentes. Las cuentas permiten separar estos movimientos para evitar que toda la información quede registrada de manera conjunta y sin posibilidad de identificar qué ocurrió con cada recurso u obligación.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Función de las cuentas contables
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 La principal función de las cuentas es ordenar las operaciones según su naturaleza. Los registros pueden agruparse posteriormente para conocer cuánto posee y debe la unidad económica, qué ingresos ha generado y qué recursos ha utilizado durante el desarrollo de su actividad (Decreto 2420 Anexo 3, 2015).
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img4.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") Estas son las principales funciones que cumplen las cuentas dentro del proceso de registro y control:
      .row.bg-fondo-1(data-aos="fade-right")
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
                              img(src='@/assets/curso/temas/t2/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Identificar
                            p.text-center Determinar qué elemento económico se afecta con una operación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Clasificar
                            p.text-center Agrupar operaciones que tienen características semejantes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Registrar
                            p.text-center Incorporar los aumentos y disminuciones producidos por las transacciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Acumular
                            p.text-center Reunir los movimientos correspondientes a una misma cuenta durante un periodo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Controlar
                            p.text-center Hacer seguimiento a los recursos, obligaciones, ingresos, costos y gastos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Determinar saldos
                            p.text-center Establecer el valor resultante de los movimientos registrados en cada cuenta.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Facilitar información
                            p.text-center Proporcionar datos que posteriormente pueden utilizarse para preparar y analizar información financiera.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t2/img5.png', style="width: 300px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura básica de una cuenta
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Cada cuenta debe permitir identificar el concepto que representa y los movimientos realizados durante el periodo. De manera básica, incluye una denominación, los valores registrados y un saldo resultante. Los movimientos se organizan mediante débito y crédito, cuya aplicación depende de la naturaleza de cada cuenta.
      p(data-aos="fade-left") Los siguientes elementos conforman la estructura básica de una cuenta:
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
                              img(src='@/assets/curso/temas/t2/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Nombre de la cuenta
                            p.text-center Identifica el recurso, obligación, ingreso, costo, gasto u otro concepto que se registra.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Débito
                            p.text-centerstart Corresponde al lado izquierdo de la cuenta, donde se registran determinados movimientos según su naturaleza.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Crédito
                            p.text-center Corresponde al lado derecho de la cuenta, donde se registran determinados movimientos según su naturaleza.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Movimiento
                            p.text-center Representa los valores registrados durante un periodo como consecuencia de las operaciones realizadas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Saldo
                            p.text-center Corresponde a la diferencia resultante entre los movimientos débito y crédito de la cuenta.
            //- Fin Carrusel
            p(data-aos="fade-left") La forma en que el débito y el crédito afectan cada cuenta se desarrolla posteriormente al estudiar su naturaleza y movimiento.
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cuentas reales y cuentas nominales
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") Para organizar la información resulta útil distinguir las cuentas relacionadas con la situación financiera de aquellas que intervienen en la determinación del resultado del periodo. Las siguientes categorías permiten establecer esta diferencia:
            //- Inicio Tarjetas
            .row.justify-content-center.g-0.mb-2(data-aos="fade-right")
              .col-lg-6.col-md-6
                .tarjeta.p-5.h-100.bg-color-3(style="border-radius: 25px 0 0 25px;")
                  .row.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/temas/bg/icono1.svg', alt='' style="width:100px").m-auto
                  h4.text-white Cuentas reales
                  p.text-white Se relacionan con los recursos, las obligaciones y el patrimonio de la unidad económica. Comprenden principalmente activos, pasivos y patrimonio y permiten establecer la situación financiera en una fecha determinada.
              .col-lg-6.col-md-6
                .tarjeta.p-5.h-100.bg-color-4(style="border-radius: 0 25px 25px 0;")
                  .row.mb-4
                    .col-auto
                      figure
                        img(src='@/assets/curso/temas/bg/icono2.svg', style="width:100px").m-auto
                  h4.card-title.mb-2 Cuentas nominales
                  p Reúnen principalmente los ingresos, costos y gastos generados durante un periodo. Estas cuentas permiten determinar el resultado obtenido por la actividad económica (Decreto 2420 Anexo 3, 2015).
                //- Fin Tarjetas
      .row.align-items-center.mb-4
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img7.png", data-aos="zoom-in", style="width: 600px;")
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 El siguiente caso permite diferenciar los elementos relacionados con la situación financiera de aquellos que intervienen en el resultado:
          .bg-color-5.p-3
            p.fw-bold Ejemplo aplicado
            p El dinero disponible, las mercancías y una deuda con un proveedor corresponden a elementos de la situación financiera; mientras que una venta realizada y los gastos asociados con el funcionamiento corresponden a operaciones que intervienen en la determinación del resultado del periodo.
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/3lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 Comprender qué representa una cuenta y cuál es su función facilita clasificar las operaciones y prepara el estudio de los activos, pasivos y patrimonio.      
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Activos, pasivos y patrimonio
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img8.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La situación financiera de una unidad económica se comprende a partir de los activos, pasivos y patrimonio. Estos elementos permiten identificar los recursos controlados por el negocio, las obligaciones con terceros y la parte residual que corresponde a sus propietarios después de considerar dichas obligaciones (Decreto 2420 Anexo 3, 2015).
      p(data-aos="fade-left") Los siguientes elementos permiten reconocer qué representa cada componente de la situación financiera:
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta03_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Activo
              p.mb-0 Representa los recursos controlados por la unidad económica de los cuales se esperan beneficios económicos futuros. Incluye efectivo, cuentas por cobrar, inventarios, herramientas, maquinaria y equipos.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta03_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Pasivo
              p.mb-0 Representa las obligaciones actuales cuyo pago implica utilizar recursos de la unidad económica, como deudas con proveedores, créditos financieros y servicios pendientes. Una compra de insumos a crédito genera, además del recurso recibido, una obligación con el proveedor.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta03_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Patrimonio
              p.mb-0 Representa la parte residual de los activos después de deducir los pasivos. Permite identificar la parte de los recursos que corresponde económicamente al propietario o propietarios (Decreto 2420 Anexo 3, 2015). 
      //- Fin Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-10.bg-color-2.p-4
          .row.justify-content-center
            .col-lg-7
              p La relación entre estos tres elementos puede expresarse mediante las siguientes ecuaciones:
              p.bg-color-6.p-2.text-center.fw-bold Activo = Pasivo + Patrimonio
              p De la misma manera:
              p.bg-color-6.p-2.text-center.fw-bold Patrimonio = Activo − Pasivo
            .row.justify-content-center
            .col-lg-8
              p Por ejemplo, si una unidad productiva posee recursos por $12.000.000 y tiene obligaciones pendientes por $4.500.000, su patrimonio corresponde a $7.500.000.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación básica de los activos y pasivos
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img9.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Además de identificar su naturaleza, los activos y pasivos pueden organizarse según el momento en que se espera realizarlos, utilizarlos o pagarlos. El marco técnico para microempresas distingue entre partidas corrientes y no corrientes para presentar la situación financiera (Decreto 2420 Anexo 3, 2015).
      p(data-aos="fade-left") La siguiente clasificación permite diferenciar los recursos y obligaciones según el periodo previsto para su utilización, realización o pago:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Activo corriente")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_1.png')
              .col-md-6
                h4 Activo corriente
                p Recurso disponible o esperado para utilizarse, venderse o convertirse en efectivo en el corto plazo. <br><b>Ejemplos:</b> efectivo, cuentas por cobrar e inventarios.
          .py-3.py-md-4(titulo="Activo no corriente")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_2.png')
              .col-md-6
                h4 Activo no corriente
                p Recurso destinado a permanecer y apoyar la actividad durante un periodo mayor. <br><b>Ejemplos:</b> maquinaria, herramientas y equipos.
          .py-3.py-md-4(titulo="Pasivo corriente")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_3.png')
              .col-md-6
                h4 Pasivo corriente
                p Obligación que normalmente debe atenderse en el corto plazo. <br><b>Ejemplos:</b> proveedores y cuotas próximas de préstamos.
          .py-3.py-md-4(titulo="Pasivo no corriente")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_4.png')
              .col-md-6
                h4 Pasivo no corriente
                p Obligación cuyo vencimiento corresponde a un plazo mayor. <br><b>Ejemplos:</b> créditos u obligaciones financieras de largo plazo (Decreto 2420 Anexo 3, 2015).
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Identificar activos, pasivos y patrimonio, así como su clasificación, permite comprender qué posee la unidad económica, qué obligaciones mantiene y cuál es su posición económica.
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Ingresos, costos y gastos
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El desarrollo de una actividad económica genera valores que permiten establecer si el negocio obtiene resultados favorables o desfavorables. Para ello, es necesario diferenciar los ingresos generados por la actividad de los costos y gastos asociados con su funcionamiento (Decreto 2420 Anexo 3, 2015).
      p(data-aos="fade-left") Las siguientes categorías permiten reconocer qué representa cada concepto y cómo se relaciona con la actividad económica:
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-7
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta05_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Ingresos
              p.mb-0 Corresponden a los beneficios económicos generados por la actividad, generalmente mediante la venta de productos, mercancías o servicios. Por ejemplo, la comercialización de hortalizas genera ingresos para una familia productora; en una tienda provienen de las ventas y, en los servicios, de los valores cobrados.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-7
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta05_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Costos
              p.mb-0 Representan los recursos directamente relacionados con la adquisición, producción o transformación de los bienes vendidos. Por ejemplo, si una unidad campesina produce mermeladas, la fruta, el azúcar y demás insumos incorporados al producto forman parte del costo de producción.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-7
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta05_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Gastos
              p.mb-0 Corresponden a recursos utilizados para el funcionamiento de la actividad sin incorporarse directamente al producto vendido. Pueden incluir arrendamientos, servicios públicos, transporte administrativo, papelería, mantenimiento y otros desembolsos necesarios para desarrollar las actividades del negocio.
      //- Fin Tarjetas
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre ingresos, costos y gastos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La comparación entre ingresos, costos y gastos permite establecer de manera básica el resultado obtenido durante un periodo. Cuando los ingresos son superiores a los costos y gastos, se genera un resultado positivo; si estos superan los ingresos, el resultado es desfavorable.
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/3lineas.svg", data-aos="zoom-in", style="width: 90px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 Esta relación puede expresarse de la siguiente manera:
      .row.justify-content-center.mb-3(data-aos="fade-right") 
        .col-lg-6  
          p.bg-color-6.p-2.text-center.fw-bold Resultado = Ingresos − Costos − Gastos
      p(data-aos="fade-left") El siguiente ejemplo permite establecer el resultado del periodo a partir de los ingresos, costos y gastos registrados:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.bg-color-8.p-4.p-md-5
          //- Bloque del ejemplo aplicado
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-3 Una unidad productiva registra durante el mes ingresos por $5.000.000, costos asociados con los productos vendidos por $3.000.000 y gastos de funcionamiento por $1.200.000. El resultado corresponde a:
            p.mb-0 $5.000.000 – $3.000.000 – $1.200.000 = $800.000
          p.mb-4 Para organizar los valores que intervienen en el cálculo, se presenta su relación:
          //- Tabla de contenido
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 5.
                span Ejemplo de determinación básica del resultado
              .tabla-a
                table
                  thead
                    tr
                      th Concepto
                      th Valor
                  tbody
                    tr
                      td Ingresos por ventas
                      td $5.000.000
                    tr
                      td Menos: costos asociados con las ventas
                      td $3.000.000
                    tr
                      td Menos: gastos de funcionamiento
                      td $1.200.000
                    tr.fw-bold
                      td Resultado del periodo
                      td $800.000
          p.mb-0 Diferenciar ingresos, costos y gastos permite clasificar las operaciones y comprender cómo cada una interviene en el resultado de la actividad económica.
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Naturaleza y movimiento de las cuentas
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img11.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Cada cuenta puede registrar aumentos o disminuciones cuando se realiza una transacción. Estos movimientos se expresan mediante débitos y créditos según la naturaleza de la cuenta; por ello, un débito no representa siempre un aumento ni un crédito significa necesariamente una disminución (Decreto 2420 Anexo 3, 2015).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Débito y crédito
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .bg-color-5.p-4.mb-4
            p.mb-2 El débito corresponde al lado izquierdo de una cuenta y el crédito, al lado derecho. Estos conceptos indican dónde se registra un movimiento según la naturaleza de la cuenta y no deben confundirse con “bueno” o “malo”, ni directamente con entradas o salidas de dinero.            
          .row.align-items-center(data-aos="fade-left")
            .col-auto
              figure.mb-0
                img.mx-auto(src="@/assets/curso/temas/bg/7lineas.svg", data-aos="zoom-in", style="width: 80px;")
            .col
              p.mb-0 Por ejemplo, cuando aumenta el dinero disponible, la cuenta de efectivo se registra por el débito porque pertenece a los activos. En cambio, cuando aumenta una deuda con un proveedor, la cuenta por pagar se registra por el crédito porque corresponde a un pasivo.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img12.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") La siguiente relación permite identificar cómo aumentan y disminuyen los principales grupos de cuentas:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 6.
                  span Naturaleza y movimiento básico de las cuentas
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 15%") Tipo de cuenta
                        th(style="width: 15%") Naturaleza
                        th(style="width: 15%") Aumenta por
                        th(style="width: 15%") Disminuye por
                        th(style="width: 40%") Ejemplo
                    tbody
                      tr
                        td Activo
                        td Débito
                        td Débito
                        td Crédito
                        td Efectivo, cuentas por cobrar e inventarios.
                      tr
                        td Pasivo
                        td Crédito
                        td Crédito
                        td Débito
                        td Proveedores, préstamos y otras obligaciones.
                      tr
                        td Patrimonio
                        td Crédito
                        td Crédito
                        td Débito
                        td Aportes y resultados acumulados
                      tr
                        td Ingresos
                        td Crédito
                        td Crédito
                        td Débito
                        td Ventas de productos o prestación de servicios.
                      tr
                        td Costos
                        td Débito
                        td Débito
                        td Crédito
                        td Costo de mercancías o productos vendidos.
                      tr
                        td Gastos
                        td Débito
                        td Débito
                        td Crédito
                        td Arrendamientos, servicios y transporte.
            p(data-aos="fade-left") La clasificación de activos, pasivos, patrimonio, ingresos y gastos se relaciona con los elementos reconocidos en el marco técnico de información financiera para microempresas.
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Movimiento de las cuentas en una operación
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Una misma operación puede afectar dos o más cuentas. Antes de registrarla, es necesario identificar cuáles intervienen y determinar si cada una aumenta o disminuye. Este análisis permite representar de manera completa los efectos de la transacción. 
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img13.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") El siguiente ejemplo permite aplicar la naturaleza de las cuentas mediante movimientos débito y crédito:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.bg-color-8.p-4.p-md-5
          //- Bloque del ejemplo aplicado
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-3 Una unidad productiva compra mercancías por <b>$ 600.000</b> y paga inmediatamente en efectivo. En esta operación aumenta el inventario, que corresponde a un activo, y disminuye el efectivo, que también es un activo. El aumento del inventario se registra por el débito y la disminución del efectivo por el crédito.
          p.mb-4 La operación se organiza de la siguiente manera:
          //- Tabla de contenido
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 7.
                span Análisis del movimiento de una operación
              .tabla-a
                table
                  thead
                    tr
                      th Cuenta afectada
                      th Tipo de cuenta
                      th Efecto
                      th Movimiento
                      th Valor
                  tbody
                    tr
                      td Inventarios
                      td Activo
                      td Aumenta
                      td Débito
                      td $600.000
                    tr
                      td Efectivo
                      td Activo
                      td Disminuye
                      td Crédito
                      td $600.000
          p.mb-0 Si la misma mercancía se adquiere a crédito, el análisis cambia: el inventario continúa aumentando y se registra por el débito, pero se genera una obligación con el proveedor, cuyo aumento se registra por el crédito. De igual manera, en una venta de contado aumenta el efectivo mediante un débito y el ingreso por ventas mediante un crédito.
      p(data-aos="fade-left") Estas situaciones evidencian la importancia de identificar la naturaleza de las cuentas antes de establecer cómo registrar una transacción.
            //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Equilibrio de los movimientos
      //- Título nivel 3 - Imagen
      .row.align-items-center.mb-4
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 El registro contable se fundamenta en mantener una relación equilibrada entre los movimientos realizados. Para cada operación, los valores registrados en el débito deben guardar correspondencia con los registrados en el crédito, permitiendo representar de manera completa los efectos económicos de la transacción. La clasificación adecuada de los hechos económicos constituye una condición básica para que estos se registren en las cuentas que corresponden según su naturaleza.
          .bg-color-2.p-3            
            p Comprender la naturaleza y el movimiento de las cuentas permite registrar correctamente sus aumentos y disminuciones y prepara su posterior clasificación por clase y grupo.
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img14.png", data-aos="zoom-in", style="width: 600px;")
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Clasificación de cuentas según las operaciones del negocio
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img15.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Clasificar una cuenta implica identificar qué representa dentro de la actividad económica y ubicarla en la categoría correspondiente. Este proceso permite que operaciones similares reciban un tratamiento uniforme y facilita la organización de los registros para su consulta y análisis.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clase, grupo, cuenta y subcuenta
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Con fines pedagógicos, puede utilizarse la estructura tradicional del Plan Único de Cuentas para Comerciantes para comprender los niveles de clasificación contable. En esta organización, cada nivel permite avanzar desde una categoría general hasta una identificación más específica (Decreto 2650, 1993). Los siguientes niveles permiten reconocer esta organización progresiva:
      //- Linea de tiempo
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-8
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Clase
                p Corresponde al nivel más general de clasificación y se identifica con el primer dígito. Agrupa elementos como activos, pasivos, patrimonio, ingresos, gastos y costos.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_2.png').img125
              .col-12.col-lg.text-start
                h4 Grupo
                p Permite precisar la clasificación dentro de una clase y se identifica con los dos primeros dígitos.
            .row.align-items-center
              .col-12.col-lg
                h4 Cuenta
                p Representa un nivel más específico dentro del grupo y se identifica con los cuatro primeros dígitos.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_4.png').img125
              .col-12.col-lg.text-start
                h4 Subcuenta
                p Permite alcanzar un mayor nivel de detalle dentro de la cuenta y se identifica con los seis primeros dígitos (Decreto 2650, 1993).
      //- Linea de tiempo
      p(data-aos="fade-left") El Decreto 2650 de 1993 se utiliza en este componente únicamente como referente didáctico de clasificación. Actualmente, las entidades deben emplear un catálogo de cuentas ajustado al marco técnico que les corresponda.
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 Las principales clases permiten organizar las cuentas según el elemento económico que representan:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 8.
                  span Clasificación general de las cuentas
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 15%") Clase
                        th(style="width: 25%") Denominación
                        th(style="width: 60%") Ejemplos de cuentas relacionadas
                    tbody
                      tr
                        td 1
                        td Activo
                        td Efectivo, cuentas por cobrar, inventarios, maquinaria y equipos.
                      tr
                        td 2
                        td Pasivo
                        td Proveedores, obligaciones financieras y cuentas por pagar.
                      tr
                        td 3
                        td Patrimonio
                        td Aportes, capital y resultados acumulados.
                      tr
                        td 4
                        td Ingresos
                        td Ventas de productos, mercancías o prestación de servicios.
                      tr
                        td 5
                        td Gastos
                        td Servicios, arrendamientos, transporte y otros gastos de funcionamiento.
                      tr
                        td 6
                        td Costos de ventas
                        td Valor asociado con los bienes o productos vendidos.
                      tr
                        td 7
                        td Costos de producción u operación
                        td Valores relacionados con procesos de producción o prestación de servicios.
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación por grupos
            //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img16.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Dentro de cada clase existen grupos que permiten realizar una clasificación más específica. Por ejemplo, los activos pueden corresponder a efectivo, cuentas por cobrar, inventarios o bienes utilizados en la actividad; mientras los pasivos pueden originarse en obligaciones financieras, proveedores u otras cuentas pendientes.
      p(data-aos="fade-left") El siguiente caso permite relacionar una misma operación con diferentes clases y grupos:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-12.bg-color-8.p-4.p-md-5
          //- Bloque del ejemplo aplicado
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-3 Una unidad económica que compra mercancías para posteriormente venderlas debe identificar que estas representan un activo y, dentro de este, corresponden al grupo relacionado con inventarios. Si la compra se realiza a crédito, también se genera un pasivo que puede clasificarse dentro del grupo de proveedores.
          p.mb-4 La clasificación de operaciones puede organizarse por clase y grupo así:
          //- Tabla de contenido
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 9.
                span Clasificación de operaciones por clase y grupo
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 30%") Operación
                      th(style="width: 20%") Cuenta relacionada
                      th(style="width: 15%") Clase
                      th(style="width: 25%") Grupo de referencia
                  tbody
                    tr
                      td Dinero recibido por ventas
                      td Efectivo o caja
                      td Activo
                      td Disponible
                    tr
                      td Venta realizada a crédito
                      td Cuentas por cobrar
                      td Activo
                      td Deudores
                    tr
                      td Productos disponibles para la venta
                      td Inventarios
                      td Activo
                      td Inventarios
                    tr
                      td Compra de una máquina
                      td Maquinaria y equipo
                      td Activo
                      td Propiedades, planta y equipo
                    tr
                      td Compra de mercancías a crédito
                      td Proveedores
                      td Pasivo
                      td Proveedores
                    tr
                      td Crédito adquirido con una entidad financiera
                      td Obligación financiera
                      td Pasivo
                      td Obligaciones financieras
                    tr
                      td Aporte realizado por el propietario
                      td Capital
                      td Patrimonio
                      td Capital
                    tr
                      td Venta de productos
                      td Ventas
                      td Ingresos
                      td Ingresos operacionales
                    tr
                      td Pago de arrendamiento
                      td Arrendamiento
                      td Gastos
                      td Gastos operacionales
                    tr
                      td Costo de los productos vendidos
                      td Costo de ventas
                      td Costos
                      td Costos de ventas
          p.mb-0 La denominación de algunos grupos toma como referencia la estructura tradicional del Plan Único de Cuentas para Comerciantes.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimiento para clasificar una cuenta
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La clasificación de una operación requiere analizar primero su realidad económica y después determinar las cuentas que representa. No debe realizarse únicamente a partir del nombre de un documento o del movimiento de dinero. La siguiente secuencia permite realizar esta clasificación de manera ordenada:
      //- Linea de tiempo
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-8
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Identificar la operación
                p Se determina qué ocurrió en la unidad económica.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_2.png').img125
              .col-12.col-lg.text-start
                h4 Reconocer los elementos afectados
                p Se identifican los recursos, obligaciones u otros elementos económicos relacionados con la operación.
            .row.align-items-center
              .col-12.col-lg
                h4 Establecer la clase
                p Se determina si los elementos corresponden a activos, pasivos, patrimonio, ingresos, costos o gastos.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_4.png').img125
              .col-12.col-lg.text-start
                h4 Seleccionar el grupo y la cuenta
                p Se eligen el grupo y la cuenta que mejor representan la naturaleza económica de la operación.
      //- Linea de tiempo
      .row.align-items-center.mb-4
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 El siguiente ejemplo permite aplicar la secuencia de clasificación a una operación de compra a crédito:
          .bg-color-5.p-3            
            p.fw-bold Ejemplo aplicado 
            p Si una productora campesina compra fertilizantes a crédito por $500.000, primero identifica la adquisición de un recurso destinado a su actividad y, al mismo tiempo, una obligación pendiente de pago. Así, deberá reconocer la cuenta correspondiente al recurso adquirido y la cuenta que representa la deuda con el proveedor. Este análisis permite clasificar la operación antes de realizar el registro contable.
            p Una operación puede afectar simultáneamente varias cuentas y grupos; por ello, la clasificación debe responder a su realidad económica y no solamente al documento que la respalda o al movimiento de efectivo.
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img17.png", data-aos="zoom-in", style="width: 600px;")
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/icono.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 Comprender la relación entre clase, grupo y cuenta fortalece la clasificación de las transacciones y proporciona la base para avanzar hacia su registro manual o mediante herramientas tecnológicas. 
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
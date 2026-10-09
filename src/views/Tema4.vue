<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Inventarios e impuestos en las operaciones
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los inventarios comprenden mercancías, materias primas, insumos y productos vinculados con las actividades comerciales, productivas y campesinas. Su control permite conocer las existencias y sus movimientos. A su vez, las compras y ventas pueden generar obligaciones tributarias, por lo que resulta necesario relacionar el manejo de inventarios y los impuestos con los registros de la unidad económica.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Inventarios y su importancia en el control financiero
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-7.mb-4.mb-lg-0
          .bg-color-2.p-4
            p.mb-4 Los inventarios son bienes destinados a la venta, en proceso de producción o utilizados como materiales y suministros. Su control permite conocer las existencias, identificar los bienes ingresados, utilizados o vendidos y establecer los recursos económicos representados en ellos, de acuerdo con las características de la actividad desarrollada (Decreto 2420, Anexo 3, 2015).
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/t4/img2.png', alt='', style="width: 400px;" )
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de inventarios
      //- Título nivel 3 - Imagen
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El tipo de inventario depende de la actividad económica. Una unidad comercial puede manejar principalmente mercancías; una dedicada a la transformación, materias primas y productos en proceso o terminados; mientras que una actividad campesina puede utilizar semillas, insumos, materiales y productos obtenidos durante sus procesos productivos.
      p(data-aos="fade-left") Los siguientes tipos permiten identificar los bienes que deben controlarse según su participación en la actividad económica:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Mercancías
                p Bienes adquiridos para venderse sin realizarles una transformación significativa. Por ejemplo, productos disponibles para la venta en una tienda.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Materias primas
                p Elementos principales que serán transformados durante la producción. Por ejemplo, frutas destinadas a la elaboración de mermeladas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Materiales e insumos
                p Elementos utilizados o consumidos durante el proceso productivo, como envases, empaques, semillas o fertilizantes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Productos en proceso
                p Bienes cuya transformación ha iniciado, pero todavía no ha terminado, como alimentos que se encuentran en proceso de elaboración.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Productos terminados
                p Bienes cuya producción ha finalizado y están disponibles para la venta, como mermeladas envasadas y listas para comercializar.
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia del control de inventarios
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/3lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 El control de inventarios permite verificar existencias y movimientos, detectar diferencias y determinar los recursos económicos representados en mercancías, productos o materiales.
      p(data-aos="fade-left") El seguimiento de las existencias aporta información para controlar los recursos y tomar decisiones relacionadas con compras, producción y ventas:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img4.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Entradas")
                p.mb-4 Permiten identificar los bienes adquiridos o producidos.
              .row(titulo="Salidas")
                p.mb-4 Permiten conocer los productos vendidos, utilizados o consumidos.
              .row(titulo="Existencias")
                p.mb-4 Determinan las cantidades disponibles.
              .row(titulo="Valor del inventario")
                p.mb-4 Permite conocer los recursos económicos representados en los bienes almacenados.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Rotación")
                p.mb-4 Ayuda a reconocer los productos que presentan mayor o menor movimiento.
              .row(titulo="Diferencias")
                p.mb-4 Facilitan detectar faltantes o sobrantes al comparar los registros con las existencias físicas.
              .row(titulo="Reposición")
                p.mb-4 Apoya la decisión sobre cuándo y cuánto comprar o producir.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img5.png", alt="").img400.m-auto
      //- Fin Accordion 2
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inventario físico y registro del inventario
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El inventario físico consiste en verificar directamente las cantidades disponibles mediante el conteo, medición o identificación de los bienes. Su comparación con los registros permite detectar diferencias originadas por errores, pérdidas, deterioros, consumos no reportados u otras situaciones que deben revisarse.
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t4/img6.png', alt='', style="object-fit: cover;")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col-auto
              figure.mb-0
                img.mx-auto(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px;")
            .col
              p.mb-0 El siguiente caso permite reconocer una diferencia entre las existencias registradas y las disponibles:
          .bg-color-5.p-4.mb-4
            p.fw-bold Ejemplo aplicado
            p.mb-2 Si una tienda registra 40 unidades de un producto, pero durante el conteo físico encuentra únicamente 37, existe una diferencia de tres unidades que debe investigarse antes de modificar el registro. De manera similar, una unidad campesina puede comparar las cantidades de insumos adquiridos con las utilizadas y las que permanecen disponibles para el siguiente ciclo de producción.
      .row.align-items-center.mb-4
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 El control de inventarios debe considerar tanto las cantidades como su valor, incluidos los costos de adquisición y otros necesarios para llevarlos a su condición y ubicación actuales. Cuando se venden, su valor se reconoce como costo del periodo correspondiente (Decreto 2420, Anexo 3, 2015).
          .bg-color-2.p-2
            .row
              .col-lg-2
                figure.mb-0
                  img.mx-auto(src="@/assets/curso/temas/bg/icono.svg", data-aos="zoom-in", style="width: 80px;")
              .col-lg-10
                p Su adecuada gestión permite conocer las existencias, controlar sus movimientos y establecer los recursos comprometidos en la actividad económica.
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t4/img7.png", data-aos="zoom-in", style="width: 600px;")
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Sistema de inventario periódico
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img8.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El sistema de inventario periódico determina las existencias y el costo de los bienes vendidos al cierre de un periodo. Como el inventario no se actualiza después de cada entrada o salida, requiere un conteo físico para establecer las cantidades disponibles. Las microempresas pueden utilizar este sistema según sus necesidades (Decreto 2420, Anexo 3, 2015).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funcionamiento del sistema periódico
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") En este sistema se parte del inventario disponible al inicio del periodo, se incorporan las compras realizadas y se determina el inventario final mediante conteo físico. Con estos valores puede calcularse el costo de los bienes vendidos.
      .row.align-items-center.mb-5(data-aos="fade-left")
        .col-auto
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px;")
        .col
          p.mb-0 Los siguientes elementos intervienen en este proceso:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Inventario inicial
                p Corresponde al valor de las existencias disponibles al comienzo del periodo y constituye el punto de partida para determinar la mercancía disponible.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Compras
                p Comprende los bienes o mercancías adquiridos durante el periodo para su posterior venta y se adiciona al inventario inicial.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Mercancía disponible
                p Se obtiene al sumar el inventario inicial y las compras realizadas durante el periodo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Inventario final
                p Corresponde a las existencias determinadas mediante el conteo físico realizado al finalizar el periodo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Costo de ventas
                p.mb-3 Se obtiene al restar el inventario final de la mercancía disponible y representa el valor de los bienes asociados con las ventas realizadas.
                .row
                  .col-lg-12.bg-color-2.p-4
                    p.mb-0 La relación básica se expresa así:
                    p.fw-bold Costo de ventas = Inventario inicial + Compras − Inventario final
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conteo físico del inventario
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col
              p.mb-4 El conteo físico permite determinar las cantidades realmente disponibles al finalizar el periodo. Para realizarlo, se identifican los productos, se cuentan o miden las existencias y posteriormente se asigna el valor correspondiente a cada referencia.
          .bg-color-5.p-2.mb-4
            p.mb-2 Por ejemplo, una tienda puede suspender temporalmente sus movimientos al finalizar el mes para contar cada producto disponible. Las cantidades obtenidas se comparan con las compras realizadas y con el inventario inicial, permitiendo establecer las existencias finales y posteriormente calcular el costo de las mercancías vendidas.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t4/img9.png', alt='', style="width: 500px;" ).m-auto
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de determinación del costo de ventas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El siguiente ejemplo aplica los elementos del sistema periódico para determinar el costo de las mercancías vendidas:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.bg-color-8.p-4.p-md-5
          //- Bloque del ejemplo aplicado
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-3 Una unidad económica presenta la siguiente información al finalizar el mes:
            ul.lista-ul.mb-0
              li.d-flex.align-items-center.mb-3
                i.fas.fa-dollar-sign.color-acento-contenido.me-2
                span.mb-0 Inventario inicial: $ 1.500.000
              li.d-flex.align-items-center.mb-3
                i.fas.fa-dollar-sign.color-acento-contenido.me-2
                span.mb-0 Compras realizadas durante el periodo: $ 3.800.000
              li.d-flex.align-items-center.mb-3
                i.fas.fa-dollar-sign.color-acento-contenido.me-2
                span.mb-0 Inventario final determinado físicamente: $ 1.200.000
          p.mb-3.fw-bold Aplicando la fórmula:
          p.mb-3 $ 1.500.000 + $ 3.800.000 − $ 1.200.000 = $ 4.100.000
          p.mb-5 Por lo tanto, el costo de las mercancías vendidas durante el periodo corresponde a $ 4.100.000.
          //- Tabla de contenido
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-16
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 21.
                span Cálculo del costo de ventas mediante sistema periódico
              .tabla-a
                table
                  thead
                    tr
                      th Concepto
                      th Valor
                  tbody
                    tr
                      td Inventario inicial
                      td $ 1.500.000
                    tr
                      td Más: compras del periodo
                      td $ 3.800.000
                    tr
                      td Mercancía disponible
                      td $ 5.300.000
                    tr
                      td Menos: inventario final
                      td $ 1.200.000
                    tr
                      td Costo de ventas
                      td $ 4.100.000
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ventajas y aspectos de control
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El sistema periódico puede facilitar el manejo de unidades con pocos productos o recursos tecnológicos limitados, porque no exige actualizar el costo de cada salida. Sin embargo, entre un conteo y otro resulta más difícil conocer las existencias exactas y detectar oportunamente pérdidas, faltantes o diferencias. Estas son sus principales características:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img10.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Registro de compras")
                p.mb-4 Las adquisiciones realizadas se acumulan durante el periodo para utilizarlas posteriormente en la determinación de la mercancía disponible.
              .row(titulo="Actualización del inventario")
                p.mb-4 El inventario no se actualiza después de cada venta o salida realizada durante el periodo.
              .row(titulo="Conteo físico")
                p.mb-4 Es necesario para establecer las existencias disponibles y determinar el inventario final.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Costo de ventas")
                p.mb-4 Se calcula al cierre del periodo con base en el inventario inicial, las compras y el inventario final.
              .row(titulo="Control de existencias")
                p.mb-4 Depende de verificaciones físicas periódicas, por lo que no proporciona continuamente el saldo exacto de las existencias.
              .row(titulo="Aplicación")
                p.mb-4 Puede adaptarse a unidades económicas con operaciones relativamente sencillas y necesidades básicas de control.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img11.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") El sistema periódico permite determinar las existencias y el costo de ventas mediante procedimientos sencillos, pero requiere organizar las compras y realizar conteos físicos periódicos. Su comprensión facilita diferenciarlo del sistema de inventario permanente.
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Sistema de inventario permanente
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img12.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El sistema de inventario permanente actualiza las existencias con cada compra, venta, devolución, consumo u otro movimiento. Esto permite conocer continuamente las cantidades disponibles y el valor registrado. A diferencia del sistema periódico, cada entrada o salida modifica el inventario, aunque siguen siendo necesarias verificaciones físicas periódicas (Decreto 2420, Anexo 3, 2015).
      .row.align-items-center.mb-5(data-aos="fade-left")
        .col-auto
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/bg/3lineas.svg", data-aos="zoom-in", style="width: 80px;")
        .col
          p.mb-0 Se invita a reproducir el siguiente video para profundizar en el funcionamiento del sistema de inventario permanente, la tarjeta de control y la verificación de cantidades y valores mediante ejemplos aplicados: 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            p(data-aos="fade-left") Después del video, la comparación permite diferenciar las principales características de los dos sistemas de inventario:
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 22.
                  span Comparación entre sistema periódico y permanente
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Aspecto
                        th(style="width: 37.5%") Sistema periódico
                        th(style="width: 37.5%") Sistema permanente
                    tbody
                      tr
                        td Actualización del inventario
                        td Se determina principalmente al cierre del periodo.
                        td Se actualiza con cada movimiento.
                      tr
                        td Registro de las salidas
                        td No actualiza continuamente las existencias.
                        td Cada salida disminuye el inventario.
                      tr
                        td Conocimiento del saldo
                        td Depende del conteo realizado.
                        td Puede consultarse durante el periodo.
                      tr
                        td Costo de ventas
                        td Se determina generalmente al cierre.
                        td Puede reconocerse con cada venta.
                      tr
                        td Conteo físico
                        td Es fundamental para determinar el inventario final.
                        td Se utiliza para comprobar el saldo registrado.
                      tr
                        td Seguimiento
                        td Periódico
                        td Continuo
            //- Fin Tabla
            p(data-aos="fade-left") El sistema permanente facilita el seguimiento continuo de las entradas, salidas y existencias, pero requiere registrar oportunamente cada movimiento y realizar verificaciones físicas periódicas.
            Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Entradas, salidas y control de existencias
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 El control de existencias consiste en registrar y verificar los movimientos que modifican las cantidades disponibles de mercancías, materias primas, insumos y productos. Cada entrada o salida debe relacionarse con una operación, una cantidad y su respectivo soporte, de manera que el registro represente los bienes disponibles en la unidad económica.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t4/img13.png', alt='', style="object-fit: cover;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Entradas de inventario
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t4/img14.png', alt='', style="width: 800px;" ).m-auto
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col-auto
              figure.mb-0
                img.mx-auto(src="@/assets/curso/temas/bg/icono.svg", data-aos="zoom-in", style="width: 80px;")
            .col
              p.mb-0 Las entradas corresponden a los bienes que se incorporan al inventario y aumentan las existencias. Pueden originarse en compras, devoluciones de clientes, productos terminados provenientes del proceso productivo u otros movimientos debidamente identificados.
          .bg-color-5.p-4.mb-4
            p.mb-2 Para controlar una entrada, se deben registrar datos como fecha, producto, cantidad recibida, valor cuando corresponda, proveedor u origen y soporte de la operación. Esta información permite relacionar el movimiento físico con el registro económico.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Salidas de inventario
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las salidas disminuyen las existencias por ventas, consumo, devoluciones, pérdidas o deterioros. Su registro oportuno permite mantener saldos reales; cuando los inventarios se venden, su valor se reconoce como costo del periodo correspondiente (Decreto 2420, Anexo 3, 2015).
      .row.align-items-center.mb-5(data-aos="fade-left")
        .col-auto
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px;")
        .col
          p.mb-0 Los principales movimientos pueden organizarse según el efecto que producen sobre las existencias:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5          
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 23.
                  span Principales movimientos de entrada y salida de inventarios
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Movimiento
                        th(style="width: 15%") Tipo
                        th(style="width: 20%") Efecto sobre las existencias
                        th(style="width: 35%") Ejemplo
                    tbody
                      tr
                        td Compra de mercancías
                        td Entrada
                        td Aumenta
                        td Productos adquiridos para la venta.
                      tr
                        td Compra de materias primas
                        td Entrada
                        td Aumenta
                        td Frutas adquiridas para transformación.
                      tr
                        td Producto terminado
                        td Entrada
                        td Aumenta
                        td Productos finalizados e incorporados para la venta.
                      tr
                        td Devolución de cliente
                        td Entrada
                        td Puede aumentar
                        td Producto vendido que regresa al negocio.
                      tr
                        td Venta
                        td Salida
                        td Disminuye
                        td Mercancía entregada al cliente.
                      tr
                        td Consumo de materiales
                        td Salida
                        td Disminuye
                        td Insumos utilizados en producción.
                      tr
                        td Devolución a proveedor
                        td Salida
                        td Disminuye
                        td Mercancía retornada al proveedor.
                      tr
                        td Pérdida o deterioro
                        td Salida o ajuste
                        td Disminuye
                        td Producto dañado o no recuperable.
            //- Fin Tabla
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control de existencias
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") El control de existencias permite conocer la cantidad disponible después de cada movimiento. Para efectuar este seguimiento puede utilizarse la siguiente relación:
            .row.justify-content-center.mb-3(data-aos="fade-right") 
              .col-lg-6  
                p.bg-color-6.p-2.text-center.fw-bold Existencia final = Existencia inicial + Entradas − Salidas
            p(data-aos="fade-left") El siguiente ejemplo permite determinar la existencia disponible después de registrar entradas y salidas:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.bg-color-8.p-4.p-md-5
          //- Bloque del ejemplo aplicado
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-3 Una unidad económica inicia con <b>50 unidades</b> de un producto, compra <b>30 unidades</b> y durante el periodo vende <b>35</b>.
            p.mb-0 La existencia esperada corresponde a:
            p.fw-bold.mt-2.mb-0 50 + 30 − 45 = 35 unidades
          p(data-aos="fade-left") La secuencia de movimientos se presenta así:
          //- Tabla de contenido
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 24.
                span Ejemplo de control de existencias
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 20%") Fecha
                      th(style="width: 35%") Concepto
                      th(style="width: 15%") Entrada
                      th(style="width: 15%") Salida
                      th(style="width: 15%") Existencia
                  tbody
                    tr
                      td 01/08/2026
                      td Existencia inicial
                      td 50
                      td —
                      td 50
                    tr
                      td 04/08/2026
                      td Compra
                      td 30
                      td —
                      td 80
                    tr
                      td 07/08/2026
                      td Venta
                      td —
                      td 20
                      td 60
                    tr
                      td 10/08/2026
                      td Venta
                      td —
                      td 15
                      td 45
                    tr
                      td 12/08/2026
                      td Consumo o salida
                      td —
                      td 10
                      td 35
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comparación entre registro y existencia física
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col
              p.mb-4 El saldo registrado debe compararse periódicamente con las cantidades realmente disponibles. Si existen diferencias, primero se debe determinar su causa antes de modificar el registro.
          .bg-color-2.p-2.mb-4
            p.mb-2 Por ejemplo, si el registro indica 35 unidades y el conteo físico encuentra <b>32</b>, existe una diferencia de tres unidades que debe analizarse. Puede originarse en ventas no registradas, errores de conteo, pérdidas, deterioros, devoluciones, consumos no reportados o errores en el ingreso de información. 
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t4/img15.png', alt='', style="width: 500px;" ).m-auto
      p(data-aos="fade-left") La siguiente comparación permite relacionar las cantidades registradas y físicas con la revisión que corresponde realizar:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5          
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 25.
                  span Control de diferencias de inventario
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Producto
                        th(style="width: 20%") Existencia registrada
                        th(style="width: 20%") Existencia física
                        th(style="width: 15%") Diferencia
                        th(style="width: 25%") Acción inicial
                    tbody
                      tr
                        td Producto A
                        td 35
                        td 32
                        td -3
                        td Revisar ventas, salidas y conteo
                      tr
                        td Producto B
                        td 20
                        td 20
                        td 0
                        td Mantener el registro.
                      tr
                        td Producto C
                        td 18
                        td 20
                        td +2
                        td Revisar entradas y devoluciones.
                      tr
                        td Producto D
                        td 12
                        td 10
                        td -2
                        td Verificar pérdidas, deterioros o movimientos omitidos.
            //- Fin Tabla
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Controles básicos para el manejo de existencias
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") Para mantener información confiable, es necesario aplicar controles que permitan realizar seguimiento a los movimientos y revisar las diferencias encontradas.
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
                              img(src='@/assets/curso/temas/t4/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Registro oportuno
                            p.text-center Registrar las entradas y salidas en el momento en que se producen.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Soportes
                            p.text-center Conservar los documentos relacionados con cada movimiento del inventario.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Identificación
                            p.text-center Mantener identificados los productos para facilitar su registro y seguimiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Conteos físicos
                            p.text-center Realizar verificaciones periódicas de las cantidades realmente disponibles.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Revisión de diferencias
                            p.text-center Analizar las causas de los faltantes o sobrantes antes de efectuar ajustes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Existencias mínimas
                            p.text-center Establecer cantidades mínimas, cuando corresponda, para anticipar necesidades de compra o producción.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t4/img16.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") El registro de entradas y salidas, junto con la verificación física de las existencias, permite mantener información actualizada y detectar oportunamente diferencias que requieren revisión.
            Separador
            //- Inicio Tema4.5
            .row
              #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 4.5 Impuestos asociados con las operaciones comerciales
            .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img17.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 Las operaciones de una unidad económica pueden generar obligaciones tributarias según la actividad desarrollada, los bienes o servicios comercializados, las características del contribuyente y el territorio donde se realizan. Por ello, reconocer los impuestos aplicables requiere identificar las responsabilidades particulares del negocio y no asumir que todos los tributos corresponden a todas las unidades económicas.
      p(data-aos="fade-left") Según el nivel en que se administran, pueden distinguirse los siguientes impuestos:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-2
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta04_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Impuestos nacionales
              p.mb-0 Son administrados principalmente por la DIAN. Entre ellos se encuentran el impuesto sobre la renta, el impuesto sobre las ventas (IVA) y el impuesto nacional al consumo (INC), cuando corresponda.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-2
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta04_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Impuestos municipales y distritales
              p.mb-0 Son administrados por municipios y distritos. Entre ellos se encuentran el impuesto de industria y comercio (ICA) y el impuesto predial, según la actividad, los bienes y la jurisdicción correspondiente.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-2
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta04_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Impuestos departamentales
              p.mb-0 Son administrados por los departamentos e incluyen, entre otros, impuestos sobre vehículos automotores, de registro y al consumo de determinados productos, cuando se cumplen las condiciones establecidas.
      //- Fin Tarjetas
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col
              p.mb-2.bg-color-5.p-4 La responsabilidad tributaria depende de las características de cada unidad económica, la operación realizada, la actividad desarrollada y la jurisdicción correspondiente. Por ello, antes de registrar un impuesto se debe establecer si existe efectivamente la obligación tributaria aplicable.
          .p-2.mb-4
            p.mb-2 Se invita a consultar el siguiente documento complementario para profundizar en la clasificación de los impuestos, su relación con las operaciones comerciales y los criterios para identificar las responsabilidades tributarias de una unidad económica:
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t4/img18.png', alt='', style="width: 500px;" ).m-auto
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12        
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-3.p-4.rounded-4           
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/iconopdf.svg', style="width: 80px")          
            .flex-grow-1.text-center.text-lg-start
              h4.mb-2.text-white Impuestos asociados con las operaciones comerciales
              p.mb-0.text-white El documento desarrolla la clasificación de los impuestos y los criterios para identificar las responsabilidades tributarias aplicables a una unidad económica.
            .mt-3.mt-lg-0.ps-lg-4            
              a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexos/Anexo_01_Impuestos_operaciones_comerciales.pdf')" target="_blank")
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download
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

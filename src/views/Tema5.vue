<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Soportes y comprobantes de las transacciones	
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las operaciones económicas deben relacionarse con documentos que permitan identificar qué ocurrió, cuándo se realizó, quiénes participaron y cuál fue su valor. Facturas, recibos, comprobantes y otros soportes facilitan la verificación de los registros y contribuyen a mantener información organizada y comprobable sobre las actividades desarrolladas por la unidad económica (Decreto 410, 1971).
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Soportes de las operaciones económicas
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col
              p.mb-4 Los soportes son documentos o registros que permiten evidenciar la realización de una operación económica y facilitar su posterior verificación. Una compra, venta, pago, recaudo, devolución u otro movimiento debe relacionarse con información sobre la fecha, los participantes, el concepto y el valor de la transacción (Decreto 410, 1971).
          .bg-color-2.p-3.mb-4
            p.mb-2 En las economías populares y campesinas, conservar estos documentos facilita comprobar las operaciones y relacionar cada movimiento económico con el registro correspondiente. Una factura puede respaldar una compra o venta; un comprobante bancario, una transferencia; un recibo, un pago o recaudo; y un registro de inventario, una entrada, salida o devolución.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t5/img2.png', alt='', style="width: 500px;" ).m-auto
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Función de los soportes
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los soportes permiten comprobar las operaciones antes y después de su registro, identificar diferencias, realizar revisiones y mantener antecedentes de los movimientos económicos. Estas son sus principales funciones:
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
                              img(src='@/assets/curso/temas/t5/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Evidenciar
                            p.text-center Demostrar que una operación económica se realizó.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Identificar
                            p.text-center Reconocer la fecha, el concepto, los participantes y el valor de la operación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Respaldar
                            p.text-center Sustentar la información incorporada en los registros.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Verificar
                            p.text-center Comparar el registro realizado con el documento relacionado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Controlar
                            p.text-center Facilitar el seguimiento de compras, ventas, pagos, cobros y otros movimientos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Corregir
                            p.text-center Apoyar la identificación y aclaración de errores o diferencias.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Conservar información
                            p.text-center Mantener antecedentes de las operaciones realizadas durante determinados periodos.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t5/img3.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de soportes utilizados en las operaciones
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") Los soportes pueden recibirse de terceros o generarse internamente y, según la operación, cumplir requisitos específicos; por ello, debe verificarse su correspondencia con la transacción registrada. 
            .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade")
              .col-lg-1.d-flex.align-items-center.justify-content-center
                figure
                  img(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
              .col-lg-11.mb-0.d-flex.align-items-center
                p.mb-0 La siguiente relación permite identificar algunos soportes de acuerdo con la operación que respaldan:
      //- Tabla de contenido
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-16
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 26.
            span Ejemplos de soportes según la operación
          .tabla-a
            table
              thead
                tr
                  th Operación
                  th Ejemplo de soporte
                  th Información que permite verificar
              tbody
                tr
                  td Compra de bienes o servicios
                  td Factura de venta
                  td Proveedor, fecha, concepto y valor.
                tr
                  td Venta de productos o servicios
                  td Factura o documento equivalente, cuando corresponda.
                  td Cliente, bienes o servicios y valor de la operación.
                tr
                  td Pago mediante transferencia
                  td Comprobante o registro bancario
                  td Fecha, valor, cuenta y beneficiario.
                tr
                  td Recaudo de dinero
                  td Recibo o comprobante correspondiente
                  td Origen, fecha y valor recibido.
                tr
                  td Compra a proveedor no obligado a facturar
                  td Documento soporte en adquisiciones, cuando sea exigible.
                  td Proveedor, adquirente, concepto y valor.
                tr
                  td Entrada o salida de inventario
                  td Registro de movimiento de inventarios
                  td Producto, cantidad, fecha y origen del movimiento.
                tr
                  td Adquisición mediante acuerdo contractual
                  td Contrato y documentos relacionados
                  td Partes, objeto, condiciones y valores pactados.
                tr
                  td Devolución
                  td Nota o documento que respalde la operación.
                  td Producto, cantidad, valor y causa de la devolución.
      p(data-aos="fade-left") La utilización específica de cada documento depende de las condiciones de la transacción y de las obligaciones aplicables.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información necesaria para verificar un soporte
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Antes de utilizar un documento como respaldo de un registro, se debe comprobar que contenga información suficiente para identificar y comprender la operación. Los principales aspectos que requieren revisión son:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img4.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Fecha e identificación")
                p.mb-4 La fecha debe permitir ubicar la operación y, cuando corresponda, deben identificarse las personas o entidades que participaron.
              .row(titulo="Concepto y cantidades")
                p.mb-4 El documento debe permitir reconocer el bien, servicio o movimiento realizado y las cantidades relacionadas con la operación.
              .row(titulo="Valor")
                p.mb-4 El importe registrado debe corresponder con las condiciones de la transacción respaldada.
              .row(titulo="Relación con la operación")
                p.mb-4 El soporte debe contener referencias suficientes para asociarlo con la transacción y el registro correspondiente.
              .row(titulo="Integridad de la información")
                p.mb-4 El documento no debe presentar alteraciones que impidan reconocer la información original.
      //- Fin Accordion 1
      p(data-aos="fade-left") Mantener los soportes organizados y asociados con sus registros facilita su consulta y permite comprobar posteriormente la correspondencia entre la operación económica y la información registrada (Decreto 410, 1971).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Documentos soporte en operaciones específicas
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col
              p.mb-4 Cuando se adquieren bienes o servicios a sujetos no obligados a facturar, puede requerirse un documento soporte para respaldar tributariamente la operación. Por su parte, la factura electrónica soporta las ventas de bienes y servicios y se gestiona mediante medios electrónicos (DIAN, 2026).
          .bg-color-5.p-3.mb-4
            p.mb-2 En consecuencia, los soportes constituyen la evidencia documental de las operaciones y permiten relacionar los hechos económicos con los registros efectuados. Su adecuada identificación, revisión y conservación proporciona la base necesaria para diferenciar posteriormente los comprobantes contables y no contables y comprender su función dentro del sistema de información del negocio.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t5/img5.png', alt='', style="width: 500px;" ).m-auto
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Comprobantes contables y no contables
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los documentos que intervienen en una operación económica cumplen funciones diferentes. Algunos respaldan el reconocimiento y registro de una transacción, mientras otros apoyan procesos comerciales, administrativos o de control. Distinguir su finalidad facilita organizar la documentación y determinar su relación con los registros contables.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comprobantes contables
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 El comprobante de contabilidad documenta una operación antes de incorporarla a los registros. Debe identificar el número, la fecha, el origen, la descripción, el valor y las cuentas afectadas. Además, los documentos que justifican la transacción deben relacionarse con el comprobante para facilitar su verificación posterior (Decreto 410, 1971).
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img7.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") Las unidades económicas pueden utilizar diferentes comprobantes según el tipo de operación y el procedimiento aplicado. Los principales se relacionan con los siguientes movimientos:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img4.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Comprobante de ingreso")
                p.mb-4 Registra las entradas de dinero recibidas por la unidad económica.
              .row(titulo="Comprobante de egreso")
                p.mb-4 Registra los pagos y demás salidas de dinero.
              .row(titulo="Comprobante de contabilidad")
                p.mb-4 Resume y documenta una operación, indicando las cuentas y los valores afectados.
              .row(titulo="Nota de contabilidad")
                p.mb-4 Permite documentar ajustes, reclasificaciones u operaciones internas cuando corresponda.
              .row(titulo="Comprobante bancario")
                p.mb-4 Evidencia movimientos realizados mediante cuentas bancarias y facilita su relación con el registro.
      //- Fin Accordion 1
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Documentos no contables
      //- Título nivel 3 - Imagen
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img8.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Para efectos pedagógicos, los documentos no contables intervienen en procesos comerciales o administrativos, pero por sí solos no representan el registro contable definitivo de una transacción. Pueden informar condiciones, solicitar o autorizar adquisiciones, requerir servicios o evidenciar la entrega de bienes.
      p(data-aos="fade-left") Los siguientes documentos apoyan diferentes momentos de la gestión comercial y administrativa:
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
                              img(src='@/assets/curso/temas/t5/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cotización
                            p.text-center Presenta productos, servicios, precios y condiciones comerciales, pero no demuestra por sí sola que la compra se haya realizado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Pedido
                            p.text-center Solicita determinados bienes o productos a un proveedor.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Orden de compra
                            p.text-center Formaliza internamente la autorización o solicitud de una adquisición.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Remisión
                            p.text-center Evidencia la entrega o el traslado de determinados bienes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Orden de servicio
                            p.text-center Autoriza o solicita la realización de un servicio.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Solicitud de compra
                            p.text-center Comunica internamente una necesidad de adquisición.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t5/img9.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") Estos documentos contribuyen al control de la operación y deben relacionarse con los soportes correspondientes cuando la transacción se realiza efectivamente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-4.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diferencia entre soporte y comprobante
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 El soporte justifica la operación, mientras que el comprobante organiza la información para su registro. Por ejemplo, una factura respalda la adquisición y permite identificar las cuentas y valores correspondientes (Decreto 410, 1971).
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img10.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") La siguiente comparación permite diferenciar la función de algunos documentos y su relación con el registro contable:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 27.
                  span Diferenciación entre documentos de una operación
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Documento
                        th(style="width: 37.5%") Función
                        th(style="width: 37.5%") ¿Genera por sí solo el registro contable?
                    tbody
                      tr
                        td Cotización
                        td Informar condiciones comerciales
                        td No
                      tr
                        td Orden de compra
                        td Solicitar o autorizar una compra
                        td No
                      tr
                        td Remisión
                        td Evidenciar entrega de bienes
                        td No necesariamente
                      tr
                        td Factura
                        td Respaldar una operación de venta
                        td Sirve como soporte para su reconocimiento
                      tr
                        td Documento soporte en adquisiciones
                        td Respaldar determinadas adquisiciones a no obligados a facturar
                        td Sirve como soporte cuando corresponde
                      tr
                        td Comprobante de contabilidad
                        td Organizar la información de la operación y las cuentas afectadas
                        td Se relaciona directamente con el registro
            //- Fin Tabla
            .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
              .col-lg-5.d-flex
                figure.mb-0.w-100
                  img(src='@/assets/curso/temas/t5/img11.png', alt='', style="width: 800px;" ).m-auto
              .col-lg-7.d-flex.flex-column.justify-content-between
                .bg-color-5.p-4
                  p.mb-2 En el entorno electrónico también existen documentos con funciones específicas de soporte. La factura electrónica respalda tributariamente las operaciones de venta de bienes y servicios, mientras que el documento soporte en adquisiciones respalda determinadas compras realizadas a sujetos no obligados a expedir factura de venta o documento equivalente, cuando corresponda.
                .row.align-items-center(data-aos="fade-left")
                  .col-auto
                    figure.mb-0
                      img.mx-auto(src="@/assets/curso/temas/bg/icono.svg", data-aos="zoom-in", style="width: 80px;")
                  .col
                    p.mb-0 Clasificar adecuadamente estos documentos permite distinguir cuáles respaldan una transacción, cuáles apoyan su gestión administrativa y cuáles se relacionan directamente con el registro contable.
            Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Relación entre soporte, transacción y registro
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img12.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Toda transacción económica afecta los recursos, obligaciones, ingresos, costos o gastos del negocio y debe contar con información que permita comprobarla. El soporte documenta el hecho ocurrido y el registro contable representa sus efectos en las cuentas correspondientes, de manera que exista relación entre la operación realizada, su documentación y la información registrada (Decreto 410, 1971).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre los elementos de la operación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Para registrar una transacción, es necesario partir del hecho económico, verificar la documentación y analizar sus efectos antes de determinar las cuentas correspondientes.
      .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 La siguiente secuencia relaciona la operación con su soporte, análisis y registro:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-8
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Transacción
                p Identifica el hecho económico ocurrido. Por ejemplo, una compra de mercancías por <b>$ 700.000.</b>
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_2.png').img125
              .col-12.col-lg.text-start
                h4 Soporte
                p Evidencia y contiene información sobre la operación. En este caso, corresponde a la factura de venta recibida del proveedor.
            .row.align-items-center
              .col-12.col-lg
                h4 Análisis
                p Determina los elementos económicos afectados. En la operación planteada, aumentan los inventarios y disminuye el efectivo.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_4.png').img125
              .col-12.col-lg.text-start
                h4 Comprobante
                p Organiza la información necesaria para efectuar el registro e identifica las cuentas y los valores correspondientes.
            .row.align-items-center
              .col-12.col-lg
                h4 Registro
                p Incorpora los movimientos en las cuentas afectadas: débito a inventarios y crédito a efectivo.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_6.png').img125
              .col-12.col-lg.text-start
                h4 Verificación
                p Comprueba la correspondencia entre la operación, el soporte y el registro mediante la comparación de la factura, el comprobante y los valores registrados.
      //- Linea de tiempo
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis de la operación antes del registro
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col
              p.mb-2 El soporte proporciona información sobre la transacción, pero la cuenta utilizada depende de la naturaleza del hecho económico. Por ejemplo, una factura por <b>$ 500.000</b> puede corresponder a mercancías para la venta, materiales de producción, un equipo o un servicio contratado. Aunque exista el mismo tipo de soporte, el efecto contable será diferente.
          .bg-color-2.p-3.mb-4
            p.mb-2 Antes del registro, conviene establecer <b>qué recibió o entregó el negocio, si el pago se realizó o quedó pendiente, qué recurso aumentó o disminuyó, si se generó una obligación y si la operación corresponde a un ingreso, costo o gasto.</b>
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t5/img13.png', alt='', style="width: 500px;" ).m-auto
      p(data-aos="fade-left") El siguiente caso relaciona una compra con sus soportes y las cuentas afectadas:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.bg-color-8.p-4.p-md-5
          //- Bloque del ejemplo aplicado
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-0 Una unidad económica compra mercancías por <b>$ 900.000</b>. Paga <b>$ 400.000</b> mediante transferencia bancaria y acuerda cancelar los <b>$ 500.000</b> restantes dentro de 30 días. La factura demuestra la adquisición, el comprobante bancario evidencia el pago parcial y el análisis de la operación permite identificar el inventario adquirido y la obligación pendiente.
          p.mb-4 La relación entre los documentos y los efectos de la operación se organiza así:
          //- Tabla de contenido
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 28.
                span Análisis de una compra con pago parcial
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 40%") Elemento
                      th(style="width: 60%") Información
                  tbody
                    tr
                      td Transacción
                      td Compra de mercancías por $ 900.000.
                    tr
                      td Soporte principal
                      td Factura correspondiente a la adquisición.
                    tr
                      td Soporte del pago
                      td Comprobante de transferencia por $ 400.000.
                    tr
                      td Recurso que aumenta
                      td Inventarios por $ 900.000.
                    tr
                      td Recurso que disminuye
                      td Bancos por $ 400.000.
                    tr
                      td Obligación que aumenta
                      td Proveedores por $ 500.000.
                    tr
                      td Movimiento débito
                      td Inventarios: $ 900.000.
                    tr
                      td Movimiento crédito
                      td Bancos: $ 400.000 y proveedores: $ 500.000.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Correspondencia entre soporte y registro
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Los valores, fechas, conceptos y terceros registrados deben corresponder con la documentación disponible. Si existe diferencia entre el soporte y el registro, falta documentación suficiente o el documento pertenece a otra operación, la información debe revisarse antes de continuar con el proceso (Decreto 410, 1971).
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img14.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") Para comprobar esta correspondencia, se deben revisar los siguientes aspectos:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img15.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Fecha")
                p.mb-4 Debe coincidir con el periodo y la operación registrada.
              .row(titulo="Tercero")
                p.mb-4 Debe corresponder al cliente, proveedor o participante de la transacción.
              .row(titulo="Concepto")
                p.mb-4 Debe representar correctamente el bien, servicio o movimiento realizado.
              .row(titulo="Valor")
                p.mb-4 Debe coincidir con el soporte y las condiciones de la operación.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Forma de pago")
                p.mb-4 Permite diferenciar operaciones de contado, a crédito o con pagos parciales.
              .row(titulo="Cuenta utilizada")
                p.mb-4 Debe corresponder a la naturaleza económica de la transacción.
              .row(titulo="Soporte")
                p.mb-4 Debe encontrarse identificado y relacionado con el registro.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img16.png", alt="").img400.m-auto
      //- Fin Accordion 2
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img17.png', alt='', style="object-fit: cover;")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .bg-color-5.p-2
            p.mb-2 En las operaciones electrónicas, cuando se adquieren bienes o servicios a un proveedor no obligado a facturar, puede requerirse el documento soporte correspondiente, según las condiciones tributarias aplicables (DIAN, 2026).
          .row.align-items-center(data-aos="fade-left")
            .col-auto
              figure.mb-0
                img.mx-auto(src="@/assets/curso/temas/bg/3lineas.svg", data-aos="zoom-in", style="width: 80px;")
            .col
              p.mb-0 Relacionar la transacción, el soporte y el registro permite comprobar el origen de la información y reducir errores en la clasificación de las operaciones.
      Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Factura electrónica y documento equivalente
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img18.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La factura electrónica de venta soporta tributariamente las ventas de bienes y la prestación de servicios y forma parte del Sistema de Facturación Electrónica administrado por la DIAN. Junto con los documentos equivalentes electrónicos, permite respaldar determinadas operaciones y facilita su relación con los registros y el control de la unidad económica (DIAN, 2026).
      p(data-aos="fade-left") Los siguientes aspectos permiten reconocer de manera general estos documentos y su utilidad:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta04_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Factura electrónica de venta
              p.mb-0 Se genera, valida, expide, recibe y conserva electrónicamente. Permite identificar la operación, sus participantes, los bienes o servicios, los valores facturados y los impuestos cuando correspondan, además de servir como soporte para el registro y control.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta04_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Documento equivalente electrónico
              p.mb-0 Se utiliza en determinadas operaciones para las cuales la normativa permite expedir un documento equivalente a la factura de venta. Entre estos se encuentran, según corresponda, tiquetes POS, transporte de pasajeros, servicios públicos y otros documentos autorizados (DIAN, 2025).
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta04_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Beneficios para el control
              p.mb-0 Los documentos electrónicos facilitan la organización, consulta, verificación y conservación de la información. También permiten relacionar las operaciones con sus respectivos soportes y conocer el resultado de la validación electrónica realizada por la DIAN.
      //- Fin Tarjetas
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diferencia entre factura electrónica y documento equivalente electrónico
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La factura electrónica de venta soporta de manera general las ventas de bienes y servicios, mientras que el documento equivalente electrónico aplica a determinadas operaciones autorizadas. En los casos permitidos, este último puede sustituirse por factura electrónica (DIAN, 2025). Las principales diferencias y semejanzas se presentan seguidamente:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 29.
                  span Factura electrónica y documento equivalente electrónico
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Aspecto
                        th(style="width: 40%") Factura electrónica
                        th(style="width: 40%") Documento equivalente electrónico
                    tbody
                      tr
                        td Finalidad
                        td Soportar ventas de bienes y prestación de servicios.
                        td Soportar operaciones específicas autorizadas.
                      tr
                        td Generación
                        td Electrónica
                        td Electrónica
                      tr
                        td Validación
                        td Se transmite para validación de la DIAN.
                        td Se transmite para validación de la DIAN.
                      tr
                        td Aplicación
                        td De uso general para obligados a facturar.
                        td Se utiliza en operaciones expresamente contempladas.
                      tr
                        td Soporte de la operación
                        td Sí
                        td Sí, cuando cumple los requisitos correspondientes.
                      tr
                        td Alternativa
                        td Es el documento general de facturación.
                        td Puede sustituirse por factura electrónica de venta en los casos permitidos.
            //- Fin Tabla
            p(data-aos="fade-left") Se invita a consultar el siguiente documento complementario para profundizar en los requisitos, tipos, aplicaciones y beneficios de la factura electrónica y el documento equivalente para el control de las operaciones:
            .row.justify-content-center.mb-4(data-aos="fade-left")
              .col-lg-12        
                .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-3.p-4.rounded-4           
                  .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
                    img(src='@/assets/curso/temas/bg/iconopdf.svg', style="width: 80px")          
                  .flex-grow-1.text-center.text-lg-start
                    h4.mb-2.text-white Factura electrónica y documento equivalente
                    p.mb-0.text-white El documento desarrolla la información asociada con la factura electrónica, los tipos de documentos equivalentes electrónicos y sus beneficios para el registro y control de las operaciones.
                  .mt-3.mt-lg-0.ps-lg-4            
                    a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexos/Anexo_02_Factura_electronica_equivalente.pdf')" target="_blank")
                      span.fw-bold.me-2 Descargar
                      i.fas.fa-file-download
            Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Organización y control de los comprobantes
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img19.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La organización de los comprobantes permite relacionar las operaciones realizadas con sus soportes y registros. Mantener un método uniforme facilita identificar, consultar y recuperar los documentos cuando se requieran, además de comprobar que la información registrada corresponda con las transacciones desarrolladas por la unidad económica.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Organización de los comprobantes
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los comprobantes pueden organizarse mediante diferentes criterios. Lo importante es aplicar un método uniforme que facilite localizar los documentos y relacionarlos con los registros correspondientes. Los siguientes criterios permiten mantener ordenada la documentación:
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
                              img(src='@/assets/curso/temas/t5/tarjeta05_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Fecha
                            p.text-center Organiza los documentos según el orden cronológico de las operaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta05_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Periodo
                            p.text-center Agrupa los comprobantes por mes, trimestre o año.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta05_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Tipo de operación
                            p.text-center Separa los documentos relacionados con compras, ventas, ingresos, egresos y otros movimientos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta05_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Consecutivo
                            p.text-center Mantiene una numeración ordenada que facilita la identificación de los documentos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta05_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Tercero
                            p.text-center Agrupa la información relacionada con clientes, proveedores u otros participantes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta05_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Medio de pago
                            p.text-center Diferencia operaciones realizadas en efectivo, transferencia u otros medios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta05_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Tipo de soporte
                            p.text-center Clasifica facturas, recibos, comprobantes bancarios y demás documentos.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t5/img20.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control de los documentos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El control documental permite verificar que cada operación cuente con el soporte correspondiente y que coincida con el registro, facilitando la detección de documentos faltantes, duplicados o diferencias. Los principales controles se relacionan con los siguientes aspectos:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 30.
                  span Controles básicos sobre comprobantes y soportes
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Aspecto
                        th(style="width: 70%") Verificación
                    tbody
                      tr
                        td Existencia
                        td Comprobar que la operación cuente con un soporte.
                      tr
                        td Identificación
                        td Verificar fecha, número, concepto y tercero cuando corresponda.
                      tr
                        td Valor
                        td Comparar el importe del documento con el registro.
                      tr
                        td Consecutivo
                        td Detectar números faltantes o duplicados.
                      tr
                        td Correspondencia
                        td Relacionar el soporte con la transacción registrada.
                      tr
                        td Legibilidad
                        td Comprobar que la información pueda consultarse.
                      tr
                        td Archivo
                        td Verificar que el documento se encuentre ubicado en el periodo correspondiente.
                      tr
                        td Conservación
                        td Mantener el documento disponible durante el término que corresponda.
            //- Fin Tabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conservación física y electrónica
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los comprobantes pueden conservarse en medios físicos o electrónicos, siempre que sea posible mantener su información y reproducirla cuando se requiera. Estas modalidades presentan las siguientes consideraciones:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .p-0.h-100.bg-color-2
                  figure.mb-0
                    img(src='@/assets/curso/temas/t5/tarjeta06_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Conservación física o electrónica
                    p.mb-0 Los libros y papeles del comerciante deben conservarse durante <b>diez años</b> contados desde la fecha del último asiento, documento o comprobante. Pueden mantenerse en papel o mediante medios técnicos, magnéticos o electrónicos que permitan su reproducción exacta (Ley 962, 2005).
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .p-0.h-100.bg-color-2
                  figure.mb-0
                    img(src='@/assets/curso/temas/t5/tarjeta06_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Información electrónica
                    p.mb-0 Debe permanecer accesible para consultas posteriores y permitir identificar su origen, destino, fecha y demás datos asociados cuando corresponda. Su conservación debe mantener la integridad y accesibilidad de la información.
            //- Fin Tarjetas
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Archivo básico de documentos
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") En una unidad económica de menor escala puede utilizarse una estructura sencilla que permita localizar los documentos sin implementar sistemas complejos. Una forma de organizar el archivo consiste en agrupar los documentos según las operaciones que respaldan:
        //- Inicio Accordion 1
        .bg--img_03
          .row.justify-content-center
            .col-lg-3.mb-5.mb-lg-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t5/img21.png", alt="").img400.m-auto
            .col-lg-9
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                .row(titulo="Compras y ventas")
                  p.mb-4 Las compras pueden reunir facturas recibidas, documentos soporte y comprobantes de pago; las ventas, facturas emitidas y documentos equivalentes cuando correspondan.
                .row(titulo="Ingresos y egresos")
                  p.mb-4 Los ingresos pueden incluir recibos, comprobantes bancarios y soportes de recaudo; los egresos, comprobantes de pago, transferencias y documentos relacionados.
                .row(titulo="Inventarios")
                  p.mb-4 Puede incluir documentación sobre entradas, salidas, devoluciones y conteos físicos.
                .row(titulo="Cuentas por cobrar y cuentas por pagar")
                  p.mb-4 Las primeras pueden incluir facturas, registros de cartera y soportes de recaudo; las segundas, facturas, obligaciones y comprobantes de pago.
                .row(titulo="Ajustes")
                  p.mb-4 Incluye documentos y comprobantes que expliquen las modificaciones realizadas.
        //- Fin Accordion 1
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación periódica del archivo
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between          
          p La documentación debe revisarse periódicamente para comprobar que los soportes estén completos, puedan consultarse y correspondan con los registros. También conviene comparar compras, ventas y movimientos bancarios con sus respectivos documentos.
          .row.align-items-center.bg-color-5.p-1(data-aos="fade-left")
            .col-auto
              figure.mb-0
                img.mx-auto(src="@/assets/curso/temas/bg/icono.svg", data-aos="zoom-in", style="width: 80px;")
            .col
              p.mb-0 Esta revisión permite detectar soportes faltantes, registros duplicados o transacciones pendientes y fortalece la organización, conservación y control de las operaciones.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t5/img22.png', alt='', style="width: 800px;" ).m-auto
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
<style lang="sass"></style>
<style lang="sass"></style>
<style lang="sass"></style>

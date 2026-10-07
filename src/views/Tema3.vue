<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Registro de compras, ventas y movimientos financieros
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El registro de las operaciones permite aplicar los conocimientos sobre cuentas contables a las compras, ventas, ingresos, egresos y operaciones a crédito propias de las economías populares y campesinas. Identificar las cuentas afectadas y su movimiento facilita representar cada transacción y mantener información organizada para el control financiero (Decreto 2420 Anexo 3, 2015).
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Compras de contado y a crédito
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img2.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Las compras permiten adquirir mercancías, materias primas, insumos, equipos u otros recursos necesarios para desarrollar la actividad. Antes de registrarlas, se debe identificar qué se adquirió, su valor, forma de pago y destino, ya que cada adquisición puede producir efectos diferentes en las cuentas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Compras de contado y a crédito
      p.mb-5(data-aos="fade-left") Una compra es de contado cuando el pago se realiza al momento de adquirir el bien o recurso. En este caso, aumenta el elemento adquirido y disminuye simultáneamente el efectivo, el dinero disponible en bancos u otro medio utilizado para efectuar el pago.
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col-auto
              figure.mb-0
                img.mx-auto(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px;")
            .col
              p.mb-0 Este caso permite identificar los efectos que genera una compra con pago inmediato:
          .bg-color-5.p-4.mb-4
            p.mb-2 Una unidad productiva compra mercancías para la venta por <b>$ 800.000</b> y paga mediante transferencia bancaria. Desde el análisis básico de la operación, aumenta el recurso representado por las mercancías y disminuye el dinero disponible en la cuenta bancaria.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img3.png', alt='', style="object-fit: cover;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Compras a crédito
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img4.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Una compra es a crédito cuando el bien o recurso se recibe en el momento de la operación, pero el pago queda pendiente. Además del elemento adquirido, debe reconocerse la obligación con el proveedor, representada mediante una cuenta por pagar (Decreto 2420 Anexo 3, 2015). 
      p(data-aos="fade-left") La siguiente situación permite identificar los efectos de una compra cuyo pago queda pendiente:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-12.bg-color-8.p-4.p-md-5
          //- Bloque del ejemplo aplicado
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-3 Una tienda adquiere mercancías por <b>$ 1.200.000</b> con un plazo de <b>30 días</b>. El negocio recibe los productos y simultáneamente adquiere una obligación por el mismo valor. El hecho de que todavía no se haya realizado una salida de dinero no significa que la operación deba esperar para ser reconocida.
          p.mb-4 Las diferencias entre ambas formas de compra pueden compararse mediante los siguientes aspectos:
          //- Tabla de contenido
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 10.
                span Diferencias entre compras de contado y a crédito
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 20%") Aspecto
                      th(style="width: 40%") Compra de contado
                      th(style="width: 40%") Compra a crédito
                  tbody
                    tr
                      td Recepción del bien
                      td Inmediata
                      td Inmediata
                    tr
                      td Pago
                      td Se realiza al momento de la compra.
                      td Se realiza posteriormente.
                    tr
                      td Recurso adquirido
                      td Aumenta según el tipo de bien comprado.
                      td Aumenta según el tipo de bien comprado.
                    tr
                      td Efectivo o bancos
                      td Disminuye inmediatamente.
                      td No disminuye en el momento de la compra.
                    tr
                      td Cuenta por pagar
                      td No se genera.
                      td Se genera una obligación con el proveedor.
                    tr
                      td Operación posterior
                      td Generalmente no queda saldo pendiente.
                      td Debe realizarse y registrarse posteriormente el pago.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis contable de una compra
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img5.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Para registrar correctamente una compra, primero se identifica qué recibió el negocio y qué cuenta representa ese recurso. Posteriormente, se determina la forma de pago y la cuenta que disminuye o la obligación que se genera.
      p(data-aos="fade-left") La siguiente comparación permite reconocer cómo cambia el registro según la forma de pago de la compra:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.bg-color-8.p-4.p-md-5
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-0 <b>Compra de contado:</b> si se compran mercancías de contado por <b>$ 600.000</b>, el análisis básico es el siguiente:
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 11.
                span Registro básico de una compra de contado
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
                      td $ 600.000
                    tr
                      td Efectivo o bancos
                      td Activo
                      td Disminuye
                      td Crédito
                      td $ 600.000
          .bg-color-5.p-4.mb-4
            p.mb-0 <b>Compra a crédito:</b> si las mismas mercancías por <b>$ 600.000</b> se compran a crédito, el inventario continúa aumentando por el débito, pero se reconoce una cuenta por pagar al proveedor por el crédito:
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 12.
                span Registro básico de una compra a crédito
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
                      td $ 600.000
                    tr
                      td Proveedores
                      td Pasivo
                      td Aumenta
                      td Crédito
                      td $ 600.000
      p(data-aos="fade-left") Las cuentas por pagar se reconocen cuando cumplen las condiciones establecidas para el reconocimiento de pasivos (Decreto 2420 Anexo 3, 2015).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Compras con pago parcial
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") También pueden presentarse compras en las que una parte se paga inmediatamente y el saldo queda pendiente. En estos casos deben reconocerse conjuntamente el recurso adquirido, la disminución del efectivo y la obligación generada.
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0
            img(src='@/assets/curso/temas/t3/img6.png', alt='',style="width: 500px;").m-auto
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col-auto
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/bg/icono.svg", data-aos="zoom-in", style="width: 80px;")
            .col
              p.mb-0 El siguiente caso permite identificar los tres efectos producidos por una compra con pago parcial:
          .bg-color-2.p-2.mb-4
            p.fw-bold Ejemplo aplicado            
            p.mb-3 Si se compran insumos por <b>$ 1.000.000</b>, se pagan <b>$ 400.000</b> al momento de la adquisición y los <b>$ 600.000</b> restantes quedan a crédito, deben reconocerse los tres efectos: aumenta el recurso adquirido, disminuye el efectivo por la parte pagada y se genera una obligación por el saldo pendiente.
            p.mb-2 En este caso:
            ul.lista-ul.mb-0
              li.d-flex.align-items-start.mb-1
                i.fas.fa-circle.pt-1.me-2(style="font-size: 6px;")
                span recurso adquirido: $ 1.000.000.
              li.d-flex.align-items-start.mb-1
                i.fas.fa-circle.pt-1.me-2(style="font-size: 6px;")
                span pago inmediato: $ 400.000.
              li.d-flex.align-items-start.mb-0
                i.fas.fa-circle.pt-1.me-2(style="font-size: 6px;")
                span cuenta por pagar: $ 600.000.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Soporte de la compra
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-7.mb-4.mb-lg-0
          p.mb-4 Toda compra debe relacionarse con un documento que permita comprobar la operación. Cuando el vendedor está obligado a facturar, la factura electrónica constituye el soporte tributario de la venta de bienes o servicios. La DIAN también contempla mecanismos para documentar adquisiciones realizadas a sujetos no obligados a expedir factura, cuando corresponda.          
          .bg-color-5.p-4
            p.mb-4 Antes de efectuar el registro, estas son las principales informaciones que deben verificarse:
            .row
              .col-md-6
                ul.lista-ul.mb-0
                  li.d-flex.align-items-center.mb-3
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Fecha.
                  li.d-flex.align-items-center.mb-3
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Proveedor.
                  li.d-flex.align-items-center.mb-3.mb-md-0
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Descripción del bien o servicio.
              .col-md-6
                ul.lista-ul.mb-0
                  li.d-flex.align-items-center.mb-3
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Valor.
                  li.d-flex.align-items-center.mb-3
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Forma de pago.
                  li.d-flex.align-items-center.mb-0
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Soporte relacionado.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/t3/img7.png', alt='')
      p(data-aos="fade-left") Verificar estos elementos permite diferenciar las compras de contado, a crédito o con pago parcial y disponer de la información necesaria para su registro.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Ventas de contado y a crédito
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img8.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las ventas corresponden a operaciones mediante las cuales una unidad económica entrega bienes, mercancías o productos, o presta servicios a cambio de una contraprestación. Su registro permite reconocer el ingreso generado y, según la forma de pago, identificar el efectivo recibido o los valores pendientes de cobro (Decreto 2420 Anexo 3, 2015).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ventas de contado
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")            
            .col
              p.mb-4 Una venta es de contado cuando el comprador paga el valor de la operación en el momento en que esta se realiza. En este caso, la unidad económica reconoce el ingreso generado y simultáneamente aumenta el efectivo o los recursos disponibles en bancos, según el medio utilizado para recibir el pago.
          .bg-color-5.p-4.mb-4
            p.mb-2 Por ejemplo, si una unidad campesina vende productos por $ 900.000 y recibe inmediatamente el dinero mediante transferencia, aumenta el recurso disponible en bancos y se reconoce el ingreso correspondiente a la venta.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t3/img9.png', alt='', style="width: 500px;" ).m-auto
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ventas a crédito
      //- Título nivel 3 - Imagen
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Una venta es a crédito cuando el producto se entrega o el servicio se presta y el cliente acuerda pagar posteriormente. En este caso, se reconoce el ingreso y surge una cuenta por cobrar que representa el derecho a recibir el valor pendiente (Decreto 2420 Anexo 3, 2015). Por ejemplo, una tienda vende mercancías por $ 700.000 y concede al cliente un plazo de 30 días para pagar. Aunque todavía no haya recibido el dinero, la unidad económica debe identificar tanto el ingreso generado como la cuenta pendiente de cobro.
      p(data-aos="fade-left") Las siguientes diferencias permiten identificar el efecto de cada modalidad de venta:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 13.
            span Diferencias entre ventas de contado y a crédito
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Aspecto
                  th(style="width: 40%") Venta de contado
                  th(style="width: 40%") Venta a crédito
              tbody
                tr
                  td Entrega del bien o servicio
                  td Se realiza según lo acordado
                  td Se realiza según lo acordado
                tr
                  td Pago
                  td Se recibe al momento de la operación
                  td Se recibe posteriormente
                tr
                  td Ingreso
                  td Se reconoce cuando corresponde
                  td Se reconoce cuando corresponde
                tr
                  td Efectivo o bancos
                  td Aumenta inmediatamente
                  td No aumenta al momento de la venta
                tr
                  td Cuenta por cobrar
                  td Generalmente no se genera
                  td Se genera un derecho de cobro
                tr
                  td Seguimiento posterior
                  td Se verifica el pago recibido
                  td Se controla el saldo y fecha de cobro
      //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro básico de una venta de contado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Cuando una venta se realiza de contado, se identifican las cuentas afectadas y el efecto producido sobre cada una. El siguiente caso permite reconocer los movimientos generados cuando el valor de la venta se recibe inmediatamente:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.bg-color-8.p-4.p-md-5
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-0 Si se realiza una venta de contado por <b>$ 800.000</b>, aumenta el efectivo o bancos, que corresponde a un activo, y también aumenta el ingreso generado por la actividad. La operación se registra de la siguiente manera:          
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 14.
                span Registro básico de una venta de contado
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
                      td Efectivo o bancos
                      td Activo
                      td Aumenta
                      td Débito
                      td $ 800.000
                    tr
                      td Ingresos por ventas
                      td Ingreso
                      td Aumenta
                      td Crédito
                      td $ 800.000
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro básico de una venta a crédito
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Cuando la venta se realiza a crédito, el ingreso se reconoce, pero en lugar de aumentar inmediatamente el efectivo se genera una cuenta por cobrar.
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 El siguiente caso permite reconocer el ingreso y el derecho de cobro generados por una venta con pago posterior:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.bg-color-8.p-4.p-md-5
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-0 Si una unidad económica vende productos por <b>$ 800.000</b> con pago posterior, el registro básico sería el siguiente:
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 15.
                span Registro básico de una venta a crédito
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
                      td Cuentas por cobrar
                      td Activo
                      td Aumenta
                      td Débito
                      td $ 800.000
                    tr
                      td Ingresos por ventas
                      td Ingreso
                      td Aumenta
                      td Crédito
                      td $ 800.000
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recaudo posterior de una venta a crédito
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Cuando posteriormente el cliente paga la cuenta pendiente, no se genera un nuevo ingreso, porque este ya fue reconocido al realizar la venta. Lo que ocurre es un cambio en la composición de los activos: aumenta el efectivo o bancos y disminuye la cuenta por cobrar.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img11.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") Por ejemplo, si el cliente paga los $ 800.000 pendientes del ejemplo anterior:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 16.
                  span Registro de recaudo posterior de una venta a crédito
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
                        td Efectivo o bancos
                        td Activo
                        td Aumenta
                        td Débito
                        td $ 800.000
                      tr
                        td Cuentas por cobrar
                        td Activo
                        td Disminuye
                        td Crédito
                        td $ 800.000
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ventas y costo de los productos vendidos
            //- Título nivel 3 - Imagen
            .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img12.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 Cuando la actividad implica comercializar productos o mercancías, además del ingreso puede ser necesario reconocer el costo correspondiente a los bienes vendidos. El marco técnico para microempresas establece que el importe en libros de los inventarios vendidos se reconoce como costo en el periodo en que se reconocen los ingresos relacionados (Decreto 2420 Anexo 3, 2015). 
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t3/img13.png', alt='', style="width: 500px;" ).m-auto
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")            
            .col
              p.mb-4 La siguiente situación permite identificar por separado el ingreso de la operación y el costo del producto vendido:
          .bg-color-2.p-2.mb-4
            p.fw-bold Ejemplo aplicado
            p.mb-2 Si una mercancía que tuvo un costo de <b>$ 500.000</b> se vende por <b>$ 800.000</b>, los <b>$ 800.000</b> representan el ingreso de la operación y los <b>$ 500.000</b> corresponden al costo asociado con los bienes vendidos. Esta diferenciación será importante para determinar posteriormente el resultado generado por la actividad.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Soporte de las ventas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las ventas deben relacionarse con los documentos que correspondan según las características y obligaciones de la unidad económica. Cuando existe obligación de facturar, la factura de venta o el documento equivalente constituye el soporte de la operación; la DIAN administra el sistema de facturación electrónica para documentar estas transacciones.
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-7.mb-4.mb-lg-0
          .bg-color-5.p-2
            p.mb-4 Antes de registrar la operación, conviene comprobar los siguientes datos:
            .row
              .col-md-6
                ul.lista-ul.mb-0
                  li.d-flex.align-items-center.mb-3
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Cliente.
                  li.d-flex.align-items-center.mb-3
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Fecha.
                  li.d-flex.align-items-center.mb-3
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Producto o servicio.
                  li.d-flex.align-items-center.mb-3.mb-md-0
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Cantidad.
              .col-md-6
                ul.lista-ul.mb-0
                  li.d-flex.align-items-center.mb-3
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Valor.
                  li.d-flex.align-items-center.mb-3
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Forma de pago.
                  li.d-flex.align-items-center.mb-0
                    i.fas.fa-dollar-sign.color-acento-contenido.me-2
                    span.mb-0 Soporte correspondiente.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/t3/img14.png', alt='').m-auto
      p(data-aos="fade-left") Diferenciar las ventas de contado y a crédito permite reconocer correctamente los ingresos, los recursos recibidos y los derechos de cobro generados por cada operación.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Ingresos, egresos, cuentas por cobrar y cuentas por pagar
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img15.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El control financiero requiere diferenciar el dinero que efectivamente entra o sale del negocio de los valores pendientes de cobro o pago. También es necesario distinguir estos movimientos de los conceptos contables de ingreso y gasto, ya que una operación a crédito puede reconocerse antes de que se produzca el movimiento de efectivo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ingresos y egresos de efectivo
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Para el control financiero, las entradas corresponden al dinero recibido y las salidas a los recursos pagados. Sin embargo, no toda entrada es un ingreso ni toda salida un gasto, pues algunos movimientos corresponden al cobro o pago de operaciones registradas previamente.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img16.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") La siguiente comparación relaciona cada situación con su movimiento de efectivo y su principal efecto contable:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 17.
            span Diferencias entre movimientos de efectivo y conceptos contables
          .tabla-a
            table
              thead
                tr
                  th(style="width: 25%") Situación
                  th(style="width: 25%") Movimiento de efectivo
                  th(style="width: 50%") Efecto contable principal
              tbody
                tr
                  td Venta de contado
                  td Entrada
                  td Se reconoce un ingreso y aumenta el efectivo.
                tr
                  td Venta a crédito
                  td No hay entrada inmediata
                  td Se reconoce un ingreso y una cuenta por cobrar.
                tr
                  td Cobro de una venta a crédito
                  td Entrada
                  td Aumenta el efectivo y disminuye la cuenta por cobrar.
                tr
                  td Compra de contado
                  td Salida
                  td Disminuye el efectivo y se reconoce el recurso adquirido.
                tr
                  td Compra a crédito
                  td No hay salida inmediata
                  td Se reconoce el recurso y una cuenta por pagar.
                tr
                  td Pago posterior al proveedor
                  td Salida
                  td Disminuye el efectivo y la cuenta por pagar.
                tr
                  td Préstamo recibido
                  td Entrada
                  td Aumenta el efectivo y se genera una obligación
                tr
                  td Pago de una obligación
                  td Salida
                  td Disminuye el efectivo y la obligación correspondiente
      //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cuentas por cobrar
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.g-0.mb-4(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/3lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 Las cuentas por cobrar representan derechos que tiene la unidad económica para recibir dinero u otros activos financieros de terceros. Generalmente se originan cuando se realizan ventas o se prestan servicios a crédito y el cliente se compromete a pagar posteriormente. 
      p(data-aos="fade-left") Para mantener su control, es necesario tener en cuenta lo siguiente:
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-2
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta01_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Identificación de la cuenta
              p.mb-0.text-center Se registra el cliente, la fecha, el concepto, el valor inicial y la fecha prevista de pago.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-2
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta01_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Seguimiento del saldo
              p.mb-0.text-center Los abonos realizados deben actualizarse para conocer cuánto se ha recibido y cuál es el saldo que permanece pendiente.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-2
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta01_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Recaudo de cartera
              p.mb-0.text-center Al recibir un pago, se registran la fecha, el valor recibido, el medio de pago y el saldo restante de la cuenta.
      //- Fin Tarjetas
      p(data-aos="fade-left") El seguimiento de esta información facilita el control de la cartera y permite anticipar situaciones que puedan afectar la disponibilidad de efectivo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cuentas por pagar
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img17.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las cuentas por pagar corresponden a obligaciones adquiridas con proveedores u otros terceros que deben cancelarse posteriormente. Pueden originarse en compras de mercancías, materias primas, insumos, servicios u otros recursos recibidos a crédito. 
      p(data-aos="fade-left") Para mantener su control, es necesario tener en cuenta lo siguiente:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta02_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Identificación de la cuenta
              p.mb-0 Se registra el proveedor o tercero, la fecha, el concepto, el valor inicial y la fecha de vencimiento.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta02_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Seguimiento de los pagos
              p.mb-0 Los pagos realizados deben actualizarse para establecer cuánto se ha cancelado y cuál es el saldo pendiente.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta02_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Pago a proveedores
              p.mb-0 Cada pago debe relacionar la fecha, el tercero, el valor pagado, el medio de pago y el saldo restante de la obligación.
      //- Fin Tarjetas
      p.mb-5(data-aos="fade-left") Mantener esta información organizada facilita la programación de los pagos y disminuye el riesgo de incumplir los compromisos adquiridos.
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0
            img(src='@/assets/curso/temas/t3/img18.png', alt='',style="width: 5000px;").m-auto
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")
            .col-auto
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/bg/icono.svg", data-aos="zoom-in", style="width: 70px;")
            .col
              p.mb-0 El siguiente caso permite relacionar los movimientos de efectivo con el seguimiento de cuentas 
          .bg-color-2.p-2.mb-4
            p.fw-bold Ejemplo aplicado            
            p.mb-3 Una unidad productiva vende mercancías a crédito por <b>$ 900.000</b>. En el momento de la venta reconoce una cuenta por cobrar por ese valor. Diez días después, el cliente paga <b>$ 500.000</b>; por tanto, ingresa efectivo al negocio y la cuenta pendiente disminuye a <b>$ 400.000</b>. Cuando se reciba el saldo restante, se cancela la cuenta por cobrar, pero no se registra un nuevo ingreso por ventas, porque este ya fue reconocido cuando se realizó la operación.
            p De manera similar, si la unidad compra insumos a crédito por <b>$ 1.200.000</b>, se genera una cuenta por pagar. Si posteriormente abona <b>$ 700.000</b>, se produce una salida de efectivo y la obligación disminuye hasta quedar en <b>$ 500.000</b>. Este seguimiento permite conocer simultáneamente los recursos disponibles y los compromisos pendientes. 
      p(data-aos="fade-left") Diferenciar los ingresos y egresos de efectivo de las cuentas por cobrar y por pagar permite registrar con mayor precisión los movimientos financieros y controlar los recursos y las obligaciones del negocio.
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Registro manual de transacciones
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img19.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El registro manual consiste en consignar ordenadamente las operaciones económicas, identificando fecha, concepto, cuentas, valores y soporte. Esto permite mantener una secuencia cronológica y revisar posteriormente la información. Antes de registrar, se debe analizar qué ocurrió, cuáles cuentas intervienen y cómo se modifican, de manera que el registro represente el efecto económico de la operación (Decreto 410, 1971).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información básica para realizar un registro
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Un registro manual debe contener información suficiente para identificar, comprender y comprobar la operación realizada.
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 Los siguientes elementos permiten organizar la información necesaria para efectuar el registro:
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
                              img(src='@/assets/curso/temas/t3/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Fecha
                            p.text-center Indica el momento en que se realiza o reconoce la operación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Soporte
                            p.text-center Corresponde al documento que permite comprobar la transacción.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Concepto
                            p.text-center Describe brevemente la operación realizada por la unidad económica.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cuenta débito
                            p.text-center Identifica la cuenta en la que corresponde registrar el movimiento débito.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cuenta crédito
                            p.text-center Identifica la cuenta en la que corresponde registrar el movimiento crédito.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Valor
                            p.text-center Indica el importe correspondiente a cada movimiento registrado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Observación
                            p.text-center Incluye información adicional necesaria para comprender la operación.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t3/img20.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") La identificación de estos elementos permite organizar cada transacción y relacionarla con el documento que la respalda.
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimiento para registrar una transacción
            //- Título nivel 3 - 
      p(data-aos="fade-left") El registro manual requiere seguir una secuencia que permita analizar primero la operación y posteriormente representar sus efectos mediante las cuentas correspondientes.
      .row.justify-content-center.mb-4(data-aos="fade")
        .col-lg-10
          .row.bg-color-2.align-items-center.p-3
            .col-lg-2.col-md-2.d-flex.align-items-center.justify-content-center.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/temas/bg/icono.svg", data-aos="zoom-in", style="width: 70px").mx-auto
            .col-lg-10.col-md-10.d-flex.align-items-center
              p.mb-0 La siguiente secuencia organiza el procedimiento desde la identificación de la operación hasta la comprobación del equilibrio del registro:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-8
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Identificar la operación realizada
                p Se establece qué hecho económico ocurrió en la unidad económica.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_2.png').img125
              .col-12.col-lg.text-start
                h4 Revisar el documento que la respalda
                p Se identifica el soporte relacionado con la transacción.
            .row.align-items-center
              .col-12.col-lg
                h4 Determinar las cuentas afectadas
                p Se establecen las cuentas que representan los elementos involucrados.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_4.png').img125
              .col-12.col-lg.text-start
                h4 Establecer los aumentos o disminuciones
                p Se determina cómo cambia cada una de las cuentas afectadas.
            .row.align-items-center
              .col-12.col-lg
                h4 Aplicar la naturaleza débito o crédito
                p Se define el movimiento correspondiente según la naturaleza de cada cuenta.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_6.png').img125
              .col-12.col-lg.text-start
                h4 Registrar los valores
                p Se consigna el importe que corresponde a cada movimiento.
            .row.align-items-center
              .col-12.col-lg
                h4 Verificar el equilibrio
                p Se comprueba que el total de los débitos coincida con el total de los créditos.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_7.png').img125
      //- Linea de tiempo
      p(data-aos="fade-left") Este procedimiento contribuye a representar cada operación de manera completa y facilita posteriormente su clasificación y consolidación.
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-1.d-flex.align-items-center.justify-content-center
          figure
            img(src="@/assets/curso/temas/bg/2lineas.svg", data-aos="zoom-in", style="width: 80px").mx-auto
        .col-lg-11.mb-0.d-flex.align-items-center
          p.mb-0 El siguiente caso permite aplicar la secuencia de registro a una compra pagada mediante transferencia bancaria:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.bg-color-8.p-4.p-md-5
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-0 Una unidad productiva compra materias primas por <b>$ 750.000</b> y paga el valor mediante transferencia bancaria. La operación genera un aumento en el recurso adquirido y una disminución del dinero disponible en bancos. La operación se registra de la siguiente manera:          
          .row.justify-content-center.mb-4(data-aos="fade-right")
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 18.
                span Registro manual de una compra de contado
              .tabla-a
                table
                  thead
                    tr
                      th Fecha
                      th Cuenta
                      th Débito
                      th Crédito
                  tbody
                    tr
                      td 12/08/2026
                      td Inventarios o materias primas
                      td $ 750.000
                      td —
                    tr
                      td 12/08/2026
                      td Bancos
                      td —
                      td $ 750.000
                    tr.fw-bold
                      td(colspan="2") Totales
                      td $ 750.000
                      td $ 750.000
          p.mb-0 <b>Concepto:</b> compra de materias primas pagada mediante transferencia bancaria.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro de varias operaciones
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img21.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Cuando se realizan numerosas transacciones, conviene conservarlas en orden cronológico para facilitar su seguimiento. Un registro diario puede incluir ventas, compras, pagos, recaudos y demás movimientos, manteniendo la relación de cada operación con su soporte. Esta organización permite posteriormente acumular los movimientos de las cuentas y conocer sus saldos.
      p(data-aos="fade-left") El siguiente ejemplo integra diferentes operaciones realizadas durante un mismo periodo:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-12.bg-color-8.p-4.p-md-5
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-0 El registro cronológico permite visualizar de manera organizada los movimientos realizados por la unidad económica durante un periodo.          
          .row.justify-content-center.mb-4(data-aos="fade-right")
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 19.
                span Ejemplo de registro cronológico de operaciones
              .tabla-a
                table
                  thead
                    tr
                      th Fecha
                      th Operación
                      th Débito
                      th Valor débito
                      th Crédito
                      th Valor crédito
                  tbody
                    tr
                      td 05/08/2026
                      td Venta de contado
                      td Efectivo
                      td $ 500.000
                      td Ingresos por ventas
                      td $ 500.000
                    tr
                      td 06/08/2026
                      td Compra de mercancías a crédito
                      td Inventarios
                      td $ 700.000
                      td Proveedores
                      td $ 700.000
                    tr
                      td 08/08/2026
                      td Pago parcial a proveedor
                      td Proveedores
                      td $ 300.000
                      td Bancos
                      td $ 300.000
                    tr
                      td 10/08/2026
                      td Recaudo de una cuenta por cobrar
                      td Efectivo
                      td $ 250.000
                      td Cuentas por cobrar
                      td $ 250.000
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación del registro
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .row.align-items-center(data-aos="fade-left")            
            .col
              p.mb-4 Después de registrar una operación, se debe comprobar que los valores coincidan con los soportes, que el total de los débitos sea igual al total de los créditos y que las cuentas seleccionadas representen correctamente la transacción. Un registro puede estar equilibrado matemáticamente y ser incorrecto si las cuentas utilizadas no corresponden al hecho económico.
          .bg-color-2.p-4.mb-4
            p.mb-2 El registro manual permite comprender la lógica contable y analizar cada transacción antes de incorporarla a un sistema. Estos mismos criterios sirven posteriormente para registrar y controlar operaciones mediante hojas de cálculo u otras herramientas tecnológicas.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t3/img22.png', alt='', style="width: 500px;" ).m-auto
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Registro mediante herramientas tecnológicas
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img23.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las herramientas tecnológicas permiten registrar, organizar y consultar transacciones mediante hojas de cálculo, aplicaciones o sistemas contables. También facilitan cálculos, consulta de saldos y generación de reportes, siempre que la información registrada sea completa y esté correctamente clasificada (Decreto 2420 Anexo 3, 2015).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información para el registro tecnológico
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Independientemente de la herramienta utilizada, conviene establecer campos uniformes que permitan identificar cada operación y consultar posteriormente la información por fechas, conceptos, cuentas o terceros. Los datos necesarios pueden organizarse en los siguientes grupos:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta05_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Identificación de la operación
              p.mb-0 Incluye la fecha, el número o consecutivo, el tipo de operación, el tercero y el concepto que describe la transacción.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta05_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Información contable
              p.mb-0 Comprende la cuenta afectada, el valor registrado como débito y el valor correspondiente al crédito de la operación.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .p-0.h-100.bg-color-5
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta05_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Pago, soporte e información adicional
              p.mb-0 Registra el medio de pago, el soporte asociado —factura, recibo o comprobante— y las observaciones necesarias para comprender la operación.
      //- Fin Tarjetas
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro mediante hoja de cálculo
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Una hoja de cálculo puede utilizarse para organizar las transacciones cuando el volumen de información es reducido. Permite registrar movimientos en filas y columnas, aplicar fórmulas para sumar débitos y créditos, ordenar la información por fecha y utilizar filtros para consultar determinadas operaciones.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img24.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") El siguiente ejemplo organiza compras, ventas, pagos y recaudos realizados durante un mismo periodo:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-12.bg-color-8.p-4.p-md-5
          .bg-color-5.p-4.mb-4
            p.fw-bold.mb-3 Ejemplo aplicado
            p.mb-0 El ejemplo presenta cómo diferentes operaciones pueden organizarse en un mismo formato y conservar el equilibrio entre débitos y créditos.          
          .row.justify-content-center.mb-4(data-aos="fade-right")
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 20.
                span Ejemplo de registro de transacciones en hoja de cálculo
              .tabla-a
                table
                  thead
                    tr
                      th Fecha
                      th Operación
                      th Cuenta débito
                      th Débito
                      th Cuenta crédito
                      th Crédito
                  tbody
                    tr
                      td 03/08/2026
                      td Venta de contado
                      td Efectivo
                      td $ 650.000
                      td Ingresos por ventas
                      td $ 650.000
                    tr
                      td 05/08/2026
                      td Compra a crédito
                      td Inventarios
                      td $ 900.000
                      td Proveedores
                      td $ 900.000
                    tr
                      td 08/08/2026
                      td Pago a proveedor
                      td Proveedores
                      td $ 400.000
                      td Bancos
                      td $ 400.000
                    tr
                      td 11/08/2026
                      td Recaudo de cartera
                      td Bancos
                      td $ 350.000
                      td Cuentas por cobrar
                      td $ 350.000
                    tr.fw-bold
                      td(colspan="3") Totales
                      td $ 2.300.000
                      td
                      td $ 2.300.000
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Uso de sistemas contables
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Cuando aumenta el número de operaciones, pueden utilizarse sistemas contables que integren diferentes procesos del negocio. Su funcionamiento automatiza parte del procesamiento de la información, pero no sustituye el análisis requerido para clasificar correctamente las transacciones. Entre las principales funciones se encuentran:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Registro de transacciones")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta06_1.png')
              .col-md-6
                h4 Registro de transacciones
                p Permite incorporar las operaciones económicas y relacionarlas con las cuentas correspondientes.
          .py-3.py-md-4(titulo="Administración de terceros")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta06_2.png')
              .col-md-6
                h4 Administración de terceros
                p Facilita organizar la información relacionada con clientes, proveedores y otros participantes de las operaciones.
          .py-3.py-md-4(titulo="Consulta y control")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta06_3.png')
              .col-md-6
                h4 Consulta y control
                p Permite consultar cuentas y realizar seguimiento a los saldos registrados.
          .py-3.py-md-4(titulo="Generación de información")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta06_4.png')
              .col-md-6
                h4 Generación de información
                p Facilita organizar y obtener información estructurada a partir de las operaciones registradas.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Aunque el procesamiento sea automatizado, la persona responsable debe verificar la correcta clasificación y respaldo de las operaciones, garantizando registros claros, completos y fidedignos del negocio (Decreto 410 de 1971).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Controles básicos del registro tecnológico
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El registro tecnológico requiere controles que permitan disminuir errores y proteger la información. La Ley 527 de 1999 reconoce efectos jurídicos a la información contenida en mensajes de datos y contempla criterios relacionados con su conservación e integridad. Para fortalecer la confiabilidad de los registros, se deben considerar los siguientes controles:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img25.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Verificación de datos")
                p.mb-4 Comprobar la información antes de guardarla para disminuir errores en los registros.
              .row(titulo="Control de duplicados")
                p.mb-4 Evitar que una misma operación sea incorporada más de una vez.
              .row(titulo="Uso de consecutivos")
                p.mb-4 Asignar identificadores que faciliten el orden y seguimiento de las transacciones.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Revisión periódica")
                p.mb-4 Comprobar regularmente los registros y compararlos con los documentos que los respaldan.
              .row(titulo="Control de modificaciones")
                p.mb-4 Restringir cambios no autorizados que puedan afectar la integridad de la información.
              .row(titulo="Copias de respaldo")
                p.mb-4 Conservar copias que permitan recuperar la información cuando se requiera.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img26.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") Los registros deben compararse periódicamente con los soportes y saldos para detectar diferencias y asegurar que las herramientas tecnológicas generen información organizada y confiable mediante controles y criterios contables adecuados.


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
<style lang="sass"></style>

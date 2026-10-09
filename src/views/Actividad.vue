<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad        
        <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Registro y control de operaciones financieras',
      titulo: 'Cuestionario: registro y control de operaciones financieras',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión y aplicación de los fundamentos contables y de los procedimientos básicos para clasificar cuentas, registrar transacciones y controlar inventarios, impuestos, soportes y comprobantes en la actividad económica.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una familia cultiva fruta y posteriormente la transforma en mermeladas. ¿A qué sector corresponde específicamente la actividad de transformación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sector primario, porque aprovecha directamente recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sector secundario, porque transforma materias primas en productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sector terciario, porque comercializa los bienes y presta servicios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sectores primario y terciario, porque produce y comercializa bienes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica distingue principalmente la información financiera de la información contable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identifica, clasifica y registra las operaciones del negocio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Relaciona las operaciones con los documentos que las respaldan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organiza y presenta los registros para facilitar su análisis.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Mantiene información ordenada sobre las transacciones realizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una unidad económica tiene una cuenta por cobrar de un cliente con dificultades conocidas para pagar. ¿Qué principio orienta analizar su posibilidad real de recuperación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prudencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Integridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comparabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Negocio en marcha.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una unidad productiva compra mercancías a crédito y no realiza un pago inmediato. ¿Qué tratamiento corresponde en un registro simplificado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reconocer solo el pago cuando se realice posteriormente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar la compra únicamente al cancelar al proveedor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar únicamente el movimiento futuro del efectivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reconocer el bien recibido y la obligación pendiente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué conjunto corresponde a las cuentas reales relacionadas con la situación financiera de la unidad económica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activos, pasivos y patrimonio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ingresos, costos y gastos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compras, ventas y recaudos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Débitos, créditos y saldos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Una unidad económica posee activos por $12.000.000 y pasivos por $4.500.000. ¿Cuál es el valor de su patrimonio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$4.500.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$12.000.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$7.500.000',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '$16.500.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cómo se registran, respectivamente, el aumento de una cuenta de activo y el aumento de una cuenta de pasivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crédito y débito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Débito y crédito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crédito y crédito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Débito y débito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una función básica de las cuentas contables dentro del registro de las operaciones?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar únicamente los pagos realizados por el negocio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir los soportes asociados con cada transacción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar solamente las operaciones que generan efectivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar y agrupar operaciones de naturaleza similar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Una tienda adquiere mercancías a crédito y acuerda pagarlas posteriormente. ¿Qué efectos básicos produce esta operación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuyen inventarios y aumentan las cuentas por pagar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentan bancos y disminuyen las cuentas por pagar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentan inventarios y aumentan las cuentas por pagar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminuyen bancos y disminuyen las cuentas por pagar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Una unidad económica entrega mercancías a un cliente y acuerda recibir el pago dentro de 30 días. ¿Qué debe reconocer?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reconocer el ingreso y aumentar la cuenta por cobrar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reconocer el ingreso y disminuir la cuenta por cobrar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar el efectivo y disminuir el ingreso registrado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir el inventario sin reconocer el ingreso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Un cliente paga una venta a crédito que había sido registrada previamente. ¿Cuál es el principal efecto del recaudo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta el ingreso y disminuye la cuenta por cobrar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumenta el efectivo y aumenta la cuenta por cobrar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuye el efectivo y disminuye la cuenta por cobrar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumenta el efectivo y disminuye la cuenta por cobrar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Además de comprobar que los débitos y créditos coincidan, ¿qué debe verificarse después de registrar una transacción?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que las cuentas sean iguales en todas las operaciones registradas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que las cuentas representen correctamente la transacción registrada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que las cuentas correspondan únicamente a movimientos de efectivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que las cuentas se definan antes de revisar el soporte relacionado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'En una unidad que produce mermeladas, ¿cómo se clasifican las frutas adquiridas para ser transformadas durante la producción?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mercancías disponibles para la venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Materiales consumidos durante la producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Materias primas destinadas a transformación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Productos terminados disponibles para venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué característica corresponde al sistema de inventario periódico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determina las existencias al cierre mediante conteo físico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Actualiza las existencias después de cada movimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registra las salidas y actualiza el inventario de inmediato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permite consultar continuamente el saldo del inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Una tienda registra 40 unidades de un producto, pero el conteo físico muestra 37. ¿Qué acción corresponde inicialmente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificar de inmediato el registro para dejar 37 unidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Investigar la diferencia antes de modificar el registro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mantener las 40 unidades sin realizar ninguna revisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar tres unidades adicionales como nueva entrada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál opción clasifica correctamente el IVA y el ICA según el nivel en que se administran?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El IVA es departamental; el ICA, municipal o distrital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El IVA es municipal; el ICA, nacional o departamental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El IVA es distrital; el ICA, nacional o departamental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El IVA es nacional; el ICA, municipal o distrital.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué documento permite respaldar directamente el pago de una operación realizada mediante transferencia bancaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una orden de compra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una cotización comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un comprobante bancario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una solicitud de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la diferencia básica entre un soporte y un comprobante dentro del proceso de registro?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El soporte justifica la operación; el comprobante organiza información para su registro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El soporte organiza la operación; el comprobante justifica la información registrada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El soporte registra la operación; el comprobante reemplaza la documentación relacionada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El soporte autoriza la operación; el comprobante establece las condiciones comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué diferencia general existe entre la factura electrónica de venta y el documento equivalente electrónico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La factura se usa en operaciones específicas; el documento equivalente, en ventas generales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La factura se usa de forma general; el documento equivalente, en operaciones autorizadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La factura se usa en compras generales; el documento equivalente, en ventas específicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La factura se usa en pagos generales; el documento equivalente, en operaciones específicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué práctica facilita el control y la recuperación posterior de los comprobantes de una unidad económica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar documentos antiguos cuando aumente el volumen de operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Agrupar los comprobantes sin distinguir fechas, periodos ni operaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cambiar periódicamente el criterio utilizado para archivar documentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar un método uniforme para localizar y relacionar los documentos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

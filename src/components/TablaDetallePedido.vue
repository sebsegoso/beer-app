<template>
  <v-simple-table class="tabla_entrega">
    <tbody>
      <tr v-if="pedido.id">
        <th class="text-right">CÓDIGO DE COMPRA:</th>
        <td>
          <b class="codigo">{{ pedido.id }}</b>
        </td>
      </tr>
      <tr>
        <th class="text-right">NOMBRE CLIENTE:</th>
        <td>{{ pedido.nombre }} {{ pedido.apellidos }}</td>
      </tr>
      <tr>
        <th class="text-right">CORREO ELECTRÓNICO:</th>
        <td>{{ pedido.email }}</td>
      </tr>
      <tr>
        <th class="text-right">TELÉFONO:</th>
        <td>+56{{ pedido.telefono }}</td>
      </tr>
      <tr>
        <th class="text-right">FORMA ENTREGA:</th>
        <td>{{ pedido.entrega }}</td>
      </tr>
      <tr v-if="pedido.direccion">
        <th class="text-right">DIRECCIÓN DESPACHO:</th>
        <td>
          {{ pedido.direccion.calle }} {{ pedido.direccion.numero }}
          {{ pedido.direccion.departamento }}, {{ pedido.direccion.comuna }}.
        </td>
      </tr>
      <tr>
        <th class="text-right">FECHA COMPRA:</th>
        <td>{{ pedido.fecha }}</td>
      </tr>
      <tr>
        <th class="text-right">COMENTARIO:</th>
        <td>{{ pedido.comentario }}</td>
      </tr>
      <tr v-if="pedido.direccion">
        <th class="text-right">SUBTOTAL:</th>
        <td>${{ pedido.subtotal }}</td>
      </tr>
      <tr v-if="pedido.direccion">
        <th class="text-right">ENVÍO:</th>
        <td>${{ pedido.envio }}</td>
      </tr>
      <tr>
        <th class="text-right">TOTAL A PAGAR:</th>
        <td>
          <b>${{ pedido.total }}</b>
        </td>
      </tr>
      <tr>
        <th class="text-right">MEDIO DE PAGO:</th>
        <td>{{ pedido.medioDePago }}</td>
      </tr>
      <tr>
        <th class="text-right">CANTIDAD DE PRODUCTOS:</th>
        <td>{{ pedido.cantidadProductos }}</td>
      </tr>
      <tr>
        <th class="text-right">PRODUCTOS:</th>
        <td>
          <ul>
            <li v-for="(producto, i) in pedido.productos" :key="i">
              ({{ producto.cantidad }}) - {{ producto.producto.cerveceria }} -
              {{ producto.producto.nombre }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
    name: 'TablaDetallePedido',
    props: ['pedido']
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.codigo {
  font-size: 1.5rem;
  background-color: $main-yellow;
  color: $main-black;
  padding: .25rem .5rem;
}
</style>

<style lang="scss" scoped>
//MEDIA QUERIES
@media (min-width: 576px) {
  .tabla_entrega {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
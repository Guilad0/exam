<template>
  <main>
    <h5>Tabla productos</h5>
    <div class="container shadow">
      <table class="table table-striped table-inverse table-responsive">
        <thead class="thead-inverse">
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>PRECIO</th>
            <th>STOCK</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.id">
            <td>{{ producto.id_productos }}</td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.precio }}</td>
            <td>{{ producto.stock }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="addcarrito(producto)">
                add carrito
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-4">
      <h5>Carrito de compras</h5>
      <ul>
        <li v-for="item in carrito" :key="item.id_productos">

           Item -- {{ item.nombre }} - Cantidad: {{ item.stock }}
        
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const productos = ref([]);
const carrito = ref([]);

onMounted(() => {
  fetchData();
  addcarrito();
});

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/productos/");
    productos.value = response.data.results;
    console.log(productos.value);
    localStorage.getItem("carrito");
  } catch (error) {
    console.log(error);
  }
};
const addcarrito = (producto) => {
  carrito.value.push({ ...producto });
  console.log("Carrito:", carrito.value);
  console.log(carrito.value + "carrito");
  console.log("Carrito actualizado:", JSON.stringify(carrito.value, null, 2));
  localStorage.setItem("carrito", JSON.stringify(carrito.value));
};
</script>

<style scoped></style>

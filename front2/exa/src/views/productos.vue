<template>
  <main>
    <h5 class="text-center py-5">Tabla productos</h5>
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
              <div class="bg-dager d-flex">
                <button class="btn btn-success btn-sm" @click="addProduct()">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
                <button class="btn btn-warning btn-sm" @click="editProduct()">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="btn btn-danger btn-sm" @click="deleteProduct()">
                  <strong><i class="fa fa-minus" aria-hidden="true"></i></strong>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import router from "@/router";

const productos = ref([]);
const carrito = ref([]);

onMounted(() => {
  fetchData();
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

const editProduct = () => {
  router.push({ path: "/editProduct" });
};
const addProduct = () => {
  router.push({ path: "/registerProduct" });
};

const deleteProduct = () => {};
</script>

<style scoped></style>

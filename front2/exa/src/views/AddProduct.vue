<template>
  <main class="container">
    <div class="card shadow mt-5 bg-dark">
      <h5 class="card-header text-center mt-4 mx-auto text-white bg-dark">
        Form Travieso Add Product
      </h5>
      <div class="card-body d-flex justify-content-center">
        <div class="row g-3">
          <div>
            <label class="label form-label">
              <strong class="str"> Nombre *</strong>
            </label>
            <input
              type="text"
              v-model="nombre"
              class="form-control"
              placeholder="Ingrese el nombre del producto"
            />
          </div>
          <div class="">
            <label class="label form-label">
              <strong class="str"> Precio *</strong>
            </label>
            <input
              type="text"
              class="form-control"
              v-model="precio"
              placeholder="Ingrese el precio del producto"
            />
          </div>
          <div class="">
            <label class="label form-label">
              <strong class="str">Stock *</strong>
            </label>
            <input
              type="text"
              v-model="stock"
              class="form-control"
              placeholder="Ingrese el stock del producto"
            />
          </div>
        </div>
      </div>
      <div class="text-center p-4">
        <button class="btn btn-secondary btn-sm text-center rounded-3">Volver</button>
        <button class="btn btn-primary btn-sm rounded-3" @click="addProduct()">
          Registrarse
        </button>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const nombre = ref("");
const precio = ref("");
const stock = ref("");

const addProduct = async () => {
  const datos = {
    nombre: nombre.value,
    precio: precio.value,
    stock: stock.value,
  };

  if (datos.nombre === "" || datos.precio === "" || datos.stock === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Todos los campos son obligatorios",
    });
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/productos", datos);
    console.log(response.data);
    Swal.fire({
      icon: "success",
      title: "Exito",
      text: "Producto creado correctamente",
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Ocurrió un error al crear el producto",
    });
  }
};
</script>

<style>
.label {
  color: white;
}
</style>

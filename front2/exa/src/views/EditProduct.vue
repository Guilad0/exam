<template>
  <main class="container">
    <div class="card shadow mt-5 bg-dark">
      <h5 class="card-header text-center mt-4 mx-auto text-white bg-dark">
        Form Travieso Edit Product
      </h5>
      <div class="card-body d-flex justify-content-center">
        <div class="row g-3">
          <div>
            <label class="label form-label">
              <strong> Nombre *</strong>
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
              <strong> Precio *</strong>
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
              <strong class="str"> Stock *</strong>
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
        <button class="btn btn-primary btn-sm rounded-3">Editar</button>
      </div>
    </div>
  </main>
</template>
<script setup></script>

<style scoped>
.label {
  color: white;
}
</style>

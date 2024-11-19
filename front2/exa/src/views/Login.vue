<template>
  <main class="container">
    <div class="card shadow mt-5 rounded-3 bg-dark">
      <h5 class="card-header text-center mt-4 mx-auto text-white">Form Traviesossososos LOGIN</h5>
      <div class="card-body d-flex justify-content-center">
        <div class="row g-3">
          <input
            type="text"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="Ingrese su correo"
            required
          />
          <input
            type="text"
            id="contraseña"
            class="form-control"
            v-model="password"
            placeholder="Ingrese su contraseña"
          />
        </div>
      </div>
      <div class="text-center p-4 ">
        <button class="btn btn-secondary btn-sm text-center rounded-3">Volver</button>
        <button class="btn btn-primary btn-sm rounded-3">Ingresar</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref("");
const password = ref("");

const login = async () => {
  const datos = {
    email: email.value,
    password: password.value,
  }

};
</script>

<style scoped>

.cardl{
  width: 30wh;
}

</style>

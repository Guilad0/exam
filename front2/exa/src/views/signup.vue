<template>
  <main class="container">
    <div class="card shadow mt-5 bg-dark">
      <h5 class="card-header text-center mt-4 mx-auto text-white bg-dark">
        Form Travieso Registro
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
              placeholder="Ingrese su nombre"
            />
          </div>
          <div class="">
            <label class="label form-label">
              <strong class="str"> Apellido *</strong>
            </label>
            <input
              type="text"
              class="form-control"
              v-model="apellido"
              placeholder="Ingrese su apellido"
            />
          </div>
          <div class="">
            <label class="label form-label">
              <strong class="str"> Correo *</strong>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              v-model="email"
              class="form-control"
              placeholder="Ingrese su correo"
            />
          </div>
          <div class="">
            <label class="form-label label">
              <strong class="str"> Contraseña *</strong>
            </label>
            <input
              type="text"
              id="password"
              name="password"
              v-model="password"
              class="form-control"
              placeholder="Ingrese su contraseña"
            />
          </div>
        </div>
      </div>
      <div class="text-center p-4">
        <button class="btn btn-secondary btn-sm text-center rounded-3">Volver</button>
        <button class="btn btn-primary btn-sm rounded-3" @click="registrar()">
          Registrarse
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import iziToast from "izitoast";
const router = useRouter();

const nombre = ref("");
const apellido = ref("");
const email = ref("");
const password = ref("");
onMounted(() => {
  console.log("");
});

const registrar = async () => {
  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    password: password.value,
  };
  if (
    datos.nombre === "" ||
    datos.apellido === "" ||
    datos.email === "" ||
    datos.password === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Debe llenar los campos requeridos",
    });
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/users", datos);
    console.log(response.data);
    Swal.fire({
      icon: "success",
      title: "Exito",
      text: "Usuario creado correctamente",
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Hubo un error al crear el usuario",
    });
  }
};
</script>

<style scoped>
.label {
  color: white;
}
</style>

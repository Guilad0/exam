<template>
    <main>
        <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
>
    <div class="container">
        <a class="navbar-brand" href="/">GUILAD</a>
        <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">

                        <RouterLink class="nav-link active" to="/signup">
                            Registrarse
                        </RouterLink>
                    
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link active" to="/login">
                            Ingresar
                        </RouterLink>
                    
                </li>

                <li class="nav-item">
                    <RouterLink class="nav-link active" to="/ventas">
                            Ventas
                        </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link active" to="/productos">
                            Productos
                        </RouterLink>
                </li>            
            </ul>
            <form class="d-flex my-2 my-lg-0">
                <input
                    class="form-control me-sm-2"
                    type="text"
                    placeholder="Search"
                />
                <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    </div>
</nav>

    </main>
  
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>

</style>
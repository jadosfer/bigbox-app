<template>
  <nav aria-label="Page navigation example">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <ul class="pagination">
          <li :class="{ 'page-item': true, disabled: currentPage === 1 }">
            <a
              class="page-link prev-link"
              href="#"
              aria-label="Previous"
              @click="prevPage"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            v-for="page in pagesToShow"
            :key="page"
            :class="{ 'page-item': true, active: currentPage === page }"
          >
            <a
              :class="{
                'page-link': true,
                'active-link': currentPage === page,
              }"
              href="#"
              @click="goToPage(page)"
              >{{ page }}</a
            >
          </li>
          <li
            v-if="currentPage + maxPages < totalPages"
            class="page-item disabled"
          >
            <span class="page-link">...</span>
          </li>
          <li
            v-if="currentPage + maxPages < totalPages"
            :class="{ 'page-item': true }"
          >
            <a class="page-link" href="#" @click="goToPage(totalPages)">{{
              totalPages
            }}</a>
          </li>
          <li
            :class="{ 'page-item': true, disabled: currentPage === totalPages }"
          >
            <a class="page-link next-link" href="#" aria-label="Next" @click="nextPage">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-end">
        <p class="result-text">
          {{ currentPage * 9 - 8 }}-{{ currentPage * 9 > totalCount ? totalCount : currentPage * 9 }} de
          {{ totalCount }} resultados
        </p>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    currentPage: Number,
    totalPages: Number,
    maxPages: Number,
    totalCount: Number,
    pagesToShow: Array,
  },
  methods: {
    prevPage() {
      this.$emit("call-goToPage", this.currentPage - 1);
    },
    nextPage() {
      this.$emit("call-goToPage", this.currentPage + 1);
    },
    goToPage(page: number) {
      this.$emit("call-goToPage", page);
    },
  },
});
</script>

<style scoped>
/* Estilos para centrar los elementos horizontalmente */
.pagination {
  display: flex;
  list-style: none;
  padding-left: 0;
  justify-content: center; /* Centrar los elementos horizontalmente */
}

.pagination .page-item {
  display: inline-block;
  margin-right: 5px; /* Espaciado entre elementos (opcional) */
}

/* Estilo para los enlaces no activos */
/* .pagination .page-link {
  color: black; 
  text-decoration: none;
  margin: 0 5px; 
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  padding: 8px 8px; 
  border: 1px solid #fff;
  border-radius: 100%; 
} */

.page-link {
  border: 3px solid #fff;  
  color: black;
  background-color: #fff; /* Color de fondo del círculo */
  text-decoration: none; /* Eliminar subrayado del enlace */
  display: inline-block; 
  line-height: 0.5 !important;
  font-size: 18px; /* Tamaño de fuente para los números */
  font-family: "Quicksand", sans-serif; 
  border: 5px solid #fff;
  padding: 8px 8px; 
  border-radius: 100%;  
}



.active-link, .next-link, .prev-link {
  border: 3px solid #ff6c5e;  
  color: white !important; /* Color del texto */
  background-color: #ff6c5e; /* Color de fondo del círculo */
  text-decoration: none; /* Eliminar subrayado del enlace */
  display: inline-block; /* Permitir que el contenido defina el tamaño */
  line-height: 0.5 !important;
  font-size: 18px; /* Tamaño de fuente para los números */
  font-family: "Quicksand", sans-serif;  
  margin-left: 10px;
  margin-right: 10px;
}

.result-text {
  text-align: center; /* Alinear el texto al centro */
  color: #bdbdbd; /* Color de texto gris claro */
  margin-top: 10px;
  margin-left: 300px;
}
</style>

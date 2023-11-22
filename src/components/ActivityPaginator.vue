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
            <a
              class="page-link next-link"
              href="#"
              aria-label="Next"
              @click="nextPage"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-end">
        <p class="result-text">
          {{ currentPage * 9 - 8 }}-{{
            currentPage * 9 > totalCount ? totalCount : currentPage * 9
          }}
          de {{ totalCount }} resultados
        </p>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
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
.pagination {
  display: flex;
  list-style: none;
  padding-left: 0;
  justify-content: center;
}

.pagination .page-item {
  display: inline-block;
  margin-right: 5px;
}

.page-link {
  border: 3px solid #fff;
  color: black;
  background-color: #fff; 
  text-decoration: none; 
  display: inline-block;
  line-height: 0.5;
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  border: 5px solid #fff;
  padding: 8px 8px;
  border-radius: 100%;
}

.active-link,
.next-link,
.prev-link {
  border: 3px solid #ff6c5e;
  color: white;
  background-color: #ff6c5e; 
  text-decoration: none; 
  display: inline-block;
  line-height: 0.5;
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  margin-left: 10px;
  margin-right: 10px;
}

.result-text {
  text-align: center;
  color: #bdbdbd;
  margin-top: 10px;
  margin-left: 300px;
}
</style>

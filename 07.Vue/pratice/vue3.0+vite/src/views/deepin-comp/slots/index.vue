<template>
  <div>
    <todo-button> <i class="fas fa-plus"></i> Add todo </todo-button>
    <br /><br />
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
    <br /><br />

    <base-layout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>

    <br /><br />
    <!-- <todo-list>
      <template v-slot:default="slotProps">
        <i class="fas fa-check"></i>
        <span class="green">
          {{ slotProps.item }} - {{ slotProps.testData }}
        </span>
      </template>
    </todo-list> -->

    <todo-list v-slot="slotProps">
      <i class="fas fa-check"></i>
      <span class="green">
        {{ slotProps.item }} - {{ slotProps.testData }}
      </span>
    </todo-list>
  </div>
</template>

<script>
import todoButton from "./todoButton.vue";
import baseLayout from "./baseLayout.vue";
import todoList from "./todoList.vue";

export default {
  components: { todoButton, baseLayout, todoList },
};
</script>
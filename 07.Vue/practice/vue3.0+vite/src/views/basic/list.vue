<template>
  <ul id="array-rendering">
    <li v-for="(item, index) in items" :key="index">
      {{ item.message }}
    </li>
  </ul>
  <br />

  <ul id="v-for-object" class="demo">
    <li v-for="(item, title, index) of myObj" :key="index">
      {{ index }}. {{ title }}: {{ item }}
    </li>
  </ul>
  <br />

  <ul>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
  </ul>
  <br />

  <div id="range" class="demo">
    <span v-for="n in 10" :key="n">{{ n }}</span>
  </div>
  <br />

  <ul>
    <template v-for="item in items" :key="item.message">
      <li>{{ item.message }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>
  <br />

  <div id="todo-list-example">
    <form  @submit.prevent>
      <label for="new-todo">Add a todo</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
      />
      <button @click="addNewToDo">Add</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.id }}. {{ todo.title }}
        <button @click="handleRemove(index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      myObj: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5, 6],
      todos: [
        {
          id: 1,
          title: "Do the dishes",
        },
        {
          id: 2,
          title: "Take out the trash",
        },
        {
          id: 3,
          title: "Mow the lawn",
        },
      ],
      nextTodoId: 4,
      newTodoText: "",
    };
  },
  computed: {
    evenNumbers: {
      get() {
        return this.numbers.filter((number) => number % 2 === 0);
      },
    },
  },
  methods: {
    addNewToDo() {
      console.log(1)
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
    handleRemove(id) {
      this.todos.splice(id, 1);
    },
  },
};
</script>
<template>
  <div id="computed-basics">
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <p>fullname: {{ fullName }}</p>
  </div>
  <br /><br />
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <img :src="imageSrc" />
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      firstName: "John",
      lastName: "Doe",
      question: "",
      answer: "Question usually contain a question mark. ;-)",
      imageSrc: "",
    };
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
    fullName: {
      get() {
        return this.firstName + "" + this.lastName;
      },
      set(newName) {
        const names = newName.split("");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  watch: {
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    },
  },
  methods: {
    getAnswer() {
      this.answer = "Thinking...";
      fetch("https://yesno.wtf/api")
        .then((response) => response.json())
        .then((data) => {
          this.answer = data.answer;
          this.imageSrc = data.image;
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API. " + error;
        });
    },
  },
};
</script>
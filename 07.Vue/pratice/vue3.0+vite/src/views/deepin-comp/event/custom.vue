<template>
  <div>
    <button @click="$emit('myEvent', 'emit')">Handle</button>
  </div>
</template>


<script>
export default {
  name: 'my-event',
  emits: {
    myEvent: (msg) => {
      console.log(msg)
      if(msg) return true
      else console.wran('Invalid submit event payload!')
    }
  }
}
</script>
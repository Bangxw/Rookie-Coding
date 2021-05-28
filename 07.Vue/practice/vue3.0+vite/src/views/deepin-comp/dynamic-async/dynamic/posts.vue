<template>
  <div>
    <ul>
      <li><a @click="currentLpsum='cat'">Cat lpsum</a></li>
      <li><a @click="currentLpsum='hipster'">Hipster lpsum</a></li>
      <li><a @click="currentLpsum='cupcake'">Cupcake lpsum</a></li>
    </ul>
    <div v-show="currentLpsum === 'cat'">
      <h4>Cat Ipsum</h4>
      <p>
        Dont wait for the storm to pass, dance in the rain kick up litter decide
        to want nothing to do with my owner today demand to be let outside at
        once, and expect owner to wait for me as i think about it cat cat moo
        moo lick ears lick paws so make meme, make cute face but lick the other
        cats. Kitty poochy chase imaginary bugs, but stand in front of the
        computer screen. Sweet beast cat dog hate mouse eat string barf pillow
        no baths hate everything stare at guinea pigs. My left donut is missing,
        as is my right loved it, hated it, loved it, hated it scoot butt on the
        rug cat not kitten around
      </p>
    </div>
    <div v-show="currentLpsum === 'hipster'">
      <h4>Hipster Ipsum</h4>
      <p>
        Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird
        on it lumbersexual franzen shabby chic, street art knausgaard trust fund
        shaman scenester live-edge mixtape taxidermy viral yuccie succulents.
        Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B
        hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress
        venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed
        occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse.
        Trust fund food truck drinking vinegar gochujang.
      </p>
    </div>
    <div v-show="currentLpsum === 'cupcake'">
      <h4>Cupcake Ipsum</h4>
      <p>
        Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa
        chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake
        icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw
        sesame snaps marshmallow. Marzipan soufflé croissant lemon drops
        gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut
        oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data() {
    return {
      currentLpsum: 'cat'
    }
  }
}
</script>

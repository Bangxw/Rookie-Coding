<template>
  <div id="root-instance">
        <h2># The Vue Instance</h2>

        <h4>数据与方法</h4>
        <!-- 这里的 'foo' 不会更新 -->
        <p>{{ foo }}</p>
        <button v-on:click="foo = 'baz'">Change It</button><br><br>

        <h4>生命周期图示</h4>
        <div class="lifecycle-diagram">
          <section>
              <div class="round-recl blue">New Vue()</div>
              <span class="line-arrow-vertical"></span>
          </section>
          <section>
              <div class="round-recl green">Init <br>Events & Lifecycle</div>
              <div class="rounded-rectangle-red position0">beforeCreate</div>
              <span class="line-arrow-horizontal position0"></span>
              <span class="line-arrow-vertical"></span>
              <div class="round-recl green">Init <br>Injections & Reactivity</div>
              <div class="rounded-rectangle-red position1">created</div>
              <span class="line-arrow-horizontal position1"></span>
              <span class="line-arrow-vertical"></span>
          </section>
          <section>
              <div class="diamond"><div>Has <br>'el' option?</div></div>
              <label class="txt-coomments position0">YES</label>
              <span class="line-arrow-vertical"></span>
              <div class="diamond"><div>Has <br>'template' option?</div></div>
              <label class="txt-coomments position1">NO</label>
              <div class="line-arrow-polyline"></div>
              <div class="txt-description position0">when <br>vm.$mount(el)<br>is called</div>
              <span class="line-vertical"></span>
          </section>
          <section style="margin-top:-10px;">
              <div class="solidBox">
                  <label class="txt-coomments position2">YES</label>
                  <label class="txt-coomments position3">NO</label>
                  <div class="round-recl green position0">Compile template <br>into <br>render function</div>
                  <div class="round-recl green position1">Compile <br>outerHTML <br>as template</div>
              </div>
          </section>
          <section>
              <div class="rounded-rectangle-red position2">beforeMount</div>
              <span class="line-arrow-horizontal position2"></span>
              <span class="line-arrow-vertical" style="height:80px;"></span>
              <div class="round-recl green">Create vm.$el <br>and replace <br>"el" with it</div>
              <div class="rounded-rectangle-red position3">mounted</div>
              <span class="line-arrow-horizontal position3"></span>
              <span class="line-arrow-horizontal position2"></span>
              <span class="line-arrow-vertical" style="height:80px;"></span>
          </section>
          <section>
              <div class="circle-mounted">Mounted</div>
              <div class="circle-dotted"></div>
              <div class="round-recl green position2">Virtual DOM<br>re-render<br>and patch</div>
              <label class="txt-coomments position4">when data<br>changes</label>
              <span class="line-arrow-horizontal position4"></span>
              <span class="line-arrow-horizontal position5"></span>
              <div class="rounded-rectangle-red position4">beforeUpdate</div>
              <div class="rounded-rectangle-red position5">updated</div>
          </section>
          <section style="margin-top: -36px;">
              <span class="line-arrow-vertical dashed-line"></span>
              <div class="rounded-rectangle-red position6">beforeDestroy</div>
              <span class="line-arrow-horizontal position6"></span>
              <label class="txt-coomments position5">when<br>vm.$destroy()<br>is called</label>
              <div class="round-recl green">Teardown <br>watchers.child <br>components and <br>event listeners</div>
              <span class="line-arrow-vertical"></span>
          </section>
          <section>
              <div class="rounded-rectangle-red position7">destroyed</div>
              <div class="circle-mounted">Destroyed</div>
              <span class="line-arrow-horizontal position7"></span>
          </section>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    var obj = {
      foo: 'bar'
    }

    Object.freeze(obj)

    return obj
  }
}
</script>

<style>
.lifecycle-diagram {
  width: 600px;
  text-align: center;
}

.lifecycle-diagram section {
  position: relative;
}

.round-recl {
  display: inline-block;
  color: #fff;
  border-radius: 10px;
  margin: 0 auto;
}

.round-recl.blue {
  background: #34495d;
  padding: 15px;
}

.round-recl.green {
  background: #3ab882;
  padding: 8px 20px;
  font-size: 14px;
}

.line-arrow-horizontal {
  position: absolute;
  display: block;
  width: 120px;
  height: 0;
  border-top: 2px dotted #da5961;
}

.line-arrow-horizontal:after {
  position: absolute;
  content: '';
  left: -9px;
  top: 50%;
  margin-top: -6px;
  width: 0;
  height: 0;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-right: 10px solid #da5961;
}

.line-arrow-horizontal.position0 {
  top: 65px;
  left: 50%;
  margin-left: -120px;
}

.line-arrow-horizontal.position1 {
  top: 155px;
  left: 50%;
  margin-left: -120px;
}

.line-arrow-horizontal.position2 {
  top: 195px;
  left: 50%;
  margin-left: -120px;
}

.line-arrow-horizontal.position3 {
  top: 45px;
  left: 50%;
  margin-left: -120px;
}

.line-arrow-horizontal.position4 {
  top: -20px;
  left: 50%;
  margin-left: 150px;
  transform: rotate(130deg);
  width: 40px;
}

.line-arrow-horizontal.position5 {
  bottom: 12px;
  left: 50%;
  margin-left: 150px;
  transform: rotate(-130deg);
  width: 40px;
}

.line-arrow-horizontal.position6 {
  top: 95px;
  left: 50%;
  margin-left: -120px;
}

.line-arrow-horizontal.position7 {
  top: 40px;
  left: 50%;
  margin-left: -120px;
  width: 80px;
}

.line-vertical {
  display: block;
  position: relative;
  width: 2px;
  height: 30px;
  background: #8699a3;
  margin: 0 auto 10px;
}

.line-arrow-vertical {
  display: block;
  position: relative;
  width: 0;
  height: 30px;
  border-right: 2px solid #8699a3;
  margin: 0 auto 10px;
}

.line-arrow-vertical.dashed-line {
  border-right: 2px dotted #8699a3;
  height: 120px;
}

.line-arrow-vertical:after {
  position: absolute;
  content: '';
  bottom: -10px;
  left: 50%;
  margin-left: -4px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #8699a3;
}

.rounded-rectangle-red {
  position: absolute;
  display: inline-block;
  min-width: 109px;
  color: #da5961;
  border-radius: 10px;
  border: 2px solid #da5961;
  padding: 10px 5px;
}

.rounded-rectangle-red.position0 {
  margin-left: -250px;
  left: 50%;
  top: 45px;
}

.rounded-rectangle-red.position1 {
  margin-left: -250px;
  left: 50%;
  top: 135px;
}

.rounded-rectangle-red.position2 {
  left: 50px;
  top: 25px;
}

.rounded-rectangle-red.position3 {
  left: 50px;
  top: 175px;
}

.rounded-rectangle-red.position4 {
  right: 20px;
  top: -82px;
}

.rounded-rectangle-red.position5 {
  right: 20px;
  top: 126px;
}

.rounded-rectangle-red.position6 {
  left: 49px;
  top: 75px;
}

.rounded-rectangle-red.position7 {
  left: 49px;
  top: 20px;
}

.diamond {
  position: relative;
  width: 140px;
  height: 80px;
  margin: 0 auto;
}

.diamond > div {
  position: relative;
  color: #fff;
  z-index: 2;
  padding-top: 23px;
  font-size: 13px;
}

.diamond:after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  left: 0;
  top: 0;
  border-bottom: 40px solid #fcb738;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
}

.diamond:before {
  position: absolute;
  content: '';
  top: 40px;
  left: 0;
  width: 0;
  height: 0;
  border-top: 40px solid #fcb738;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
}

.txt-coomments {
  position: absolute;
  color: #ccc;
  font-weight: bold;
}

.txt-coomments.position0 {
  left: 260px;
  top: 90px;
}

.txt-coomments.position1 {
  left: 390px;
  top: 20px;
}

.txt-coomments.position2 {
  left: -40px;
  top: 10px;
}

.txt-coomments.position3 {
  right: -35px;
  top: 10px;
}

.txt-coomments.position4 {
  right: 165px;
  top: -45px;
  background: #fff;
}

.txt-coomments.position4 {
  right: 165px;
  top: -45px;
  background: #fff;
}

.txt-coomments.position5 {
  left: 50%;
  margin-left: -50px;
  top: 20px;
  background: #fff;
}

.line-arrow-polyline {
  position: absolute;
  width: 160px;
  height: 120px;
  border: 1px dotted #a5b3bb;
  left: 50%;
  top: 40px;
  z-index: -1;
}

.line-arrow-polyline:after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 10px solid #a5b3bb;
  top: 115px;
  left: 70px;
}

.txt-description {
  background: #fff;
  color: #8c9ea7;
}

.txt-description.position0 {
  position: absolute;
  right: 90px;
  top: 78px;
}

.solidBox {
  width: 240px;
  height: 130px;
  position: relative;
  border: 2px solid #8c9ea7;
  margin: 0 auto;
  z-index: -1;
}

.solidBox:before {
  content: '';
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #8c9ea7;
  position: absolute;
  left: -6px;
  top: 30px;
}

.solidBox:after {
  content: '';
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #8c9ea7;
  position: absolute;
  right: -6px;
  top: 30px;
}

.round-recl.position0 {
  position: absolute;
  left: -80px;
  margin-top: 40px;
}

.round-recl.position1 {
  position: absolute;
  right: -60px;
  margin-top: 40px;
}

.round-recl.position2 {
  position: absolute;
  right: 70px;
  top: 10px;
}

.circle-mounted {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: #da5961;
  margin: 0 auto;
  color: #fff;
  line-height: 80px;
}

.circle-dotted {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 1px dashed #a5b3bb;
  margin-left: 320px;
  margin-top: -115px;
  z-index: -1;
}
</style>

<template>
  <div class="hello">
      <input name="t1" v-model="d_o_fields.in1" >
      <input name="t2" v-model="d_o_fields.in2" >
      <div>
      {{ d_o_fields.in1 }}
      {{ d_o_fields.in2 }}
      </div>
      {{ vv }}
      {{ abc }}
      <div v-if="vv.$error === true ">
        testttt
      </div>
      <button type="submit" @click="test()">submit</button>
  </div>
</template>

<script>
// import {$v} from '../assets/js/v-vuelidate'
import {vd2, $vv} from '../assets/js/v-vuelidate2'

export default {
  name: 'HelloWorld',
  mixins: [vd2], // important line here
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      d_o_fields: {
        in1: '',
        in2: '',
        in4: ''
      },
      d_o_fields2: {
        aa: {
          in3: 'ccc',
          in5: 'eee'
        }
      },
      tes: {},
      abc: 55
    }
  },
  mounted () {
    let v = {
      d_o_fields: {
        in1: {
          required: true,
          minLength: 5
        },
        in2: {
          required: true,
          length: 3
        }
      },
      d_o_fields2: {
        aa: {
          in3: {
            minLength: 5
          },
          in5: {
            required: true
          }
        }
      }
    }
    // let f = {}
    // this.$set(f, 'd_o_fields', this.d_o_fields)
    // this.$set(f, 'd_o_fields2', this.d_o_fields2)
    // //$v.Fields = f
    $vv.FieldVuelidate = v
    // console.log($vv.$touch())
    // $vv.$touch()
  },
  updated () {
    // $v.$touch()
  },
  methods: {
    test () {
      $vv.$check()
      console.log($vv)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

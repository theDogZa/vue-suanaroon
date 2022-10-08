<template>
  <div class="hello">
    <div class="mt-5">
      <form>
        <input v-validate="'required|alpha'"  data-vv-name="first name"  placeholder="First Name" name="first_name" v-model="first_name"
          class="mt-5" />
          {{errors[1]}}
        <span class="text-danger text-sm" v-show="errors.has('first name')">{{ errors.first('first name') }}</span>

        <input v-validate="'required|alpha'" placeholder="Last Name" name="last_name" v-model="last_name"
          class="mt-5" />
        <span class="text-danger text-sm" v-show="errors.has('last_name')">{{ errors.first('last_name') }}</span>
        <!-- <span class="text-danger text-sm" v-show="errors.has('first_name')">{{ errors.first('first_name') }}</span> -->
        <!-- <ul>
          <li v-for="error in errors.collect('last_name')" :key="error">{{ error }}</li>
        </ul> -->

        <div v-for="(list, index) in d_o_fields" :key="index" class="col-12">
            <input v-validate="'required|alpha'" :placeholder="index" :name="index" v-model="list[index]" class="mt-5" />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">{{ errors }}</div>
        </div>

        <button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      first_name: '',
      last_name: '',
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
    // let v = {
    //   d_o_fields: {
    //     in1: {
    //       required: true,
    //       minLength: 5
    //     },
    //     in2: {
    //       required: true,
    //       length: 3
    //     }
    //   },
    //   d_o_fields2: {
    //     aa: {
    //       in3: {
    //         minLength: 5
    //       },
    //       in5: {
    //         required: true
    //       }
    //     }
    //   }
    // }
  },
  updated () {

  },
  methods: {
    submitForm () {
      this.$validator.validateAll().then(result => {
        if (result) {
          // if form have no errors
          alert('form submitted!')
        } else {
          // form have errors
        }
      })
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

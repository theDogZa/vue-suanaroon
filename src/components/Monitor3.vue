<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>q_status</th>
          <th>lastUpdate</th>
          <th>updatedAt</th>
          <th>q_login</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, index) in dataExtensions" :key="index" v-if="list">
          <td >{{ list.extension }}</td>
          <td :class="list.background" >{{ list.status }}</td>
          <td >{{ list.statusid }}</td>
          <td> {{ list.createdAt  | formatDate }}</td>
        </tr>
      </tbody>
    </table>
  <hr>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'monitor',
  data () {
    return {
      msg: 'monitor',
      apiIp: 'http://192.168.47.28',
      dataExtensions: [],
      dataQueues: [],
      dataQueueCall: [],
      i: 1,
      s: 1,
      status: 'disconnected'
    }
  },

  created () {
    this.g_extensionlist()
    // this.socket = new WebSocket('http://192.168.47.28')
    // this.socket.onopen = () => {
    //   this.status = 'connected'
    //   this.socket.onmessage = ({data}) => {
    //     console.log('data', data)
    //   }
    // }
  },

  mounted () {
    // Calling this crashes the browser
    let fn = () => {
      this.g_getNew()
      this.$nextTick(fn)
    }
    setInterval(this.g_getNew, 1000)
  },

  updated () {

  },

  methods: {
    g_extensionlist () {
      // let urlExtensionList = 'http://192.168.47.28:2999/extension?limit=0'
      let urlExtensionList = this.apiIp + ':2995/laststatus'
      axios.get(urlExtensionList)
        .then(response => {
          console.log(response.data)
          this.dataExtensions = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => {
          // this.loading = true
          // console.log(this.loading)
        })
    },

    g_getNew () {
      this.i = this.i + 1
      if (this.i >= 30) {
        this.i = 0
      }
      this.s = this.s + 1
      if (this.s >= 6) {
        this.s = 0
      }
      this.g_extension()
      this.g_queue()
      this.g_queueCall()
      // const _this = this
      // let urlExtensionList = 'http://192.168.47.28:2999/extension'
      // let urlExtensionList = 'http://192.168.22.16:2999/extension'
      // axios.get(urlExtensionList)
      //   .then(response => {
      //     if (response.data) {
      //       console.log(response.data)
      //       this.dataQueues = response.data
      //       this.dataExtensions[this.i]['q_login'] = true
      //       this.dataExtensions[this.i]['q_status'] = this.s
      //       this.dataExtensions[this.i + 5]['q_status'] = this.s
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error)
      //     this.errored = true
      //   })
      //   .finally(() => {
      //     // this.loading = true
      //     // console.log(this.loading)
      //   })
    },

    g_extension () {
      let urlExtension = this.apiIp + ':2995/laststatus'
      axios.get(urlExtension)
        .then(response => {
          if (response.data) {
            console.log(response.data)
            this.dataExtensions = response.data
            // this.dataExtensions[this.i]['q_login'] = true
            // this.dataExtensions[this.i]['q_status'] = this.s
            // this.dataExtensions[this.i + 5]['q_status'] = this.s
          }
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => {
          // this.loading = true
          // console.log(this.loading)
        })
    },

    g_queue () {
      // let urlExtensionList = 'http://192.168.47.28:2999/extension'
      let urlQueue = this.apiIp + ':2998/queue'
      axios.get(urlQueue)
        .then(response => {
          if (response.data) {
            console.log('queue', response.data)
            this.dataQueues = response.data
          }
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => {
          // this.loading = true
          // console.log(this.loading)
        })
    },

    g_queueCall () {
      // let urlExtensionList = 'http://192.168.47.28:2999/extension'
      let urlQueueCall = this.apiIp + ':2996/queuecall'
      axios.get(urlQueueCall)
        .then(response => {
          if (response.data) {
            console.log('queueCall', response.data)
            this.dataQueueCall = response.data
          }
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => {
          // this.loading = true
          // console.log(this.loading)
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

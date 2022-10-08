<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table border="1">
      <thead>
        <tr>
          <th>q_login q_paused q_status</th>
          <th>Status time</th>
          <th>Last hangup</th>
          <th>Team</th>
          <th>Agent Name</th>
          <th>Adherence Time</th>
          <th>Total Transfer</th>
          <th>Total Answer</th>
          <th>Total Miss call</th>
          <th data-title="'Max Talk'" > Max Talk </th>
          <th data-title="'Avg. Talk'"> Avg. Talk </th>
          <th data-title="'Total Talk Time'"> Total Talk Time </th>
          <th data-title="'Max WT'"> Max WT </th>
          <th data-title="'Avg. WT'" > Avg. WT </th>
          <th data-title="'Total WT'"> Total WT </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, index) in dataList" v-bind:list="list" v-bind:index="list.id" v-bind:key="list.id"
        v-for-callback="{key: index, array: dataList, callback: callback}" >
          <template v-if="list._isShow">
          <td data-title="'SP Status'">
            <span :class="list._spClassStatus">{{ list._spStatus }}</span>
            <span v-if="list._presencetxt">{{ list._presencetxt }}</span>
          </td>
          <td data-title="'Status Time'"><!-- now - lastUpdate -->
            <span>{{ list.lastUpdate | DiffTimeNow }}</span>
          </td>
          <td data-title="'Last hangup'">
            <span v-if="dataInstatqueue[list.id]">{{ dataInstatqueue[list.id]['lasthangup']  | formatDate  }} </span>
            </td>
          <td data-title="'Team'"> </td>
          <td data-title="'Agent Name'"> {{ list.id }}</td>
          <td data-title="'Adherence Time'"><!-- now - login -->
            <span v-if="dataInstatqueue[list.id]">{{ dataInstatqueue[list.id]['login']  | DiffTimeNow  }}</span>
          </td>
          <td data-title="'Total Transfer'">
            <span v-if="dataInstatqueue[list.id]">{{ dataInstatqueue[list.id]['transfer'] }}</span>
          </td>
          <td data-title="'Total Answer'">
            <span v-if="dataInstatqueue[list.id]">{{ dataInstatqueue[list.id]['answer'] }}</span>
          </td>
          <td data-title="'Total Miss call'">
            <span v-if="dataInstatqueue[list.id]">{{ dataInstatqueue[list.id]['misscall'] }}</span>
          </td>
          <td data-title="'Max Talk'" > <span v-if="dataInstatqueue[list.id]">{{ dataInstatqueue[list.id]['maxtalk'] | millisecondsToTime }}</span> </td>
          <td data-title="'Avg. Talk'"> <span v-if="dataInstatqueue[list.id]">{{ (dataInstatqueue[list.id]['talktime']/dataInstatqueue[list.id]['answer']) | millisecondsToTime }}</span> </td>
          <td data-title="'Total Talk Time'"> <span v-if="dataInstatqueue[list.id]">{{ dataInstatqueue[list.id]['talktime'] | millisecondsToTime }}</span> </td>
          <td data-title="'Max WT'"> <span v-if="dataInstatqueue[list.id]">{{ dataInstatqueue[list.id]['maxwait'] | millisecondsToTime }}</span> </td>
          <td data-title="'Avg. WT'" > <span v-if="dataInstatqueue[list.id]">{{ (dataInstatqueue[list.id]['waittime']/dataInstatqueue[list.id]['answer']) | millisecondsToTime }}</span> </td>
          <td data-title="'Total WT'"> <span v-if="dataInstatqueue[list.id]">{{ dataInstatqueue[list.id]['waittime'] | millisecondsToTime }}</span> </td>
          <!-- <td><span v-if="!data.status[list.id]">{{ list.status }}</span><span v-else-if="data.status[list.id]">{{ data.status[list.id] }}</span></td> -->
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import statusShow from '../assets/status.json'
import moment from 'moment'
// const socketIOClient = require('socket.io-client')
// const sailsIOClient = require('sails.io.js')
import socketIOClient from 'socket.io-client'
import sailsIOClient from 'sails.io.js'

const io = sailsIOClient(socketIOClient)

const apiQueue = {
  url: 'http://192.168.47.28:2998',
  // url: 'http://192.168.22.16:8080',
  // path: '/socket/laststatus/socket.io',
  useCORSRouteToGetCookie: false,
  reconnectionAttempts: 1000,
  autoConnect: true,
  reconnection: true
}

// const apiQueuecall = {
//   url: 'http://192.168.47.28:2996',
//   // url: 'http://192.168.22.16:8080',
//   // path: '/extension',
//   useCORSRouteToGetCookie: false,
//   reconnectionAttempts: 1000,
//   autoConnect: true,
//   reconnection: true
// }

const apiInstatStatus = {
  url: 'http://192.168.47.28:2997',
  // url: 'http://192.168.22.16:8080',
  // path: '/extension',
  useCORSRouteToGetCookie: false,
  reconnectionAttempts: 1000,
  autoConnect: true,
  reconnection: true
}

// const apiLaststatus = {
//   url: 'http://192.168.47.28:2995',
//   // url: 'http://192.168.22.16:8080',
//   // path: '/extension',
//   useCORSRouteToGetCookie: false,
//   reconnectionAttempts: 1000,
//   autoConnect: true,
//   reconnection: true
// }

const apiPbxStatus = {
  url: 'http://192.168.47.28:2994',
  // url: 'http://192.168.22.16:8080',
  // path: '/socket/pbxstatus/socket.io',
  useCORSRouteToGetCookie: false,
  reconnectionAttempts: 1000,
  autoConnect: true,
  reconnection: true
}

export default {
  name: 'monitor2',
  data () {
    return {
      msg: 'monitor2',
      dataList: [],
      dataQueue: [],
      dataExtension: [],
      dataInstatqueue: [],
      breakLoop: false,
      exStatusShow: statusShow,
      dateNow: null
    }
  },

  created () {

  },

  mounted () {
    const _this = this
    const q = io.sails.connect(apiQueue)
    // const ls = io.sails.connect(apiLaststatus)
    // const qc = io.sails.connect(apiQueuecall)
    const instatSocket = io.sails.connect(apiInstatStatus)
    const ex = io.sails.connect(apiPbxStatus)

    q.get('/queue', function (data, JWR) {
      console.log('/queue', JWR, data)
      // _this.dataQueue = _this.objToArrayKey(data, 'id')
      // _this.dataList = _this.dataQueue
      // console.log('arr-queue', _this.dataList)
    })
    // q.get('/channel', function (data, JWR) {
    //   // console.log('/channel', JWR, data)
    // })
    // qc.get('/queuecall', function (data, JWR) {
    //   // console.log('/queuecall', JWR, data)
    // })
    instatSocket.get('/instatqueue?limit=0', function (data, JWR) {
      // console.log('/instatqueue', JWR, data)
      // _this.dataInstatqueue = _this.objToArrayKey(data, 'extension')
      _this.dataInstatqueue = _this.objToArrayInstatQueue(data, 'extension')
      // console.log('/instatqueue', _this.dataInstatqueue)
    })
    // instatSocket.get('/instatchannel', function (data, JWR) {
    //   // console.log('/instatchannel', JWR, data)
    // })
    // ls.get('/laststatus', function (data, JWR) {
    //   // console.log('/laststatus', JWR, data)
    //   // console.log('arr-extension', _this.dataExtension)
    // })
    ex.get('/extension', { limit: 1000 }, function (data, JWR) {
      _this.dataExtension = _this.objToArrayKey(data, 'id')
      _this.dataList = _this.dataExtension
      // console.log('/extension', JWR, data)
      _this.breakLoop = true
    })

    console.log('-----------------------mounted------------------')
    q.on('queue', function (data) {
      console.log('queue', data)
      // console.log('queue-id', data.id, data.data['maxtalk'])
      // _this.dataQueue[data.id]['maxtalk'] = data.data['maxtalk']
      //  _this.dataQueue[data.id]['maxwait'] = data.data['maxwait']
    })
    // q.on('channel', function (data) {
    //   // console.log('channel', data)
    // })

    // ls.on('laststatus', function (res) {
    //   // console.log('laststatus', res)
    //   // console.log('arr-dataList c', _this.dataList)
    // })
    // qc.on('queuecall', function (data) {
    //   // console.log('queuecall', data)
    // })
    instatSocket.on('instatqueue', function (res) {
      // console.log('instatqueue', res)
      if (_this.breakLoop === false) {
        _this.breakLoop = true
        if (res.verb === 'updated') {
          if (typeof res.data.transfer !== 'undefined') {
            _this.dataInstatqueue[res.data['extension']].transfer = _this.dataInstatqueue[res.data['extension']].transfer + res.data.transfer
          }
          if (res.data.login) {
            _this.dataInstatqueue[res.data['extension']].login = res.data.login
          }
          if (typeof res.data.answer !== 'undefined') {
            _this.dataInstatqueue[res.data['extension']].answer = _this.dataInstatqueue[res.data['extension']].answer + res.data.answer
          }
          if (typeof res.data.misscall !== 'undefined') {
            _this.dataInstatqueue[res.data['extension']].misscall = res.data.misscall
          }
          if (typeof res.data.talktime !== 'undefined') {
            _this.dataInstatqueue[res.data['extension']].talktime = _this.dataInstatqueue[res.data['extension']].talktime + res.data.talktime
          }
          if (typeof res.data.waittime !== 'undefined') {
            _this.dataInstatqueue[res.data['extension']].waittime = _this.dataInstatqueue[res.data['extension']].waittime + res.data.waittime
          }
          if (typeof res.data.maxtalk !== 'undefined') {
            if (res.data.maxtalk > _this.dataInstatqueue[res.data['extension']].maxtalk) {
              _this.dataInstatqueue[res.data['extension']].maxtalk = res.data.maxtalk
            }
          }
          if (typeof res.data.maxwait !== 'undefined') {
            if (res.data.maxwait > _this.dataInstatqueue[res.data['extension']].maxwait) {
              _this.dataInstatqueue[res.data['extension']].maxwait = res.data.maxwait
            }
          }
          if (res.data.lasthangup) {
            _this.dataInstatqueue[res.data['extension']].lasthangup = res.data.lasthangup
          }
          console.log(_this.dataInstatqueue[res.data['extension']])
        }
      }
    })

    // instatSocket.on('instatchannel', function (data) {
    //   // console.log('instatchannel', data)
    // })

    ex.on('extension', function (res) {
      console.log('extension', res)
      if (_this.breakLoop === false) {
        _this.breakLoop = true
        if (res.verb === 'messaged') {
          // console.log('-----' + res.data.action)
          let v = res.data
          v._presencetxt = v.action
          _this.dataExtension[res.id] = v
        } else {
          // console.log('----- update')
          let v = res.data
          let ExLogin = v.q_login
          let ExPaused = v.q_paused
          let ExStatus = v.q_status
          let ExExstatus = v.exstatus
          let ExPresencetxt = v.q_presencetxt

          if (!ExPaused && (ExStatus === 0 || ExStatus === 3 || ExStatus === 4 || ExStatus === 5)) {
            v._isShow = false
          } else if (ExLogin && ExPaused && ExStatus === 1) {
            v._isShow = true
            v._spStatus = _this.exStatusShow.QueueStatus[9].txt
            v._spClassStatus = _this.exStatusShow.QueueStatus[9].class
            v._presencetxt = ExPresencetxt
          } else if (ExLogin && ExStatus && ExStatus !== 5 && ExExstatus !== 4) {
            v._isShow = true
            v._spStatus = _this.exStatusShow.QueueStatus[ExStatus].txt
            v._spClassStatus = _this.exStatusShow.QueueStatus[ExStatus].class
          } else if (ExExstatus >= 0 && typeof ExExstatus !== 'undefined' && ExExstatus !== null && ExExstatus !== 4 && ExExstatus !== 21) {
            v._isShow = true
            v._spStatus = _this.exStatusShow.ExStatus[ExExstatus].txt
            v._spClassStatus = _this.exStatusShow.ExStatus[ExExstatus].class
          } else {
            v._isShow = false
            v._spStatus = _this.exStatusShow.ExStatus[-1].txt
            v._spClassStatus = _this.exStatusShow.ExStatus[-1].class
          }
          _this.dataExtension[res.data['id']] = v
          // console.log(res.data['id'], _this.dataExtension[res.data['id']])
        }
      }
    })
  },

  beforeUpdate () {

  },

  updated () {

  },

  methods: {
    dateTimeNow () {
      const _this = this
      // let a = moment()
      this.dateNow = moment()
      setInterval(_this.dateTimeNow, 1000)
    },
    // time (dt) {
    //   const _this = this
    //   let dta = moment(dt).toArray()
    //   let a = moment()
    //   let b = moment(dta)
    //   setInterval(_this.time, 1000)

    //   return moment.utc(a.diff(b)).format('HH:mm:ss')
    // },
    objToArrayKey (obj, key) {
      const _this = this
      const newArr = {}
      obj.forEach(function (v, i) {
        // let id = v.id
        let ExLogin = v.q_login
        let ExPaused = v.q_paused
        let ExStatus = v.q_status
        let ExExstatus = v.exstatus
        let ExPresencetxt = v.q_presencetxt

        if (!ExPaused && (ExStatus === 0 || ExStatus === 3 || ExStatus === 4 || ExStatus === 5)) {
          v._isShow = false
        } else if (ExLogin && ExPaused && ExStatus === 1) {
          v._isShow = true
          v._spStatus = _this.exStatusShow.QueueStatus[9].txt
          v._spClassStatus = _this.exStatusShow.QueueStatus[9].class
          v._presencetxt = ExPresencetxt
        } else if (ExLogin && ExStatus && ExStatus !== 5 && ExExstatus !== 4) {
          v._isShow = true
          v._spStatus = _this.exStatusShow.QueueStatus[ExStatus].txt
          v._spClassStatus = _this.exStatusShow.QueueStatus[ExStatus].class
        } else if (ExExstatus >= 0 && typeof ExExstatus !== 'undefined' && ExExstatus !== null && ExExstatus !== 4 && ExExstatus !== 21) {
          v._isShow = true
          v._spStatus = _this.exStatusShow.ExStatus[ExExstatus].txt
          v._spClassStatus = _this.exStatusShow.ExStatus[ExExstatus].class
        } else {
          v._isShow = false
          v._spStatus = _this.exStatusShow.ExStatus[-1].txt
          v._spClassStatus = _this.exStatusShow.ExStatus[-1].class
        }
        if (v[key] <= 2600) {
          newArr[v[key]] = v
        }
      })
      return newArr
    },
    objToArrayInstatQueue (obj, key) {
      const newArr = {}
      obj.forEach(function (v, i) {
        newArr[v[key]] = v
      })
      return newArr
    },

    // _getStatus: function (obj) {
    //   // console.log(ExLogin, ExPaused, ExStatus, ExExstatus)
    //   const _this = this
    //   let id = obj.id
    //   let ExLogin = obj.q_login
    //   let ExPaused = obj.q_paused
    //   let ExStatus = obj.q_status
    //   let ExExstatus = obj.exstatus
    //   let ExPresencetxt = obj.q_presencetxt
    //   // _this.data.is_show[id] = true
    //   _this.data.extension.q_presencetxt[id] = ''

    //   if ((ExStatus === 0 || ExStatus === 3 || ExStatus === 4 || ExStatus === 5) && id <= 2300) {
    //     // console.log(id, ExLogin, ExPaused, ExStatus)
    //     _this.data.extension.sp_status[id] = this.exStatusShow.QueueStatus[ExStatus].txt
    //     _this.data.extension.class_status[id] = this.exStatusShow.QueueStatus[ExStatus].class
    //     _this.data.is_show[id] = false
    //   } else if (ExLogin && ExPaused && ExStatus === 1) {
    //     // console.log('1', id, ExLogin, ExPaused, ExStatus)
    //     if (ExStatus && ExStatus !== undefined) {
    //       //  console.log('1-1', id, ExLogin, ExPaused, ExStatus)
    //       // return this.exStatusShow.QueueStatus[9].txt
    //       _this.data.extension.sp_status[id] = this.exStatusShow.QueueStatus[9].txt
    //       _this.data.extension.q_presencetxt[id] = ExPresencetxt
    //       _this.data.extension.class_status[id] = this.exStatusShow.QueueStatus[9].class
    //       _this.data.is_show[id] = true
    //       // console.log('--' + ExPresencetxt)
    //     } else {
    //       // console.log('1-2', id, ExLogin, ExPaused, ExStatus)
    //       // return this.exStatusShow.QueueStatus[0].txt
    //       _this.data.extension.sp_status[id] = this.exStatusShow.QueueStatus[0].txt
    //       _this.data.extension.class_status[id] = this.exStatusShow.QueueStatus[0].class
    //       _this.data.is_show[id] = true
    //     }
    //   } else if (ExLogin && ExStatus && ExStatus !== 5 && ExExstatus !== 4) {
    //     console.log('2', id, ExLogin, ExPaused, ExStatus)
    //     if (ExStatus && ExStatus !== undefined) {
    //       // console.log('2-1', id, ExLogin, ExPaused, ExStatus, ExExstatus)
    //       // return this.exStatusShow.QueueStatus[ExStatus].txt
    //       _this.data.extension.sp_status[id] = this.exStatusShow.QueueStatus[ExStatus].txt
    //       _this.data.extension.class_status[id] = this.exStatusShow.QueueStatus[ExStatus].class
    //       _this.data.is_show[id] = true
    //     } else {
    //       // console.log('2-2', id, ExLogin, ExPaused, ExStatus, ExExstatus)
    //       // return this.exStatusShow.QueueStatus[0].txt
    //       _this.data.extension.sp_status[id] = this.exStatusShow.QueueStatus[0].txt
    //       _this.data.extension.class_status[id] = this.exStatusShow.QueueStatus[0].class
    //       _this.data.is_show[id] = true
    //     }
    //   } else {
    //     // console.log('3', id, ExLogin, ExPaused, ExStatus)
    //     if (ExExstatus >= 0 && typeof ExExstatus !== 'undefined' && ExExstatus !== null) {
    //       // console.log('3-1', id, ExLogin, ExPaused, ExStatus, ExExstatus)
    //       // return this.exStatusShow.ExStatus[ExExstatus].txt
    //       if (ExExstatus !== 4 && ExExstatus !== 21) {
    //         // console.log('3-1-1', id, ExLogin, ExPaused, ExStatus, ExExstatus)
    //         _this.data.extension.sp_status[id] = this.exStatusShow.ExStatus[ExExstatus].txt
    //         _this.data.extension.class_status[id] = this.exStatusShow.ExStatus[ExExstatus].class
    //         _this.data.is_show[id] = true
    //       } else {
    //         // console.log('3-1-2', id, ExLogin, ExPaused, ExStatus, ExExstatus)
    //         _this.data.extension.sp_status[id] = this.exStatusShow.ExStatus[-1].txt
    //         _this.data.extension.class_status[id] = this.exStatusShow.ExStatus[-1].class
    //         _this.data.is_show[id] = false
    //       }
    //     } else {
    //       // console.log('3-2', id, ExLogin, ExPaused, ExStatus, ExExstatus)
    //       // return this.exStatusShow.ExStatus[-1].txt
    //       _this.data.is_show[id] = false
    //       _this.data.extension.sp_status[id] = this.exStatusShow.ExStatus[-1].txt
    //       _this.data.extension.class_status[id] = this.exStatusShow.ExStatus[-1].class
    //     }
    //   }
    // },

    callback () {
      this.breakLoop = false
      console.log('v-for loop finished ' + this.breakLoop)
    }
  },

  directives: {
    forCallback (el, binding) {
      let element = binding.value
      let key = element.key
      let len = 0
      let keys = Object.keys(element.array)
      key = keys.indexOf(key)
      len = keys.length
      // console.log(key + '===' + len)
      if (key === len - 1) {
        if (typeof element.callback === 'function') {
          element.callback()
        }
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
}
table, th ,td {
  border: 1px solid black;
}
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
.success{
  background-color: green;
}
.warning{
  background-color: orangered;
}
.blue{
  background-color: blue;
}
.important{
  background-color: red;
}

.default{
  background-color:grey;
}
</style>

<template>
  <div class="main">
    <div class="container-fluid">
      <div class="row mb-3 border-bottom">
        <div class="col text-left">
          <h1>
            <i class="fa fa-dashboard text-danger" style="font-size:45px;"></i>
            Inbound Agents Monitor
            <i class="fa fa-user text-success" style="font-size:45px;"></i> ({{lengthUserOnline}})
            <i class="fa fa-user text-danger" style="font-size:45px;"></i> ({{lengthUserOffline}})
          </h1>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12 col-lg-6 col-xl">
          <div class="card bg-primary text-white shadow-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <!-- Title -->
                      <h6 class="card-title text-uppercase mb-2">
                         <i class="fa fa-phone" style="font-size:20px;"></i>
                         Call Office
                        </h6>
                  <!-- Heading -->
                  <div class="h1 mb-0">
                    {{(dataQueueSummary['calls']) ? dataQueueSummary['calls'] : 0 | formatNumber}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl">
          <div class="card bg-warning text-white shadow-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <!-- Title -->
                  <h6 class="card-title text-uppercase mb-2">
                    <i class="fa fa-phone" style="font-size:20px;"></i>
                    Waiting
                  </h6>
                  <!-- Heading -->
                  <span class="h1 mb-0">
                    {{(dataQueueSummary['wait']) ? dataQueueSummary['wait'] : 0 | formatNumber}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl">
          <div class="card bg-success text-white shadow-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <!-- Title -->
                  <h6 class="card-title text-uppercase mb-2">
                    <i class="fa fa-phone" style="font-size:20px;"></i>
                    Answer
                  </h6>
                  <!-- Heading -->
                  <span class="h1 mb-0">
                    {{(dataQueueSummary['completed']) ? dataQueueSummary['completed'] : 0 | formatNumber}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl">
          <div class="card bg-danger text-white shadow-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <!-- Title -->
                  <h6 class="card-title text-uppercase mb-2">
                    <i class="fa fa-phone" style="font-size:20px;"></i>
                    Abandon
                  </h6>
                  <!-- Heading -->
                  <span class="h1 mb-0">
                    {{(dataQueueSummary['abandoned']) ? dataQueueSummary['abandoned'] : 0 | formatNumber}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-12 col-lg-6 col-xl">
          <div class="card bg-success text-white shadow-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="card-title text-uppercase mb-2">
                   $ Sale Pre Day
                  </h6>
                  <span class="h1 mb-0">
                    $24,500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>

      <div class="row p-2 mb-0 ml-0 mr-0 bg-primary text-white">
        <div class="col-6 font-weight-bold text-left pt-1">Agents - Statistics</div>
        <div class="col-6 text-right">
          <div class="row">
            <div class="col-6"></div>
            <div class="text-right col-6">
              <b-form-group
            label="Filter : "
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            label-for="selectSpStatus"
            class="mb-0"
          >
            <b-form-select
              v-model="filterSpStatus"
              id="selectSpStatus"
              size="sm"
              :options="['All', 'Not in Use', 'On Hold', 'In Use', 'Paused' ,'Other']"
            ></b-form-select>
          </b-form-group>
            </div>
          </div>
        </div>
        <br>
      </div>
      <b-table id="table-transition" sticky-header :items="dataExtension" :fields="fields" :busy.sync="isBusy"
        :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" striped small hover :tbody-transition-props="transProps"
        :filter="isShow" :filter-function="filterDataShow" ref="table">
        <template v-slot:table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
        <template v-slot:cell(spStatus)="d">
          <div class="text-left">
            <b-button variant="info" size="sm" class="pt-0 pb-0 pl-1 pr-1">
              <i class="fa fa-plus-circle" style="font-size:15px;"></i>
            </b-button>
            <b-badge pill :variant="d.value.class">{{ d.value.text }}</b-badge>
            <template v-if="d.value.presencetxt">{{ d.value.presencetxt }}</template>
          </div>
        </template>
        <template v-slot:cell(lastUpdate)="d">
          {{ d.item.lastUpdate | DiffTimeNow }}
        </template>
        <template v-slot:cell(team)="d">
        </template>
        <template v-slot:cell(agentName)="d">
          {{ d.item.id }}
        </template>
        <template v-slot:cell(lastHangup)="d">
          <template v-if="d.item.lastHangup">{{ d.item.lastHangup | formatDate }} </template>
        </template>
        <template v-slot:cell(instatLogin)="d">
          <template v-if="d.item.instatLogin">{{ d.item.instatLogin | DiffTimeNow  }}</template>
        </template>
        <template v-slot:cell(instatTransfer)="d">
          <template v-if="d.item.instatTransfer !== null">{{ d.item.instatTransfer }} </template>
        </template>
        <template v-slot:cell(instatAnswer)="d">
          <template v-if="d.item.instatAnswer !== null">{{ d.item.instatAnswer }}</template>
        </template>
        <template v-slot:cell(instatMissCall)="d">
          <template v-if="d.item.instatMissCall !== null">{{ d.item.instatMissCall }}</template>
        </template>
        <template v-slot:cell(instatMaxTalk)="d">
          <template v-if="d.item.instatMaxTalk">{{ d.item.instatMaxTalk | millisecondsToTime  }} </template>
        </template>
        <template v-slot:cell(instatAvgTalk)="d">
          <template v-if="d.item.instatAvgTalk">{{ d.item.instatAvgTalk | millisecondsToTime  }}</template>
        </template>
        <template v-slot:cell(instatTotalTalkTime)="d">
          <template v-if="d.item.instatTotalTalkTime">{{ d.item.instatTotalTalkTime | millisecondsToTime  }} </template>
        </template>
        <template v-slot:cell(instatMaxWT)="d">
          <template v-if="d.item.instatMaxWT">{{ d.item.instatMaxWT | millisecondsToTime  }}</template>
        </template>
        <template v-slot:cell(instatAvgWT)="d">
          <template v-if="d.item.instatAvgWT">{{ d.item.instatAvgWT | millisecondsToTime  }}</template>
        </template>
        <template v-slot:cell(instatTotalWT)="d">
          <template v-if="d.item.instatTotalWT">{{ d.item.instatTotalWT | millisecondsToTime  }}</template>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import statusShow from '../assets/status.json'
import moment from 'moment'
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

const apiPbxStatus = {
  url: 'http://192.168.47.28:2994',
  // path: '/socket/pbxstatus/socket.io',
  useCORSRouteToGetCookie: false,
  reconnectionAttempts: 1000,
  autoConnect: true,
  reconnection: true
}

const apiInstatStatus = {
  url: 'http://192.168.47.28:2997',
  // url: 'http://192.168.22.16:8080',
  useCORSRouteToGetCookie: false,
  reconnectionAttempts: 1000,
  autoConnect: true,
  reconnection: true
}

export default {
  name: 'monitor3',
  data () {
    return {
      msg: 'monitor3',
      lengthUserOnline: 0,
      lengthUserOffline: 0,
      sortBy: 'team',
      sortDesc: false,
      dataList: [],
      dataQueueSummary: [],
      dataExtension: [],
      dataInstatqueue: [],
      dataInsQueue: [],
      breakLoop: false,
      exStatusShow: statusShow,
      isBusy: true,
      isShow: 'true',
      filterSpStatus: 'All',
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      fields: [
        { key: 'spStatus', label: 'SP Status', sortable: true },
        { key: 'lastUpdate', label: 'Status Time', sortable: true },
        { key: 'lastHangup', label: 'Last hangup', sortable: true },
        { key: 'team', label: 'Team', sortable: true },
        { key: 'agentName', label: 'Agent Name', sortable: true },
        { key: 'instatLogin', label: 'Adherence Time', sortable: true },
        { key: 'instatTransfer', label: 'Total Transfer', sortable: true },
        { key: 'instatAnswer', label: 'Total Answer', sortable: true },
        { key: 'instatMissCall', label: 'Total Miss call', sortable: true },
        { key: 'instatMaxTalk', label: 'Max Talk', sortable: true },
        { key: 'instatAvgTalk', label: 'Avg. Talk', sortable: true },
        { key: 'instatTotalTalkTime', label: 'Total Talk Time', sortable: true },
        { key: 'instatMaxWT', label: 'Max WT', sortable: true },
        { key: 'instatAvgWT', label: 'Avg. WT', sortable: true },
        { key: 'instatTotalWT', label: 'Total WT', sortable: true }
      ]
    }
  },

  created () {

  },

  mounted () {
    const _this = this
    const Queue = io.sails.connect(apiQueue)
    const ex2 = io.sails.connect(apiPbxStatus)
    const instatSocket = io.sails.connect(apiInstatStatus)
    Queue.get('/queue', function (data, JWR) {
      _this.dataQueueSummary = _this.objToSummary(data)
    })

    instatSocket.get('/instatqueue?limit=0', function (data, JWR) {
      _this.dataInstatqueue = _this.objToArrayInsQueue(data)
      ex2.get('/extension', { limit: 1000 }, function (dataEx, JWR) {
        _this.dataExtension = _this.objToArrayKey(dataEx, 'id')
        _this.isBusy = false
      })
    })
    Queue.on('queue', function (res) {
      if (res.verb === 'updated') {
        if (res.data.id !== '1001') {
          let d = res.data

          _this.dataQueueSummary['calls'] = _this.dataQueueSummary['calls'] + (parseInt(d.calls) - parseInt(_this.dataQueueSummary['queue'][d.id]['calls']))
          _this.dataQueueSummary['abandoned'] = _this.dataQueueSummary['abandoned'] + (parseInt(d.abandoned) - parseInt(_this.dataQueueSummary['queue'][d.id]['abandoned']))
          _this.dataQueueSummary['completed'] = _this.dataQueueSummary['completed'] + (parseInt(d.completed) - parseInt(_this.dataQueueSummary['queue'][d.id]['completed']))
          if (d.wait > parseInt(_this.dataQueueSummary['queue'][d.id]['wait'])) {
            _this.dataQueueSummary['wait'] = parseInt(_this.dataQueueSummary['wait']) + (parseInt(d.wait) - parseInt(_this.dataQueueSummary['queue'][d.id]['wait']))
          } else if (d.wait < parseInt(_this.dataQueueSummary['queue'][d.id]['wait'])) {
            _this.dataQueueSummary['wait'] = parseInt(_this.dataQueueSummary['wait']) - (parseInt(_this.dataQueueSummary['queue'][d.id]['wait']) - parseInt(d.wait))
          } else if (d.wait === 0) {
            _this.dataQueueSummary['wait'] = (parseInt(_this.dataQueueSummary['wait']) - parseInt(_this.dataQueueSummary['queue'][d.id]['wait']))
          }

          _this.dataQueueSummary['queue'][d.id]['calls'] = d.calls
          _this.dataQueueSummary['queue'][d.id]['abandoned'] = d.abandoned
          _this.dataQueueSummary['queue'][d.id]['completed'] = d.completed
          _this.dataQueueSummary['queue'][d.id]['wait'] = d.wait
          _this.dataQueueSummary['queue'][d.id]['id'] = d.id
        }
      }
    })

    // Queue.on('queue', function (res) {
    //   if (res.verb === 'updated') {
    //     let d = res.data
    //     if (_this.dataQueueSummary[d.id] === undefined) {
    //       _this.dataQueueSummary[d.id] = {}
    //     }
    //     _this.dataQueueSummary['queue'][d.id]['calls'] = d.calls
    //     _this.dataQueueSummary['queue'][d.id]['abandoned'] = d.abandoned
    //     _this.dataQueueSummary['queue'][d.id]['completed'] = d.completed
    //     _this.dataQueueSummary['queue'][d.id]['wait'] = d.wait
    //     _this.dataQueueSummary['queue'][d.id]['id'] = d.id

    //     const queue = _this.dataQueueSummary['queue']
    //     // ****** reset data sum
    //     _this.dataQueueSummary['calls'] = 0
    //     _this.dataQueueSummary['abandoned'] = 0
    //     _this.dataQueueSummary['completed'] = 0
    //     _this.dataQueueSummary['wait'] = 0
    //     Object.keys(queue).forEach(function (i) {
    //       if (queue[i].id !== '1001') {
    //         _this.dataQueueSummary['calls'] = parseInt(_this.dataQueueSummary['calls']) + parseInt(queue[i].calls)
    //         _this.dataQueueSummary['abandoned'] = parseInt(_this.dataQueueSummary['abandoned']) + parseInt(queue[i].abandoned)
    //         _this.dataQueueSummary['completed'] = parseInt(_this.dataQueueSummary['completed']) + parseInt(queue[i].completed)
    //         _this.dataQueueSummary['wait'] = parseInt(_this.dataQueueSummary['wait']) + parseInt(queue[i].wait)
    //       }
    //     })
    //   }
    // })

    instatSocket.on('instatqueue', function (res) {
      // console.log('instatqueue=' + instatSocket._isConnecting)
      if (_this.breakLoop === false) {
        if (res.verb === 'updated') {
          let d = res.data
          if (_this.dataInstatqueue[d.extension]['queue'][d.queue] === undefined) {
            // ***** new queue by extension
            _this.dataInstatqueue[d.extension] = {}
            _this.dataInstatqueue[d.extension]['queue'] = {}
            _this.dataInstatqueue[d.extension]['queue'][d.queue] = {}
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['answer'] = (d.answer !== undefined) ? d.answer : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['misscall'] = (d.misscall !== undefined) ? d.misscall : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['transfer'] = (d.transfer !== undefined) ? d.transfer : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['talktime'] = (d.talktime !== undefined) ? d.talktime : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['waittime'] = (d.waittime !== undefined) ? d.waittime : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['maxtalk'] = (d.maxtalk !== undefined) ? d.maxtalk : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['maxwait'] = (d.maxwait !== undefined) ? d.maxwait : 0

            _this.dataInstatqueue[d.extension]['answer'] = parseInt(_this.dataInstatqueue[d.extension]['answer']) + parseInt(d.answer)
            _this.dataInstatqueue[d.extension]['misscall'] = parseInt(_this.dataInstatqueue[d.extension]['misscall']) + parseInt(d.misscall)
            _this.dataInstatqueue[d.extension]['transfer'] = parseInt(_this.dataInstatqueue[d.extension]['transfer']) + parseInt(d.misscall)
            _this.dataInstatqueue[d.extension]['talktime'] = parseInt(_this.dataInstatqueue[d.extension]['talktime']) + parseInt(d.talktime)
            _this.dataInstatqueue[d.extension]['waittime'] = parseInt(_this.dataInstatqueue[d.extension]['waittime']) + parseInt(d.waittime)
            _this.dataInstatqueue[d.extension]['maxtalk'] = (d.maxtalk > _this.dataInstatqueue[d.extension]['maxtalk']) ? _this.dataInstatqueue[d.extension]['maxtalk'] = d.maxtalk : _this.dataInstatqueue[d.extension]['maxtalk']
            _this.dataInstatqueue[d.extension]['maxwait'] = (d.maxwait > _this.dataInstatqueue[d.extension]['maxwait']) ? _this.dataInstatqueue[d.extension]['maxwait'] = d.maxwait : _this.dataInstatqueue[d.extension]['maxwait']
            _this.dataInstatqueue[d.extension]['login'] = (d.login > _this.dataInstatqueue[d.extension]['login']) ? _this.dataInstatqueue[d.extension]['login'] = d.login : _this.dataInstatqueue[d.extension]['login']
            _this.dataInstatqueue[d.extension]['lasthangup'] = (d.lasthangup < _this.dataInstatqueue[d.extension]['lasthangup']) ? _this.dataInstatqueue[d.extension]['lasthangup'] = d.lasthangup : _this.dataInstatqueue[d.extension]['lasthangup']
          } else {
            // ***** update data queue by extension
            _this.dataInstatqueue[d.extension]['answer'] = (parseInt(_this.dataInstatqueue[d.extension]['answer']) - _this.dataInstatqueue[d.extension]['queue'][d.queue]['answer']) + parseInt(d.answer)
            _this.dataInstatqueue[d.extension]['misscall'] = (parseInt(_this.dataInstatqueue[d.extension]['misscall']) - _this.dataInstatqueue[d.extension]['queue'][d.queue]['misscall']) + parseInt(d.misscall)
            _this.dataInstatqueue[d.extension]['transfer'] = (parseInt(_this.dataInstatqueue[d.extension]['transfer']) - _this.dataInstatqueue[d.extension]['queue'][d.queue]['transfer']) + parseInt(d.misscall)
            _this.dataInstatqueue[d.extension]['talktime'] = (parseInt(_this.dataInstatqueue[d.extension]['talktime']) - _this.dataInstatqueue[d.extension]['queue'][d.queue]['talktime']) + parseInt(d.talktime)
            _this.dataInstatqueue[d.extension]['waittime'] = (parseInt(_this.dataInstatqueue[d.extension]['waittime']) - _this.dataInstatqueue[d.extension]['queue'][d.queue]['waittime']) + parseInt(d.waittime)

            _this.dataInstatqueue[d.extension]['maxtalk'] = (d.maxtalk > _this.dataInstatqueue[d.extension]['maxtalk']) ? _this.dataInstatqueue[d.extension]['maxtalk'] = d.maxtalk : _this.dataInstatqueue[d.extension]['maxtalk']
            _this.dataInstatqueue[d.extension]['maxwait'] = (d.maxwait > _this.dataInstatqueue[d.extension]['maxwait']) ? _this.dataInstatqueue[d.extension]['maxwait'] = d.maxwait : _this.dataInstatqueue[d.extension]['maxwait']
            _this.dataInstatqueue[d.extension]['login'] = (d.login > _this.dataInstatqueue[d.extension]['login']) ? _this.dataInstatqueue[d.extension]['login'] = d.login : _this.dataInstatqueue[d.extension]['login']
            _this.dataInstatqueue[d.extension]['lasthangup'] = (d.lasthangup < _this.dataInstatqueue[d.extension]['lasthangup']) ? _this.dataInstatqueue[d.extension]['lasthangup'] = d.lasthangup : _this.dataInstatqueue[d.extension]['lasthangup']

            _this.dataInstatqueue[d.extension]['queue'][d.queue]['answer'] = (d.answer !== undefined) ? d.answer : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['misscall'] = (d.misscall !== undefined) ? d.misscall : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['transfer'] = (d.transfer !== undefined) ? d.transfer : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['talktime'] = (d.talktime !== undefined) ? d.talktime : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['waittime'] = (d.waittime !== undefined) ? d.waittime : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['maxtalk'] = (d.maxtalk !== undefined) ? d.maxtalk : 0
            _this.dataInstatqueue[d.extension]['queue'][d.queue]['maxwait'] = (d.maxwait !== undefined) ? d.maxwait : 0
          }
          // const queue = _this.dataInstatqueue[d.extension]['queue']
          // // ****** reset data sum
          // _this.dataInstatqueue[d.extension]['answer'] = 0
          // _this.dataInstatqueue[d.extension]['misscall'] = 0
          // _this.dataInstatqueue[d.extension]['transfer'] = 0
          // _this.dataInstatqueue[d.extension]['talktime'] = 0
          // _this.dataInstatqueue[d.extension]['waittime'] = 0
          // _this.dataInstatqueue[d.extension]['maxtalk'] = 0
          // _this.dataInstatqueue[d.extension]['maxwait'] = 0
          // Object.keys(queue).forEach(function (i) {
          //   _this.dataInstatqueue[d.extension]['answer'] = _this.dataInstatqueue[d.extension]['answer'] + queue[i].answer
          //   _this.dataInstatqueue[d.extension]['misscall'] = _this.dataInstatqueue[d.extension]['misscall'] + queue[i].misscall
          //   _this.dataInstatqueue[d.extension]['transfer'] = _this.dataInstatqueue[d.extension]['transfer'] + queue[i].misscall
          //   _this.dataInstatqueue[d.extension]['talktime'] = _this.dataInstatqueue[d.extension]['talktime'] + queue[i].talktime
          //   _this.dataInstatqueue[d.extension]['waittime'] = _this.dataInstatqueue[d.extension]['waittime'] + queue[i].waittime
          //   _this.dataInstatqueue[d.extension]['maxtalk'] = (queue[i].maxtalk > _this.dataInstatqueue[d.extension]['maxtalk']) ? _this.dataInstatqueue[d.extension]['maxtalk'] = queue[i].maxtalk : _this.dataInstatqueue[d.extension]['maxtalk']
          //   _this.dataInstatqueue[d.extension]['maxwait'] = (queue[i].maxwait > _this.dataInstatqueue[d.extension]['maxwait']) ? _this.dataInstatqueue[d.extension]['maxwait'] = queue[i].maxwait : _this.dataInstatqueue[d.extension]['maxwait']
          //   _this.dataInstatqueue[d.extension]['login'] = (queue[i].login > _this.dataInstatqueue[d.extension]['login']) ? _this.dataInstatqueue[d.extension]['login'] = queue[i].login : _this.dataInstatqueue[d.extension]['login']
          //   _this.dataInstatqueue[d.extension]['lasthangup'] = (queue[i].lasthangup < _this.dataInstatqueue[d.extension]['lasthangup']) ? _this.dataInstatqueue[d.extension]['lasthangup'] = queue[i].lasthangup : _this.dataInstatqueue[d.extension]['lasthangup']
          // })
        }
      }
    })

    ex2.on('extension', function (res) {
      if (_this.breakLoop === false) {
        if (res.verb === 'updated') {
          if (res.data.id < 3000) {
            let v = res.data
            let ExLogin = v.q_login
            let ExPaused = v.q_paused
            let ExStatus = v.q_status
            let ExExstatus = v.exstatus
            let ExPresencetxt = v.q_presencetxt
            let oldIsShow = _this.dataExtension[v.id]._isShow
            v.spStatus = []

            if (!ExPaused && (ExStatus === 0 || ExStatus === 3 || ExStatus === 4 || ExStatus === 5)) {
              v._isShow = false
            } else if (ExLogin && ExPaused && ExStatus === 1) {
              v._isShow = true
              v.spStatus['text'] = _this.exStatusShow.QueueStatus[9].txt
              v.spStatus['class'] = _this.exStatusShow.QueueStatus[9].class
              v.spStatus['presencetxt'] = ExPresencetxt
            } else if (ExLogin && ExStatus && ExStatus !== 5 && ExExstatus !== 4) {
              v._isShow = true
              v.spStatus['text'] = _this.exStatusShow.QueueStatus[ExStatus].txt
              v.spStatus['class'] = _this.exStatusShow.QueueStatus[ExStatus].class
              v.spStatus['presencetxt'] = ExPresencetxt
            } else if (ExExstatus >= 0 && typeof ExExstatus !== 'undefined' && ExExstatus !== null && ExExstatus !== 4 && ExExstatus !== 21) {
              v._isShow = true
              v.spStatus['text'] = _this.exStatusShow.ExStatus[ExExstatus].txt
              v.spStatus['class'] = _this.exStatusShow.ExStatus[ExExstatus].class
              v.spStatus['presencetxt'] = ExPresencetxt
            } else {
              v._isShow = false
              v.spStatus['text'] = _this.exStatusShow.ExStatus[-1].txt
              v.spStatus['class'] = _this.exStatusShow.ExStatus[-1].class
              v.spStatus['presencetxt'] = ExPresencetxt
            }
            if (v.spStatus['class'] === 'blue') {
              v.spStatus['class'] = 'primary'
            }
            v.lastUpdate = moment()
            if (_this.dataInstatqueue[v.id]) {
              v.lastHangup = (_this.dataInstatqueue[v.id]['lasthangup']) ? _this.dataInstatqueue[v.id]['lasthangup'] : ''
              // v.team = (_this.dataInstatqueue[v.id]['team']) ? _this.dataInstatqueue[v.id]['team'] : ''
              // v.agentName = (_this.dataInstatqueue[v.id]['agentName']) ? _this.dataInstatqueue[v.id]['agentName'] : ''
              v.team = ''
              v.agentName = v.id
              v.instatLogin = (_this.dataInstatqueue[v.id]['login']) ? _this.dataInstatqueue[v.id]['login'] : ''
              v.instatTransfer = (_this.dataInstatqueue[v.id]['transfer']) ? _this.dataInstatqueue[v.id]['transfer'] : 0
              v.instatAnswer = (_this.dataInstatqueue[v.id]['answer']) ? _this.dataInstatqueue[v.id]['answer'] : 0
              v.instatMissCall = (_this.dataInstatqueue[v.id]['misscall']) ? _this.dataInstatqueue[v.id]['misscall'] : 0
              v.instatMaxTalk = (_this.dataInstatqueue[v.id]['maxtalk']) ? _this.dataInstatqueue[v.id]['maxtalk'] : ''
              v.instatAvgTalk = _this.dataInstatqueue[v.id]['talktime'] / _this.dataInstatqueue[v.id]['answer']
              v.instatTotalTalkTime = (_this.dataInstatqueue[v.id]['talktime']) ? _this.dataInstatqueue[v.id]['talktime'] : 0
              v.instatMaxWT = (_this.dataInstatqueue[v.id]['maxwait']) ? _this.dataInstatqueue[v.id]['maxwait'] : ''
              v.instatAvgWT = _this.dataInstatqueue[v.id]['waittime'] / _this.dataInstatqueue[v.id]['answer']
              v.instatTotalWT = (_this.dataInstatqueue[v.id]['waittime']) ? _this.dataInstatqueue[v.id]['waittime'] : 0
            } else {
              v.instatAnswer = 0
              v.instatMissCall = 0
              v.instatTransfer = 0
            }
            _this.dataExtension[v.id] = v
            console.log('!==' + v.id)
            if (v._isShow !== oldIsShow) {
              if (v._isShow === true) {
                _this.lengthUserOnline = _this.lengthUserOnline + 1
                _this.lengthUserOffline = _this.lengthUserOffline - 1
              } else {
                _this.lengthUserOnline = _this.lengthUserOnline - 1
                _this.lengthUserOffline = _this.lengthUserOffline + 1
              }
            }
          }
        }
      }
    })
    setInterval(this.renderData, 1000)
    // console.log(ex2._isConnecting)
    // console.log(instatSocket._isConnecting)
    // console.log(Queue._isConnecting)
  },

  updated () {

  },

  methods: {
    filterDataShow (row, filter) {
      if (row._isShow !== true) {
        return false
      } else {
        if (this.filterSpStatus !== null) {
          if (this.filterSpStatus === 'All') {
            return true
          } else if (this.filterSpStatus === 'Other') {
            if (row.spStatus['text'] !== 'Not in Use' && row.spStatus['text'] !== 'On Hold' && row.spStatus['text'] !== 'In Use' && row.spStatus['text'] !== 'Paused') {
              return true
            } else {
              return false
            }
          } else if (row.spStatus['text'] === this.filterSpStatus) {
            return true
          } else {
            return false
          }
        } else {
          return true
        }
      }
    },
    renderData () {
      this.$refs.table.refresh()
    },
    objToArrayKey (obj, key) {
      const _this = this
      const newArr = []
      obj.forEach(function (v, i) {
        if (v.id < 3000) {
          // let id = v.id
          let ExLogin = v.q_login
          let ExPaused = v.q_paused
          let ExStatus = v.q_status
          let ExExstatus = v.exstatus
          let ExPresencetxt = v.q_presencetxt
          v.spStatus = []

          if (!ExPaused && (ExStatus === 0 || ExStatus === 3 || ExStatus === 4 || ExStatus === 5)) {
            v._isShow = false
          } else if (ExLogin && ExPaused && ExStatus === 1) {
            v._isShow = true
            v.spStatus['text'] = _this.exStatusShow.QueueStatus[9].txt
            v.spStatus['class'] = _this.exStatusShow.QueueStatus[9].class
            v.spStatus['presencetxt'] = ExPresencetxt
          } else if (ExLogin && ExStatus && ExStatus !== 5 && ExExstatus !== 4) {
            v._isShow = true
            v.spStatus['text'] = _this.exStatusShow.QueueStatus[ExStatus].txt
            v.spStatus['class'] = _this.exStatusShow.QueueStatus[ExStatus].class
            v.spStatus['presencetxt'] = ExPresencetxt
          } else if (ExExstatus >= 0 && typeof ExExstatus !== 'undefined' && ExExstatus !== null && ExExstatus !== 4 && ExExstatus !== 21) {
            v._isShow = true
            v.spStatus['text'] = _this.exStatusShow.ExStatus[ExExstatus].txt
            v.spStatus['class'] = _this.exStatusShow.ExStatus[ExExstatus].class
            v.spStatus['presencetxt'] = ExPresencetxt
          } else {
            v._isShow = false
            v.spStatus['text'] = _this.exStatusShow.ExStatus[-1].txt
            v.spStatus['class'] = _this.exStatusShow.ExStatus[-1].class
            v.spStatus['presencetxt'] = ExPresencetxt
          }
          if (v.spStatus['class'] === 'blue') {
            v.spStatus['class'] = 'primary'
          }

          if (v._isShow === true) {
            _this.lengthUserOnline = _this.lengthUserOnline + 1
            // _this.lengthUserOffline = _this.lengthUserOffline - 1
          } else if (v._isShow === false) {
            // _this.lengthUserOnline = _this.lengthUserOnline - 1
            _this.lengthUserOffline = _this.lengthUserOffline + 1
          }

          if (_this.dataInstatqueue[v.id]) {
            v.lastHangup = (_this.dataInstatqueue[v.id]['lasthangup']) ? _this.dataInstatqueue[v.id]['lasthangup'] : ''
            // v.team = (_this.dataInstatqueue[v.id]['team']) ? _this.dataInstatqueue[v.id]['team'] : ''
            // v.agentName = (_this.dataInstatqueue[v.id]['agentName']) ? _this.dataInstatqueue[v.id]['agentName'] : ''
            v.team = ''
            v.agentName = v.id
            v.instatLogin = (_this.dataInstatqueue[v.id]['login']) ? _this.dataInstatqueue[v.id]['login'] : ''
            v.instatTransfer = (_this.dataInstatqueue[v.id]['transfer']) ? _this.dataInstatqueue[v.id]['transfer'] : 0
            v.instatAnswer = (_this.dataInstatqueue[v.id]['answer']) ? _this.dataInstatqueue[v.id]['answer'] : 0
            v.instatMissCall = (_this.dataInstatqueue[v.id]['misscall']) ? _this.dataInstatqueue[v.id]['misscall'] : 0
            v.instatMaxTalk = (_this.dataInstatqueue[v.id]['maxtalk']) ? _this.dataInstatqueue[v.id]['maxtalk'] : 0
            v.instatAvgTalk = _this.dataInstatqueue[v.id]['talktime'] / _this.dataInstatqueue[v.id]['answer']
            v.instatTotalTalkTime = (_this.dataInstatqueue[v.id]['talktime']) ? _this.dataInstatqueue[v.id]['talktime'] : 0
            v.instatMaxWT = (_this.dataInstatqueue[v.id]['maxwait']) ? _this.dataInstatqueue[v.id]['maxwait'] : 0
            v.instatAvgWT = _this.dataInstatqueue[v.id]['waittime'] / _this.dataInstatqueue[v.id]['answer']
            v.instatTotalWT = (_this.dataInstatqueue[v.id]['waittime']) ? _this.dataInstatqueue[v.id]['waittime'] : 0
          } else {
            v.instatAnswer = 0
            v.instatMissCall = 0
            v.instatTransfer = 0
          }
          newArr[v[key]] = v
        }
      })
      return newArr
    },

    objToArrayInsQueue (obj) {
      const newArr = {}
      if (obj.length) {
        obj.forEach(function (vv, i) {
          if (newArr[vv.extension] === undefined) {
            newArr[vv.extension] = {}
          }
          if (newArr[vv.extension]['queue'] === undefined) {
            newArr[vv.extension]['queue'] = {}
          }
          if (newArr[vv.extension]['queue'][vv.queue] === undefined) {
            newArr[vv.extension]['queue'][vv.queue] = {}
          }
          newArr[vv.extension]['queue'][vv.queue]['answer'] = vv.answer
          newArr[vv.extension]['queue'][vv.queue]['misscall'] = vv.misscall
          newArr[vv.extension]['queue'][vv.queue]['transfer'] = vv.transfer
          newArr[vv.extension]['queue'][vv.queue]['talktime'] = vv.talktime
          newArr[vv.extension]['queue'][vv.queue]['waittime'] = vv.waittime
          newArr[vv.extension]['queue'][vv.queue]['maxtalk'] = vv.maxtalk
          newArr[vv.extension]['queue'][vv.queue]['maxwait'] = vv.maxwait

          newArr[vv.extension]['answer'] = (newArr[vv.extension]['answer'] !== undefined) ? parseInt(newArr[vv.extension]['answer']) + parseInt(vv.answer) : vv.answer
          newArr[vv.extension]['misscall'] = (newArr[vv.extension]['misscall'] !== undefined) ? parseInt(newArr[vv.extension]['misscall']) + parseInt(vv.misscall) : vv.misscall
          newArr[vv.extension]['transfer'] = (newArr[vv.extension]['transfer'] !== undefined) ? parseInt(newArr[vv.extension]['transfer']) + parseInt(vv.transfer) : vv.transfer
          newArr[vv.extension]['talktime'] = (newArr[vv.extension]['talktime'] !== undefined) ? parseInt(newArr[vv.extension]['talktime']) + parseInt(vv.talktime) : vv.talktime
          newArr[vv.extension]['waittime'] = (newArr[vv.extension]['waittime'] !== undefined) ? parseInt(newArr[vv.extension]['waittime']) + parseInt(vv.waittime) : vv.waittime
          if (newArr[vv.extension]['maxtalk'] !== undefined) {
            newArr[vv.extension]['maxtalk'] = (vv.maxtalk > newArr[vv.extension]['maxtalk']) ? newArr[vv.extension]['maxtalk'] = vv.maxtalk : newArr[vv.extension]['maxtalk']
          } else {
            newArr[vv.extension]['maxtalk'] = vv.maxtalk
          }
          if (newArr[vv.extension]['maxwait'] !== undefined) {
            newArr[vv.extension]['maxwait'] = (vv.maxwait > newArr[vv.extension]['maxwait']) ? newArr[vv.extension]['maxwait'] = vv.maxwait : newArr[vv.extension]['maxwait']
          } else {
            newArr[vv.extension]['maxwait'] = vv.maxwait
          }
          if (newArr[vv.extension]['login'] !== undefined) {
            newArr[vv.extension]['login'] = (vv.login < newArr[vv.extension]['login']) ? newArr[vv.extension]['login'] = vv.login : newArr[vv.extension]['login']
          } else {
            newArr[vv.extension]['login'] = vv.login
          }
          if (newArr[vv.extension]['lasthangup'] !== undefined) {
            newArr[vv.extension]['lasthangup'] = (vv.lasthangup > newArr[vv.extension]['lasthangup']) ? newArr[vv.extension]['lasthangup'] = vv.lasthangup : newArr[vv.extension]['lasthangup']
          } else {
            newArr[vv.extension]['lasthangup'] = vv.lasthangup
          }
        })
      }

      return newArr
    },

    objToSummary (obj) {
      const newArr = {}
      obj.forEach(function (v, i) {
        if (newArr['queue'] === undefined) {
          newArr['queue'] = {}
        }
        if (newArr['queue'][v.id] === undefined) {
          newArr['queue'][v.id] = {}
        }
        newArr['queue'][v.id]['calls'] = v.calls
        newArr['queue'][v.id]['abandoned'] = v.abandoned
        newArr['queue'][v.id]['completed'] = v.completed
        newArr['queue'][v.id]['wait'] = v.wait
        newArr['queue'][v.id]['id'] = v.id

        if (i > 0) {
          newArr['calls'] = (newArr['calls'] !== undefined) ? parseInt(newArr['calls']) + parseInt(v.calls) : v.calls
          newArr['abandoned'] = (newArr['abandoned'] !== undefined) ? parseInt(newArr['abandoned']) + parseInt(v.abandoned) : v.abandoned
          newArr['completed'] = (newArr['completed'] !== undefined) ? parseInt(newArr['completed']) + parseInt(v.completed) : v.completed
          newArr['wait'] = (newArr['wait'] !== undefined) ? parseInt(newArr['wait']) + parseInt(v.wait) : v.wait
        }
      })
      return newArr
    }
  }
}
</script>

<style scoped>
table#table-transition .flip-list-move {
  transition: transform 1s;
}
table#table-transition{
  font-size: 0.8rem !important;
}
/* table#table-transition > thead > tr > th ,
table#table-transition > thead > tr > .table-b-table-default {
  background-color: brown !important;
  height: 50px !important;
} */
.b-table-sticky-header{
  max-height: 600px;
  font-size: 0.8rem !important;
}
table .badge{
  font-size: 0.8rem !important;
  color: white;
}
</style>

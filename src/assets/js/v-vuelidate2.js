// // mixin.js
// export default {
//   data () {
//     return {
//       mixinData: 1,
//       $vv: {}
//     }
//   },
//   mounted () {
//     console.log('------------', this.d_o_fields)
//     this.abc = 999
//   },
//   methods: {
//     printMixinData () {
//       console.log(this.mixinData)
//     },
//     printDataFromVueFile () {
//       console.log(this.vueData)
//     },
//     $touch2 () {
//       console.log('...$touch....')
//     }
//   }
// }
const vd2 = {
  data () {
    return {
      vv: {}
    }
  },
  mounted () {
    // console.log('----data-----', this._data)
    this.abc = 9999999
    this.vv.$error = true
  },
  $set: function () {
    this.vv = 666
  }
}

const $vv = {
  $touch: function () {
    if (cv === true) {
      Object.keys(this.FieldVuelidate).forEach(key => {
        loopchk(this.FieldVuelidate[key], key)
      })
      reObjVuelidate()
    }
  },
  $check: function () {
    // cv = true
    // console.log()
    // Object.keys(this.FieldVuelidate).forEach(key => {
    //   loopchk(this.FieldVuelidate[key], key)
    // })
    // console.log('$check---')
    // reObjVuelidate()
  },
  FieldVuelidate: ''
}
let cv = false
let pkk = []
let vk = []
let u = []
let c
// let $v
// $v.Fields = {}
// // $v.FieldVuelidate = ''
// $v.Fields = this._data
function typeOf (k) {
  return typeof k
}

function reObjVuelidate () {
  // console.log('----', $vv.FieldVuelidate)
//   Object.keys($vv.FieldVuelidate).forEach(key => {
//     // $vv[key] = $vv.FieldVuelidate[key]
//     this.vv[key] = $vv.FieldVuelidate[key]
//     // console.log($vv.FieldVuelidate[key])
//   })
}

function loopchk (k, pk) {
  let type = typeOf(k)
  const cKey = pk.substring(0, 1)
  if (cKey !== '$') {
    if (type === 'object') {
      if (c === '1') {
        u.splice((-1), 1)
        if (this._data[pk] !== undefined) {
          u = []
        }
      }
      c = '2'
      u.push(pk)

      Object.keys(k).forEach(key => {
        loopchk(k[key], key)
      })
    } else {
      pkk = []
      Object.keys(u).forEach(key => {
        let kv = u[key]
        if (!Object.keys(pkk).length) {
          pkk = this._data[kv]
          vk = $vv.FieldVuelidate[kv]
        } else {
          pkk = pkk[kv]
          vk = vk[kv]
        }
        // if ((Object.keys(u).length - 1) === parseInt(key)) {
        // setVuelidateType(vk)
        // vuelidateType(pk, vk)
        // }
      })
      setVuelidateType(vk)
      vuelidateType(pk, vk)
      c = '1'
    }
  }
}
function vuelidateType (pk, vk) {
  if (vk.$required === true) {
    _required(pkk, vk)
  }
  if (vk.$minLength) {
    _minLength(pkk, vk)
  }
  if (vk.$maxLength) {
    _maxLength(pkk, vk)
  }
  if (vk.$length) {
    _length(pkk, vk)
  }
  // console.log('--', vk)
}

function setVuelidateType (vk) {
  if ((vk.required === true || vk.required === 'true') && vk.$required === undefined) {
    vk.$required = true
  }
  if (vk.minLength && vk.$minLength === undefined) {
    vk.$minLength = vk.minLength
  }
  if (vk.maxLength && vk.$maxLength === undefined) {
    vk.$maxLength = vk.maxLength
  }
  if (vk.length && vk.$length === undefined) {
    vk.$length = vk.length
  }
}

function _required (v, vk) {
  if (v) {
    vk.required = false
    vk.$error = false
  } else {
    vk.required = true
    vk.$error = true
  }
}

function _minLength (v, vk) {
  if (v.length >= vk.$minLength) {
    vk.minLength = false
    vk.$error = false
  } else {
    vk.minLength = true
    vk.$error = true
  }
}

function _maxLength (v, vk) {
  if (v.length >= vk.$maxLength) {
    vk.maxLength = false
    vk.$error = false
  } else {
    vk.maxLength = true
    vk.$error = true
  }
}

function _length (v, vk) {
  if (v.length === vk.$length) {
    vk.length = false
    vk.$error = false
  } else {
    vk.length = true
    vk.$error = true
  }
}

export { vd2, $vv }
export default { vd2, $vv }

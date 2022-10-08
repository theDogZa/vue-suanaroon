/* eslint-disable no-unused-vars */
export const $v = {
  $touch: function () {
    if (cv === true) {
      Object.keys(this.FieldVuelidate).forEach(key => {
        loopchk(this.FieldVuelidate[key], key)
      })
      reObjVuelidate()
    }
  },
  $check: function () {
    cv = true
    Object.keys(this.FieldVuelidate).forEach(key => {
      loopchk(this.FieldVuelidate[key], key)
    })
    console.log('$check---')
    reObjVuelidate()
  },
  Fields: '',
  FieldVuelidate: ''
}

let cv = false
let o = ''
let pkk = []
let vk = []
let u = []
let c
function typeOf (k) {
  return typeof k
}

function loopchk (k, pk) {
  let type = typeOf(k)
  const cKey = pk.substring(0, 1)
  if (cKey !== '$') {
    if (type === 'object') {
      if (c === '1') {
        u.splice((-1), 1)
        if ($v.Fields[pk] !== undefined) {
          u = []
        }
      }
      c = '2'
      u.push(pk)

      Object.keys(k).forEach(key => {
        o = key
        loopchk(k[key], key)
      })
    } else {
      pkk = []
      Object.keys(u).forEach(key => {
        let kv = u[key]
        if (!Object.keys(pkk).length) {
          pkk = $v.Fields[kv]
          vk = $v.FieldVuelidate[kv]
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
function autoRun () {
  $v.$check()

  // console.log('autoRun---')
}
autoRun()

function reObjVuelidate () {
  console.log('----', $v.FieldVuelidate)
  Object.keys($v.FieldVuelidate).forEach(key => {
    $v[key] = $v.FieldVuelidate[key]
    console.log($v.FieldVuelidate[key])
  })
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

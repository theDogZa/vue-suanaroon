$(document).ready(function () {
  $.ajax({
    'url': 'http://103.113.24.35/v1/cti',
    'method': 'POST',
    'dataType': 'json',
    processData: false,
    'contentType': 'application/json',
    'data': JSON.stringify({
      "refuniqueid": "11111111.sdfsf",
      "data": {
        "test": 55557
      },
      "state": {
        "state_code": "SEND",
        "state_desc": "SEND",
        "moduleid": "100",
        "customerid": "100099",
        "functionid": "1111",
        "uniqueid": "1111111sssss"
      }
    })

  }).done(function () {
    console.log('test');
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  })
  queueSocket.get('/queue', function (data, jwr) {
    console.log('queue', jwr, data);
  });
  queueSocket.get('/channel', function (data, jwr) {
    console.log('channel', jwr, data);
  });
  instatSocket.get('/instatqueue', {
    extension: '9362'
  }, function (data, jwr) {
    console.log('instatqueue', jwr, data, {
      extension: '9362'
    });
  });
  /*instatSocket.get('/instatqueue',function(data, jwr) {
    console.log('instatqueue',jwr,data);
  });*/
  instatSocket.get('/instatchannel', function (data, jwr) {
    console.log('instatchannel', jwr, data);
  });

  lastsocket.get('/laststatus', function (data, jwr) {
    console.log('laststatus', jwr, data);
  });
  pbxstatus.get('/extension', {
    limit: 1000
  }, function (data, jwr) {
    console.log('extension', jwr, data);
  });
  /*qcallSocket.get('/test',function(data, jwr) {
    console.log('queuecall',jwr,data);
  });*/
  qcallSocket.get('/queuecall', function (data, jwr) {
    console.log('queuecall', jwr, data);
  });
  queueSocket.on('queue', function (event) {
    console.log('queue', event);
  });
  queueSocket.on('channel', function (event) {
    console.log('channel', event);
  });
  instatSocket.on('instatqueue', function (event) {
    console.log('instatqueue', event);
  });
  instatSocket.on('instatchannel', function (event) {
    console.log('instatchannel', event);
  });
  qcallSocket.on('queuecall', function (event) {
    console.log('queuecall', event);
  });
  lastsocket.on('laststatus', function (event) {
    console.log('laststatus', event);
  });

  pbxstatus.on('extension', function (event) {
    console.log('extension', event);
    /*if(event.data.hasOwnProperty('data') && event.data.data.hasOwnProperty('ivr')){
      console.log('extension:ivr',event.verb);
      console.log('extension:ivr',event.data.data);
    }*/
  });

  pbxstatus.on('reconnection', function () {
    console.log('extension:reconnecttion');
  });
  pbxstatus.on('reconnected', function () {
    console.log('extension:reconnected');
  });
  pbxstatus.on('reconnect', function () {
    console.log('extension:reconnect');
    pbxstatus.get('/extension', {
      limit: 1000
    }, function (data, jwr) {
      console.log('extension', jwr, data);
    });
  });
});
var ud = require('ud');

let state ={ last_observed: 
             [ { time: '5:14 PM', label: 'Unknown place' },
               { time: '5:24 PM', label: 'walking' },
               { time: '5:34 PM', label: 'walking' },
               { time: '5:44 PM', label: 'walking' },
               { time: '5:54 PM', label: 'walking' },
               { time: '6:04 PM', label: 'walking' },
               { time: '6:14 PM', label: 'walking' } ],
             prediction: { Home: 1, walking: 1 } }

// everything in this function will get updated on change
var setup = ud.defn(module, function () {
  let el = require('..')(state)
  document.body.innerHTML=''
  document.body.appendChild(el)
})

// will re-run setup() whenever method changes
setup()

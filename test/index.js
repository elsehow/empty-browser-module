var ud = require('ud');

var state = {
  stuff : 'Cool stuff'
}

// everything in this function will get updated on change
var setup = ud.defn(module, function () {
  let el = require('..')(state)
  document.body.innerHTML=''
  document.body.appendChild(el)
})

// will re-run setup() whenever method changes
setup()

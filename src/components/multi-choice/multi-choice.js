var clickCount = 0

xtag.pseudos.double = {

  action: function(pseudo, event){
    setTimeout(function(){
      clickCount = 0
    },200)
    if (clickCount > 0) console.log('double click!')
    else console.log('single click!')
    clickCount = 1
  }

}

module.exports = {

  content: require('./multi-choice.html'),

  lifecycle: {
    created: function () {

    },
    inserted: function () {

    },
    removed: function () {

    },
    attributeChanged: function (attrName, oldValue, newValue) {

    }
  },
  events: {
    'click:double': function(event){
      console.log('click!', event);
    }
  },
  accessors: {

  },
  methods: {

  }

}

class @DataAttrStorage
  storage = {}

  constructor: ->
    @clear()

  clear: ->
    storage = {}

  get: (dom) -> storage[dom.__data]

  remove: (dom) -> delete storage[dom]

  set: (dom, data) ->
    dom.__data ?= {}
    storage[dom.__data] = data
try {
  !(function(n) {
    var e = n.document
    var t = e.documentElement
    var i = 750
    var d = i / 16
    var o = 'orientationchange' in n ? 'orientationchange' : 'resize'
    var a = function() {
      var n = t.clientWidth || 375; n > 750 && (n = 750)
      t.style.fontSize = n / d + 'px'
    }
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener('DOMContentLoaded', a, !1))
  }(window))
} catch (error) {
  //
}

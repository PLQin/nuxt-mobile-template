/**
 * 动态插入动态脚本
 * @param scripts 动态脚本资源路径，支持url资源路径
 * @returns {Promise<array>}
 */
export async function loadScripts(scripts) {
  function get(src) {
    return new Promise(function(resolve, reject) {
      const el = document.createElement('script')
      el.type = 'text/javascript'
      el.addEventListener('load', function() {
        resolve(src)
      }, false)
      el.addEventListener('error', function() {
        reject(src)
      }, false)
      el.src = src;
      (document.getElementsByTagName('body')[0] || document.getElementsByTagName('head')[0]).appendChild(el)
    })
  }

  const myPromises = scripts.map(async function(script, index) {
    return await get(script)
  })

  return await Promise.all(myPromises)
}

/**
 * 动态插入样式表
 * @param scripts 样式脚本资源路径，支持url资源路径
 * @returns {Promise<array>}
 */
export async function loadStyles(scripts) {
  function get(src) {
    return new Promise(function(resolve, reject) {
      const el = document.createElement('link')
      el.type = 'text/css'
      el.rel = 'stylesheet'
      el.addEventListener('load', function() {
        resolve(src)
      }, false)
      el.addEventListener('error', function() {
        reject(src)
      }, false)
      el.href = src
      document.getElementsByTagName('head')[0].appendChild(el)
    })
  }

  const myPromises = scripts.map(async function(script, index) {
    return await get(script)
  })

  return await Promise.all(myPromises)
}

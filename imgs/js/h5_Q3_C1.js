
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button')
  const tabPanes = document.querySelectorAll('.tab-pane')

  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab')

      tabButtons.forEach(btn => btn.classList.remove('active'))
      tabPanes.forEach(pane => pane.classList.remove('active'))

      this.classList.add('active')
      document.getElementById(tabId).classList.add('active')

      // 添加点击效果
      this.style.transform = 'scale(0.95)'
      setTimeout(() => {
        this.style.transform = 'scale(1)'
      }, 100)
    })
  })
})

// 百度竞价转化追踪
// document.addEventListener('DOMContentLoaded', function () {
//   // 选择所有的 a 标签，而不是仅限于 .login-link
//   var links = document.querySelectorAll('a')

//   links.forEach(function (link) {
//     link.addEventListener('click', function (e) {
//       e.preventDefault()

//       var baseUrl = this.getAttribute('href')

//       // 如果链接不存在或是锚点链接，则不处理
//       if (!baseUrl || baseUrl.startsWith('#')) {
//         return
//       }

//       var urlParams = new URLSearchParams(window.location.search)
//       var bdVid = urlParams.get('bd_vid')
//       var kValue = urlParams.get('k')

//       var newUrl = baseUrl
//       if (bdVid) {
//         newUrl += (baseUrl.includes('?') ? '&' : '?') + 'bd_vid=' + encodeURIComponent(bdVid)
//       }

//       if (kValue) {
//         newUrl += (newUrl.includes('?') ? '&' : '?') + 'k=' + encodeURIComponent(kValue)
//       }

//       newUrl += (newUrl.includes('?') ? '&' : '?') + 's=bd-sealos-marketing-appstore'

//       window.open(newUrl, '_blank')
//     })
//   })
// })


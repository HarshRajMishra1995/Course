
const p = document.getElementById('para')
const head2=document.getElementById('head2')
window.addEventListener('click',function(params) {
  const pStyle = getComputedStyle(p)
  head2.innerHTML="Width "+pStyle.width+" "+" height "+pStyle.height+" "+" Font Size "+pStyle.fontSize
})

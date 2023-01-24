const log = console.log

const barr = document.querySelector("#bar")
log(`bar: ${barr}`)

const yale = document.querySelector("#yale")
log(`before yale: ${yale}`)

const nav = document.querySelector("#navbar")
log(`before yale: ${yale}`)

barr.addEventListener('click',()=>{
  nav.classList.toggle("active")
  yale.classList.toggle("csstarget")
  log(`after yale:`, yale)
  log(`after yale:`, nav)
})
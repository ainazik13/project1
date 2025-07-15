
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal_close')
const modalOpenBtn=document.querySelector('#btn-get')

const open=()=>{
  modal.style.display='block'
  document.body.style.overflow='hidden'
}

const close=()=>{
  modal.style.display='none'
  document.body.style.overflow=''
}

modalOpenBtn.onclick=open
modalCloseBtn.onclick=close
modal.onclick=(event)=>{
  if(event.target===modal){
    close()
  }
}
 window.addEventListener('load', () => {
  setTimeout(open, 10_000);
})

const scroll=()=>{
  if ((window.innerHeight+window.scrollY)>document.body.offsetHeight-1){
    open()
    window.removeEventListener('scroll',scroll)
  }
}

window.addEventListener('scroll',scroll)



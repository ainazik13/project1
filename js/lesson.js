//PHONE BLOCK

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp= /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick=()=> {
    if (regExp.test(phoneInput.value)) {
         phoneResult.innerHTML='OK'
          phoneResult.style.color='green'
    }else {
        phoneResult.innerHTML='ERROR'
          phoneResult.style.color='red'
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab_content_item')
  const blocks = document.querySelectorAll('.tab_content_block')

  if (tabs.length !== blocks.length) {
    return
  }

  let current = [...tabs].findIndex(tab => tab.classList.contains('tab_content_item_active'))
  if (current === -1) current = 0


  blocks.forEach((block, i) => {
    block.style.display = i === current ? 'block' : 'none'
  })

  function setActive(i) {
    tabs[current].classList.remove('tab_content_item_active')
    blocks[current].style.display = 'none'

    tabs[i].classList.add('tab_content_item_active')
    blocks[i].style.display = 'block'

    current = i
  }

  function nextTab() {
    const nextIndex = (current + 1) % tabs.length
    setActive(nextIndex)
  }


  let timer = setInterval(nextTab, 3000)


  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      if (i === current) return
      setActive(i)
      clearInterval(timer)
      timer = setInterval(nextTab, 3000)
    })
  })
})




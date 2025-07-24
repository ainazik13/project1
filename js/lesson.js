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


//Converter

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')
const krwInput = document.querySelector('#krw')

const converter = (element, currency) => {
  element.oninput = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '../data/converter.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.onload = () => {
      const data = JSON.parse(xhr.response)

      const rates = {
        usd: data.usd,
        eur: data.eur,
        krw: data.krw
      }

      const value = parseFloat(element.value)
      if (isNaN(value)) {
        somInput.value = ''
        usdInput.value = ''
        eurInput.value = ''
        krwInput.value = ''
        return
      }


      let somValue
      if (currency === 'som') somValue = value
      else somValue = value * rates[currency]


      if (currency !== 'som') somInput.value = somValue.toFixed(2)
      if (currency !== 'usd') usdInput.value = (somValue / rates.usd).toFixed(2)
      if (currency !== 'eur') eurInput.value = (somValue / rates.eur).toFixed(2)
      if (currency !== 'krw') krwInput.value = (somValue / rates.krw).toFixed(2)


      if (element.value === '') {
        somInput.value = ''
        usdInput.value = ''
        eurInput.value = ''
        krwInput.value = ''
      }
    }
  }
}

converter(somInput, 'som')
converter(usdInput, 'usd')
converter(eurInput, 'eur')
converter(krwInput, 'krw')


const btnPrev=document.querySelector("#btn-prev")
const btnNext=document.querySelector("#btn-next")
const card=document.querySelector(".card")

let numId=1
const maxId=200

// btnNext.onclick=()=>{
//   numId++
//   fetch(`https://jsonplaceholder.typicode.com/todos/${numId}`)
//       .then((response)=>response.json())
//       .then((data)=>{
//         const {title,id,completed}=data
//
//         card.style.borderColor=completed ? "green":"red"
//         card.innerHTML=`
//             <p>${title}<p>
//             <span>${id}<span>
//         `
//       })
// }


function loadCard(id) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => {
      if (!response.ok) throw new Error("Error");
      return response.json();
    })
    .then(data => {
      const { title, id, completed } = data;
      card.style.border = "2px solid";
      card.style.borderColor = completed ? "green" : "red";
      card.innerHTML = `
        <p>${title}</p>
        <p><strong>ID:</strong> ${id}</p>
      `;
    })
    .catch(() => {
      card.innerHTML = "<p></p>";
    });
}

btnNext.onclick = () => {
  numId = numId >= maxId ? 1 : numId + 1;
  loadCard(numId);
};

btnPrev.onclick = () => {
  numId = numId <= 1 ? maxId : numId - 1;
  loadCard(numId);
};


loadCard(numId);


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) throw new Error("Error");
    return response.json();
  })
  .then(data => {
    console.log("post:", data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
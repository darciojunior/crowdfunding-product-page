let btnBookmark = document.querySelector('.btn-bookmark')

function bookmark() {
  btnBookmark.classList.toggle('bookmarked')
  if (btnBookmark.classList.contains('bookmarked')) btnBookmark.innerHTML = '<img src="./images/icon-bookmarked.svg" alt=""> Bookmarked'
  else btnBookmark.innerHTML = '<img src="./images/icon-bookmark.svg" alt=""> Bookmark'
}

const donateCards = document.querySelectorAll('.donate-card');

donateCards.forEach(donateCard => {
  
  let offer = donateCard.querySelector('.offers-left span').innerHTML
  let btnReward = donateCard.querySelector('.btn-select-reward')
  if (offer == 0) {
    donateCard.classList.toggle('disabled')
    btnReward.disabled = true
    btnReward.innerHTML = 'Out of Stock'
  }
})

const borderDonateCards = document.querySelectorAll('.border-card');

borderDonateCards.forEach(donateCard => {
  if (donateCard.firstElementChild.id != 'donate1') {
    let offer = donateCard.querySelector('.offers-left span').innerHTML
    let inputDonate = donateCard.querySelector('input[name=donate]')
    if (offer == 0) {
      donateCard.classList.toggle('disabled')
      inputDonate.disabled = true
    }
  }
})


function closeDonates() {
  document.querySelector('.grey-background').style.display = 'none'
}

const donates = document.querySelectorAll('input[name="donate"]')

donates.forEach(donate => {
  donate.addEventListener("click", function () {
    donates.forEach(don => {
      if (don.nextElementSibling.lastElementChild.classList.contains('enter-pledge')) don.nextElementSibling.lastElementChild.style.display = 'none'
    })
    donate.nextElementSibling.lastElementChild.style.display = 'flex'
  })
})

function openDonates(id) {
  document.querySelector('.grey-background').style.display = 'block'
  document.querySelector('.pop-Content').style.display = 'block'
  document.querySelector('.thanksCard').style.display = 'none'

  document.querySelectorAll('.btn-donation-input').forEach(a => a.value = '')

  if (id != 0) {
    document.getElementById(id).checked = true;
    donates.forEach(don => {
      if (don.nextElementSibling.lastElementChild.classList.contains('enter-pledge')) don.nextElementSibling.lastElementChild.style.display = 'none'
    })
    document.getElementById(id).nextElementSibling.lastElementChild.style.display = 'flex'
  } else {
    donates.forEach(donate => {
      document.getElementById(donate.id).checked = false
      if (donate.nextElementSibling.lastElementChild.classList.contains('enter-pledge')) donate.nextElementSibling.lastElementChild.style.display = 'none'
    })
  }
}


function continueDonation(id) {
  
  let donateValue = Number(document.getElementById(id).nextElementSibling.lastElementChild.lastElementChild.firstElementChild.firstElementChild.value) || Number(document.getElementById(id).nextElementSibling.lastElementChild.lastElementChild.firstElementChild.firstElementChild.getAttribute('placeholder'))
  let totalDonated = Number(document.getElementsByClassName('backed-stats')[0].firstElementChild.innerHTML)
  let totalBackers = Number(document.getElementsByClassName('backed-stats')[1].innerHTML)

  document.getElementsByClassName('backed-stats')[0].firstElementChild.innerHTML = totalDonated + donateValue
  document.getElementsByClassName('backed-stats')[1].innerHTML = totalBackers + 1

  let percentage = (totalDonated + donateValue) / 1000

  document.querySelector('#myinput').value = percentage
  document.querySelector('#myinput').style.background = 'linear-gradient(to right, hsl(176, 50%, 47%) 0%, hsl(176, 50%, 47%) ' + percentage + '%, var(--fundo) ' + percentage + '%, var(--fundo) 100%)'


  let idQuantity = id[id.length - 1] - 2
  
  if (id != 'donate1') {
    document.getElementsByClassName('offers-left')[idQuantity].firstElementChild.innerHTML -= 1
    document.getElementById(id).nextElementSibling.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML -= 1
  }

  document.querySelector('.pop-Content').style.display = 'none'
  document.querySelector('.thanksCard').style.display = 'flex'
}


function closeThanks() {
  document.querySelector('.grey-background').style.display = 'none'
}
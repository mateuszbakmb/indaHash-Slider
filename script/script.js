document.addEventListener('DOMContentLoaded', ()=>{

// could have added all the staff members straight into HTML but decided to use
// vanilla JS so that adding new people in the future becomes easier
const data = [{
    name: 'Basia Sołtysińska',
    pic: './img/1.jpg',
    position: 'Founder',
    location: 'Warsaw',
    mail: '#'
  }, {
    name: 'Włas Chorowiec',
    pic: './img/2.jpg',
    position: 'Founder',
    location: 'Warsaw',
    mail: '#'
  }, {
    name: 'Edyta Leśniewska',
    pic: './img/3.jpg',
    position: 'Head of Human Resources',
    location: 'Warsaw',
    mail: '#'
  }, {
    name: 'Joanna Pawluk',
    pic: './img/4.jpg',
    position: 'Chief Growth Officer (CGO)',
    location: 'London',
    mail: '#'
  }, {
    name: 'David Saunders',
    pic: './img/5.jpg',
    position: 'Business Development',
    location: 'London',
    mail: '#'
  }, {
    name: 'Adam Eldridge',
    pic: './img/1.jpg',
    position: 'Business Development Director US',
    location: 'Los Angeles',
    mail: '#'
  }, {
    name: 'Maha Mahda',
    pic: './img/2.jpg',
    position: 'Chief Business Development Officer (CBDO)',
    location: 'Warsaw',
    mail: '#'
  }, {
    name: 'Elżbieta Kamińska',
    pic: './img/3.jpg',
    position: 'International Client Service Manager',
    location: 'Warsaw',
    mail: '#'
  }, {
    name: 'Karolina Makuch',
    pic: './img/4.jpg',
    position: 'Creation Manager',
    location: 'Warsaw',
    mail: '#'
  }, {
    name: 'Kamil Bolek',
    pic: './img/5.jpg',
    position: 'Head of Communication',
    location: 'Warsaw',
    mail: '#'
  }
]

data.map(person=>{
  //creating all the DOM elements
  const section = document.querySelector('section')
  let staffMember = document.createElement('div')
  staffMember.className = 'staffMember'
  let mail = document.createElement('a')
  mail.href = person.mail
  let mailDiv = document.createElement('div')
  mailDiv.className = 'mail'
  let envelope = document.createElement('i')
  envelope.className = 'fas fa-envelope'
  let filter = document.createElement('div')
  filter.className = 'filter'
  let img = document.createElement('img')
  img.src = person.pic
  img.alt = `Picture of ${person.name}, ${person.position}`
  let blueLayer = document.createElement('div')
  blueLayer.className = 'blueLayer'
  let name = document.createElement('p')
  name.className = 'name'
  name.innerHTML = person.name
  let position = document.createElement('p')
  position.className = 'position'
  position.innerHTML = person.position
  let location = document.createElement('p')
  location.className = 'location'
  location.innerHTML = person.location

//adding created elements to DOM
  staffMember.appendChild(mail)
  mail.appendChild(mailDiv)
  mailDiv.appendChild(envelope)
  staffMember.appendChild(filter)
  filter.appendChild(img)
  filter.appendChild(blueLayer)
  staffMember.appendChild(name)
  staffMember.appendChild(position)
  staffMember.appendChild(location)

  section.appendChild(staffMember)
})

//inspecting staff members/active members
  let active = document.querySelectorAll('.blueLayer')
  active.forEach(elem=>{
    elem.addEventListener("click", function(e){
      let chosenName = e.path[2].children[2].innerHTML
      data.forEach(person=>{
        if(person.name===chosenName){
          //determining which person we chose to make the navigation easier
          let currentPosition = data.indexOf(person)

          //playing with toggling off and on 'hidden' class to take care of appearing
          //and disappearing of elements
          let activeMember = document.querySelector('.activeMember')
          activeMember.classList.remove('hidden')
          document.querySelector('section').classList.add('hidden')
          document.querySelector('header').classList.add('hidden')

          //it's just a simple text so decided to create it all this way
          activeMember.innerHTML =
           `<img class='leftArrow' src="img/angle-left.png" alt="left arrow">
            <img class='rightArrow' src="img/angle-right.png" alt="right arrow">
            <img class='closeX' src="img/close.png" alt="closing X">
            <div class='middlePart'>
              <p class='activePosition'>${person.position}</p>
              <p class='activeName'>${person.name}</p>
            </div>`

          //closing the active member menu
          document.querySelector('.closeX').addEventListener('click',()=> {
            activeMember.classList.add('hidden')
            document.querySelector('section').classList.remove('hidden')
            document.querySelector('header').classList.remove('hidden')
          })

          //navigating to a previous staff member, currentPosition comes in handy
          let leftArrow = document.querySelector('.leftArrow')
          leftArrow.addEventListener('click',()=>{
            currentPosition -= 1;
            if(currentPosition ==-1){
              currentPosition=9
            }
            document.querySelector('.activeName').textContent = data[currentPosition].name
            document.querySelector('.activePosition').textContent = data[currentPosition].position
            //adding a class with some simple animation
            document.querySelector('.activeName').classList.toggle('animatedDown')
            setTimeout( ()=>{document.querySelector('.activeName').classList.toggle('animatedDown')}, 300)
            document.querySelector('.activePosition').classList.toggle('animatedUp')
            setTimeout( ()=>{document.querySelector('.activePosition').classList.toggle('animatedUp')}, 300)

          })

          //navigating to a next staff member
          let rightArrow = document.querySelector('.rightArrow')
          rightArrow.addEventListener('click',()=>{
            currentPosition += 1;
            if(currentPosition ==10){
              currentPosition=0
            }
            document.querySelector('.activeName').textContent = data[currentPosition].name
            document.querySelector('.activePosition').textContent = data[currentPosition].position
            //adding a class with some simple animation
            document.querySelector('.activeName').classList.toggle('animatedDown')
            setTimeout( ()=>{document.querySelector('.activeName').classList.toggle('animatedDown')}, 300)
            document.querySelector('.activePosition').classList.toggle('animatedUp')
            setTimeout( ()=>{document.querySelector('.activePosition').classList.toggle('animatedUp')}, 300)
          })

        }
      })
    })
  })

})

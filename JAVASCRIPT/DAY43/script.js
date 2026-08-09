// let a =  Math.floor(Math.random() * 100)
// let b = Math.floor(a)
// console.log(a);

let box2 = document.getElementById('box2')
let btn = document.getElementById('btn')
let box3 = document.getElementById('box3')
let naamme = document.getElementById('name')
let ipl = document.getElementById('ipl')
let main = document.getElementById('main')
let box1 = document.getElementById('box1')

btn.addEventListener('click', function(){
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    // console.log(c1)
    // console.log(c2)
    // console.log(c3)
    box2.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
    // box2.innerHTML = `rgb(${c1}, ${c2}, ${c3})`
})

naamme.addEventListener('click', function(){
    let naame = ['vedant', 'ashish', 'sumit', 'aman', 'pubg', 'satvik', 'souvik' ]
    let a = Math.floor(Math.random()*naame.length)
    box3.innerHTML = naame[a]
})

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log(arr.length-1);
 
// let naame = ['vedant', 'ashish', 'sumit', 'aman', 'pubg', 'satvik', 'souvik' ]

// console.log(naame.length)

// let a = Math.floor(Math.random()*naame.length)

// console.log(naame[a]);

const iplTeams = [
  {
    teamName: "Chennai Super Kings",
    shortName: "CSK",
    city: "Chennai",
    founded: 2008,
    primaryColor: "Yellow",
    secondaryColor: "Green"
  },
  {
    teamName: "Mumbai Indians",
    shortName: "MI",
    city: "Mumbai",
    founded: 2008,
    primaryColor: "Blue",
    secondaryColor: "Gold"
  },
  {
    teamName: "Royal Challengers Bengaluru",
    shortName: "RCB",
    city: "Bengaluru",
    founded: 2008,
    primaryColor: "Red",
    secondaryColor: "Black"
  },
  {
    teamName: "Kolkata Knight Riders",
    shortName: "KKR",
    city: "Kolkata",
    founded: 2008,
    primaryColor: "Purple",
    secondaryColor: "Gold"
  },
  {
    teamName: "Delhi Capitals",
    shortName: "DC",
    city: "Delhi",
    founded: 2008,
    primaryColor: "Blue",
    secondaryColor: "Red"
  },
  {
    teamName: "Rajasthan Royals",
    shortName: "RR",
    city: "Jaipur",
    founded: 2008,
    primaryColor: "Pink",
    secondaryColor: "Blue"
  },
  {
    teamName: "Sunrisers Hyderabad",
    shortName: "SRH",
    city: "Hyderabad",
    founded: 2013,
    primaryColor: "Orange",
    secondaryColor: "Black"
  }
];

ipl.addEventListener('click',function(){
    let num = Math.floor(Math.random()*iplTeams.length)
    box2.innerHTML = iplTeams[num].teamName
    box2.style.backgroundColor = iplTeams[num].secondaryColor
    box1.style.backgroundColor = iplTeams[num].primaryColor
})

// console.log(iplTeams);
// console.log(iplTeams[3].city,iplTeams[0].teamName);
// console.log(iplTeams[1]);


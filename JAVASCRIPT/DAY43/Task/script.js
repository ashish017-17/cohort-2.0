let main = document.getElementById('main')
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let box5 = document.getElementById('box5')
let btn = document.getElementById('button')


const iplTeams = [
  {
    teamName: "Chennai Super Kings",
    shortName: "CSK",
    city: "Chennai",
    founded: 2008
  },
  {
    teamName: "Mumbai Indians",
    shortName: "MI",
    city: "Mumbai",
    founded: 2008
  },
  {
    teamName: "Royal Challengers Bengaluru",
    shortName: "RCB",
    city: "Bengaluru",
    founded: 2008
  },
  {
    teamName: "Kolkata Knight Riders",
    shortName: "KKR",
    city: "Kolkata",
    founded: 2008
  },
  {
    teamName: "Delhi Capitals",
    shortName: "DC",
    city: "Delhi",
    founded: 2008
  },
  {
    teamName: "Rajasthan Royals",
    shortName: "RR",
    city: "Jaipur",
    founded: 2008
  },
  {
    teamName: "Sunrisers Hyderabad",
    shortName: "SRH",
    city: "Hyderabad",
    founded: 2013
  }
];

btn.addEventListener('click', function(){
    let num = Math.floor(Math.random()*iplTeams.length)
    box2.innerHTML = iplTeams[num].teamName
    box3.innerHTML = iplTeams[num].shortName
    box4.innerHTML = iplTeams[num].city
    box5.innerHTML = iplTeams[num].founded
})
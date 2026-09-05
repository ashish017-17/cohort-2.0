// let arr = [10, 'hello', 30.5, false, 50]

// console.log(arr);

// let obj = {
//     user: 'sarthak',
//     age: 30
// }

// let arr = [
//     {
//         user: 'Sarthak',
//         age: 28,  
//         city: 'Bhopal',
//     },
//     {
//         user: 'Ashish',
//         age: 21,  
//         city: 'Patna',
//     },
//     {
//         user: 'Ritik',
//         age: 18,  
//         city: 'Mumbai',
//     },
//     {
//         user: 'Tanya',
//         age: 24,  
//         city: 'Kolkata',
//     },
// ]

// console.log(arr); 
// console.log(arr[1]);

// let arre = [10, 20, 30, 40]

// let sum = 0

// arre.forEach(function(elem){
//     sum = sum + elem
// })

// console.log(sum);

// let sum = 0

// arr.forEach(function(){
//     console.log(user);
    
// })


const users = [
  {
    fullName: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Software Engineer",
    description: "Full-stack developer passionate about building scalable web applications.",
    tags: ["JavaScript", "React", "Node.js"]
  },
  {
    fullName: "Sophia Williams",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Creative designer focused on crafting simple and beautiful digital experiences.",
    tags: ["Figma", "UI Design", "UX Research"]
  },
  {
    fullName: "Michael Brown",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    profession: "Product Manager",
    description: "Product strategist who enjoys turning ideas into products people love.",
    tags: ["Product", "Strategy", "Agile"]
  },
  {
    fullName: "Emma Davis",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    profession: "Marketing Specialist",
    description: "Digital marketer helping brands grow through creative and data-driven campaigns.",
    tags: ["Marketing", "SEO", "Social Media"]
  },
  {
    fullName: "Daniel Wilson",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Data Scientist",
    description: "Data enthusiast using machine learning and analytics to solve real-world problems.",
    tags: ["Python", "Machine Learning", "Analytics"]
  }
];


//json --> javascript object notation

let sum = ''


users.forEach(function(elem){
  sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

console.log(sum);

let main = document.querySelector('main')

main.innerHTML = sum

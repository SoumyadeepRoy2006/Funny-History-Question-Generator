const question_box= document.getElementById("question")
const generate_button= document.getElementById("generateButton")

const action= 
[
    "Describe",
    "Explain",
    "Analyze",
    "Evaluate",
    "Examine"
]

const figures=
[
    "Subhash Chandra Bose",
    "Gandhi",
    "Nepoleon Bonaparte",
    "Rani Laxmi Bai",
    "Adolf Hitler",
    "George Washington",
    "Alexander",
    "Josheph Stalin",
    "Rabindranath Tagore",
    "Swami Vivekananda"
]

const events=
[
    "women empowerment in India",
    "education in India",
    "science and technology",
    "envirounment and global warming",
    "the American Civil War",
    "the Green Revolution",
    "the Battle of Plassey",
    "the formation of the UNO",
    "the Industrial Revolution",
    "the Independence of India",
    "World War 2",
    "the fall of the Roman Empire" 
]

generate_button.addEventListener("click", ()=>
    {
        question_box.innerText =`${action[Math.floor(Math.random()*action.length)]} the roll of ${figures[Math.floor(Math.random()*figures.length)]} in ${events[Math.floor(Math.random()*events.length)]}`
    }
);
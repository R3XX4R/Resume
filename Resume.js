
const SectionArrow1 = document.getElementById('sectionArrow1')
const SectionArrow2 = document.getElementById('sectionArrow2')
const SectionArrow3 = document.getElementById('sectionArrow3')

const SectionDescription1 = document.getElementById("sectionDescription1")
const SectionDescription2 = document.getElementById("sectionDescription2")
const SectionDescription3 = document.getElementById("sectionDescription3")

let sectionArrowsArray = [SectionArrow1,SectionArrow2,SectionArrow3]
let descriptionsArray = [SectionDescription1,SectionDescription2,SectionDescription3]


function showSectionDescription(sectionArrowsArray,descriptionsArray){
    for(let i = 0; i < sectionArrowsArray.length;i++){
        sectionArrowsArray[i].addEventListener('click', () => {
            if(descriptionsArray[i].classList.contains('hidden')){
                descriptionsArray[i].classList.remove('hidden')
                sectionArrowsArray[i].classList.add('fa-rotate-180') 
            } else {
                descriptionsArray[i].classList.add('hidden')
                sectionArrowsArray[i].classList.remove('fa-rotate-180')
            } 
        })
        }
    }
showSectionDescription(sectionArrowsArray,descriptionsArray)

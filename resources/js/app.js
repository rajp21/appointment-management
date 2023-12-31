
let appointmentForm = document.querySelector('.appointment-form');

let currentTab = 0; 
if(appointmentForm){ 
    let steps = document.querySelectorAll('.appointment-form .step');
    let prevBtn = document.querySelector('.prevBtn'); 
    let nextBtn = document.querySelector('.nextBtn'); 


    if(currentTab == 0){ 
        prevBtn.style.display = "none"; 
    }

    if(currentTab === steps.length){ 
        nextBtn.style.display = "none"; 
    }

    updateStep(0); 

    function updateStep(step){ 
        steps.forEach( (step, ind)=> { 
            if(ind !== currentTab){ 
                step.style.display = "none"; 
            }
        })
    }

    nextBtn.addEventListener('click',(e) => { 
        currentTab = currentTab + 1;
        updateStep(currentTab); 
    }); 
}
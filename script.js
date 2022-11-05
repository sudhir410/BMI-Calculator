let calculate = document.querySelector('.calculate');
let clear = document.querySelector('.clear')
let age = document.querySelector('#age')
let Gender = document.querySelector('#gender')
let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let categoryvalue = document.querySelector('.category')
let bmiResult = document.querySelector('.bmiResult')

// console.log(calculate, clear, age.value, gender.value)

clear.addEventListener('click', () => {
    age.value = ''
    Gender.value = 'Male'
    height.value = ''
    weight.value = ''
})

calculate.addEventListener('click', () => {
  
    if (age.value < 2 || age.value > 120) {
        alert('age should be between 2 to 120')
    }
    else {
        let heightvalue = height.value / 100
        let mass = weight.value
        let bmi = mass / (heightvalue * heightvalue)
        let bmifixedvalue = bmi.toFixed(2)
        let category = ''
        if (bmifixedvalue < 16) {
            category = "Severe Thinness"
        }
        else if (bmifixedvalue >= 16 && bmifixedvalue < 17) {
            category = 'Moderate Thinness'
        }
        else if (bmifixedvalue >= 17 && bmifixedvalue < 18.5) {
            category = "Mild Thinness"
        }
        else if (bmifixedvalue >= 18.5 && bmifixedvalue < 25) {
            category = "Normal"
        }
        else if (bmifixedvalue >= 25 && bmifixedvalue < 30) {
            category = "OverWeight"
        }
        else if (bmifixedvalue >= 30 && bmifixedvalue < 35) {
            category = "Obese class I"
        }
        else if (bmifixedvalue >= 35 && bmifixedvalue <= 40) {
            category = "Obese class II"
        }
        else if (bmifixedvalue > 40) {
            category = "Obese class III"
        }
        categoryvalue.innerHTML = ' ' + category
        bmiResult.innerHTML = ' ' + bmifixedvalue


    }
})

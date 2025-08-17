//++++++++++= project 2 +++++++=====
// this usecase cause empty 
  //  const height =   parseInt(document.querySelector('#height').value)

const form = document.querySelector('form')
form.addEventListener('submit', function(e)
{
    e.preventDefault()
  const height =   parseInt(document.querySelector('#height').value)
  const weight =   parseInt(document.querySelector('#weight').value)
  const results =   document.querySelector('#results')
if(height === ''|| height < 0 || isNaN(height) ){
    results.innerHTML = `please give a valid height ${height}`;
} else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
} else {
   const bmi=  (weight / ( (height * height) / 10000)).toFixed(2)
    // to show the result 
   let message  = `<span><b>${bmi} </b></span> <br>` ;
    if( bmi <= 18.6){
      message += `<span>According to your BMI, you might be underweight </span>`;
    }
    else if( bmi > 18.6 && bmi <= 24.9){
       message += `<span>  According to your BMI, you might be Normal range.</span>`;
    }
    else {
        message  += `<span>According to your BMI, you might be overweight </span>`;
    }
     results.innerHTML = message;
}
});


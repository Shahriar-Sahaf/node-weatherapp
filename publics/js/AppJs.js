const formFetch = document.querySelector('form')
const search =document.querySelector('input')
const massage2=document.querySelector('#massage-2')
const massage1=document.querySelector('#massage-1')




formFetch.addEventListener('submit',(e)=>{
    e.preventDefault()
    const locaton = search.value
    massage2.textContent='Please Wait...'
    massage1.textContent=''
   
    fetch('http://localhost:3000/weather?address='+ locaton).then((response)=>{
        response.json().then((data)=>{

            if (data.error) {
                massage1.textContent = data.error
            }else{
                massage1.textContent=data.location
                massage2.textContent=data.forecast.Tempreture
                 console.log(data.forecast.Tempreture)
                // console.log()
            }
        })
})
})
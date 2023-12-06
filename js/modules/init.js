const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200 ){
        let employees = xhr.response
        for (let employee of employees){
            document.body.innerHTML = `${employee.name} <br>${employee.title} `
        }
    }
}
xhr.open('GET', '/data/employees.json')
xhr.send()
xhr.onerror = (e) => console.log(e.message)

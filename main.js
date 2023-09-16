function addUser(event){
    event.preventDefault()
    let email=document.getElementById("exampleInputEmail1").value
    let phone=document.getElementById("exampleInputPassword1").value
    let obj={
        email,
        phone
    }
    let strObj=JSON.stringify(obj)
    localStorage.setItem("userDetail",strObj)
    let a=localStorage.getItem("userDetail")
    console.log(a)

    

    //console.log(email, phone)
}
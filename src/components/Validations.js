const Validation = (users) =>{
    let errorsmeaasage = {};

    const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(users.fullname === ""){
        errorsmeaasage.fullname="Name Is Required."
    }

    if(users.email === ""){
        errorsmeaasage.email="E-Mail Is Required."
    }
    else if(!emailpattern.test(users.email)){
        errorsmeaasage.email="E-Mail is invalid."
    }
     if(users.password === ""){
    errorsmeaasage.password="Must be at least 6 characters."
     }else if(users.password.length < 5){
    errorsmeaasage.password="Password Must Be Greater Then 6 characters."



}

return errorsmeaasage;
    
}

export default Validation
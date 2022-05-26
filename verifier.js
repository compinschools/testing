function verifyPass(password) {
    if(password == null){
        return false;
    }

    let regex = new RegExp(/[A-Z]/);
    if(!regex.test(password)){
        return false;
    }

    regex = new RegExp(/[a-z]/);
    if(!regex.test(password)){
        return false;
    }

    regex = new RegExp(/[0-9]/);
    if(!regex.test(password)){
        return false;
    }

    if(password.length < 9) {
        return false;
    }

   return true;
}


export {verifyPass}

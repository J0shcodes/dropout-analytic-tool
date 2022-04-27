export const checkPasswordError = error => {
    const errorArray = error.split(' ');
    console.log(errorArray);
    
    for(let i = 0; i <= errorArray; i++) {
        if(errorArray[i] === 'Passwords' || errorArray[i] === 'passwords' || errorArray[i] === 'Password' || errorArray[i] === 'password') {
            return true
        } else {
            return false
        }
    }
}
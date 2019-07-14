let currUserPass = 'UserPass';
let currAdminPass = 'AdminPass';
const minEmailLength = 6;
let minPassLength = 5;

const usersEmail = prompt('Pleace enter your email', '');
if(usersEmail === '' || usersEmail === null) {
  alert('Canceled');
}else if (usersEmail.length < minEmailLength) {
  alert("I don't know any emails having name length less than 6 symbols")
}else if (usersEmail !== 'user@gmail.com' && usersEmail !== 'admin@gmail.com') {
  alert('I don’t know you');
}else {
  let userPassword = prompt('Pleace enter your password', '');
  if (userPassword === '' || userPassword === null) {
      alert('Canceled');
  }else if (usersEmail === 'user@gmail.com' && userPassword === currUserPass ||
    usersEmail === 'admin@gmail.com' && userPassword === currAdminPass) {
      let changePass = confirm('Do you want to change your password?');
      if (changePass) {
        let oldUserPassword = prompt('Pleace enter your current password', '');
        if(oldUserPassword !== userPassword) {
          alert('Wrong current pasword')
        }else {
          const newUserPassword = prompt('Pleace enter your new password', '');
          if (newUserPassword.length < minPassLength) {
            alert('It’s too short password. Sorry.')
          }else {
            const confirmNewUserPassword = prompt('Pleace confirm your new password', '');
            if (newUserPassword !== confirmNewUserPassword) {
              alert('You wrote the wrong password.')
            }else {
              usersEmail === 'user@gmail.com' ?
                currUserPass = confirmNewUserPassword :
                currAdminPass = confirmNewUserPassword;
              alert('You have successfully changed your password.');
            }
          }
        }
      }else {
        alert('You have failed the change.')
      }

  }else {
      alert('Wrong pasword')
  }
}
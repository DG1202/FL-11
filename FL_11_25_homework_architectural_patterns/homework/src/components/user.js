class User {
    constructor(user) {
        this.user = user;
    }
    renderUser() {
        const {name, location, email, phone, picture, timezone, id} = this.user;
        return `             
             <tr>
              <td><img src=${picture} alt="Photo"></td>
              <td>${name}</td>
              <td>${location}</td>
              <td>${email}</td>
              <td>${phone}</td>
              <td>${timezone}</td>
              <td><button class="btn-remove" data-id="${id}">Remove</button></td>
            </tr>`;
    }
}

export default User;

import '../style.scss';
import User from './user';
import LoadMore from './loadMore';

class App {
    constructor(state, body) {
        this.state = state;
        this.body = body;
        this.table = document.createElement('table');
        this.footer = document.createElement('div');
        this.loadMore = new LoadMore(this.state);
        this.tbody = document.createElement('tbody');
    }

    renderApp() {
        this.body.innerHTML = '';
        this.table.innerHTML = `
                   <table>
                    <thead>
                     <tr>
                       <td>Photo</td>
                       <td>Name</td>
                       <td>Address</td>
                       <td>Email</td>
                       <td>Phone number</td>
                       <td>Timezone</td>
                       <td>Action</td>
                     </tr>
                    </thead>
                  </table> `;
        this.body.appendChild(this.table);
        this.footer.innerHTML = this.loadMore.renderLoadMore();
        this.body.appendChild(this.footer);
        if (this.state.data.length) {
            this.tbody.innerHTML =
            this.state.data.slice(0, this.state.showUsers).map((user) => new User(user).renderUser());
        } else {
            this.tbody.innerHTML = `<tr><td colspan="7" class="no-users">No User Found</td></tr>`;
        }
        this.table.appendChild(this.tbody);
    };
}

export default App;



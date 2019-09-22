class Header {
    renderHeader() {
        const header = document.createElement('header');
        header.innerHTML =
      `<div class='header-wrapper'>
         <lable>Search by name:</lable>
         <input type="text" placeholder="Enter user name" class="filter">
      </div>`;
        return header;
    }
}

export default Header;

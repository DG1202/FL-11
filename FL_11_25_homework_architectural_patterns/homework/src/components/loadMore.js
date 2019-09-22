class LoadMore {
    constructor(state) {
        this.state = state;
    }
    renderButton() {
        if (this.state.showUsers < this.state.data.length) {
            return `<button class="load-more__btn" id="btn-load">LOAD MORE</button>`;
        }
        return '';
    }

    renderLoadMore() {
        return (
            `<div class="load-more">
                 <p class="load-more__info">Displayed ${this.state.showUsers} users out of ${this.state.data.length}</p>
                 ${this.renderButton()}
             </div>`
        );
    }
}

export default LoadMore;

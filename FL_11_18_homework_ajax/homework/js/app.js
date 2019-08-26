const preloader = document.getElementById('loader-wrapper');
const usersList = document.getElementById('users-list');
const usersBlock = document.getElementById('users');
const postsBlock = document.getElementById('posts');
const container = document.getElementById('container');
const postsList = document.getElementById('posts-list');
const editUserWindow = document.getElementById('edit-user');
const editUserInput = document.getElementById('changeName');
const saveUserChangesBtn = document.getElementById('save-btn');
const cancelUserChangesBtn = document.getElementById('cencel-btn');
const backToUsersBtn = document.getElementById('back-to-users');
const postsTitle = document.getElementById('posts-title');
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
const userDataUrl = 'https://jsonplaceholder.typicode.com/user/';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
let currItem;
let users = {};
let posts = null;
let comments = null;
container.removeChild(postsBlock);
container.removeChild(editUserWindow);
container.removeChild(preloader);

fetchUsers(usersUrl);

function createUsersList(users) {
	usersList.innerHTML = '';
	users.forEach((user,index) => {
		const listItem = document.createElement('li');
		listItem.classList.add('users-list-item');

		const userName = document.createElement('span');
		userName.innerHTML = user.name;
		userName.onclick = () => {
			postsTitle.innerHTML = `${user.name} posts`;
			fetchUserPosts(user.id)
		};

		const btns = document.createElement('div');
		btns.classList.add('buttons-wrapper');


		const removeBtn = document.createElement('div');
		removeBtn.classList.add('btn');
		removeBtn.classList.add('btn-remove');
		removeBtn.onclick = () => {
			container.appendChild(preloader);
			createUsersList(users);
			fetch(userDataUrl + user.id, {
				method: 'DELETE'
			})
				.then(() => {
					users.splice(index,1);
					createUsersList(users);
				}).catch(err => console.error(err))
				.then(() => {
					container.removeChild(preloader);
				})
		};

		const editBtn = document.createElement('div');
		editBtn.classList.add('btn');
		editBtn.classList.add('btn-edit');
		editBtn.onclick = () => {
			container.appendChild(editUserWindow);
			container.removeChild(usersBlock);
			editUserInput.value = user.name;
			currItem = index;
		};

		listItem.appendChild(userName);
		listItem.appendChild(btns);
		btns.appendChild(editBtn);
		btns.appendChild(removeBtn);

		usersList.appendChild(listItem);
	})
}

async function fetchUsers(url) {
	container.appendChild(preloader);
	try {
		const response = await fetch(url);
		users = await response.json();
		createUsersList(users);
	}catch(err) {
		console.log(err);
	}
	container.removeChild(preloader);
}

function createPostsList(posts, comments) {
	postsList.innerHTML = '';
	container.removeChild(usersBlock);
	container.appendChild(postsBlock);
	posts.forEach(post => {
		const listItem = document.createElement('li');
		listItem.classList.add('posts-list-item');

		const postArticle = document.createElement('article');
		postArticle.classList.add('post-article');

		const postTitle = document.createElement('h3');
		const postBody = document.createElement('p');
		const commentsElement = document.createElement('h3');

		postTitle.innerHTML = post.title;
		postBody.innerHTML = post.body;
		commentsElement.innerHTML = 'Comments';

		const commentList = document.createElement('ul');
		commentList.classList.add('comment-list');
		const currPostComments = comments.filter(comment => comment.postId === post.id);
		currPostComments.forEach(comment => {
			const commentItem = document.createElement('li');
			commentItem.classList.add('comment-list-item');

			const commentTitle = document.createElement('h4');
			const commentBody = document.createElement('p');
			const commentUserEmail = document.createElement('span');

			commentTitle.innerHTML = comment.name;
			commentBody.innerHTML = comment.body;
			commentUserEmail.innerHTML = comment.email;

			commentItem.appendChild(commentTitle);
			commentItem.appendChild(commentBody);
			commentItem.appendChild(commentUserEmail);
			commentList.appendChild(commentItem);
		});
		postArticle.appendChild(postTitle);
		postArticle.appendChild(postBody);
		listItem.appendChild(postArticle);
		listItem.appendChild(commentsElement);
		listItem.appendChild(commentList);
		postsList.appendChild(listItem);
	})
}

function fetchUserPosts(userId){
	if (posts && posts[0].userId === userId) {
		container.removeChild(usersBlock);
		container.appendChild(postsBlock);
		return;
	}
	container.appendChild(preloader);
	let urls = [postsUrl+userId, commentsUrl];
	const promises = urls.map(url => fetch(url)
		.then(y => y.json()));

	Promise.all(promises)
		.then(results => {
			posts = results[0];
			comments = results[1];
			console.log(posts);
			createPostsList(posts, comments);
		})
		.catch(err => console.error(err))
		.then(() => {
			container.removeChild(preloader);
		})
}

const changeUserData = () => {
	if(users[currItem].name === editUserInput.value){
		cencelEditing();
		return;
	}
	users[currItem].name = editUserInput.value;
	createUsersList(users);
	container.appendChild(preloader);
	container.appendChild(usersBlock);
	container.removeChild(editUserWindow);
	fetch(userDataUrl + users[currItem].id, {
		method: 'PUT',
		body: JSON.stringify(users[currItem]),
		headers:{
			'Content-Type': 'application/json'
		}
	})
		.then(res => res.json())
		.then(response => console.log(response))
		.catch(err => console.error(err))
		.then(() => {
				container.removeChild(preloader);
		})
};
const cencelEditing = () => {
	container.appendChild(usersBlock);
	container.removeChild(editUserWindow);
};

const backToUsers = () => {
	container.removeChild(postsBlock);
	container.appendChild(usersBlock);
};

saveUserChangesBtn.onclick = changeUserData;
cancelUserChangesBtn.onclick = cencelEditing;
backToUsersBtn.onclick = backToUsers;






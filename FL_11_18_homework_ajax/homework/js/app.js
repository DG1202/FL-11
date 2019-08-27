const container = document.getElementById('container');

const preloader = document.createElement('div');
preloader.classList.add('loader-wrapper');
const spinner = document.createElement('div');
spinner.classList.add('loader');
preloader.appendChild(spinner);

const usersBlock = document.createElement('div');
usersBlock.classList.add('users');
const usersTitle = document.createElement('h2');
usersTitle.innerHTML = 'Favorite blogers';
const usersList = document.createElement('ul');
usersList.classList.add('users-list');
usersBlock.appendChild(usersTitle);
usersBlock.appendChild(usersList);

const postsBlock = document.createElement('div');
postsBlock.classList.add('posts');
const postsTitle = document.createElement('h2');
const postsList = document.createElement('ul');
postsList.classList.add('posts-list');
const backToUsersBtn = document.createElement('button');
backToUsersBtn.classList.add('back-to-users');
backToUsersBtn.innerHTML = 'Back to users';
postsBlock.appendChild(postsTitle);
postsBlock.appendChild(postsList);
postsBlock.appendChild(backToUsersBtn);

const editUser = document.createElement('div');
editUser.classList.add('edit-user');
const editUserInput = document.createElement('input');
editUserInput.classList.add('edit-user-input');
const cancelUserChangesBtn = document.createElement('div');
cancelUserChangesBtn.classList.add('btn');
const editBtns = document.createElement('div');
editBtns.classList.add('edit-btns');

cancelUserChangesBtn.classList.add('btn-cencel');
const saveUserChangesBtn = document.createElement('div');
saveUserChangesBtn.classList.add('btn');
saveUserChangesBtn.classList.add('btn-save');
editBtns.appendChild(saveUserChangesBtn);
editBtns.appendChild(cancelUserChangesBtn);
editUser.appendChild(editUserInput);
editUser.appendChild(editBtns);

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
const userDataUrl = 'https://jsonplaceholder.typicode.com/user/';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
const catUrl = 'http://aws.random.cat/meow';
let currItem;
let currListItem;
let users = {};
let posts = null;
let comments = null;
let randomCats = [];

fetchUsers(usersUrl);

function createUsersList(users) {
usersList.innerHTML = '';
  users.forEach((user,index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('users-list-item');

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = randomCats[index].file;

    const userName = document.createElement('span');
    userName.innerHTML = user.name;
    userName.onclick = toUserPosts.bind(null, user);

    const btns = document.createElement('div');
    btns.classList.add('buttons-wrapper');

    const removeBtn = document.createElement('div');
    removeBtn.classList.add('btn');
    removeBtn.classList.add('btn-remove');
    removeBtn.onclick = removeItem.bind(null, index);

    const editBtn = document.createElement('div');
    editBtn.classList.add('btn');
    editBtn.classList.add('btn-edit');
    editBtn.onclick = editUserName.bind(null,user,index);

    listItem.appendChild(userInfo);
    userInfo.appendChild(avatar);
    userInfo.appendChild(userName);
    listItem.appendChild(btns);
    btns.appendChild(editBtn);
    btns.appendChild(removeBtn);
    usersList.appendChild(listItem);
  });
  container.appendChild(usersBlock);
}
const catsUrl = Array(10).fill(catUrl);

async function fetchUsers(url) {
container.appendChild(preloader);
  try {
    const response = await fetch(url);
    users = await response.json();
    const promises = catsUrl.map(url => fetch(url).then(response => response.json()));
    const results = await Promise.all(promises);
    randomCats = results;
    createUsersList(users);
  }catch(err) {
    console.log(err);
  }
  container.removeChild(preloader);
}

const toUserPosts = (user) => {
  postsTitle.innerHTML = `${user.name} posts`;
  fetchUserPosts(user.id)
};

const removeItem = (index) => {
  container.appendChild(preloader);
  createUsersList(users);
  fetch(userDataUrl + users[index].id, {
    method: 'DELETE'
  })
  .then(() => {
    users.splice(index,1);
    createUsersList(users);
  }).catch(err => console.log(err))
  .then(() => {
    container.removeChild(preloader);
  })
};

const editUserName = (user, index) => {
  currListItem = document.getElementsByClassName('users-list-item')[index];
  currListItem.appendChild(editUser);
  editUserInput.value = user.name;
  currItem = index;
};

function createPostsList(posts, comments) {
  postsList.innerHTML = '';
  container.removeChild(usersBlock);
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
  });
  container.appendChild(postsBlock);
}

function fetchUserPosts(userId){
  if (posts && posts[0].userId === userId) {
    container.removeChild(usersBlock);
    container.appendChild(postsBlock);
    return;
}
  container.appendChild(preloader);
  let urls = [postsUrl+userId, commentsUrl];
  const promises = urls.map(url => fetch(url).then(response => response.json()));
  Promise.all(promises)
    .then(results => {
		posts = results[0];
		comments = results[1];
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
    return    
  }
  users[currItem].name = editUserInput.value;
  createUsersList(users);
  container.appendChild(preloader);
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
		currListItem.removeChild(editUser);
		container.removeChild(preloader);
	})
};
const cencelEditing = () => {
currListItem.removeChild(editUser);
};

const backToUsers = () => {
container.removeChild(postsBlock);
container.appendChild(usersBlock);
};

saveUserChangesBtn.onclick = changeUserData;
cancelUserChangesBtn.onclick = cencelEditing;
backToUsersBtn.onclick = backToUsers;






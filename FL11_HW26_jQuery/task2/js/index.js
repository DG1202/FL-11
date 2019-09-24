const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

 function renderTasks() {
    $('li').remove();
    if(todos.length > 0) {
      for (i = 0; i < todos.length; i++) {
        $list.append(
        `<li class="item">
            <span class="item-text">${todos[i].text}</span>
            <button class="item-remove">Remove</button>
         </li>`);
         if(!!todos[i].done) {
          $('.item-text').eq(i).addClass('done')
         }
      }
    }
  }
renderTasks();

$add.on('click',  function(e){
   e.preventDefault();
   if($input.val().trim() === ''){
     return;
   }
   const todoText = $input.val();
   $input.val('');
   todos.push({text: todoText, done: false});
   renderTasks();
});

$(document).on('click', '.item-remove', function(){
  const curItem = $( "li" ).index(this.closest('li'));
  todos.splice(curItem,1);
  renderTasks();
});

$(document).on('click', '.item-text', function(){
  const curItem = $( "li" ).index(this.closest('li'));
  todos[curItem].done = true;
  renderTasks();
});






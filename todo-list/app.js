$(document).ready(function() {
  const $todoUl = $('.todo ul');
  const $form = $('.todo form');
  const $input = $('.todo input[type=text]');
  
  // Create a new To-do and append to ul
  const createTodo = text => $(`
    <li class="list-group-item list-group-item-action"> 
      <label class="checkbox-label">
        <input type="checkbox">
        <span class=""></span>
      </label>
      <span class="todo-text">${text}</span>
    </li>
  `);

  // Makes sure only one todo item can be edited at a time
  const makeAllTodosHaveNoEditInput = () => {
    $('li').each(function() {
      if($(this).hasClass('edit')) {
        $(this).children('button').remove();
        const text = $(this).children('input').val();
        $(this).children('input').remove();
        $(this).append(`<span class="todo-text">${text}</span>`).removeClass('edit');
      }
    });
  }
  
  // Save a new todo item to the list
  $form.on('submit', function(e) {
    e.preventDefault();
    const value = $input.val();
    if(value != '') {
      // Make sure no other todo item is in edit mode when new todo submitted
      makeAllTodosHaveNoEditInput();
      $todoUl.append(createTodo($input.val()));
      $input.val('');
    }
  })
  
  /* Checkbox functionality - when checked, 
     todo text is crossed out and todo is removed after 1 second */
  $todoUl.on('change', function(e) {
    if(e.target.tagName === 'INPUT' && e.target.hasAttribute('type', 'checkbox')) {
      makeAllTodosHaveNoEditInput();
      $(e.target)
        .parent()
        .next()
        .css('text-decoration', 'line-through')
        .parent()
        .delay(600)
        .fadeOut(400, function() {
          $(this).remove();
        });
    }
  });

  // Edit a todo item when you click on it
  $todoUl.on('click', function(e) {
    let text = '';
    if(e.target.tagName === 'LI' || e.target.className === 'todo-text') {
      // Makes sure only one todo item can be edited at a time
      makeAllTodosHaveNoEditInput();
      // Save the selected li even when the inner span inside the selected li is clicked
      let $li = e.target.tagName === 'LI' ? $(e.target) : $(e.target).parent();
      // Make the todo item editable
      if(!$($li).hasClass('edit')) {
        $($li).addClass('edit');
        text = $($li).children('span').text();
        $($li).children('span').remove();
        $($li).append(`<input value='${text}'></input><button type="submit">Save</button>`);
      }
    } else if(e.target.tagName === 'BUTTON') {
      // Save edited text on the selected todo item by clicking the Save button
      const button = e.target;
      const text = $(button).prev().val();
      $(button)
        .parent()
        .append(`<span class="todo-text">${text}</span>`)
        .removeClass('edit');
      $(button).prev().remove();
      $(button).remove();
    }

  });

});
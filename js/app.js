//inputの中身処理
$('.js-add-todo').on('click', function(e) {
  console.log('TODO追加ボタンを押しました');

  //inputの中身を取得して空にする
  var text = $('.js-get-val').val();
  $('.js-get-val').val('');
  //入力が空の場合
  if(!text) {
    $('.js-toggle-error').show().css('display', 'block');
    console.log('入力がありません');
    return;
  }
  
  //エラーを隠す(表示されるかもしれない)
  $('.js-toggle-error').hide();

  //listItemのhemlを生成してタスクに追加
  var listItem = '<li class="list__item list__item--todo js-todo_list-item" data-text="' + text + '">' +
                 '<i class="far fa-square icon icon-check js-click-done" area-hidden="true"></i>' +
                 '<span class="error js-edit-error">入力がありません</span>' +
                 '<span class="list__text js-todo_list-text">' + text + '</span>' +
                 '<input type="text" class="edit__text edit__text--todo js-todo_list-editform" value="' + text + '">' + 
                 '<i class="fas fa-edit icon icon-save js-click-edit" area-hidden="true"></i>' +
                 '<i class="fa fa-trash icon icon-trash js-click-trash" area-hidden="true"></i>' + 
                 '</li>';

  $('.js-todo_list').prepend(listItem);
  console.log('タスク追加しました');
});

//空ボックスアイコンを押したらDoneにする
$(document).on('click', '.js-click-done', function() {
  console.log('空ボックスを押しました');

  $(this).removeClass('fa-square').addClass('fa-check-square')
    .removeClass('js-click-done').addClass('js-click-todo')
    .siblings('.js-todo_list-text').css("text-decoration", "line-through")
    .closest('.js-todo_list-item').addClass('list__item--done');
    
});

//チェックボックスアイコンを押したらTODOにする
$(document).on('click', '.js-click-todo', function() {
  console.log('チェックボックスを押しました');

  $(this).removeClass('fa-check-square').addClass('fa-square')
    .removeClass('js-click-todo').addClass('js-click-done')
    .siblings('.js-todo_list-text').css("text-decoration", "none")
    .closest('.js-todo_list-item').removeClass('list__item--done');
});

//editボタンを押したらテキストを修正できるようにする
$(document).on('click', '.js-click-edit', function () {

  $(this).removeClass('fa-edit').addClass('fa-save')
    .removeClass('js-click-edit').addClass('js-click-save')
    .siblings('.js-todo_list-text').hide().siblings('.js-todo_list-editform').show();
  console.log('修正フォームを出しました');
});

//saveボタンを押したらテキストを反映させる
$(document).on('click', '.js-click-save', function () {

  var text = $(this).siblings('.js-todo_list-editform').val();
  //入力が空の場合
  if (!text) {
    $(this).siblings('.js-edit-error').show().css('display', 'block');
    console.log('入力がありません');
    return;
  }
  $('.js-edit-error').hide();

  var $this = $(this).siblings('.js-todo_list-editform');
  $this.hide().siblings('.js-todo_list-text').text($this.val()).show();
  console.log('テキストを修正しました');
  
  $(this).removeClass('fa-save').addClass('fa-edit')
    .removeClass('js-click-save').addClass('js-click-edit');
  console.log('アイコンを戻しました');
  
});

//ゴミ箱アイコンを押したらタスクを削除
$(document).on('click', '.js-click-trash', function() {
  console.log('ゴミ箱アイコンを押しました');

  var result = confirm('TODOを削除します。よろしいですか？');
  if(result) {
    $(this).closest('.js-todo_list-item').fadeOut('slow', function () {
      this.remove();
    });
    console.log('TODOを削除しました');
  }else{
    console.log('TODO削除をキャンセルしました');
  }
});
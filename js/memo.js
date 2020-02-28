//inoutの中身処理
$('.js-add-memo').on('click', function(e) {
  console.log('TODO追加ボタンを押しました');

  //inputの中身を取得して空にする
  var text = $('.js-get-val-memo').val();
  $('.js-get-val-memo').val('');
  //入力が空の場合
  if(!text) {
    $('.js-toggle-error-memo').show().css('display', 'block');
    console.log('入力がありません');
    return;
  }
  
  //エラーを隠す(表示されるかもしれない)
  $('.js-toggle-error-memo').hide();

  //listItemのhemlを生成してタスクに追加
  var listItem = '<li class="list__item list__item--memo js-memo_list-item" data-text="' + text + '">' +
                 '<span class="error js-edit-error-memo">入力がありません</span>' +
                 '<span class="list__text js-memo_list-text">' + text + '</span>' +
                 '<textarea class="edit__text edit__text--memo js-memo_list-editform" rows="3">' + text + '</textarea>' + 
                 '<i class="fas fa-edit icon icon-save js-click-edit-memo" area-hidden="true"></i>' +
                 '<i class="fa fa-trash icon icon-trash js-click-trash-memo" area-hidden="true"></i>' + 
                 '</li>';

  $('.js-memo_list').prepend(listItem);
  console.log('タスク追加しました');
});

//editボタンを押したらテキストを修正できるようにする
$(document).on('click', '.js-click-edit-memo', function () {

  $(this).removeClass('fa-edit').addClass('fa-save')
    .removeClass('js-click-edit-memo').addClass('js-click-save-memo')
    .siblings('.js-memo_list-text').hide().siblings('.js-memo_list-editform').show();
  console.log('修正フォームを出しました');
});

//saveボタンを押したらテキストを反映させる
$(document).on('click', '.js-click-save-memo', function () {

  var text = $(this).siblings('.js-memo_list-editform').val();
  //入力が空の場合
  if (!text) {
    $(this).siblings('.js-edit-error-memo').show().css('display', 'block');
    console.log('入力がありません');
    return;
  }
  $('.js-edit-error-memo').hide();

  var $this = $(this).siblings('.js-memo_list-editform');
  $this.hide().siblings('.js-memo_list-text').text($this.val()).show();
  console.log('テキストを修正しました');

  $(this).removeClass('fa-save').addClass('fa-edit')
    .removeClass('js-click-save-memo').addClass('js-click-edit-memo');
  console.log('アイコンを戻しました');
});

//ゴミ箱アイコンを押したらタスクを削除
$(document).on('click', '.js-click-trash-memo', function () {
  console.log('ゴミ箱アイコンを押しました');

  var result = confirm('MEMOを削除します。よろしいですか？');
  if (result) {
    $(this).closest('.js-memo_list-item').fadeOut('slow', function () {
      this.remove();
    });
    console.log('MEMOを削除しました');
  } else {
    console.log('MEMO削除をキャンセルしました');
  }
});
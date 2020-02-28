$(function () {
  // ナビの範囲外のどこかをクリックしたときに発動
  $(document).on('click', function (e) {
    console.log('画面をクリックしました');
    if ($('.js-todo_list-editform').is(':visible')) {
      // ナビが表示されていたらcloseを実行
      $('.js-todo_list-editform').trigger('click');
    } else {
      // ナビが非表示の場合は起動しない
      e.stopPropagation();
    }
  });
});
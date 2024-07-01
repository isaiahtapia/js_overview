const $saveBtn = $('#save-note')

function createNote(){
  const $titleInput = $('title-input');
  const $textInput= $('textInput');
  const $dateInput= $('dateInput');

  console.log($titleInput.val())
  console.log($textInput.val())
  console.log($dateInput.val())
}

$saveBtn.on('click', createNote);
$('#date-input').datepicker();

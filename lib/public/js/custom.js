M.AutoInit();
$(document).ready(function(){
    $('#createFolderModal').click(function() {
            $('#modal-createFolder').modal('open');
    })

    $('.close-createFolder').click(function() {
        $('#modal-createFolder').modal('close');
    })

    $('#upload').click(function() {
        $('#uploadFileModal').modal('open');
    })
    $('.close-upload').click(function() {
        $('#uploadFileModal').modal('close');
    })

    $('#rename').click(function() {
        $('#renameModal').modal('open');
    })
    $('.close-rename').click(function() {
        $('#renameModal').modal('close');
    })

    $('#move').click(function() {
        $('#moveModl').modal('open');
    })
    $('.close-move').click(function() {
        $('#moveModal').modal('close');
    })

    $('#archive').click(function() {
        $('#archiveModal').modal('open');
    })
    $('.close-archive').click(function() {
        $('#archiveModal').modal('close');
    })

    $(document).ready(function(){
        $('.fixed-action-btn').floatingActionButton();
      });
});
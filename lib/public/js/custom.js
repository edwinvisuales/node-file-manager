$(document).ready(function(){
    M.AutoInit();
    M.updateTextFields();
    $('#createFolderModal').click(function() {
            $('#modal-createFolder').modal('open');
    })
    $('.close-createFolder').click(function() {
        $('#modal-createFolder').modal('close');
    })
    $('#upload').click(function() {
        $('#modal-chooseUpload').modal('open');
    })
    $('.close-chooseUpload').click(function() {
        $('#modal-chooseUpload').modal('close');
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
    $('.fixed-action-btn').floatingActionButton();
    $('.sidenav').sidenav();
});
function closeUpload(){
    $(document).ready( function() {
        $('#modal-chooseUpload').modal('close');
     });
}
function submitUploadImage() {
    $(document).ready( function() {
        $('#submitImage').click()
    });
};

function submitUploadVideo() {
    $(document).ready( function() {
        $('#submitVideo').click()
    });
};
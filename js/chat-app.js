function StartChat(id){
    document.getElementById('chatPanel').removeAttribute('style');
    document.getElementById('divStart').removeAttribute('style','display:none');

    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}

function showChatList(){
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');
}
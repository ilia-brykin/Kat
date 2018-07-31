function saveNote()
{
    var name = document.getElementById('notename').value;
    var content = document.getElementById('notecontent').value;
    if (content === '')
    {
        alert('enter valid note text');
    } else
    {
        if (name === 0)
        {
            alert('enter valid note name');
        } else
        {
            localStorage[name] = content;
            listLoad();
        }
    }
}

function listLoad()
{
    var list = document.getElementById('notes');
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for (var i in localStorage)
    {
        var a = document.createElement('a');
        a.setAttribute('onclick', "loadNote('" + i + "'); return false;");
        a.innerText = i;
        var element = document.createElement('li');
        element.appendChild(a);
        list.appendChild(element);
    }
}

function loadNote(v)
{
    document.getElementById('notecontent').value = localStorage[v];
    document.getElementById('notename').value = v;
}

function deleteNote()
{
    var name = document.getElementById('notename').value;
    if (name !== '')
    {
        localStorage.removeItem(name);
        listLoad();
    } else
    {
        alert('note not found');
    }

}
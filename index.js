let heart= document.getElementById('like')
let comment = document.getElementById('comm')
let del = document.getElementById('delete')


// function one 
function like(){
    if(heart.style.color == ""){
        heart.style.color="red"
        }else {
            heart.style.color=""
            }
}

// function two 
function toggleCommentBox() {
    let card = document.getElementById('center');
    let commentBox = document.getElementById('commentbox');
    if (commentBox) {
        card.removeChild(commentBox);
    } else {
        // make a div
        let divv = document.createElement('div');
        divv.setAttribute('id', 'commentbox');
        divv.innerHTML =
            `<form onsubmit="submitComment()">
                <input type="text" id="comment">
                </br><button type="submit">Submit</button>
            </form>`;
        card.appendChild(divv);
    }
}

function submitComment() {
    let card = document.getElementById('center');
    let com = document.getElementById('comment').value;
    let commentDiv = document.createElement('div');
    commentDiv.innerHTML = `${com} <button onclick="deleteComment(this)">Delete</button>`;
    card.appendChild(commentDiv);
    let commentBox = document.getElementById('commentbox');
    card.removeChild(commentBox);
}
function deleteComment(button) {
    let card = document.getElementById('center');
    let commentDiv = button.parentNode;
    card.removeChild(commentDiv);
}



// 3 fuction three
function share(){
    window.open('https://www.instagram.com/','_blank')
}


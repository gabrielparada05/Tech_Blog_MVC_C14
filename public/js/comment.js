const newCommentButton = document.getElementById('new-comment-btn');
const commentForm = document.getElementById('comment-form');

newCommentButton.addEventListener('click', () => {
  commentForm.style.display = 'block';
});


const commentHandler = async (event) => {
  event.preventDefault();

 
  const comment = document.querySelector('#comment').value.trim();
  const postId = document.querySelector('#thisId').value;


  if (comment) {

   
    const response = await fetch(`/api/post/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Comment Added');
      document.location.replace(`/post/${postId}`);
    } else {
      alert("Something went wrong. Can't add comment");
    }
  }
};



document
  .querySelector('#submitComment')
  .addEventListener('submit', commentHandler);
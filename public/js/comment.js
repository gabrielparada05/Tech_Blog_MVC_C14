
var commentBtn = document.getElementById("new-comment-btn");
var commentForm = document.getElementById("comment-form");

commentBtn.addEventListener("click", function() {
  commentForm.style.display = "block";
});

async function commentFormHandler(event) {
  event.preventDefault();

  const comment = document.querySelector('#comment').value.trim();

  const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  const user_id = document.querySelector('#comment').value;
  
  if (comment) {
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
              comment_content: comment,
              user_id: user_id,
              post_id: post_id,
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          document.location.reload();

      } else {
          alert(response.statusText);
          document.querySelector('#comment-form').style.display = "block";
      }
  }
}

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);

document
  .querySelector('#submitComment')
  .addEventListener('submit', commentFormHandler);
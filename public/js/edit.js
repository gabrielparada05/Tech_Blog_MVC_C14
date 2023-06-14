
var editBtn = document.getElementById("edit-button");




async function commentFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  const user_id = document.querySelector('#value-id').value;
  
 {
      const response = await fetch(`/api/post/${post_id}`, {
          method: 'PUT',
          body: JSON.stringify({
              content: content,
              title: title,
              user_id:user_id
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
        document.location.replace('/profile');

      } else {
          alert(response.statusText);
          document.querySelector('#comment-form').style.display = "block";
      }
      console.log
  }
}



editBtn.addEventListener('submit', commentFormHandler);
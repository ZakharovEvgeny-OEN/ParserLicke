document.getElementById('countBtn').addEventListener('click', countLike);
function countLike(){
    const posts = document.querySelectorAll('.post');
    let totalLikes = 0;
    
    posts.forEach(post => {
      const author = post.querySelector('.post-author')?.textContent.trim();
      const likesText = post.querySelector('.post-likes')?.textContent.trim();
    
      if (author === '@art_creator') {
        // Извлекаем число из строки типа "❤️ 42 лайка"
        const likes = parseInt(likesText.match(/\d+/)?.[0]) || 0;
        totalLikes += likes;
      }
    });
    const results=document.getElementById('result')
    results.innerHTML=`<p>У автора @art_creator общее кол-во лайков = ${ totalLikes}<P/>`
    
}


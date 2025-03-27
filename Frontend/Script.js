document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("post-form");
    const postTitle = document.getElementById("post-title");
    const postContent = document.getElementById("post-content");
    const postList = document.getElementById("post-list");

    postForm.addEventListener("submit", (event) => {
        event.preventDefault();
        createPost(postTitle.value, postContent.value);
        postTitle.value = "";
        postContent.value = "";
    });

    function createPost(title, content) {
        if (!title || !content) return;

        const post = document.createElement("div");
        post.classList.add("post");

        const postHeader = document.createElement("h3");
        postHeader.textContent = title;

        const postBody = document.createElement("p");
        postBody.textContent = content.length > 60 ? content.substring(0, 60) + "..." : content;

        const deletePostButton = document.createElement("button");
        deletePostButton.textContent = "🗑️ Delete Post";
        deletePostButton.classList.add("delete-btn");
        deletePostButton.addEventListener("click", () => {
            post.remove();
        });

        const commentSection = document.createElement("div");
        commentSection.classList.add("comments");

        const commentList = document.createElement("ul");

        const commentForm = document.createElement("form");
        const commentInput = document.createElement("input");
        commentInput.setAttribute("type", "text");
        commentInput.setAttribute("placeholder", "Write a comment...");
        const commentButton = document.createElement("button");
        commentButton.textContent = "💬 Comment";

        commentForm.appendChild(commentInput);
        commentForm.appendChild(commentButton);
        commentSection.appendChild(commentList);
        commentSection.appendChild(commentForm);

        commentForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (commentInput.value.trim() !== "") {
                const comment = document.createElement("li");
                comment.textContent = commentInput.value;

                const deleteCommentButton = document.createElement("button");
                deleteCommentButton.textContent = "❌";
                deleteCommentButton.classList.add("delete-btn");
                deleteCommentButton.addEventListener("click", () => {
                    comment.remove();
                });

                comment.appendChild(deleteCommentButton);
                commentList.appendChild(comment);
                commentInput.value = "";
            }
        });

        post.appendChild(postHeader);
        post.appendChild(postBody);
        post.appendChild(deletePostButton);
        post.appendChild(commentSection);

        postList.appendChild(post);
    }
});

const postBtn = document.getElementById("postBtn");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

postBtn.addEventListener("click", () => {

  const text = messageInput.value;

  if (text.trim() === "") {
    alert("Please type a message");
    return;
  }

  // Create message container
  const newMessage = document.createElement("div");
  newMessage.classList.add("message");

  // Create message text
  const messageText = document.createElement("span");
  messageText.textContent = text;

  // Create edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", () => {

    const editedText = prompt(
      "Edit your message:",
      messageText.textContent
    );

    if (editedText !== null && editedText.trim() !== "") {
      messageText.textContent = editedText;
    }

  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    newMessage.remove();
  });

  // Add text and buttons
  newMessage.appendChild(messageText);
  newMessage.appendChild(editBtn);
  newMessage.appendChild(deleteBtn);

  // Add message to page
  messages.appendChild(newMessage);

  // Clear input
  messageInput.value = "";

});
// Register Service Worker
if("serviceWorker" in navigator){

  window.addEventListener("load", () => {

    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        console.log("Service Worker Registered");
      })
      .catch(error => {
        console.log("Service Worker Failed", error);
      });

  });

}
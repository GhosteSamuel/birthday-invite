const correctCode = "PARTY22";

const accessCard = document.getElementById("access-card");
const inviteCard = document.getElementById("invite-card");
const input = document.getElementById("access-code");
const unlockBtn = document.getElementById("unlock-btn");
const resetBtn = document.getElementById("reset-btn");
const message = document.getElementById("message");

function unlockInvite() {
  const enteredCode = input.value.trim().toUpperCase();

  if (enteredCode === correctCode) {
    accessCard.classList.add("hidden");
    inviteCard.classList.remove("hidden");
    message.textContent = "";
    message.classList.remove("error");
    return;
  }

  message.textContent = "Access denied. Skús správny kód.";
  message.classList.add("error");
}

function resetInvite() {
  inviteCard.classList.add("hidden");
  accessCard.classList.remove("hidden");
  input.value = "";
  message.textContent = "";
  message.classList.remove("error");
}

unlockBtn.addEventListener("click", unlockInvite);
resetBtn.addEventListener("click", resetInvite);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    unlockInvite();
  }
});

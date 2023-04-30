const button = document.getElementById("btn")
const toasts = document.getElementById("toasts")

const messages = [
    '☀️ perfectly toasted ☀️',
    '🔥 you burnt your toast! 🔥',
    '🤨 the toaster was off... 🤨',
    '🐀 rat stole your toast 🐀',
]

const types = [
    'info',
    'success',
    'error'
]

button.addEventListener('click', () => createNotification())
// add message parameters for specific message

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 2000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}
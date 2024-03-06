// https://web.telegram.org/k/

const textBlock = document.querySelector('#column-center > div > div > div.chat-input > div > div.rows-wrapper-wrapper > div > div.new-message-wrapper > div.input-message-container > div.input-message-input.i18n.scrollable.scrollable-y.no-scrollbar')
const send = document.querySelector('#column-center > div > div > div.chat-input > div > div.btn-send-container > button > div')

const sendText = () => {
        textBlock.append('ахвахвхаыхафых')
        send.click()
        autoSend()
}

const autoSend = () => setTimeout(sendText, 3000)

autoSend()
// 로그인 대신 임시방편
let username = prompt('아이디를 입력하세요');
let roomNum = prompt('채팅방 번호를 입력하세요');

document.querySelector('#username').innerHTML = username;

const eventSource = new EventSource(`http://localhost:8080/chat/roomNum/${roomNum}`);

eventSource.onmessage = (event) => {
	// console.log(1, event);
	const data = JSON.parse(event.data);
	// console.log(2, data);
	if (data.sender === username) {
		// 로그인한 유저가 보낸 메세지
		//파란박스(오른쪽)
		initMyMessage(data);
	} else {
		//회색박스(왼쪽)
		initYourMessage(data);
	}
	// initMessage(data);
};

//파란박스 만들기
function getSendMsgBox(data) {
	let md = data.createdAt.substring(5, 10);
	let tm = data.createdAt.substring(11, 16);
	convertTime = tm + ' | ' + md;

	return `
    <div class="sent_msg">
    <p>${data.message}</p>
    <span class="time_date">${convertTime} / <b>${data.sender}</b></span>
  </div>
    `;
}

//회색박스 만들기
function getReceiveMsgBox(data) {
	let md = data.createdAt.substring(5, 10);
	let tm = data.createdAt.substring(11, 16);
	convertTime = tm + ' | ' + md;

	return `
    <div class="received_withd_msg">
    <p>${data.message}</p>
    <span class="time_date">${convertTime} / ${data.sender}</span>
  </div>
    `;
}

// 최초 초기화될때 1번방 3건이 있으면 3건을 다 가져와요.
//addMessage() 함수 호철수 DB에 insert 되고 그 데이터가 자동으로 흘러드러온다(SSE);
// 파란박스 초기화하기
function initMyMessage(data) {
	let chatBox = document.querySelector('#chat-box');

	// let msgInput = document.querySelector('#chat-outgoing-msg');
	// let md = data.createdAt.substring(5, 10);
	// let mdConverter = md.replace('-', '월');
	// console.log(mdConverter);
	// let tm = data.createdAt.substring(11, 16);
	// let msgTimeConvert = tm + '|' + mdConverter + '일';

	let sendBox = document.createElement('div');
	sendBox.className = 'outgoing_msg';
	sendBox.innerHTML = getSendMsgBox(data);
	chatBox.append(sendBox);

	document.documentElement.scrollTop = document.body.scrollHeight;
	// msgInput.value = '';
}

// 회색박스 초기화하기
function initYourMessage(data) {
	let chatBox = document.querySelector('#chat-box');

	let receivedBox = document.createElement('div');
	receivedBox.className = 'received_msg';

	receivedBox.innerHTML = getReceiveMsgBox(data);
	chatBox.append(receivedBox);
	document.documentElement.scrollTop = document.body.scrollHeight;
	// msgInput.value = '';
}

//AJAX 채팅 메세지 전송
async function addMessage() {
	// let chatBox = document.querySelector('#chat-box');
	let msgInput = document.querySelector('#chat-outgoing-msg');

	// let chatOutgoingBox = document.createElement('div');
	// chatOutgoingBox.className = 'outgoing_msg';

	// let date = new Date();
	// let now = date.getHours() + ':' + date.getMinutes() + '|' + (date.getMonth() + 1) + '월' + date.getDate() + '일';

	let chat = {
		sender: username,
		roomNum: roomNum,
		message: msgInput.value
	};

	/*let response = await */ fetch('http://localhost:8080/chat', {
		method: 'post', //http post 메서드( 새로운 데이터 write )
		body: JSON.stringify(chat), //Js => Json
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	});

	// console.log(response);

	// let parseResponse = await response.json();
	// console.log(parseResponse);

	// chatOutgoingBox.innerHTML = getSendMsgBox(msgInput.value, now);
	// chatBox.append(chatOutgoingBox);
	msgInput.value = '';
}

//버튼 클릭시 메세지 전송
document.querySelector('#chat-send').addEventListener('click', () => {
	addMessage();
});

//엔터 누를시 메세지 전송
document.querySelector('#chat-outgoing-msg').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		addMessage();
	}
});

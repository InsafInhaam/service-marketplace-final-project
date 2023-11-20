import React, { useState, useEffect, useRef } from "react";
import profileImg from "../assets/profileImg.png";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/message`;

const Chat = ({ user, orderId, recipient, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const userId = user._id;
  const recipientId = recipient?.userId?._id;
  const chatContainerRef = useRef(null);
  const shouldAutoScrollRef = useRef(true);

  // console.log(orderId)
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/${userId}/${recipientId}/${orderId}`
      );
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    const sender = userId;
    const receiver = recipientId;

    await fetch(`${apiUrl}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sender, receiver, content: newMessage, orderId }),
    });

    setNewMessage("");
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, [recipientId, orderId, messages]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    shouldAutoScrollRef.current = scrollTop + clientHeight === scrollHeight;
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when messages change
    if (shouldAutoScrollRef.current && chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // console.log(messages);

  return (
    <section className="chat-app">
      <span className="chat-app-close-icon" onClick={onClose}>
        X
      </span>
      {/* <div className="container"> */}
      {/* <div className="row d-flex justify-content-end"> */}
      <div className="col-md-3 w-100">
        {/* Buttons trigger collapse */}
        <a
          className="btn btn-info btn-lg btn-block"
          data-mdb-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="d-flex justify-content-between align-items-center text-white">
            <span>
              Chatting with
              {" " +
                recipient?.labourer?.firstname +
                " " +
                recipient?.labourer?.lastname}
            </span>
            <i className="fas fa-chevron-down" />
          </div>
        </a>
        {/* Collapsed content */}
        <div className="collapse mt-3" id="collapseExample">
          <div className="card" id="chat4">
            <div
              className="card-body"
              data-mdb-perfect-scrollbar="true"
              style={{
                position: "relative",
                height: "400px",
                overflow: "scroll",
                overflowX: "hidden",
              }}
              ref={chatContainerRef}
              onScroll={handleScroll}
            >
              {messages?.map((message, index) => (
                <div
                  key={index}
                  className={`d-flex flex-row justify-content-${
                    message.sender === userId ? "end" : "start"
                  } mb-4`}
                >
                  {message.sender !== userId && (
                    <img
                      src={
                        recipient?.labourer?.image
                          ? recipient?.labourer?.image
                          : profileImg
                      }
                      alt={recipient?.labourer?.firstname}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginLeft: "5px",
                      }}
                    />
                  )}
                  <div>
                    <p
                      className={`small p-2 ms-3 mb-1 rounded-3 ${
                        message.sender !== userId
                          ? "bg-light"
                          : "bg-info text-white"
                      }`}
                    >
                      {message.content}
                    </p>
                    <p
                      className={`small ms-3 mb-3 rounded-3 text-muted d-flex justify-content-${
                        message.sender === userId ? "end" : "start"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                  {message.sender === userId && (
                    <img
                      src={user.image ? user.image : profileImg}
                      alt={user.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginLeft: "5px",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src={user.image ? user.image : profileImg}
                alt={user.name}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Type message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button className="ms-3 link-info border-0" onClick={sendMessage}>
                <i className="fas fa-paper-plane" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Chat;

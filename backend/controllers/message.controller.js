import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recievedId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recievedId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recievedId],
      });
    }

    const newMessage = new Message({
      senderId: senderId,
      recievedId: recievedId,
      message: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in the sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default sendMessage;

// const { id } = req.params.id;

import { Schema, model} from "mongoose";


const messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },
},{timestamps: true})

const MessageModel = model("Message",messageSchema);

export default MessageModel;
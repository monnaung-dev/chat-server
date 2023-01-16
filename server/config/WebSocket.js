var users = [];
var msglist = [];
class Webclient {

  connection(client) {

    client.emit("join", "room1");

    client.on("identity", (userId, meetingId) => {
      console.log("userId " + userId)
      console.log("meetingId " + meetingId)
      msglist = msglist.filter((m) => m.meetingId == meetingId);
      client.emit("msglist", msglist)
      console.log(msglist)
      // if (Array.isArray(users)) {
      users.push({
        clientId: client.id,
        userId: userId,
        meetingId: meetingId,
      });
      // }
    });

    // client.on("connect", (userId) => {
    //   client.emit("msglength", msglist.length)
    // });

    client.on("disconnect", () => {
      // if (Array.isArray(this.users)) {
      users = users.filter((user) => user.clientId !== client.id);
      // }

    });

    client.on("newMessage", (data) => {
      //console.log(data)
      global.io.emit("sendToAll", data);
      msglist.push(data);
      global.io.emit("messageCount", 1, data.from, data.to)
      console.log(data.from)
    });

    client.on("whiteboardrender", (data) => {
      console.log("whiteboardrender")
      global.io.emit("whiteboardrender", data);
    });
    
    

  }
}

export default new Webclient();
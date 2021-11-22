const rooms = [{
    room: "1234",
    password: "1111",
}]

const addRoom = (name, password) => {
    const roomAlreadyExists = rooms.find((room) => room.room === name);

    console.log("crash here");

    if (!roomAlreadyExists) {
        rooms.push({ name, password });
        return true; // return true if a new room was created;
    }
    return false; // return false if the room already exists and warn the user.
}

const removeRoom = (name) => {
    rooms = rooms.filter((room) => room.room != name);
}

const getRoom = (name) => {
    const reqRoom = rooms.find((room) => room.room === name);
    return reqRoom;
}

module.exports = { addRoom, removeRoom, getRoom }


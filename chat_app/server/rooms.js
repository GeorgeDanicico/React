const rooms = [{
    room: "1234",
    password: "1111",
}, {
    room: "1212",
    password: "",
}]

const addRoom = (name, password) => {
    const roomAlreadyExists = rooms.find((room) => room.room === name);

    if (!roomAlreadyExists) {
        rooms.push({ room: name, password });
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

const getAllRooms = () => {
    return rooms;
}

module.exports = { addRoom, removeRoom, getRoom, getAllRooms }


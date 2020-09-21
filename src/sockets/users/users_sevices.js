const users = []

function addUser({ id, name, room }) {
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const userExists = users.find(user => user.room === room && user.name === name)

    if(userExists) {
        return { error: 'User already exists in this room' }
    }

    const user = { id, name, room }

    users.push(user)

    return { user }

}

function removeUser(id) {
    const index = users.findIndex(user => user.id === id)

    if(index >= 0) {
        return users.splice(index, 1)[0]
    }

}

function getUser(id) {
    const user = users.find(user => user.id === id)

    if(!user) {
        return { error: 'User do not exists' }
    }

    return user

}

function getUsersInRoom(roomId) {
    const userInRoom = users.filter(user => user.room === roomId)
    return userInRoom
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom }
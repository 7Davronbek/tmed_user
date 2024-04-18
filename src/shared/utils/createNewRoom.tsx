export const authToken = process.env.TWED_ROOM_TOKEN
export const url = process.env.TWED_ROOM_URL

export const createNewRoom = async () => {
  const res = await fetch(url!, {
    method: 'POST',
    headers: {
      authorization: `${authToken}`,
      'Content-Type': 'application/json',
    },
  })

  const { roomId } = await res.json()
  return roomId
}
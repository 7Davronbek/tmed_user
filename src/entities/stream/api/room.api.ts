export const authToken: string = process.env.VIDEO_SDK_TOKEN!

export const createMeeting = async ({ token }: { token: string }) => {
    try {
        const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
            method: "POST",
            headers: {
                "Authorization": `${authToken}`,
                "Content-Type": "application/json",
            }
        });
        const { roomId }: { roomId: string } = await res.json();
        return roomId;
    } catch (err) {
        console.log(err)
    }
};

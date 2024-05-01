// export const authToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyNjRiMWE4OS04MWRjLTQxYjktYjYzNC0zZDFjN2MxNmEyM2MiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNDAzMTgzMCwiZXhwIjoxNzE2NjIzODMwfQ.oJFcMNNSUv06Aevy5hGw4mIViiV3wvHGWD1k2A9Goqc";

export const authToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkNGIwNzQ1YS1iNjg0LTRmN2QtODExYy0wNGNhMzUzN2RjMGMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNDM3Mjc0NSwiZXhwIjoxNzE2OTY0NzQ1fQ.vFy_vVj8k3KdShsjrjGwNt9vMjUJus9Uc2DX9hY9uxQ";

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

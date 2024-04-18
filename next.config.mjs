import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  env: {
    TWED_BOT_TOKEN: process.env.TWED_BOT_TOKEN,
    TWED_CHAT_ID: process.env.TWED_CHAT_ID,
    TWED_ROOM_URL: process.env.TWED_ROOM_URL,
    TWED_ROOM_TOKEN: process.env.TWED_ROOM_TOKEN,
  },
}

export default withNextIntl(nextConfig)
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  env: {
    TWED_BOT_TOKEN: process.env.TWED_BOT_TOKEN,
    TWED_CHAT_ID: process.env.TWED_CHAT_ID,
    TWED_ROOM_URL: process.env.TWED_ROOM_URL,
    TWED_ROOM_TOKEN: process.env.TWED_ROOM_TOKEN,
    VITE_BASE_URL: process.env.VITE_BASE_URL,
    VIDEO_SDK_TOKEN: process.env.VIDEO_SDK_TOKEN,
    VITE_ADMIN_URL: process.env.VITE_ADMIN_URL
  },
  images: {
    unoptimized: true,
    domains : ['dwed.fra1.digitaloceanspaces.com', 'localhost']
  }
}

export default withNextIntl(nextConfig)
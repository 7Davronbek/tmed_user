import axios from 'axios'
import { toast } from 'react-toastify'

type Props = {
  name?: string,
  phone: string,
  desc?: string
}
export const sendFeedback = async ({ name, phone, desc }: Props) => {
  const text = (name || desc) ? `Name: ${name}.%0APhone number: ${phone}.%0ADescription: ${desc}` : `Phone number: ${phone}.`
  await axios.post(
    `https://api.telegram.org/bot${process.env.TWED_BOT_TOKEN}/sendMessage?chat_id=${process.env.TWED_CHAT_ID}&text=${text}`,
  ).then(() => {
    toast.success('Success!')
  }).catch(() => {
    toast.error('Internal server error')
  })
}
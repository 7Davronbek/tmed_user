import { FC, ReactNode } from 'react'
import { Box, Stack, SxProps } from '@mui/material'

type Props = {
  icon?: ReactNode,
  text?: string,
  active?: boolean,
}
export const BaseButton: FC<Props> = ({ icon, text, active }) => {
  return (
    <Stack className={`myBtn ${active ? 'active' : ''}`} sx={sx} direction={'row'}
           alignItems={'center'}>
      {icon && <Box className={'icon'} marginRight={text ? 1 : 0}>{icon}</Box>}
      {text && <p className={'text'}>{text}</p>}
    </Stack>
  )
}


const sx: SxProps = {
  padding: '12px 20px',
  lineHeight: '24px',
  borderRadius: '10px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',

  '.text': {
    fontWeight: 600,
    userSelect: 'none',
  },

  '.icon': {
    lineHeight: 0,
  },


  '&.active, &:hover': {
    background: 'var(--gradient-bg) !important',
    borderRadius: '10px',
    color: '#fff',
    whiteSpace: 'nowrap',

    '.active': {

      'path': {
        fill: '#fff',
        stroke: 'transparent',
      }
    }
  },

  '&:hover': {
    'path': {
      stroke: '#fff',
    },
  }
}

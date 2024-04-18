import { FC } from 'react'
import { ScriptProps } from 'next/script'
import { Box, SxProps } from '@mui/material'

export const Content: FC<ScriptProps> = ({ children }) => {
  return <Box sx={contentSx}>{children}</Box>
}

const contentSx: SxProps = {
  marginBottom: '65px',

  '@media(max-width: 992px)': {
    marginBottom: '24px'
  }
}
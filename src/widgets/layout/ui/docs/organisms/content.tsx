import { FC } from 'react'
import { ScriptProps } from 'next/script'
import { Box, SxProps } from '@mui/material'

export const Content: FC<ScriptProps> = ({ children }) => {
  return <Box sx={contentSx}>{children}</Box>
}

const contentSx: SxProps = {
  marginBottom: '56px',
}
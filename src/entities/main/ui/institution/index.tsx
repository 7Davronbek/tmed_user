import { Grid } from '@mui/material'
import { BaseButton } from '@/shared'
import sx from './style.module.scss'

export const Institution = () => {
  return (
    <div>
      <Grid className={sx.wrap} container spacing={3}>
        <Grid item xs={5}>
        </Grid>
      </Grid>
      <Grid className={sx.institution} container spacing={2}>
        <Grid className={sx.card} item xs={2.4}>
          <BaseButton text={'Markaziy klinik kasalxona'} active={true} />
        </Grid>
        <Grid className={sx.card} item xs={2.4}>
          <BaseButton text={'Markaziy poliklinika'} />
        </Grid>
        <Grid className={sx.card} item xs={2.4}>
          <BaseButton text={'Yo’l bolalar kasalxonasi'} />
        </Grid>
        <Grid className={sx.card} item xs={2.4}>
          <BaseButton text={'“Salomatlik“ poliklinikasi'} />
        </Grid>
        <Grid className={sx.card} item xs={2.4}>
          <BaseButton text={'Markaziy klinik kasalxona'} />
        </Grid>
      </Grid>
    </div>
  )
}


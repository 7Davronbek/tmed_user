import { Grid } from '@mui/material'
import { BaseButton, Icon } from '@/shared'
import sx from './style.module.scss'

export const ServiceList = () => {
  return (
    <>

      <Grid className={sx.serviceList} container spacing={2}>
        <Grid className={sx.cardGrid}  item>
          <BaseButton text={'Аллерголог (6)'} active={true} />
        </Grid>
        <Grid className={sx.cardGrid}  item>
          <BaseButton text={'Акушер-гинеколог (12)'} />
        </Grid>
        <Grid className={sx.cardGrid}  item>
          <BaseButton text={'Аллерголог-иммунолог (3)'} />
        </Grid>
        <Grid  className={sx.cardGrid} item>
          <BaseButton text={'Андролог (8)'} />
        </Grid>
        <Grid className={sx.cardGrid}  item>
          <BaseButton text={'Анестезиолог (3)'} />
        </Grid>
        <Grid className={sx.cardGrid}  item>
          <BaseButton text={'Анестезиолог-реаниматолог (5)'} />
        </Grid>
        <Grid  className={sx.cardGrid} item>
          <BaseButton text={'Аллерголог (6)'} />
        </Grid>
        <Grid className={sx.cardGrid}  item>
          <BaseButton text={'Андролог (8)'} />
        </Grid>
        <Grid  className={sx.cardGrid} item>
          <BaseButton text={'Анестезиолог-реаниматолог (5)'} />
        </Grid>
        <Grid className={sx.cardGrid}  item>
          <BaseButton text={'Аллерголог (6)'} />
        </Grid>
        <Grid  className={sx.cardGrid} item>
          <BaseButton text={'Аллерголог (6)'} />
        </Grid>
        <Grid className={sx.cardGrid}  item>
          <BaseButton text={'Аллерголог (6)'} />
        </Grid>
        <Grid  className={sx.cardGrid} item>
          <BaseButton text={'Акушер-гинеколог (12)'} />
        </Grid>
        <Grid  className={sx.cardGrid} item>
          <BaseButton text={'Аллерголог-иммунолог (3)'} />
        </Grid>
        <Grid className={sx.cardGrid}  item>
          <BaseButton text={'Андролог (8)'} />
        </Grid>
      </Grid>

      <Grid className={sx.serviceList} container spacing={2}>
        <Grid className={sx.gridWrap} item xs={4}>
          <div className={sx.card}>
            <div className={sx.top}>
              <h5>Alergolog</h5>
              <Icon.Cart />
            </div>

            <div className={sx.bottom}>
              <h4>275 000 UZS <span>120 000 UZS</span> <span className={sx.badge}>12%</span></h4>
              <div className={sx.wrap}>
                <h3>Soni:</h3>
                <h3>34 xizmat</h3>
              </div>
              <div className={sx.wrap}>
                <h3>Davomiyligi:</h3>
                <h3>20 daqiqa</h3>
              </div>
              <div className={sx.wrap}>
                <h3>Xizmat turi:</h3>
                <h3>Xizmat</h3>
              </div>
              <div className={sx.wrap}>
                <h3>Tashkilot:</h3>
                <h3>Markaziy klinik shifoxonasi</h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className={sx.gridWrap} item xs={4}>
          <div className={sx.card}>
            <div className={sx.top}>
              <h5>Alergolog</h5>
              <Icon.Cart />
            </div>

            <div className={sx.bottom}>
              <h4>275 000 UZS <span>120 000 UZS</span> <span className={sx.badge}>12%</span></h4>
              <div className={sx.wrap}>
                <h3>Soni:</h3>
                <h3>34 xizmat</h3>
              </div>
              <div className={sx.wrap}>
                <h3>Davomiyligi:</h3>
                <h3>20 daqiqa</h3>
              </div>
              <div className={sx.wrap}>
                <h3>Xizmat turi:</h3>
                <h3>Xizmat</h3>
              </div>
              <div className={sx.wrap}>
                <h3>Tashkilot:</h3>
                <h3>Markaziy klinik shifoxonasi</h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className={sx.gridWrap} item xs={4}>
          <div className={sx.card}>
            <div className={sx.top}>
              <h5>Alergolog</h5>
              <Icon.Cart />
            </div>

            <div className={sx.bottom}>
              <h4>275 000 UZS <span>120 000 UZS</span> <span className={sx.badge}>12%</span></h4>
              <div className={sx.wrap}>
                <h3>Soni:</h3>
                <h3>34 xizmat</h3>
              </div>
              <div className={sx.wrap}>
                <h3>Davomiyligi:</h3>
                <h3>20 daqiqa</h3>
              </div>
              <div className={sx.wrap}>
                <h3>Xizmat turi:</h3>
                <h3>Xizmat</h3>
              </div>
              <div className={sx.wrap}>
                <h3>Tashkilot:</h3>
                <h3>Markaziy klinik shifoxonasi</h3>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
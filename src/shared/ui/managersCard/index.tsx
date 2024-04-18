'use client'
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@mui/material'
import Image from 'next/image'
import sx from '../administrationsCard/administration.module.scss'
import { FC, SyntheticEvent, useState } from 'react'
import { Icon, Manager } from '@/shared'

export const ManagersCard: FC<Manager> = ({ image, name, phoneNumber, admissionDay, jobTitle, staj, permission }) => {

  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <>
      <Grid className={sx.card + ' ' + sx.fullCard} item xs={12}>
        <Image
          src={image}
          alt="T MED"
          className={sx.image}
        />
        <div className={sx.wrapper}>
          <p className={sx.head}>{jobTitle}</p>
          <p className={sx.name}>{name}</p>
          <p className={sx.head}>Телефон:</p>
          <a className={sx.a} href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          <p className={sx.gray}>Қабул кунлари:</p>
          <p className={sx.a}>{admissionDay}</p>

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<Icon.ArrowDown />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>
                Mexnat faoliyati
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                {staj}
              </p>
            </AccordionDetails>
          </Accordion>

          {permission ? <>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<Icon.ArrowDown />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <p>
                  Lavozim majburiyatlari
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  {permission}
                </p>
              </AccordionDetails>
            </Accordion>
          </> : null}
        </div>


      </Grid>
    </>
  )
}
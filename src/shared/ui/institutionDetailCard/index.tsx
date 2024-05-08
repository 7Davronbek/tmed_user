import sx from "./institutionDetailCard.module.scss";
import {BaseButton} from "@/shared";
import {Grid} from "@mui/material";
import {InstitutionType} from "@/entities";
import {FC} from "react";
import Image from "next/image";

type InstitutionDetailCard = {
    institution: InstitutionType,
    hasImage?: boolean
}
export const InstitutionDetailCard: FC<InstitutionDetailCard> = ({institution, hasImage = false}) => {
    return (
        <Grid className={sx.card} item>
            {hasImage && <Image width={100} height={100} src={institution.logo} alt={institution.name} /> }
            <BaseButton text={institution.name}/>
        </Grid>
    )
}
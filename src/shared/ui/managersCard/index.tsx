"use client";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
} from "@mui/material";
import Image from "next/image";
import sx from "../administrationsCard/administration.module.scss";
import {FC, SyntheticEvent, useState} from "react";
import {Icon, Manager} from "@/shared";
import parse from "html-react-parser";
import {AdminEnum} from "@/entities";

type ManagerProps = Manager & {
    editManager?: () => void;
    deleteManager?: () => void;
    type?: AdminEnum;
};

export const ManagersCard: FC<ManagerProps> = ({
                                                   id,
                                                   image,
                                                   name,
                                                   phoneNumber,
                                                   admissionDay,
                                                   jobTitle,
                                                   staj,
                                                   permission,
                                                   editManager,
                                                   deleteManager,
                                                   type,
                                               }) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Grid
            style={{flex: 1}}
            className={sx.card + " " + sx.fullCard}
            item
            xs={12}
        >
            <Image
                src={image}
                alt="T MED"
                width={0}
                height={0}
                className={sx.image}
            />
            <div className={sx.wrapper}>
                {type && <p>Type: {type}</p>}
                <p className={sx.head}>{jobTitle}</p>
                <p className={sx.name}>{name}</p>
                <p className={sx.head}>Телефон:</p>
                <a className={sx.a} href={`tel:${phoneNumber}`}>
                    {phoneNumber}
                </a>
                <p className={sx.gray}>Қабул кунлари:</p>
                <p className={sx.a}>{admissionDay}</p>

                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                        expandIcon={<Icon.ArrowDown/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <p>Mexnat faoliyati</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>{parse(String(staj))}</p>
                    </AccordionDetails>
                </Accordion>

                {permission ? (
                    <div>
                        <Accordion
                            expanded={expanded === "panel2"}
                            onChange={handleChange("panel2")}
                        >
                            <AccordionSummary
                                expandIcon={<Icon.ArrowDown/>}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <p>Lavozim majburiyatlari</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>{parse(String(permission))}</p>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ) : (
                    ""
                )}

                <div style={{display: 'flex', gap: '8px'}}>
                    {editManager && <button onClick={() => editManager()}>Edit</button>}
                    {deleteManager && <button onClick={() => deleteManager()}>Delete</button>}
                </div>
            </div>
        </Grid>
    );
};

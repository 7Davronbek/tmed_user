// @ts-nocheck
"use client";
import {
    $aboutList,
    AboutModal,
    deleteAboutEv,
    fetchAboutListFx,
    getAboutDetailEv,
    getAboutListEv,
    toggleAboutModalEv,
} from "@/entities";
import {BaseButton, Icon, NoData} from "@/shared";
import {useUnit} from "effector-react";
import parse from "html-react-parser";
import {useEffect} from "react";
import sx from "../style/main.module.scss";

const AboutUsPage = () => {
    useEffect(() => {
        getAboutListEv();
    }, []);
    const [results, isLoading] = useUnit([
        $aboutList,
        fetchAboutListFx.pending,
    ]);

    const handleDelete = (id: string) => {
        deleteAboutEv(id);
    };

    const handleEdit = (id: string) => {
        getAboutDetailEv(id);
    };

    const handleCreate = () => {
        toggleAboutModalEv();
    };

    return (
        <div className={sx.dashboardPage}>
            <div className={sx.topWrap}>
                <h2>Description</h2>
                <button onClick={() => handleCreate()} className="button">
                    <BaseButton
                        active={true}
                        icon={<Icon.AddIcon/>}
                        text={"Description"}
                    />
                </button>
            </div>
            {results && !isLoading &&
                results.map((item) => (
                    <div style={{display: "flex", justifyContent: 'space-between', marginTop: '20px'}} key={item.id}>
                        <p>{parse(String(item.description))}</p>
                        <div style={{display: 'flex', gap: '8px'}}>
                            {/* <button className={'button'} onClick={() => handleEdit(String(item.id))}>
                                <Icon.EditIcon/>
                            </button> */}
                            <button className={'button'} onClick={() => handleDelete(String(item.id))}>
                                <Icon.DeleteIcon/>
                            </button>
                        </div>
                    </div>
                ))}
            <NoData show={results.length === 0 || isLoading} loading={isLoading}/>
            <AboutModal/>
        </div>
    );
};

export default AboutUsPage;

import sx from '../style/main.module.scss'
import {$commentModal, $commentsList, fetchInfiniteCommentsFx, modalToggleEv} from "@/entities";
import {useUnit} from "effector-react/effector-react.mjs";
import {MiniLoader} from "@/shared";
export const CommentModal = () => {
    const [{results}, isOpen, isLoading] = useUnit([$commentsList, $commentModal, fetchInfiniteCommentsFx.pending])
    return (
        <div className={sx.modalWrap + ` ${isOpen ? sx.active : ''}`}>
            <div className={sx.modalCard}>
                <div>
                    {isLoading && <MiniLoader />}
                    {results.length === 0 && 'No comment yet'}
                    {!!results && results.map((item) => (
                        <div key={item.id}>
                            <h6>{item.user}</h6>
                            <h5>{item.reply_to ? '@' + item.reply_to : ''}{item.text}</h5>
                        </div>
                    ))}
                </div>
                {/*<input type="text"/>*/}
            </div>
            <div onClick={() => modalToggleEv()} className={sx.close}></div>
        </div>
    )
}
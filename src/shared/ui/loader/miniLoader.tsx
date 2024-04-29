import sx from './style.module.scss'

export const MiniLoader = ({text}: { text?: string }) => {
    return (
        <div>
             <span>{text}</span> <span className={sx.miniLoader}></span>
        </div>
    )
}
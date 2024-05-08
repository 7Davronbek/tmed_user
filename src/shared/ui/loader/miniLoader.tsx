import sx from './style.module.scss'

export const MiniLoader = ({text}: { text?: string }) => {
    return (
        <div style={{padding: '20px 0'}}>
             <span>{text}</span> <span className={sx.miniLoader}></span>
        </div>
    )
}
import styles from './InfoItem.module.scss';

export interface InfoItemProps {
    icon: React.ReactNode;
    text?: string | null;
    isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
    const currentText = text || 'Not Available';
    let curreentHref = '';

    if (isLink) {
        curreentHref = text && text.startsWith('http') ? text : `http://${text}`;
    }

    return (
        <div className={`${styles.infoItem}${text ? '' : ` ${styles.empty}`}`}>
            {icon}
            <div>
                {isLink && text ? (
                    <a href={curreentHref} target="_blank" rel="noreferrer" className={styles.link}>
                        {currentText}
                    </a>
                ) : (
                    currentText
                )}
            </div>
        </div>
    );
};

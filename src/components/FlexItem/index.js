import styles from './flexitem.module.css'

function FlexItem ({illustration, title, text, image}) {
    return (
        <div className={styles.FlexContainer}>
            <div className={styles.FlexWrapper}>
                <div className={styles.LeftContent}>
                    <div className={styles.LeftImageContainer}>
                        <span className={styles.LeftImage}>
                            <img src={illustration}></img>
                        </span>
                    </div>
                    <div className={styles.GalleryTitle}>
                        <h3>{title}</h3>
                    </div>
                    <p>{text}</p>
                </div>
                <div className={styles.RightContent}>
                    <img src={image}></img>
                </div>
            </div>
        </div>
    )
}
export default FlexItem
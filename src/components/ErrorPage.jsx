import styles from './../styles/error-page.module.css';
import { useEffect } from 'react'

export const ErrorPage = () => {
    useEffect(() => {
        const originalBodyClass = document.body.className;
        document.body.className = `${styles.errorPageBody}`;

        // limpiar es el estilo del body
        return () => {
            document.body.className = originalBodyClass;

        }
    }, []); // Arreglo se ejecutara una vez

    return (
        <div className={styles.customBodyClass}>
            <section id="not-found">
                <div className={styles.circles}>
                    <p>404<br />
                        <small>Ups algo salio mal. </small>
                    </p>
                    <span className={`${styles.circle} ${styles.big}`}></span>
                    <span className={`${styles.circle} ${styles.med}`}></span>
                    <span className={`${styles.circle} ${styles.small}`}></span>
                </div>
            </section>
        </div>

    )
}
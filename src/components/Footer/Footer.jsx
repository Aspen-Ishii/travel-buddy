import styles from './FooterStyles.module.css';

const currentDate = new Date ();
const currentYear = currentDate.getFullYear();

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy;{currentYear} Aspen Ishii. <br />
        All rights reserved.
        </p>
    </section>
  )
}

export default Footer
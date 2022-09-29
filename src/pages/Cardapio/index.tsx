import styles from "./Cardapio.module.scss";

import { ReactComponent as Logo } from "assets/My-Drink1.svg";
import Buscador from "components/Buscador";
import { useState } from "react";

export default function Cardapio() {
  const [busca, setBusca] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        {" "}
        <Logo className={styles.logo} />{" "}
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
         <span> Casa das mais divesrças bebidas</span>
        </div>
        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}>Cardápio</h3>
          <Buscador busca={busca} setBusca={setBusca} />
        </section>
      </header>
    </main>
  );
}

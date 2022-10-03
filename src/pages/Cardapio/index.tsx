import styles from "./Cardapio.module.scss";

import { ReactComponent as Logo } from "assets/My-Drink1.svg";
import Buscador from "components/Buscador";
import { useState } from "react";
import Filtro from "../../components/Filtros";
import Ordenador from "components/Ordenador";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        {" "}
        <Logo className={styles.logo} />{" "}
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          <p> Casa das mais divesrças bebidas</p>
        </div>
        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}>Cardápio</h3>
          <Buscador busca={busca} setBusca={setBusca} />
          <div className={styles.cardapio__filtros}>
            <Filtro filtro={filtro} setFiltro={setFiltro} />
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
          </div>
        </section>
      </header>
    </main>
  );
}

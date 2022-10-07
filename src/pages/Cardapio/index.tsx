import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/My-Drink1.svg";
import Buscador from "components/Buscador";
import { useState } from "react";
import Filtro from "../../components/Filtros";
import Ordenador from "components/Ordenador";
import Itens from "components/Itens";

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
          <h1> Casa das mais divesrças bebidas</h1>
        </div>
        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}>Cardápio</h3>
          <Buscador busca={busca} setBusca={setBusca} />
          <div className={styles.cardapio__filtros}>
            <Filtro filtro={filtro} setFiltro={setFiltro} />
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />

          </div>
            <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </section>
      </header>
    </main>
  );
}

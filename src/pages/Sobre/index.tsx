import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';

const imagens = [massa1, massa2];

export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre </h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt="Casa Aluroni" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós do EduPeroni oferecemos a vocês, nossos clientes, a Massa Italiana Caseira mais saborosa e sofisticada do Rio Grande do Sul! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais perfeita!
          </p>
          <p>
           Como estamos localizados no Rio Grande do Sul, não pode faltar aquela carne e um delicioso churrasco .
          </p>
          <p>
            Para acompanhar as massas italianas, nosso restaurante possui uma reserva de vinhos e sucos naturais,que combinam perfeitamente com o seu parto !
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}
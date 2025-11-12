import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import UserCard from "./components/UserCard.jsx";

const usuarios = [
  {
    id: 1,
    name: "Carlos Navia",
    email: "carlos@example.com",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Laura Gómez",
    email: "laura@example.com",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Julián Pérez",
    email: "julian@example.com",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

function App() {
  return (
    <div style={styles.app}>
      <CabeceraCV />
      <Perfil />
      <Educacion />
      <Experiencia />
      <StackTecnologias />

      <section>
        <h3>👥 Contactos Profesionales</h3>
        <div style={styles.userContainer}>
          {usuarios.map(({ id, name, email, avatar }) => (
            <UserCard key={id} name={name} email={email} avatar={avatar} />
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    lineHeight: '1.6',
  },
  userContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
  },
};

export default App;

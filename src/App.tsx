import BooksSection from "./components/BooksSection";
import Header from "./components/Header";
import HeroSearch from "./components/HeroSearch";
import BannerSection from "./components/BannerSection";
import Button from "./components/Button";
import Input from "./components/Input";
import { MdOutlineEmail } from "react-icons/md";
import VisitedTopics from "./components/VisitedTopics";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSearch />
      <BooksSection>ÚLTIMOS LANÇAMENTOS</BooksSection>
      <BooksSection>MAIS VENDIDOS</BooksSection>
      <BannerSection
        title="Já possui uma conta?"
        paragraph="Com um conta você pode criar sua própria estante de livros e e-books"
      >
        <Button size="small" variant="secondary">
          Criar conta
        </Button>
        <Button size="small">Fazer login</Button>
      </BannerSection>
      <VisitedTopics />
      <BannerSection
        title="Fique por dentro das novidades!"
        paragraph="Atualizações de e-books, novos livros, promoções e outros."
        variant="secondary"
      >
        <Input
          type="email"
          placeholder="Cadastre seu e-mail"
          variant="secondary"
        >
          <MdOutlineEmail size={24} />
        </Input>
      </BannerSection>
      <Footer />
    </div>
  );
}

export default App;

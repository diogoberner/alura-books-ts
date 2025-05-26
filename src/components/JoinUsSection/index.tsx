import Button from "../Button";

const JoinUsSection = () => {
  return (
    <section className="bg-dark-blue text-white flex items-center justify-center py-30 px-37.5">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-medium">Já possui uma conta?</h2>
        <p className="text-wrap font-light w-[60%]">
          Com um conta você pode criar sua própria estante de livros e e-books.
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary">Criar conta</Button>
        <Button>Fazer login</Button>
      </div>
    </section>
  );
};

export default JoinUsSection;

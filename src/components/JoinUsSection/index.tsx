import Button from "../Button";

const JoinUsSection = () => {
  return (
    <section className="bg-dark-blue text-white flex flex-col gap-5 text-center items-center justify-center p-[10%] lg:flex-row lg:text-left lg:py-30 lg:px-37.5 xl:px-[25%] xl:py-[5%]">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg lg:text-2xl font-medium">
          Já possui uma conta?
        </h2>
        <p className="text-wrap font-light xl:w-[90%]">
          Com um conta você pode criar sua própria estante de livros e e-books.
        </p>
      </div>
      <div className="flex gap-2">
        <Button size="small" variant="secondary">
          Criar conta
        </Button>
        <Button size="small">Fazer login</Button>
      </div>
    </section>
  );
};

export default JoinUsSection;

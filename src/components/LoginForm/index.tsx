import Button from "../Button";
import Input from "../Input";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 w-[90%] rounded-2xl bg-white">
      <img className="w-2/3 mb-6" src="login-image.svg" />
      <form className="w-full flex flex-col">
        <h2 className="mb-6 text-orange-alura uppercase font-bold text-lg">
          Login
        </h2>
        <label>
          <span className="text-dark-blue text-xs font-bold pl-5">E-mail</span>
          <Input
            type="email"
            variant="secondary"
            placeholder="seuemail@email.com.br"
          />
        </label>
        <label className="my-3">
          <span className="text-dark-blue text-xs font-bold pl-5">Senha</span>
          <Input type="password" variant="secondary" placeholder="**********" />
        </label>
        <div className="flex items-center justify-between">
          <a href="/" className="text-dark-blue text-xs underline">
            Esqueci minha senha
          </a>
          <Button size="small">Fazer login</Button>
        </div>
        <div className="h-[1px] w-full bg-dark-blue my-6" />
        <div className="flex items-center justify-between">
          <a href="/" className="text-dark-blue text-xs font-bold">
            Ainda não tem uma conta?
          </a>
          <Button size="small">Criar conta</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

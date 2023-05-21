interface ILogin {
  email: string;
  password: string;
}

type LoginState = {
  login: ILoginState;
};

type LoginAction = {
  type: string;
  login: ILogin;
};

type DispatchType = (args: LoginAction) => LoginAction;

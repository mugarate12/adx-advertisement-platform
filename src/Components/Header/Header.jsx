import './Header.css'

function Header() {
  return (
		<header>
			<span className="logo">
				<a>ADX</a>
			</span>

			<a>Sobre a empresa</a>
			<a>Assinaturas</a>
			<a>Suporte</a>

			<div className="user-actions">
				<input type="text" placeholder="Pesquisar"/>
				<a id="login">Entrar</a>
				<a id="register">Criar conta</a>
			</div>
		</header>
	)
}

export default Header
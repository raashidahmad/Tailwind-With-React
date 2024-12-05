import logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className="mb-8 w-44 h-44 object-contain" />
      <h1 className="text-4xl uppercase tracking-widest text-center font-semibold text-amber-800 font-title">ReactArt</h1>
      <p className="text-stone-500" >A community of artists and art-lovers.</p>
    </header>
  );
}
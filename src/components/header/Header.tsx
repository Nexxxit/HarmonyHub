import logo from '../../../public/LogoHarmonyHub.svg'

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#F5F5F5] py-1">
      <div className="flex gap-2 items-center">
        <img className='w-10 h-10' src={logo} role="img" alt="логотип" />
        <h2 className="text-2xl pt-sans-bold text-[#1A237E]">
          <span className='text-[#B39DDB]'>Harmony</span><span className='text-[#FFD700] text-shadow-xs text-shadow-[#1A237E]'> Hub</span>
        </h2>
      </div>
    </header>
  );
}

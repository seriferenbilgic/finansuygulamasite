export default function LogoIcon({ className = '' }) {
  return (
    <div className={`w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src="https://img.icons8.com/?size=100&id=akQMLZ0xPhko&format=png&color=ffffff"
        alt="Bupara logo"
        className="w-6 h-6"
      />
    </div>
  );
}

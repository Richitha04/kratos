export default function ToggleSwitch({ checked = false, onChange, disabled = false, size = 'md' }) {
  const sizes = {
    sm: 'h-5 w-9',
    md: 'h-6 w-11'
  };

  const knob = {
    sm: checked ? 'left-5' : 'left-0.5',
    md: checked ? 'left-5' : 'left-0.5'
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      className={`relative ${sizes[size]} rounded-full transition ${checked ? 'bg-blue-600' : 'bg-slate-300'} ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
    >
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${knob[size]}`} />
    </button>
  );
}

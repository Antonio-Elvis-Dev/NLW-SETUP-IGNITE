import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" 
      className="font-semibold leading-tight"
      >Qual seu comprometimento?</label>
      <input
        type="text"
        id="title"
        placeholder="ex.: Execícios, dormir cedo... "
      className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
      />

      <label htmlFor=""
      className="font-semibold leading-tight mt-4"
      
      >Qual a recorrência?</label>

      <button type="submit">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}

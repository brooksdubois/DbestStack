import { createMutation } from '@tanstack/solid-query';
import { api } from '~/app';
import { createSignal } from 'solid-js';

interface TodoProps {
  id: string;
  data: string;
  isDone: boolean;
}

export default function Todo(props: TodoProps) {
  const [checked, setChecked] = createSignal(props.isDone); // Local state for checkbox

  const todoDelete = createMutation(() => ({
    mutationFn: async () => await api.todo({ id: props.id }).delete(),
  }));

  const todoUpdate = createMutation(() => ({
    mutationFn: async (newDone: boolean) => {
      setChecked(newDone);
      try {
        await api.todo({ id: props.id }).patch({ isDone: newDone });
      } catch (error) {
        console.error("Update failed", error);
        setChecked(!newDone);
      }
    },
  }));

  return (
    <div class={'flex flex-row justify-center gap-4'}>
      <pre>{props.data}</pre>
      <input
        type="checkbox"
        checked={checked()}
        onChange={() => todoUpdate.mutate(!checked())}
      />
      <button
        class={
          'rounded border-2 border-black bg-red-300 px-4 transition-all hover:bg-red-400 active:bg-red-400 disabled:cursor-not-allowed disabled:bg-red-400'
        }
        disabled={todoDelete.isPending}
        onClick={() => todoDelete.mutate()}>
        X
      </button>
    </div>
  );
}

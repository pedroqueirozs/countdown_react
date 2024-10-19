import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";

import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../components/contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register("task")}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 01" />
      </datalist>
      <label htmlFor="">Durante</label>
      <MinutesAmountInput
        placeholder="00"
        type="number"
        step={5}
        min={1}
        max={60}
        id="minutesAmount"
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
